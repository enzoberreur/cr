import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/volunteer/beneficiary/[id]/note
// Récupère la note privée d'un bénéficiaire pour le bénévole connecté
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Vérification de l'authentification
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user || session.user.userType !== "VOLUNTEER") {
      return NextResponse.json(
        { error: "Accès non autorisé" },
        { status: 401 }
      );
    }

    const beneficiaryId = params.id;
    const volunteerId = session.user.id;

    // Vérifier d'abord que le bénéficiaire est bien assigné à ce bénévole
    const beneficiary = await prisma.beneficiaries.findFirst({
      where: {
        id: beneficiaryId,
        volunteerRefId: volunteerId
      }
    });

    if (!beneficiary) {
      return NextResponse.json(
        { error: "Bénéficiaire non trouvé ou accès non autorisé" },
        { status: 404 }
      );
    }

    // Dans un système réel, vous auriez une table dédiée pour les notes privées
    // Ici, nous allons simuler la récupération d'une note depuis une table fictive

    // Exemple de note fictive
    const note = {
      id: `note_${beneficiaryId}_${volunteerId}`,
      beneficiaryId: beneficiaryId,
      volunteerId: volunteerId, 
      content: "Ceci est une note privée pour ce bénéficiaire. Dans un système réel, cette note serait stockée dans une base de données.",
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Dans une implémentation réelle, vous feriez plutôt :
    // const note = await prisma.volunteerNotes.findUnique({
    //   where: {
    //     beneficiaryId_volunteerId: {
    //       beneficiaryId,
    //       volunteerId
    //     }
    //   }
    // });
    
    return NextResponse.json(note);
  } catch (error) {
    console.error("Erreur lors de la récupération de la note:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération de la note" },
      { status: 500 }
    );
  }
}

// POST /api/volunteer/beneficiary/[id]/note
// Crée ou met à jour une note privée pour un bénéficiaire
export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Vérification de l'authentification
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user || session.user.userType !== "VOLUNTEER") {
      return NextResponse.json(
        { error: "Accès non autorisé" },
        { status: 401 }
      );
    }

    const beneficiaryId = params.id;
    const volunteerId = session.user.id;

    // Vérifier d'abord que le bénéficiaire est bien assigné à ce bénévole
    const beneficiary = await prisma.beneficiaries.findFirst({
      where: {
        id: beneficiaryId,
        volunteerRefId: volunteerId
      }
    });

    if (!beneficiary) {
      return NextResponse.json(
        { error: "Bénéficiaire non trouvé ou accès non autorisé" },
        { status: 404 }
      );
    }

    // Récupérer le contenu de la note depuis la requête
    const data = await req.json();
    const content = data.content;

    if (typeof content !== 'string') {
      return NextResponse.json(
        { error: "Le contenu de la note est requis" },
        { status: 400 }
      );
    }

    // Dans un système réel, vous auriez une table dédiée pour les notes privées
    // Ici, nous allons simuler l'enregistrement d'une note

    // Dans une implémentation réelle, vous feriez plutôt :
    // const note = await prisma.volunteerNotes.upsert({
    //   where: {
    //     beneficiaryId_volunteerId: {
    //       beneficiaryId,
    //       volunteerId
    //     }
    //   },
    //   update: {
    //     content,
    //     updatedAt: new Date()
    //   },
    //   create: {
    //     beneficiaryId,
    //     volunteerId,
    //     content,
    //   }
    // });

    // Exemple de réponse simulée
    const note = {
      id: `note_${beneficiaryId}_${volunteerId}`,
      beneficiaryId,
      volunteerId,
      content,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return NextResponse.json(note);
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de la note:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'enregistrement de la note" },
      { status: 500 }
    );
  }
}
