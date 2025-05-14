import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/diagnostic/[id]/pdf
// Récupère le PDF d'un diagnostic spécifique
export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = context.params.id;

    // Vérification de l'authentification
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Accès non autorisé" },
        { status: 401 }
      );
    }
    
    const diagnosticId = id;
    
    // Vérifier que l'utilisateur a accès à ce diagnostic
    // Si c'est un bénévole, vérifier qu'il est associé au diagnostic
    // Si c'est un bénéficiaire, vérifier que le diagnostic lui appartient
    let diagnostic;
    
    if (session.user.userType === "VOLUNTEER") {
      diagnostic = await prisma.diagnostics.findFirst({
        where: {
          id: diagnosticId,
          volunteerId: session.user.id
        }
      });
    } else if (session.user.userType === "BENEFICIARY") {
      const beneficiary = await prisma.beneficiaries.findUnique({
        where: {
          userId: session.user.id
        }
      });
      
      if (beneficiary) {
        diagnostic = await prisma.diagnostics.findFirst({
          where: {
            id: diagnosticId,
            beneficiaryId: beneficiary.id
          }
        });
      }
    } else if (session.user.userType === "ADMIN") {
      // Les administrateurs ont accès à tous les diagnostics
      diagnostic = await prisma.diagnostics.findUnique({
        where: {
          id: diagnosticId
        }
      });
    }
    
    if (!diagnostic || !diagnostic.pdfUrl) {
      return NextResponse.json(
        { error: "PDF non trouvé ou accès non autorisé" },
        { status: 404 }
      );
    }
    
    // Dans une implémentation réelle, vous redirigeriez vers l'URL du PDF
    // ou vous liriez le fichier et le renverriez avec le bon type MIME
    
    // Option 1: Redirection vers une URL signée ou publique
    // return NextResponse.redirect(diagnostic.pdfUrl);
    
    // Option 2: Renvoyer un PDF stocké localement ou dans un service de stockage
    // Cette implémentation est simplifiée et ne fonctionnera pas en production
    
    // Simulation d'un PDF
    const pdfResponse = {
      url: diagnostic.pdfUrl,
      fileName: `diagnostic_${diagnosticId}.pdf`
    };
    
    return NextResponse.json(pdfResponse);
  } catch (error) {
    console.error("Erreur lors de la récupération du PDF:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération du PDF" },
      { status: 500 }
    );
  }
}
