# Guide d'intégration de l'Assistant IA Gemini pour la Croix-Rouge

Ce document explique comment configurer et utiliser l'assistant IA basé sur Gemini 2.0 Flash pour répondre aux questions basées exclusivement sur les documents officiels de la Croix-Rouge.

## Prérequis

1. Une clé API Gemini (Google AI)
2. Des documents de base de connaissances chargés dans la base de données

## Configuration

### 1. Obtenir une clé API Gemini

1. Visitez [Google AI Studio](https://ai.google.dev/)
2. Créez un compte si nécessaire
3. Dans la section API, créez une nouvelle clé API
4. Copiez cette clé pour l'étape suivante

### 2. Configurer la variable d'environnement

1. Créez un fichier `.env.local` à la racine du projet s'il n'existe pas déjà
2. Ajoutez votre clé API Gemini :
```
GEMINI_API_KEY=votre_cle_api_gemini_ici
```

### 3. Redémarrer le serveur de développement

```bash
npm run dev
```

## Gestion des documents de connaissances

L'assistant IA répond uniquement en fonction des documents stockés dans la base de données. Les administrateurs peuvent gérer ces documents via l'interface d'administration.

### Ajouter des documents

1. Connectez-vous en tant qu'administrateur
2. Accédez à l'onglet "Base de connaissances" du tableau de bord
3. Cliquez sur "Ajouter un document"
4. Remplissez les champs :
   - Titre : nom descriptif du document
   - Contenu : texte complet du document
   - Tags : mots-clés pour faciliter la recherche
5. Enregistrez le document

### Bonnes pratiques pour les documents

- Utilisez des titres descriptifs et précis
- Structurez le contenu de façon claire avec des sections
- Incluez des tags pertinents pour améliorer la recherche
- Préférez plusieurs documents courts et spécifiques plutôt qu'un seul document long
- Assurez-vous que les informations sont à jour

## Fonctionnement de l'assistant IA

L'assistant IA Gemini :
- Répond uniquement aux questions basées sur les documents officiels
- Ne fait pas de suppositions ni n'invente d'informations
- Indique clairement quand il ne trouve pas d'information pertinente
- Refuse poliment de répondre aux questions hors sujet

## Limitations

- L'assistant ne peut répondre qu'en fonction des documents qui lui sont fournis
- La qualité des réponses dépend de la qualité et de l'exhaustivité des documents
- Le modèle a une limite de contexte, donc des documents très longs pourraient être tronqués

## Support technique

En cas de problèmes avec l'assistant IA, vérifiez :
1. Que la clé API est correctement configurée
2. Que des documents existent dans la base de connaissances
3. Que le serveur a été redémarré après la configuration

Pour toute assistance supplémentaire, contactez l'équipe technique de la Croix-Rouge.
