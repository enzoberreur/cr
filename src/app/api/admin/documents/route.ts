import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// GET: Récupérer tous les documents
export async function GET() {
  try {
    // Vérifier l'authentification
    const session = await getServerSession(authOptions);
    
    if (!session || session.user?.userType !== "ADMIN") {
      return new NextResponse(JSON.stringify({ error: "Non autorisé" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Récupérer tous les documents avec les informations de l'administrateur qui les a téléchargés
    const documents = await prisma.knowledge_documents.findMany({
      include: {
        admins: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });

    // Formater les données pour correspondre à la structure attendue par le front-end
    const formattedDocuments = documents.map(doc => ({
      id: doc.id,
      title: doc.title,
      content: doc.content,
      tags: doc.tags,
      importance: doc.tags.includes('high') ? 'high' : doc.tags.includes('medium') ? 'medium' : 'low',
      createdAt: doc.createdAt.toISOString(),
      updatedAt: doc.updatedAt.toISOString(),
      uploadedBy: `${doc.admins.firstName} ${doc.admins.lastName}`,
      uploadedById: doc.uploadedById
    }));

    return new NextResponse(JSON.stringify(formattedDocuments), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des documents:", error);
    
    return new NextResponse(
      JSON.stringify({
        error: "Erreur lors de la récupération des documents",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

// POST: Créer un nouveau document
export async function POST(request: Request) {
  try {
    // Vérifier l'authentification
    const session = await getServerSession(authOptions);
    
    if (!session || session.user?.userType !== "ADMIN") {
      return new NextResponse(JSON.stringify({ error: "Non autorisé" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Obtenir les données du document à partir de la requête
    const data = await request.json();
    
    // Récupérer l'ID de l'administrateur connecté
    const admin = await prisma.admins.findUnique({
      where: { userId: session.user.id },
    });

    if (!admin) {
      return new NextResponse(JSON.stringify({ error: "Administrateur non trouvé" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Traiter l'importance comme un tag
    const tags = [...data.tags];
    if (data.importance && !tags.includes(data.importance)) {
      tags.push(data.importance);
    }

    // Créer le document dans la base de données
    const newDocument = await prisma.knowledge_documents.create({
      data: {
        title: data.title,
        content: data.content,
        tags: tags,
        uploadedById: admin.id,
      },
      include: {
        admins: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    // Formater le document pour la réponse
    const formattedDocument = {
      id: newDocument.id,
      title: newDocument.title,
      content: newDocument.content,
      tags: newDocument.tags,
      importance: newDocument.tags.includes('high') ? 'high' : newDocument.tags.includes('medium') ? 'medium' : 'low',
      createdAt: newDocument.createdAt.toISOString(),
      updatedAt: newDocument.updatedAt.toISOString(),
      uploadedBy: `${newDocument.admins.firstName} ${newDocument.admins.lastName}`,
      uploadedById: newDocument.uploadedById
    };

    return new NextResponse(JSON.stringify(formattedDocument), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erreur lors de la création du document:", error);
    
    return new NextResponse(
      JSON.stringify({
        error: "Erreur lors de la création du document",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
