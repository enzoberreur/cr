import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Utiliser l'instance singleton de Prisma
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { hash } from "bcrypt";
import { randomUUID } from "crypto";

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

// POST: Créer un nouvel utilisateur (bénévole par défaut)
export async function POST(request: Request) {
  try {
    // Vérifier l'authentification
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.userType !== "ADMIN") {
      return new NextResponse(JSON.stringify({ error: "Non autorisé" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Obtenir les données du nouvel utilisateur
    const data = await request.json();
    const { firstName, lastName, email, password, userType = "VOLUNTEER", status = "ACTIVE" } = data;

    // Vérifier si l'email existe déjà
    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new NextResponse(JSON.stringify({ error: "Cet email est déjà utilisé" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Hacher le mot de passe
    const hashedPassword = await hash(password, 10);

    // Générer des IDs uniques
    const userId = randomUUID();
    const profileId = randomUUID();

    // Créer l'utilisateur
    const user = await prisma.users.create({
      data: {
        id: userId,
        email,
        password: hashedPassword,
        userType,
        status,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    // Créer le profil associé selon le type d'utilisateur
    if (userType === "VOLUNTEER") {
      await prisma.volunteers.create({
        data: {
          id: profileId,
          firstName,
          lastName,
          userId: user.id,
        },
      });
    } else if (userType === "BENEFICIARY") {
      await prisma.beneficiaries.create({
        data: {
          id: profileId,
          firstName,
          lastName,
          userId: user.id,
        },
      });
    } else if (userType === "ADMIN") {
      await prisma.admins.create({
        data: {
          id: profileId,
          firstName,
          lastName,
          userId: user.id,
        },
      });
    }

    // Créer un objet utilisateur formaté pour la réponse
    const formattedUser = {
      id: user.id,
      email: user.email,
      firstName,
      lastName,
      userType: user.userType,
      status: user.status,
      createdAt: user.createdAt.toISOString(),
      lastLogin: null,
    };

    return new NextResponse(JSON.stringify(formattedUser), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur:", error);
    
    return new NextResponse(
      JSON.stringify({ error: "Erreur lors de la création de l'utilisateur" }),
      { 
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
