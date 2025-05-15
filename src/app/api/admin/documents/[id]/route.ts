import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// GET: Récupérer un document spécifique
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Vérifier l'authentification
    const session = await getServerSession(authOptions);
    
    if (!session || session.user?.userType !== "ADMIN") {
      return NextResponse.json(
        { error: "Non autorisé" },
        { status: 401 }
      );
    }

    const id = (await params).id;

    // Récupérer le document
    const document = await prisma.knowledge_documents.findUnique({
      where: { id },
      include: {
        admins: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    if (!document) {
      return NextResponse.json(
        { error: "Document non trouvé" },
        { status: 404 }
      );
    }

    // Formater le document pour la réponse
    const formattedDocument = {
      id: document.id,
      title: document.title,
      content: document.content,
      tags: document.tags,
      importance: document.tags.includes('high') ? 'high' : document.tags.includes('medium') ? 'medium' : 'low',
      createdAt: document.createdAt.toISOString(),
      updatedAt: document.updatedAt.toISOString(),
      uploadedBy: `${document.admins.firstName} ${document.admins.lastName}`,
      uploadedById: document.uploadedById
    };

    return NextResponse.json(formattedDocument, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la récupération du document:", error);
    
    return NextResponse.json(
      { error: "Erreur lors de la récupération du document" },
      { status: 500 }
    );
  }
}

// PUT: Mettre à jour un document existant
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Vérifier l'authentification
    const session = await getServerSession(authOptions);
    
    if (!session || session.user?.userType !== "ADMIN") {
      return NextResponse.json(
        { error: "Non autorisé" },
        { status: 401 }
      );
    }

    const id = (await params).id;
    const data = await request.json();

    // Vérifier si le document existe
    const existingDocument = await prisma.knowledge_documents.findUnique({
      where: { id },
    });

    if (!existingDocument) {
      return NextResponse.json(
        { error: "Document non trouvé" },
        { status: 404 }
      );
    }

    // Traiter l'importance comme un tag
    const tags = [...data.tags];
    if (data.importance && !tags.includes(data.importance)) {
      tags.push(data.importance);
    }

    // Mettre à jour le document
    const updatedDocument = await prisma.knowledge_documents.update({
      where: { id },
      data: {
        title: data.title,
        content: data.content,
        tags: tags,
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
      id: updatedDocument.id,
      title: updatedDocument.title,
      content: updatedDocument.content,
      tags: updatedDocument.tags,
      importance: updatedDocument.tags.includes('high') ? 'high' : updatedDocument.tags.includes('medium') ? 'medium' : 'low',
      createdAt: updatedDocument.createdAt.toISOString(),
      updatedAt: updatedDocument.updatedAt.toISOString(),
      uploadedBy: `${updatedDocument.admins.firstName} ${updatedDocument.admins.lastName}`,
      uploadedById: updatedDocument.uploadedById
    };

    return NextResponse.json(formattedDocument, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du document:", error);
    
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour du document" },
      { status: 500 }
    );
  }
}

// DELETE: Supprimer un document
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Vérifier l'authentification
    const session = await getServerSession(authOptions);
    
    if (!session || session.user?.userType !== "ADMIN") {
      return NextResponse.json(
        { error: "Non autorisé" },
        { status: 401 }
      );
    }

    const id = (await params).id;

    // Vérifier si le document existe
    const existingDocument = await prisma.knowledge_documents.findUnique({
      where: { id },
    });

    if (!existingDocument) {
      return NextResponse.json(
        { error: "Document non trouvé" },
        { status: 404 }
      );
    }

    // Supprimer le document
    await prisma.knowledge_documents.delete({
      where: { id },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la suppression du document:", error);
    
    return NextResponse.json(
      { error: "Erreur lors de la suppression du document" },
      { status: 500 }
    );
  }
}
