import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// POST /api/volunteer/diagnostic
// Crée un nouveau diagnostic
export async function POST(req: NextRequest) {
  try {
    // Vérification de l'authentification
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user || session.user.userType !== "VOLUNTEER") {
      return NextResponse.json(
        { error: "Accès non autorisé" },
        { status: 401 }
      );
    }

    // Récupérer les données du formulaire
    const data = await req.json();
    const { beneficiaryId, status, formResponses, results, recommendations, nextSteps } = data;

    // Vérifier que le bénéficiaire existe et qu'il est bien lié au bénévole connecté
    const beneficiary = await prisma.beneficiaries.findFirst({
      where: {
        id: beneficiaryId,
        volunteerRefId: session.user.id
      }
    });

    if (!beneficiary) {
      return NextResponse.json(
        { error: "Bénéficiaire non trouvé ou accès non autorisé" },
        { status: 404 }
      );
    }

    // Créer le diagnostic
    const newDiagnostic = await prisma.diagnostics.create({
      data: {
        diagnosticDate: new Date(),
        status: status || "IN_PROGRESS",
        formResponses: formResponses || {},
        results: results || {},
        recommendations: recommendations || {},
        nextSteps: nextSteps || "",
        beneficiaryId: beneficiaryId,
        volunteerId: session.user.id,
        version: "v1", // Version par défaut
      }
    });

    // Si le diagnostic est terminé, générer un PDF (fictif pour cet exemple)
    if (status === "COMPLETED") {
      // Ici, vous implémenteriez la génération réelle du PDF
      // Par exemple avec une bibliothèque comme PDFKit, jsPDF, etc.
      
      // Mise à jour avec une URL fictive pour le PDF
      await prisma.diagnostics.update({
        where: { id: newDiagnostic.id },
        data: {
          pdfUrl: `/api/diagnostic/${newDiagnostic.id}/pdf`,
        }
      });
      
      // Récupérer le diagnostic mis à jour avec l'URL du PDF
      const updatedDiagnostic = await prisma.diagnostics.findUnique({
        where: { id: newDiagnostic.id }
      });
      
      return NextResponse.json(updatedDiagnostic);
    }

    return NextResponse.json(newDiagnostic);
  } catch (error) {
    console.error("Erreur lors de la création du diagnostic:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création du diagnostic" },
      { status: 500 }
    );
  }
}
