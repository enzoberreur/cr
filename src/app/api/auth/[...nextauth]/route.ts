import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { prisma } from "@/lib/prisma"; // Utiliser l'instance singleton de Prisma
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  debug: process.env.NODE_ENV === "development",
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
          console.error("Identifiants manquants");
          return null;
        }

        try {
          // Recherche de l'utilisateur par email
          const user = await prisma.users.findUnique({
            where: { email: credentials.email },
          });

          console.log("Utilisateur trouvé:", user ? { id: user.id, email: user.email, userType: user.userType } : "Utilisateur non trouvé");

          if (!user || !user.password) {
            console.error("Utilisateur non trouvé ou mot de passe manquant");
            return null;
          }

          // Vérification du mot de passe
          const passwordValid = await compare(credentials.password, user.password);
          console.log("Mot de passe valide:", passwordValid);
          
          if (!passwordValid) {
            console.error("Mot de passe incorrect");
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
          
          console.log("Données utilisateur retournées:", userData);
          return userData;
        } catch (error) {
          console.error("Erreur lors de l'authentification:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // Ajouter les informations utilisateur au JWT
    async jwt({ token, user }) {
      console.log("JWT Callback - User:", user);
      console.log("JWT Callback - Token avant:", token);
      
      if (user) {
        token.id = user.id;
        token.userType = user.userType;
        token.email = user.email;
      }
      
      console.log("JWT Callback - Token après:", token);
      return token;
    },
    // Ajouter les informations JWT à la session
    async session({ session, token }) {
      console.log("Session Callback - Token:", token);
      console.log("Session Callback - Session avant:", session);
      
      if (session.user) {
        session.user.id = token.id;
        session.user.userType = token.userType as "ADMIN" | "VOLUNTEER" | "BENEFICIARY";
        session.user.email = token.email;
      }
      
      console.log("Session Callback - Session après:", session);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };