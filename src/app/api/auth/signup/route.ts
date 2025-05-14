import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";
import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Body reçu:", body);
    
    const firstName = body.firstName || "";
    const lastName = body.lastName || "";
    const email = body.email;
    const password = body.password;

    // Vérifier si l'email existe déjà
    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Cet email est déjà utilisé" },
        { status: 400 }
      );
    }

    // Hacher le mot de passe
    const hashedPassword = await hash(password, 10);

    // Créer l'utilisateur
    const userId = randomUUID();
    const beneficiaryId = randomUUID();

    const user = await prisma.users.create({
      data: {
        id: userId,
        email,
        password: hashedPassword,
        userType: "BENEFICIARY",
        status: "ACTIVE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    // Créer le profil bénéficiaire associé
    await prisma.beneficiaries.create({
      data: {
        id: beneficiaryId,
        firstName: firstName || "",  // S'assurer que firstName n'est jamais undefined
        lastName: lastName || "",    // S'assurer que lastName n'est jamais undefined
        userId: user.id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Compte créé avec succès",
    });

  } catch (error) {
    console.error("Erreur lors de la création du compte:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création du compte" },
      { status: 500 }
    );
  }
}