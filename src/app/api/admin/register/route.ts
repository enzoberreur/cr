import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createAdminAccount } from '@/lib/auth-service';

// Schéma de validation pour l'inscription d'un administrateur
const adminSignupSchema = z.object({
  email: z.string().email({ message: 'Email invalide' }),
  password: z
    .string()
    .min(8, { message: 'Le mot de passe doit contenir au moins 8 caractères' })
    .regex(/[A-Z]/, { message: 'Le mot de passe doit contenir au moins une majuscule' })
    .regex(/[0-9]/, { message: 'Le mot de passe doit contenir au moins un chiffre' }),
  passwordConfirm: z.string(),
  firstName: z.string().min(2, { message: 'Le prénom doit contenir au moins 2 caractères' }),
  lastName: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caractères' }),
  phone: z.string().optional(),
  accessLevel: z.enum(['super_admin', 'regional_admin', 'local_admin']).default('local_admin'),
}).refine(data => data.password === data.passwordConfirm, {
  message: 'Les mots de passe ne correspondent pas',
  path: ['passwordConfirm'],
});

export async function POST(request: Request) {
  try {
    // Récupérer et valider les données
    const json = await request.json();
    const validatedData = adminSignupSchema.parse(json);

    // Supprimer le champ de confirmation du mot de passe pour la création du compte
    const { passwordConfirm, ...adminData } = validatedData;

    try {
      // Créer le compte administrateur
      const user = await createAdminAccount(adminData);
      
      return NextResponse.json({
        success: true,
        message: "Compte administrateur créé avec succès",
        id: user.id
      }, { status: 201 });
      
    } catch (error: any) {
      // Gérer les erreurs de création de compte
      if (error.code === 'P2002') {
        return NextResponse.json(
          { success: false, message: "Cet email est déjà utilisé" },
          { status: 409 }
        );
      }
      
      throw error;
    }
    
  } catch (error: any) {
    // Gérer les erreurs de validation
    if (error instanceof z.ZodError) {
      const errors = error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }));
      
      return NextResponse.json(
        { success: false, message: "Données invalides", errors },
        { status: 400 }
      );
    }
    
    console.error("Erreur d'inscription d'administrateur:", error);
    
    return NextResponse.json(
      { success: false, message: "Une erreur est survenue lors de la création du compte" },
      { status: 500 }
    );
  }
}