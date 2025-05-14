import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

/**
 * API endpoint temporaire pour lister tous les documents RAG
 * GET /api/rag-documents
 */
export async function GET() {
  try {
    // Vérification de l'authentification (option: limiter aux admins/volontaires)
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: "Vous devez être connecté" }, { status: 401 });
    }
    
    // Récupérer tous les documents
    const documents = await prisma.knowledge_documents.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
    });
    
    // Formatage des résultats pour le front-end
    const formattedDocs = documents.map(doc => ({
      id: doc.id,
      title: doc.title,
      content: doc.content.substring(0, 150) + '...',  // Limiter le contenu pour l'aperçu
      tags: doc.tags,
      createdAt: doc.createdAt.toISOString(),
      updatedAt: doc.updatedAt.toISOString(),
      uploadedById: doc.uploadedById
    }));

    return NextResponse.json({
      count: documents.length,
      documents: formattedDocs
    }, { status: 200 });
    
  } catch (error) {
    console.error("Erreur lors de la récupération des documents RAG:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des documents" },
      { status: 500 }
    );
  }
}
