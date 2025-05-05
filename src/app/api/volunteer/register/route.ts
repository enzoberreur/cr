import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createVolunteerAccount, checkEmailExists } from '@/lib/auth-service';

// Schéma de validation pour l'inscription d'un bénévole
const volunteerSchema = z.object({
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
  phone: z.string().min(1, { message: "Le numéro de téléphone est requis" }),
  experience: z.number().optional(),
  skills: z.record(z.any()).optional(),
  availability: z.record(z.any()).optional(),
  specializations: z.record(z.any()).optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validation des données
    const validatedData = volunteerSchema.safeParse(body);
    if (!validatedData.success) {
      return NextResponse.json(
        { error: "Données invalides", details: validatedData.error.format() },
        { status: 400 }
      );
    }
    
    const data = validatedData.data;
    
    // Vérifier si l'email existe déjà
    const emailExists = await checkEmailExists(data.email);
    if (emailExists) {
      return NextResponse.json(
        { error: "Cet email est déjà utilisé" },
        { status: 409 }
      );
    }
    
    // Convertir la date de naissance en objet Date
    const birthDate = new Date(data.birthDate);
    
    // Créer le compte bénévole
    const user = await createVolunteerAccount({
      ...data,
      birthDate,
    });
    
    return NextResponse.json(
      { 
        message: "Compte créé avec succès. Un administrateur examinera votre demande et activera votre compte.", 
        userId: user.id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur lors de l'inscription du bénévole:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création du compte" },
      { status: 500 }
    );
  }
}