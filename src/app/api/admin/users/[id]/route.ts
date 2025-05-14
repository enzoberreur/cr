import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Utiliser l'instance singleton de Prisma
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Vérifier l'authentification
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.userType !== "ADMIN") {
      return new NextResponse(JSON.stringify({ error: "Non autorisé" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const userId = params.id;
    
    // Vérifier si l'utilisateur existe
    const user = await prisma.users.findUnique({
      where: { id: userId },
      select: { userType: true, id: true }
    });

    if (!user) {
      return new NextResponse(JSON.stringify({ error: "Utilisateur non trouvé" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Interdire la suppression de son propre compte
    if (user.id === session.user.id) {
      return new NextResponse(JSON.stringify({ error: "Vous ne pouvez pas supprimer votre propre compte" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Supprimer l'utilisateur
    await prisma.users.delete({
      where: { id: userId },
    });

    return new NextResponse(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'utilisateur:", error);
    
    return new NextResponse(
      JSON.stringify({
        error: "Erreur lors de la suppression de l'utilisateur",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
