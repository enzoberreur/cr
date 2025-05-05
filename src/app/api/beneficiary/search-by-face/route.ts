import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { z } from 'zod';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { findTopFaceMatches } from '@/lib/face-recognition';
import { prisma } from '@/lib/prisma';

// Schéma de validation pour la recherche faciale
const faceSearchSchema = z.object({
  embedding: z.array(z.number()),
  limit: z.number().optional().default(5),
  threshold: z.number().optional().default(0.7)
});

export async function POST(req: Request) {
  try {
    // Vérifier l'authentification
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "Non autorisé" },
        { status: 401 }
      );
    }

    // Seuls les bénévoles et administrateurs peuvent rechercher des bénéficiaires
    if (session.user.userType !== 'admin' && session.user.userType !== 'volunteer') {
      return NextResponse.json(
        { error: "Non autorisé à effectuer cette recherche" },
        { status: 403 }
      );
    }

    const body = await req.json();
    const validatedData = faceSearchSchema.safeParse(body);
    
    if (!validatedData.success) {
      return NextResponse.json(
        { error: "Données invalides", details: validatedData.error.format() },
        { status: 400 }
      );
    }

    const { embedding, limit, threshold } = validatedData.data;

    // Récupérer tous les embeddings stockés avec les informations des bénéficiaires
    const storedEmbeddings = await prisma.faceEmbedding.findMany({
      include: {
        beneficiary: {
          include: {
            user: {
              select: {
                id: true,
                email: true,
                accountStatus: true,
              }
            }
          }
        }
      }
    });

    // Rechercher les correspondances
    const matches = await findTopFaceMatches(embedding, storedEmbeddings, limit, threshold);

    // Formater la réponse pour ne renvoyer que les données nécessaires
    const formattedMatches = matches.map(match => ({
      score: match.score,
      beneficiaryId: match.beneficiary.id,
      userId: match.beneficiary.user.id,
      firstName: match.beneficiary.firstName,
      lastName: match.beneficiary.lastName,
      accountStatus: match.beneficiary.user.accountStatus,
      imageUrl: match.imageUrl,
    }));

    return NextResponse.json(
      { 
        matches: formattedMatches,
        count: formattedMatches.length
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de la recherche faciale:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de la recherche faciale" },
      { status: 500 }
    );
  }
}