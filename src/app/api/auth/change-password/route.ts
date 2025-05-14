import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { hash, compare } from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    // Vérifier l'authentification
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user?.id) {
      return new NextResponse(JSON.stringify({ error: "Non autorisé" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Récupérer les données de la requête
    const { currentPassword, newPassword } = await req.json();

    if (!currentPassword || !newPassword) {
      return new NextResponse(JSON.stringify({ error: "Les deux mots de passe sont requis" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Récupérer l'utilisateur
    const user = await prisma.users.findUnique({
      where: { id: session.user.id },
      select: { id: true, password: true }
    });

    if (!user) {
      return new NextResponse(JSON.stringify({ error: "Utilisateur non trouvé" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Vérifier l'ancien mot de passe
    const passwordValid = await compare(currentPassword, user.password || "");
    if (!passwordValid) {
      return new NextResponse(JSON.stringify({ error: "Mot de passe actuel incorrect" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Hacher le nouveau mot de passe
    const hashedPassword = await hash(newPassword, 10);

    // Mettre à jour le mot de passe
    await prisma.users.update({
      where: { id: user.id },
      data: { 
        password: hashedPassword, 
        updatedAt: new Date()
        // Note: Pour implémenter le suivi des premières connexions,
        // il faudrait ajouter un champ isFirstLogin au modèle users 
      }
    });

    return new NextResponse(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erreur lors du changement de mot de passe:", error);
    
    return new NextResponse(JSON.stringify({ error: "Une erreur est survenue" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
