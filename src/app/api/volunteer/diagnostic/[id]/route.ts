import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/volunteer/diagnostic/[id]
// Récupère les détails d'un diagnostic spécifique
export async function GET(
  req: NextRequest,
  context: any
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
    
    const diagnosticId = context.params.id;

    // Récupérer le diagnostic avec les informations du bénéficiaire associé
    const diagnostic = await prisma.diagnostics.findFirst({
      where: {
        id: diagnosticId,
        volunteerId: session.user.id
      },
      include: {
        beneficiaries: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            birthDate: true,
            photoUrl: true
          }
        }
      }
    });
    
    if (!diagnostic) {
      return NextResponse.json(
        { error: "Diagnostic non trouvé ou accès non autorisé" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(diagnostic);
  } catch (error) {
    console.error("Erreur lors de la récupération du diagnostic:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération du diagnostic" },
      { status: 500 }
    );
  }
}

// PUT /api/volunteer/diagnostic/[id]
// Met à jour un diagnostic existant
export async function PUT(
  req: NextRequest,
  context: any
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
    
    const diagnosticId = context.params.id;
    
    // Vérifier que le diagnostic existe et qu'il est bien lié au bénévole connecté
    const diagnostic = await prisma.diagnostics.findFirst({
      where: {
        id: diagnosticId,
        volunteerId: session.user.id
      }
    });
    
    if (!diagnostic) {
      return NextResponse.json(
        { error: "Diagnostic non trouvé ou accès non autorisé" },
        { status: 404 }
      );
    }
    
    // Récupérer les données du formulaire
    const data = await req.json();
    const { status, formResponses, results, recommendations, nextSteps } = data;
    
    // Mettre à jour le diagnostic
    const updatedDiagnostic = await prisma.diagnostics.update({
      where: {
        id: diagnosticId
      },
      data: {
        status: status || diagnostic.status,
        formResponses: formResponses || diagnostic.formResponses,
        results: results || diagnostic.results,
        recommendations: recommendations || diagnostic.recommendations,
        nextSteps: nextSteps || diagnostic.nextSteps,
      }
    });
    
    // Si le diagnostic passe à l'état "COMPLETED", générer un PDF (fictif pour cet exemple)
    if (status === "COMPLETED" && diagnostic.status !== "COMPLETED") {
      // Ici, vous implémenteriez la génération réelle du PDF
      // Par exemple avec une bibliothèque comme PDFKit, jsPDF, etc.
      
      // Mise à jour avec une URL fictive pour le PDF
      await prisma.diagnostics.update({
        where: { id: diagnosticId },
        data: {
          pdfUrl: `/api/diagnostic/${diagnosticId}/pdf`,
        }
      });
      
      // Récupérer le diagnostic mis à jour avec l'URL du PDF
      const finalDiagnostic = await prisma.diagnostics.findUnique({
        where: { id: diagnosticId }
      });
      
      return NextResponse.json(finalDiagnostic);
    }
    
    return NextResponse.json(updatedDiagnostic);
  } catch (error) {
    console.error("Erreur lors de la mise à jour du diagnostic:", error);
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour du diagnostic" },
      { status: 500 }
    );
  }
}
