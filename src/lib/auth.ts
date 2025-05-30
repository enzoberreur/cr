import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  debug: false,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 jours
  },
  pages: {
    signIn: "/login",
    error: "/login",
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
          const user = await prisma.users.findUnique({
            where: { email: credentials.email },
          });
          if (!user || !user.password) {
            return null;
          }
          const passwordValid = await compare(credentials.password, user.password);
          if (!passwordValid) {
            return null;
          }
          await prisma.users.update({
            where: { id: user.id },
            data: { lastLogin: new Date() },
          });
          return {
            id: user.id,
            email: user.email,
            userType: user.userType,
          };
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.userType = user.userType;
        token.email = user.email;
        
        // Pour les utilisateurs de type bénévole, récupérer les informations supplémentaires
        if (user.userType === "VOLUNTEER") {
          try {
            const volunteer = await prisma.volunteers.findUnique({
              where: { userId: user.id },
              select: { firstName: true, lastName: true }
            });
            
            if (volunteer) {
              token.volunteer = {
                firstName: volunteer.firstName,
                lastName: volunteer.lastName
              };
            }
          } catch (error) {
            console.error("Erreur lors de la récupération des données du bénévole:", error);
          }
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.userType = token.userType as "ADMIN" | "VOLUNTEER" | "BENEFICIARY";
        session.user.email = token.email;
        
        // Récupérer les informations du bénévole si c'est un bénévole
        if (session.user.userType === "VOLUNTEER") {
          const volunteer = await prisma.volunteers.findUnique({
            where: { userId: session.user.id },
            select: { firstName: true, lastName: true }
          });
          
          if (volunteer) {
            session.user.volunteer = {
              firstName: volunteer.firstName,
              lastName: volunteer.lastName
            };
          }
        }
      }
      return session;
    },
  },
};

/**
 * Récupère la session utilisateur côté serveur
 */
export async function getSession() {
  return await getServerSession(authOptions);
}

/**
 * Récupère l'utilisateur actuellement connecté
 */
export async function getCurrentUser() {
  const session = await getSession();
  return session?.user || null;
}

/**
 * Vérifie si l'utilisateur est un administrateur
 */
export function isAdmin(userType: string | undefined) {
  return userType === "ADMIN";
}

/**
 * Vérifie si l'utilisateur est un bénévole
 */
export function isVolunteer(userType: string | undefined) {
  return userType === "VOLUNTEER";
}

/**
 * Vérifie si l'utilisateur est un bénéficiaire
 */
export function isBeneficiary(userType: string | undefined) {
  return userType === "BENEFICIARY";
}