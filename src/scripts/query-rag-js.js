// Simple script pour requêter les documents RAG sans dépendances TypeScript
const { PrismaClient } = require('../generated/prisma');

// Initialisation du client Prisma
const prisma = new PrismaClient();

async function queryRagDocuments() {
  try {
    console.log('🔍 Récupération des documents RAG...\n');
    
    // Requête simple pour obtenir les documents
    const documents = await prisma.knowledge_documents.findMany({
      orderBy: {
        updatedAt: 'desc'
      }
    });
    
    if (documents.length === 0) {
      console.log('⚠️ Aucun document trouvé dans la base de données.');
      return;
    }
    
    console.log(`📚 Total: ${documents.length} documents\n`);
    
    // Affichage simple des résultats
    documents.forEach((doc, i) => {
      console.log(`--- Document ${i+1} ---`);
      console.log(`Titre: ${doc.title}`);
      console.log(`Tags: ${doc.tags.join(', ')}`);
      console.log(`Dernière mise à jour: ${doc.updatedAt}`);
      console.log('');
    });
    
  } catch (error) {
    console.error('❌ Erreur lors de la requête:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Exécution
queryRagDocuments();
