import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Utiliser l'instance singleton de Prisma
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  try {
    // Vérifier l'authentification
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.userType !== "ADMIN") {
      return new NextResponse(JSON.stringify({ error: "Non autorisé" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Récupérer tous les utilisateurs avec leurs détails
    const users = await prisma.users.findMany({
      select: {
        id: true,
        email: true,
        userType: true,
        status: true,
        createdAt: true,
        lastLogin: true,
        admins: {
          select: {
            firstName: true,
            lastName: true,
            phone: true,
          }
        },
        volunteers: {
          select: {
            firstName: true,
            lastName: true,
            phone: true,
          }
        },
        beneficiaries: {
          select: {
            firstName: true,
            lastName: true,
            phone: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Transformer les données pour un format plus simple à utiliser
    const formattedUsers = users.map(user => {
      // Déterminer les détails de profil en fonction du type d'utilisateur
      let details = null;
      if (user.userType === 'ADMIN' && user.admins) {
        details = user.admins;
      } else if (user.userType === 'VOLUNTEER' && user.volunteers) {
        details = user.volunteers;
      } else if (user.userType === 'BENEFICIARY' && user.beneficiaries) {
        details = user.beneficiaries;
      }
      
      // Créer l'objet utilisateur formaté
      return {
        id: user.id,
        email: user.email,
        userType: user.userType,
        status: user.status,
        createdAt: user.createdAt.toISOString(),
        lastLogin: user.lastLogin ? user.lastLogin.toISOString() : null,
        firstName: details?.firstName || null,
        lastName: details?.lastName || null,
        phone: details?.phone || null,
      };
    });

    // Renvoyer les données
    return new NextResponse(JSON.stringify(formattedUsers), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs:", error);
    
    return new NextResponse(
      JSON.stringify({
        error: "Erreur lors de la récupération des utilisateurs",
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
