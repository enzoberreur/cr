import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { prisma } from "@/lib/prisma"; // Utiliser l'instance singleton de Prisma
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  debug: false, // Désactive les logs de débogage
  session: { 
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 jours
  },
  pages: {
    signIn: "/login",
    error: "/login", // Page d'erreur d'authentification
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          // Recherche de l'utilisateur par email
          const user = await prisma.users.findUnique({
            where: { email: credentials.email },
          });

          if (!user || !user.password) {
            return null;
          }

          // Vérification du mot de passe
          const passwordValid = await compare(credentials.password, user.password);
          
          if (!passwordValid) {
            return null;
          }

          // Mise à jour de la dernière connexion
          await prisma.users.update({
            where: { id: user.id },
            data: { lastLogin: new Date() }
          });

          // Retourne les informations utilisateur pour le JWT
          const userData = {
            id: user.id,
            email: user.email,
            userType: user.userType,
          };
          
          return userData;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // Ajouter les informations utilisateur au JWT
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.userType = user.userType;
        token.email = user.email;
      }
      
      return token;
    },
    // Ajouter les informations JWT à la session
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.userType = token.userType as "ADMIN" | "VOLUNTEER" | "BENEFICIARY";
        session.user.email = token.email;
      }
      
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };