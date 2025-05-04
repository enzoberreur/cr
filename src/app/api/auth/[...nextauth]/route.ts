import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@exemple.fr" },
        password: { label: "Mot de passe", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
            include: {
              admin: true,
              volunteer: true,
              beneficiary: true,
            },
          });

          if (!user) {
            return null;
          }

          // Vérifier si le compte est actif
          if (user.accountStatus !== "active") {
            throw new Error("Compte non activé ou bloqué");
          }

          // Comparer les mots de passe
          const passwordMatch = await bcrypt.compare(credentials.password, user.password);

          if (!passwordMatch) {
            return null;
          }

          // Mettre à jour la date de dernière connexion
          await prisma.user.update({
            where: { id: user.id },
            data: { lastLogin: new Date() },
          });

          // Déterminer le nom à afficher et le rôle
          let name = "";
          if (user.userType === "admin" && user.admin) {
            name = `${user.admin.firstName} ${user.admin.lastName}`;
          } else if (user.userType === "volunteer" && user.volunteer) {
            name = `${user.volunteer.firstName} ${user.volunteer.lastName}`;
          } else if (user.userType === "beneficiary" && user.beneficiary) {
            name = `${user.beneficiary.firstName} ${user.beneficiary.lastName}`;
          }

          return {
            id: user.id,
            email: user.email,
            name,
            role: user.userType,
            ...(user.userType === "admin" ? { accessLevel: user.admin?.accessLevel } : {}),
          };
        } catch (error) {
          console.error("Erreur d'authentification:", error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        if (user.role === "admin") {
          token.accessLevel = user.accessLevel;
        }
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.role = token.role as string;
        if (token.accessLevel) {
          session.user.accessLevel = token.accessLevel as string;
        }
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 heures
  },
  pages: {
    signIn: "/connexion",
    signOut: "/",
    error: "/connexion",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };