import { PrismaClient } from '@/generated/prisma';

// Connexion à la base de données
const prisma = new PrismaClient();

async function main() {
  try {
    console.log('🔍 Recherche des documents RAG...');
    
    // Requête simple pour récupérer tous les documents
    const documents = await prisma.knowledge_documents.findMany();
    
    console.log(`\n✅ ${documents.length} documents trouvés dans la base de données.\n`);
    
    // Afficher le résultat
    documents.forEach((doc, index) => {
      console.log(`📄 Document #${index + 1}`);
      console.log(`   Titre: ${doc.title}`);
      console.log(`   ID: ${doc.id}`);
      console.log(`   Tags: ${doc.tags.join(', ')}`);
      console.log(`   Date: ${doc.createdAt.toLocaleDateString()}`);
      console.log(`   Extrait: ${doc.content.substring(0, 70)}...\n`);
    });
  } catch (error) {
    console.error('❌ Erreur:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
