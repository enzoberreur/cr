"use strict";

/**
 * Script pour vérifier les variables d'environnement critiques pour l'application
 */
import dotenv from 'dotenv';
dotenv.config();

function verifierVariablesEnv() {
  console.log("=== VÉRIFICATION DES VARIABLES D'ENVIRONNEMENT ===");
  
  // Liste des variables obligatoires
  const obligatoires = [
    'DATABASE_URL',
    'DIRECT_URL',
    'NEXTAUTH_SECRET',
    'NEXTAUTH_URL'
  ];
  
  // Liste des variables optionnelles
  const optionnelles = [
    'PRISMA_DISABLE_ACCELERATE',
    'GOOGLE_AI_API_KEY',
    'NODE_ENV'
  ];
  
  // Vérification des variables obligatoires
  console.log("\n--- Variables obligatoires ---");
  let manquantes = false;
  
  for (const variable of obligatoires) {
    if (process.env[variable]) {
      console.log(`✅ ${variable}: Définie`);
      
      // Pour certaines variables spéciales, afficher plus de détails
      if (variable === 'NEXTAUTH_SECRET' && process.env[variable].length < 32) {
        console.log(`⚠️  ATTENTION: ${variable} semble trop court (moins de 32 caractères)`);
      }
    } else {
      console.log(`❌ ${variable}: Non définie`);
      manquantes = true;
    }
  }
  
  // Vérification des variables optionnelles
  console.log("\n--- Variables optionnelles ---");
  for (const variable of optionnelles) {
    if (process.env[variable]) {
      console.log(`✅ ${variable}: Définie`);
    } else {
      console.log(`⚠️  ${variable}: Non définie`);
    }
  }
  
  // Recommandations
  console.log("\n=== RECOMMANDATIONS ===");
  if (manquantes) {
    console.log("❌ Certaines variables obligatoires sont manquantes. L'application pourrait ne pas fonctionner correctement.");
    console.log("   Ajoutez ces variables dans votre fichier .env");
  } else {
    console.log("✅ Toutes les variables obligatoires sont définies.");
  }
  
  if (!process.env.NODE_ENV) {
    console.log("⚠️  La variable NODE_ENV n'est pas définie. L'environnement par défaut est 'development'.");
  }
  
  // Vérification spécifique à NEXTAUTH_URL
  if (process.env.NEXTAUTH_URL) {
    try {
      const url = new URL(process.env.NEXTAUTH_URL);
      console.log(`✅ NEXTAUTH_URL est une URL valide: ${url.href}`);
    } catch {
      console.log(`❌ NEXTAUTH_URL n'est pas une URL valide: ${process.env.NEXTAUTH_URL}`);
    }
  }
  
  console.log("\nFin de la vérification.");
}

// Exécuter la vérification
verifierVariablesEnv();
