// Script pour créer un administrateur par défaut
import { PrismaClient } from '../../src/generated/prisma';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('🔑 Création du compte administrateur par défaut...');

    // Configuration de l'administrateur par défaut
    const DEFAULT_ADMIN = {
      email: 'admin@admin.com',
      password: 'admin123', // À changer en production !
      firstName: 'Admin',
      lastName: 'Admin'
    };

    // Vérifier si l'administrateur existe déjà
    const existingUser = await prisma.users.findUnique({
      where: { email: DEFAULT_ADMIN.email }
    });

    if (existingUser) {
      console.log('✅ Un compte administrateur existe déjà avec cet email.');
      return;
    }

    // Générer des IDs uniques
    const userId = crypto.randomUUID();

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(DEFAULT_ADMIN.password, 10);

    // Créer l'utilisateur
    await prisma.users.create({
      data: {
        id: userId,
        email: DEFAULT_ADMIN.email,
        password: hashedPassword,
        userType: 'ADMIN',
        status: 'ACTIVE',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    console.log('✅ Compte administrateur créé avec succès:');
    console.log(`   Email: ${DEFAULT_ADMIN.email}`);
    console.log(`   Mot de passe: ${DEFAULT_ADMIN.password}`);
    console.log('⚠️ IMPORTANT: Changez ce mot de passe après la première connexion!');

  } catch (error) {
    console.error('❌ Erreur lors de la création du compte administrateur:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();