import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

/**
 * Génère un mot de passe aléatoire sécurisé
 * @param length Longueur du mot de passe (défaut: 12)
 * @returns Mot de passe aléatoire
 */
export function generateRandomPassword(length: number = 12): string {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
  let password = '';
  
  // Assurer au moins un caractère de chaque type
  password += charset.substring(0, 26).charAt(Math.floor(Math.random() * 26)); // lettre minuscule
  password += charset.substring(26, 52).charAt(Math.floor(Math.random() * 26)); // lettre majuscule
  password += charset.substring(52, 62).charAt(Math.floor(Math.random() * 10)); // chiffre
  password += charset.substring(62).charAt(Math.floor(Math.random() * (charset.length - 62))); // caractère spécial

  // Compléter avec des caractères aléatoires
  for (let i = 4; i < length; i++) {
    const randomIndex = crypto.randomInt(charset.length);
    password += charset.charAt(randomIndex);
  }

  // Mélanger tous les caractères
  return password.split('').sort(() => 0.5 - Math.random()).join('');
}

// Type pour l'inscription d'un administrateur
interface AdminSignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
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

// Type pour l'inscription d'un bénévole par un administrateur
interface VolunteerCreationData {
  email: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  phone: string;
  experience?: number;
  skills?: Record<string, any>;
  availability?: Record<string, any>;
  specializations?: Record<string, any>;
}

// Fonction pour créer un compte bénévole avec mot de passe aléatoire
export async function createVolunteerAccountByAdmin(data: VolunteerCreationData) {
  // Générer un mot de passe aléatoire
  const randomPassword = generateRandomPassword();
  
  // Hasher le mot de passe
  const hashedPassword = await bcrypt.hash(randomPassword, 10);
  
  // Transaction pour créer l'utilisateur et le bénévole en même temps
  const result = await prisma.$transaction(async (tx) => {
    // Créer l'utilisateur de base
    const newUser = await tx.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        userType: 'volunteer',
        accountStatus: 'active', // Les comptes créés par admin sont actifs immédiatement
      },
    });
    
    // Créer le profil bénévole
    const volunteer = await tx.volunteer.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        birthDate: data.birthDate,
        phone: data.phone,
        experience: data.experience || 0,
        skills: data.skills || {},
        availability: data.availability || {},
        specializations: data.specializations || {},
        verified: true, // Vérifié par défaut car créé par un admin
        userId: newUser.id,
      },
    });
    
    return { user: newUser, volunteer, clearTextPassword: randomPassword };
  });
  
  return result;
}

// Type pour l'inscription d'un bénévole qui s'inscrit lui-même
interface VolunteerSignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  phone: string;
  experience?: number;
  skills?: Record<string, any>;
  availability?: Record<string, any>;
  specializations?: Record<string, any>;
}

// Fonction pour un bénévole qui s'inscrit lui-même (obsolète car créé par admin)
export async function createVolunteerAccount(data: VolunteerSignupData) {
  // Hasher le mot de passe
  const hashedPassword = await bcrypt.hash(data.password, 10);
  
  // Transaction pour créer l'utilisateur et le bénévole en même temps
  const user = await prisma.$transaction(async (tx) => {
    // Créer l'utilisateur de base
    const newUser = await tx.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        userType: 'volunteer',
        accountStatus: 'pending', // Les comptes bénévoles auto-inscrits doivent être approuvés
      },
    });
    
    // Créer le profil bénévole
    await tx.volunteer.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        birthDate: data.birthDate,
        phone: data.phone,
        experience: data.experience || 0,
        skills: data.skills || {},
        availability: data.availability || {},
        specializations: data.specializations || {},
        verified: false,
        userId: newUser.id,
      },
    });
    
    return newUser;
  });
  
  return user;
}

// Type pour l'inscription d'un bénéficiaire
interface BeneficiarySignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  phone?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  familySituation?: string;
  householdSize?: number;
  professionalSituation?: string;
  housingType?: string;
  monthlyIncome?: number;
  priorityNeeds?: Record<string, any>;
  faceEmbedding?: any; // Embedding facial optionnel
  faceImageUrl?: string; // URL de l'image faciale optionnelle
}

// Fonction pour créer un compte bénéficiaire
export async function createBeneficiaryAccount(data: BeneficiarySignupData) {
  // Hasher le mot de passe
  const hashedPassword = await bcrypt.hash(data.password, 10);
  
  // Transaction pour créer l'utilisateur et le bénéficiaire en même temps
  const result = await prisma.$transaction(async (tx) => {
    // Créer l'utilisateur de base
    const newUser = await tx.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        userType: 'beneficiary',
        accountStatus: 'active', // Les comptes bénéficiaires sont actifs immédiatement
      },
    });
    
    // Créer le profil bénéficiaire
    const beneficiary = await tx.beneficiary.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        birthDate: data.birthDate,
        phone: data.phone,
        address: data.address,
        city: data.city,
        postalCode: data.postalCode,
        familySituation: data.familySituation,
        householdSize: data.householdSize || 1,
        professionalSituation: data.professionalSituation,
        housingType: data.housingType,
        monthlyIncome: data.monthlyIncome,
        priorityNeeds: data.priorityNeeds || {},
        userId: newUser.id,
      },
    });
    
    // Si un embedding facial est fourni, l'enregistrer
    let faceEmbedding = null;
    if (data.faceEmbedding && data.faceImageUrl) {
      faceEmbedding = await tx.faceEmbedding.create({
        data: {
          beneficiaryId: beneficiary.id,
          embedding: data.faceEmbedding,
          imageUrl: data.faceImageUrl,
        }
      });
    }
    
    return { user: newUser, beneficiary, faceEmbedding };
  });
  
  return result;
}

// Type pour créer un compte bénéficiaire par un bénévole/admin
interface BeneficiaryCreationData {
  email: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  phone?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  familySituation?: string;
  householdSize?: number;
  professionalSituation?: string;
  housingType?: string;
  monthlyIncome?: number;
  priorityNeeds?: Record<string, any>;
  faceEmbedding?: any; // Embedding facial optionnel
  faceImageUrl?: string; // URL de l'image faciale optionnelle
}

// Fonction pour créer un compte bénéficiaire par un bénévole/admin
export async function createBeneficiaryAccountByStaff(data: BeneficiaryCreationData) {
  // Générer un mot de passe aléatoire
  const randomPassword = generateRandomPassword();
  
  // Hasher le mot de passe
  const hashedPassword = await bcrypt.hash(randomPassword, 10);
  
  // Transaction pour créer l'utilisateur et le bénéficiaire en même temps
  const result = await prisma.$transaction(async (tx) => {
    // Créer l'utilisateur de base
    const newUser = await tx.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        userType: 'beneficiary',
        accountStatus: 'active',
      },
    });
    
    // Créer le profil bénéficiaire
    const beneficiary = await tx.beneficiary.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        birthDate: data.birthDate,
        phone: data.phone,
        address: data.address,
        city: data.city,
        postalCode: data.postalCode,
        familySituation: data.familySituation,
        householdSize: data.householdSize || 1,
        professionalSituation: data.professionalSituation,
        housingType: data.housingType,
        monthlyIncome: data.monthlyIncome,
        priorityNeeds: data.priorityNeeds || {},
        userId: newUser.id,
      },
    });
    
    // Si un embedding facial est fourni, l'enregistrer
    let faceEmbedding = null;
    if (data.faceEmbedding && data.faceImageUrl) {
      faceEmbedding = await tx.faceEmbedding.create({
        data: {
          beneficiaryId: beneficiary.id,
          embedding: data.faceEmbedding,
          imageUrl: data.faceImageUrl,
        }
      });
    }
    
    return { 
      user: newUser, 
      beneficiary, 
      faceEmbedding, 
      clearTextPassword: randomPassword 
    };
  });
  
  return result;
}

// Fonction pour vérifier si l'email existe déjà
export async function checkEmailExists(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  return !!user;
}

// Fonction pour valider un compte utilisateur (activation)
export async function activateUserAccount(userId: string) {
  return await prisma.user.update({
    where: { id: userId },
    data: { accountStatus: 'active' },
  });
}

// Fonction pour bloquer un compte utilisateur
export async function blockUserAccount(userId: string) {
  return await prisma.user.update({
    where: { id: userId },
    data: { accountStatus: 'blocked' },
  });
}

// Fonction pour stocker un embedding facial
export async function storeFaceEmbedding(beneficiaryId: string, embedding: any, imageUrl: string) {
  // Vérifier si un embedding existe déjà pour ce bénéficiaire
  const existingEmbedding = await prisma.faceEmbedding.findUnique({
    where: { beneficiaryId }
  });

  if (existingEmbedding) {
    // Mettre à jour l'embedding existant
    return await prisma.faceEmbedding.update({
      where: { id: existingEmbedding.id },
      data: {
        embedding,
        imageUrl,
        createdAt: new Date() // Mettre à jour la date pour suivre les mises à jour
      }
    });
  } else {
    // Créer un nouvel embedding
    return await prisma.faceEmbedding.create({
      data: {
        beneficiaryId,
        embedding,
        imageUrl
      }
    });
  }
}

// Fonction pour réinitialiser le mot de passe d'un utilisateur
export async function resetUserPassword(userId: string): Promise<string> {
  // Générer un nouveau mot de passe
  const newPassword = generateRandomPassword();
  
  // Hasher le nouveau mot de passe
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  
  // Mettre à jour le mot de passe dans la base de données
  await prisma.user.update({
    where: { id: userId },
    data: { password: hashedPassword }
  });
  
  return newPassword;
}