"use strict";

// script pour tester la connexion à l'API d'authentification
const fetch = require("node-fetch");

// URL à tester
const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";

async function testAuth() {
  console.log(`Teste l'authentification sur ${baseUrl}`);
  
  try {
    // Test 1: Vérifier les variables d'environnement
    console.log("\n--- Test des variables d'environnement ---");
    const secret = process.env.NEXTAUTH_SECRET;
    const url = process.env.NEXTAUTH_URL;
    
    console.log(`NEXTAUTH_SECRET est ${secret ? "défini" : "non défini"}`);
    console.log(`NEXTAUTH_URL est ${url ? "défini (" + url + ")" : "non défini"}`);
    
    if (!secret) {
      console.error("ERREUR: NEXTAUTH_SECRET n'est pas défini!");
    }
    
    // Test 2: Appeler l'API de session
    console.log("\n--- Test de l'API de session ---");
    const sessionResponse = await fetch(`${baseUrl}/api/auth/session`);
    const sessionData = await sessionResponse.json();
    
    console.log("Réponse de /api/auth/session:", sessionData);
    
    // Test 3: Vérifier la configuration CSRF
    console.log("\n--- Test de la configuration CSRF ---");
    const csrfResponse = await fetch(`${baseUrl}/api/auth/csrf`);
    const csrfData = await csrfResponse.json();
    
    console.log("Réponse de /api/auth/csrf:", csrfData);
    
    console.log("\nTests terminés.");
  } catch (error) {
    console.error("Erreur lors des tests:", error);
  }
}

testAuth();
