import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { z } from 'zod';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { storeFaceEmbedding } from '@/lib/auth-service';
import { prisma } from '@/lib/prisma';

// Schéma de validation pour les embeddings faciaux
const faceEmbeddingSchema = z.object({
  embedding: z.array(z.number()),
  imageUrl: z.string().url(),
  beneficiaryId: z.string().optional(), // Optionnel si c'est l'utilisateur connecté qui enregistre son propre visage
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

    const body = await req.json();
    const validatedData = faceEmbeddingSchema.safeParse(body);
    
    if (!validatedData.success) {
      return NextResponse.json(
        { error: "Données invalides", details: validatedData.error.format() },
        { status: 400 }
      );
    }

    const { embedding, imageUrl, beneficiaryId } = validatedData.data;

    // Déterminer l'ID du bénéficiaire
    let targetBeneficiaryId: string;

    // Si l'ID du bénéficiaire est fourni, vérifier les permissions
    if (beneficiaryId) {
      // Vérifier les permissions (seuls les admin ou bénévoles peuvent modifier d'autres bénéficiaires)
      if (session.user.userType !== 'admin' && session.user.userType !== 'volunteer') {
        return NextResponse.json(
          { error: "Non autorisé à modifier cet utilisateur" },
          { status: 403 }
        );
      }

      // Vérifier que l'utilisateur cible est bien un bénéficiaire
      const targetBeneficiary = await prisma.beneficiary.findUnique({
        where: { id: beneficiaryId }
      });

      if (!targetBeneficiary) {
        return NextResponse.json(
          { error: "Bénéficiaire non trouvé" },
          { status: 404 }
        );
      }

      targetBeneficiaryId = beneficiaryId;
    } else {
      // Si aucun ID n'est fourni, vérifier que l'utilisateur connecté est un bénéficiaire
      if (session.user.userType !== 'beneficiary' || !session.user.beneficiaryId) {
        return NextResponse.json(
          { error: "Vous devez être un bénéficiaire pour enregistrer votre visage" },
          { status: 403 }
        );
      }

      targetBeneficiaryId = session.user.beneficiaryId;
    }

    // Enregistrer l'embedding facial
    const faceEmbedding = await storeFaceEmbedding(
      targetBeneficiaryId, 
      embedding, 
      imageUrl
    );

    return NextResponse.json(
      { 
        message: "Embedding facial enregistré avec succès", 
        faceEmbeddingId: faceEmbedding.id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de l'embedding facial:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'enregistrement des données faciales" },
      { status: 500 }
    );
  }
}