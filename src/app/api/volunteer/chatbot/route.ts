import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

// POST /api/volunteer/chatbot
// Envoie une question au chatbot et retourne une réponse
export async function POST(req: NextRequest) {
  try {
    // Vérification de l'authentification
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user || session.user.userType !== "VOLUNTEER") {
      return NextResponse.json(
        { error: "Accès non autorisé" },
        { status: 401 }
      );
    }

    // Récupérer la question depuis la requête
    const data = await req.json();
    const { message } = data;

    if (!message) {
      return NextResponse.json(
        { error: "Le message est requis" },
        { status: 400 }
      );
    }

    // Dans une implémentation réelle, vous appelleriez un service d'IA
    // comme OpenAI, Anthropic Claude, ou un autre modèle pour générer une réponse
    
    // Simuler un délai pour une réponse réaliste
    await new Promise(resolve => setTimeout(resolve, 500));

    // Générer une réponse simple basée sur la question
    let response = "";
    
    if (message.toLowerCase().includes("bonjour") || message.toLowerCase().includes("salut")) {
      response = "Bonjour ! Comment puis-je vous aider aujourd'hui ?";
    } else if (message.toLowerCase().includes("diagnostic")) {
      response = "Pour créer un nouveau diagnostic, allez sur la page du bénéficiaire concerné et cliquez sur le bouton 'Nouveau diagnostic'. Vous pouvez également voir l'historique des diagnostics dans l'onglet 'Diagnostics'.";
    } else if (message.toLowerCase().includes("bénéficiaire") || message.toLowerCase().includes("beneficiaire")) {
      response = "Vous pouvez gérer vos bénéficiaires depuis l'onglet 'Bénéficiaires' du tableau de bord. Vous pouvez ajouter un nouveau bénéficiaire en cliquant sur le bouton 'Ajouter un bénéficiaire'.";
    } else if (message.toLowerCase().includes("note")) {
      response = "Les notes privées vous permettent de conserver des informations confidentielles sur un bénéficiaire. Elles ne sont visibles que par vous. Vous pouvez les ajouter dans l'onglet 'Notes privées' sur la page d'un bénéficiaire.";
    } else if (message.toLowerCase().includes("recherche") || message.toLowerCase().includes("trouver")) {
      response = "Vous pouvez rechercher un bénéficiaire par son nom ou prénom dans la barre de recherche de l'onglet 'Bénéficiaires'. Vous pouvez également utiliser la recherche par reconnaissance faciale en cliquant sur l'icône d'appareil photo.";
    } else {
      response = "Je suis votre assistant de la Croix-Rouge. Je peux vous aider avec la gestion des bénéficiaires, la création de diagnostics et l'utilisation générale de l'application. N'hésitez pas à me poser des questions spécifiques.";
    }

    // Réponse du chatbot
    return NextResponse.json({
      message: response,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error("Erreur lors de l'interaction avec le chatbot:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'interaction avec le chatbot" },
      { status: 500 }
    );
  }
}
