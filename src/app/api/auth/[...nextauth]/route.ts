import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { compareFaceEmbeddings } from "@/lib/face-recognition";

export const authOptions: NextAuthOptions = {
  providers: [
    // Provider standard pour l'authentification par email et mot de passe
    CredentialsProvider({
      id: "credentials",
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
            userType: user.userType,
            accountStatus: user.accountStatus,
            ...(user.userType === "admin" && user.admin ? { adminId: user.admin.id } : {}),
            ...(user.userType === "volunteer" && user.volunteer ? { volunteerId: user.volunteer.id } : {}),
            ...(user.userType === "beneficiary" && user.beneficiary ? { beneficiaryId: user.beneficiary.id } : {})
          };
        } catch (error) {
          console.error("Erreur d'authentification:", error);
          return null;
        }
      }
    }),
    // Provider pour l'authentification faciale
    CredentialsProvider({
      id: "face-recognition",
      name: "Face Recognition",
      credentials: {
        faceEmbedding: { label: "Face Embedding", type: "text" },
        searchMode: { label: "Search Mode", type: "text" }
      },
      async authorize(credentials) {
        if (!credentials?.faceEmbedding) {
          return null;
        }

        try {
          // Convertir le JSON de l'embedding en objet
          const faceEmbedding = JSON.parse(credentials.faceEmbedding);
          const searchMode = credentials.searchMode === "true";
          
          // Récupérer tous les embeddings des bénéficiaires
          const allEmbeddings = await prisma.faceEmbedding.findMany({
            include: {
              beneficiary: {
                include: {
                  user: true
                }
              }
            }
          });

          // Si en mode recherche, on retourne simplement les meilleurs matchs
          if (searchMode) {
            // C'est géré séparément par l'API /api/beneficiary/search-by-face
            return null;
          }

          // Sinon, chercher le meilleur match avec un seuil de confiance
          const bestMatch = await compareFaceEmbeddings(faceEmbedding, allEmbeddings);
          
          if (!bestMatch) {
            return null;
          }

          const { user, beneficiary } = bestMatch.beneficiary;

          // Vérifier si le compte est actif
          if (user.accountStatus !== "active") {
            throw new Error("Compte non activé ou bloqué");
          }

          // Mettre à jour la date de dernière connexion
          await prisma.user.update({
            where: { id: user.id },
            data: { lastLogin: new Date() },
          });

          return {
            id: user.id,
            email: user.email,
            name: `${beneficiary.firstName} ${beneficiary.lastName}`,
            userType: user.userType,
            accountStatus: user.accountStatus,
            beneficiaryId: beneficiary.id
          };
        } catch (error) {
          console.error("Erreur d'authentification faciale:", error);
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
        token.userType = user.userType;
        token.accountStatus = user.accountStatus;
        
        // Ajouter les IDs spécifiques aux rôles
        if (user.adminId) token.adminId = user.adminId;
        if (user.volunteerId) token.volunteerId = user.volunteerId;
        if (user.beneficiaryId) token.beneficiaryId = user.beneficiaryId;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.userType = token.userType as string;
        session.user.accountStatus = token.accountStatus as string;
        
        // Ajouter les IDs spécifiques aux rôles
        if (token.adminId) session.user.adminId = token.adminId as string;
        if (token.volunteerId) session.user.volunteerId = token.volunteerId as string;
        if (token.beneficiaryId) session.user.beneficiaryId = token.beneficiaryId as string;
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