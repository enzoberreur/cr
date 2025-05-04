import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

// Type pour l'inscription d'un administrateur
interface AdminSignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  // Pour le premier administrateur, on définit le niveau d'accès comme super_admin
  accessLevel: 'super_admin' | 'regional_admin' | 'local_admin';
}

// Fonction pour créer un compte administrateur
export async function createAdminAccount(data: AdminSignupData) {
  // Vérifier si c'est le premier administrateur
  const adminCount = await prisma.admin.count();
  const isFirstAdmin = adminCount === 0;
  
  // Pour le premier admin, on force le niveau d'accès à super_admin et le statut à actif
  const accessLevel = isFirstAdmin ? 'super_admin' : data.accessLevel;
  const accountStatus = isFirstAdmin ? 'active' : 'pending';
  
  // Hasher le mot de passe
  const hashedPassword = await bcrypt.hash(data.password, 10);
  
  // Transaction pour créer l'utilisateur et l'administrateur en même temps
  const user = await prisma.$transaction(async (tx) => {
    // Créer l'utilisateur de base
    const newUser = await tx.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        userType: 'admin',
        accountStatus,
      },
    });
    
    // Créer le profil administrateur
    await tx.admin.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        accessLevel,
        userId: newUser.id,
      },
    });
    
    return newUser;
  });
  
  return user;
}

// Type pour l'inscription d'un bénévole (sera utilisé plus tard)
interface VolunteerSignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  phone: string;
  experience?: number;
  localUnitId?: string;
}

// Fonction pour créer un compte bénévole (à implémenter plus tard)
export async function createVolunteerAccount(data: VolunteerSignupData) {
  // À implémenter
}

// Type pour l'inscription d'un bénéficiaire (sera utilisé plus tard)
interface BeneficiarySignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  phone?: string;
}

// Fonction pour créer un compte bénéficiaire (à implémenter plus tard)
export async function createBeneficiaryAccount(data: BeneficiarySignupData) {
  // À implémenter
}