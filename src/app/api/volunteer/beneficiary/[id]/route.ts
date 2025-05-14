import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/volunteer/beneficiary/[id]
// Récupère les détails d'un bénéficiaire spécifique
export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
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
    
    const beneficiaryId = context.params.id;

    // Vérifier que le bénéficiaire existe et qu'il est bien lié au bénévole connecté
    const beneficiary = await prisma.beneficiaries.findFirst({
      where: {
        id: beneficiaryId,
        volunteerRefId: session.user.id
      },
      include: {
        diagnostics: {
          orderBy: {
            diagnosticDate: "desc"
          },
        }
      }
    });
    
    if (!beneficiary) {
      return NextResponse.json(
        { error: "Bénéficiaire non trouvé ou accès non autorisé" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(beneficiary);
  } catch (error) {
    console.error("Erreur lors de la récupération du bénéficiaire:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération du bénéficiaire" },
      { status: 500 }
    );
  }
}
