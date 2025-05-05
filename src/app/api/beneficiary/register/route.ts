import { NextResponse } from 'next/server';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

// Schéma de validation pour l'inscription d'un bénéficiaire
const beneficiarySchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  password: z.string().min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" }),
  firstName: z.string().min(1, { message: "Le prénom est requis" }),
  lastName: z.string().min(1, { message: "Le nom de famille est requis" }),
  birthDate: z.string().refine((val) => {
    try {
      const date = new Date(val);
      return !isNaN(date.getTime());
    } catch {
      return false;
    }
  }, { message: "Date de naissance invalide" }),
  phone: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validation des données
    const validatedData = beneficiarySchema.safeParse(body);
    if (!validatedData.success) {
      return NextResponse.json(
        { error: "Données invalides", details: validatedData.error.format() },
        { status: 400 }
      );
    }
    
    const data = validatedData.data;
    
    // Vérifier si l'email existe déjà
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });
    
    if (existingUser) {
      return NextResponse.json(
        { error: "Cet email est déjà utilisé" },
        { status: 409 }
      );
    }
    
    // Hashage du mot de passe
    const hashedPassword = await bcrypt.hash(data.password, 10);
    
    // Créer le compte utilisateur et le profil bénéficiaire dans une transaction
    const user = await prisma.$transaction(async (tx) => {
      // Créer l'utilisateur de base
      const newUser = await tx.user.create({
        data: {
          email: data.email,
          password: hashedPassword,
          userType: 'beneficiary',
          accountStatus: 'active', // Les bénéficiaires sont activés par défaut
        },
      });
      
      // Créer le profil bénéficiaire
      await tx.beneficiary.create({
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          birthDate: new Date(data.birthDate),
          phone: data.phone,
          userId: newUser.id,
        },
      });
      
      return newUser;
    });
    
    return NextResponse.json(
      { 
        message: "Compte bénéficiaire créé avec succès", 
        userId: user.id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur lors de l'inscription du bénéficiaire:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création du compte" },
      { status: 500 }
    );
  }
}