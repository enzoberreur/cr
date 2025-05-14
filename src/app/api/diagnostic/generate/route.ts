import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { DiagnosticFormData } from "@/lib/schemas/diagnostic";
import { prisma } from "@/lib/prisma";

// Initialiser l'API Gemini
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");

// Structure du prompt pour l'IA
const generatePrompt = (data: DiagnosticFormData) => `
En tant qu'assistant social virtuel de la Croix-Rouge, analysez cette situation et fournissez des recommandations concises et pertinentes.

SITUATION :
Age : ${data.identite.age} ans
Situation familiale : ${data.situationFamiliale.statut}
Enfants : ${data.situationFamiliale.enfants}
Logement : ${data.logement.situation}
Revenu : ${data.finances.revenuMensuel}€
Santé : ${data.sante.couvertureMedicale}

BESOINS : ${data.besoins.prioritaires.join(", ")}

COMMENTAIRES : ${data.besoins.commentaires || "Aucun"}

FORMAT DE RÉPONSE SOUHAITÉ :
1. Résumé court et bienveillant (2-3 phrases)
2. 3-4 recommandations prioritaires concrètes
3. 2-3 dispositifs d'aide spécifiques accessibles`;

export async function POST(req: NextRequest) {
  try {
    const data: DiagnosticFormData = await req.json();

    // Récupérer les documents pertinents de la base de connaissances
    const knowledgeDocuments = await prisma.knowledge_documents.findMany({
      where: {
        OR: [
          { tags: { hasEvery: data.besoins.prioritaires } },
          { tags: { hasEvery: data.droitsSociaux.difficultesAcces } },
        ],
      },
      take: 3, // Limité à 3 documents pour le contexte flash-lite
      orderBy: { updatedAt: 'desc' },
    });

    // Ajouter les documents au prompt de manière concise
    const docsContext = knowledgeDocuments.map(doc => 
      `RESSOURCE - ${doc.title} : ${doc.content.substring(0, 200)}...`
    ).join("\n\n");

    // Générer le prompt complet
    const prompt = generatePrompt(data) + "\n\nCONTEXTE :\n" + docsContext;

    // Appeler Gemini avec le modèle flash-lite
    const model = genAI.getGenerativeModel({ 
      model: "gemini-pro",
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Traiter la réponse de manière plus robuste
    const sections = text.split("\n\n").filter(Boolean);
    let summary = "", recommendations: string[] = [], suggestions: string[] = [];

    if (sections.length >= 1) summary = sections[0].replace(/^(Résumé|1\.|-)?\s*/, '');
    if (sections.length >= 2) {
      recommendations = sections[1]
        .split('\n')
        .filter(line => line.trim())
        .map(line => line.replace(/^(-|\d+\.|•)\s*/, ''));
    }
    if (sections.length >= 3) {
      suggestions = sections[2]
        .split('\n')
        .filter(line => line.trim())
        .map(line => line.replace(/^(-|\d+\.|•)\s*/, ''));
    }

    // Sauvegarder temporairement les résultats
    if (typeof window !== 'undefined') {
      localStorage.setItem("lastDiagnosticResults", JSON.stringify({
        summary,
        recommendations,
        suggestions,
        timestamp: new Date().toISOString(),
      }));
    }

    return NextResponse.json({
      summary,
      recommendations,
      suggestions,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error("Erreur lors de la génération du diagnostic :", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de la génération du diagnostic" },
      { status: 500 }
    );
  }
}