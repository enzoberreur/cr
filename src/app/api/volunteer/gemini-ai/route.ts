import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Configurer l'API Gemini
const apiKey = process.env.GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

// Sécurité: paramètres de blocage du contenu nocif
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

// POST /api/volunteer/gemini-ai
export async function POST(req: NextRequest) {
  try {
    // Vérification de l'authentification
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user || (session.user.userType !== "VOLUNTEER" && session.user.userType !== "ADMIN")) {
      return NextResponse.json(
        { error: "Accès non autorisé" },
        { status: 401 }
      );
    }

    // Vérifier si l'API key est configurée
    if (!genAI || !apiKey) {
      return NextResponse.json(
        { error: "La clé API Gemini n'est pas configurée sur le serveur" },
        { status: 500 }
      );
    }

    // Récupérer la question et l'historique depuis la requête
    const data = await req.json();
    const { question, history } = data;

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "La question est requise et doit être une chaîne de caractères" },
        { status: 400 }
      );
    }
    
    // Utiliser l'historique s'il est disponible
    const conversationHistory = Array.isArray(history) ? history : [];
    
    // Récupérer les documents RAG depuis la base de données
    const documents = await prisma.knowledge_documents.findMany({
      select: {
        title: true,
        content: true,
        tags: true,
      },
      // Limiter le nombre de documents pour éviter une surcharge
      take: 10,
    });

    if (!documents || documents.length === 0) {
      return NextResponse.json({
        response: "Je n'ai pas assez d'informations pour répondre à cette question. La base de connaissances est vide.",
      });
    }

    // Recherche des documents pertinents en fonction de la question de manière plus intelligente
    const normalizedQuestion = question.toLowerCase();
    
    // Extraire les mots-clés de la question (mots de plus de 3 lettres)
    const keywords = normalizedQuestion.split(/\s+/).filter((word: string) => word.length > 3);
    
    // Dictionnaire des synonymes et des relations sémantiques pour améliorer la recherche
    const semanticMapping: {[key: string]: string[]} = {
      // Situations professionnelles
      "étudiant": ["jeune", "formation", "études", "scolarité", "universitaire", "école"],
      "alternance": ["alternant", "apprentissage", "apprenti", "contrat pro", "professionnalisation"],
      "chômage": ["chômeur", "recherche d'emploi", "sans emploi", "demandeur", "pôle emploi"],
      "travailleur": ["salarié", "emploi", "travail", "activité", "profession"],
      "indépendant": ["auto-entrepreneur", "freelance", "libéral", "entrepreneur"],
      
      // Situations familiales
      "parent": ["famille", "enfant", "parental", "monoparental", "garde"],
      "famille": ["foyer", "ménage", "parent", "enfant"],
      "isolé": ["seul", "célibataire", "solitude"],
      
      // Logement
      "logement": ["habitation", "loyer", "appartement", "maison", "hébergement", "locataire"],
      "propriétaire": ["propriété", "maison", "appartement"],
      
      // Aides et financements
      "aide": ["allocation", "subvention", "financement", "soutien", "assistance", "dispositif"],
      "revenu": ["salaire", "ressources", "argent", "rémunération", "finance"],
      "bourse": ["allocation", "aide financière"],
      "allocation": ["aide", "prestation"],
      
      // Situations particulières
      "handicap": ["handicapé", "invalidité", "pmr", "accessibilité", "mobilité réduite"],
      "santé": ["maladie", "médical", "soins", "traitement", "pathologie"],
      "urgence": ["crise", "besoin", "priorité", "secours", "détresse"],
      
      // Autres
      "droit": ["éligibilité", "accès", "bénéficier", "admissibilité"],
      "démarche": ["procédure", "processus", "formalité", "inscription"]
    };
    
    // Fonction d'expansion sémantique: enrichit les mots-clés avec des termes liés
    const expandKeywords = (originalKeywords: string[]): string[] => {
      const expandedSet = new Set<string>(originalKeywords);
      
      // Pour chaque mot-clé original
      originalKeywords.forEach(keyword => {
        // Chercher dans notre dictionnaire sémantique
        for (const [concept, relatedTerms] of Object.entries(semanticMapping)) {
          // Si le mot-clé est lié à un concept ou est lui-même un concept
          if (keyword.includes(concept) || concept.includes(keyword)) {
            // Ajouter le concept et ses termes associés
            expandedSet.add(concept);
            relatedTerms.forEach(term => expandedSet.add(term));
          }
        }
      });
      
      return Array.from(expandedSet);
    };
    
    // Enrichir les mots-clés avec des termes sémantiquement liés
    const enrichedKeywords = expandKeywords(keywords);
    
    // Trier les documents par pertinence avec des scores améliorés
    const scoredDocuments = documents.map(doc => {
      const content = (doc.title + " " + doc.content + " " + doc.tags.join(" ")).toLowerCase();
      
      // Score initial basé sur les mots-clés originaux (poids plus élevé)
      let score = keywords.reduce((acc: number, keyword: string) => {
        return acc + (content.includes(keyword) ? 3 : 0);
      }, 0);
      
      // Score supplémentaire basé sur les mots enrichis (poids plus faible)
      score += enrichedKeywords.reduce((acc: number, keyword: string) => {
        return acc + (content.includes(keyword) ? 1 : 0);
      }, 0);
      
      // Bonus spécial pour les correspondances dans les tags (très pertinent)
      const tagMatches = doc.tags.filter(tag => 
        enrichedKeywords.some(keyword => tag.toLowerCase().includes(keyword))
      ).length;
      
      score += tagMatches * 5;  // Bonus important pour les correspondances de tags
      
      return { ...doc, score };
    }).sort((a, b) => b.score - a.score);
    
    // Prendre tous les documents pertinents par ordre de score
    const relevantDocs = scoredDocuments;
    const context = relevantDocs.map((doc, index) => 
      `Document ${index + 1}:\nTitre: ${doc.title}\nContenu: ${doc.content}\nTags: ${doc.tags.join(', ')}\n\n`
    ).join("");

    // Créer le modèle avec des paramètres de sécurité
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      safetySettings,
    });

    // Préparer le contenu pour la requête Gemini
    // Structure simple avec un seul contenu textuel
    
    // Utiliser tous les documents pertinents, sans limitation
    const useDocs = relevantDocs;
    
    // Construire un texte avec le contexte des documents
    let docsContext = "";
    for (let i = 0; i < useDocs.length; i++) {
      const doc = useDocs[i];
      // Limiter la taille pour éviter de dépasser les limites
      const truncatedContent = doc.content.length > 400 ? 
        doc.content.substring(0, 400) + "..." : 
        doc.content;
      
      docsContext += `DOCUMENT ${i+1}: ${doc.title}\n`;
      docsContext += `CONTENU: ${truncatedContent}\n`;
      docsContext += `TAGS: ${doc.tags.join(', ')}\n\n`;
    }
    
    // Construire le contexte de conversation à partir de l'historique (limité aux 4 derniers messages)
    let conversationContext = "";
    if (conversationHistory.length > 0) {
      // Limiter l'historique aux 4 derniers messages pour éviter de dépasser les limites de tokens
      const recentHistory = conversationHistory.slice(-4);
      conversationContext = "### HISTORIQUE DE LA CONVERSATION ###\n";
      recentHistory.forEach((message, index) => {
        const role = index % 2 === 0 ? "Utilisateur" : "Assistant";
        conversationContext += `${role}: ${message}\n\n`;
      });
    }

    // Extraire les mots-clés principaux de la question pour améliorer la contextualisation
    const mainKeywords = keywords
      .filter(word => word.length > 3)
      .slice(0, 5)
      .join(", ");
    
    // Construire le prompt final optimisé
    const promptContent = `# ASSISTANT IA OFFICIEL DE LA CROIX-ROUGE FRANÇAISE

## CONTEXTE
Tu es un assistant expert de la Croix-Rouge française, spécifiquement programmé pour fournir une aide précise et fiable aux volontaires et au personnel. Ta mission est d'offrir des informations exactes basées exclusivement sur la documentation officielle.

## SOURCES D'INFORMATION
${docsContext}

${conversationContext ? conversationContext : ""}

## DIRECTIVES PRINCIPALES
1. EXACTITUDE: Réponds UNIQUEMENT en utilisant les informations contenues dans les documents de référence ci-dessus.
2. TRANSPARENCE: Si une information demandée n'est pas présente dans les documents, indique clairement: "Désolé, je n'ai pas cette information dans ma base de connaissances actuelle."
3. DIALOGUE INTERACTIF: Si la question est vague ou nécessite plus de précisions pour offrir une aide pertinente, fournis d'abord une réponse générale puis POSE 1-2 QUESTIONS SPÉCIFIQUES pour orienter la conversation et obtenir les informations nécessaires à une réponse plus personnalisée.
4. EFFICACITÉ: Fournis des réponses concises, claires et directement utiles.
5. COHÉRENCE: Assure une continuité logique avec les échanges précédents de la conversation.
6. PROFESSIONNALISME: Maintiens toujours un ton courtois, professionnel et représentatif des valeurs de la Croix-Rouge française.

## APPROCHE CONVERSATIONNELLE
- Pour les questions générales sur les aides ou services (ex: "à quelles aides ai-je droit?"), commence par une réponse générale puis POSE DES QUESTIONS COMPLÉMENTAIRES pour affiner, comme l'âge, la situation professionnelle, le revenu, etc.
- Pour les questions vagues, demande des précisions tout en offrant une réponse partielle.
- Base ces questions complémentaires sur les critères d'éligibilité mentionnés dans les documents.

## STRUCTURE DE RÉPONSE
- Commence par répondre directement à la question posée avec les informations disponibles
- Si pertinent, fournis des détails supplémentaires ou des clarifications
- Si la question est vague ou générale, TERMINE TA RÉPONSE PAR 1-2 QUESTIONS ciblées pour mieux comprendre la situation et pouvoir apporter une aide plus personnalisée

## QUESTION ACTUELLE (mots-clés: ${mainKeywords})
${question}`;

    try {
      // Utiliser generateContent avec un simple contenu textuel
      const result = await model.generateContent(promptContent);
      const response = result.response.text();

      return NextResponse.json({
        response,
        timestamp: new Date().toISOString(),
      });

    } catch (error) {
      console.error("Erreur lors de l'interaction avec Gemini:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'interaction avec l'assistant IA" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Erreur générale:", error);
    return NextResponse.json(
      { error: "Une erreur inattendue s'est produite" },
      { status: 500 }
    );
  }
}
