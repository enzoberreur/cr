import { PrismaClient } from '@/generated/prisma';

// Initialiser le client Prisma
const prisma = new PrismaClient();

async function listRagDocuments() {
  try {
    console.log('📚 Récupération des documents RAG depuis la base de données...\n');
    
    // Récupérer tous les documents de connaissances
    const documents = await prisma.knowledge_documents.findMany({
      include: {
        admins: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });

    if (documents.length === 0) {
      console.log('❌ Aucun document RAG trouvé dans la base de données.');
      return;
    }

    console.log(`✅ ${documents.length} documents RAG trouvés:\n`);
    
    // Afficher les informations pour chaque document
    documents.forEach((doc, index) => {
      console.log(`--- Document ${index + 1} ---`);
      console.log(`ID: ${doc.id}`);
      console.log(`Titre: ${doc.title}`);
      console.log(`Tags: ${doc.tags.join(', ')}`);
      console.log(`Créé le: ${doc.createdAt.toLocaleDateString()}`);
      console.log(`Modifié le: ${doc.updatedAt.toLocaleDateString()}`);
      console.log(`Ajouté par: ${doc.admins.firstName} ${doc.admins.lastName}`);
      console.log(`Contenu (extrait): ${doc.content.substring(0, 100)}...`);
      console.log('\n');
    });

  } catch (error) {
    console.error('❌ Erreur lors de la récupération des documents RAG:', error);
  } finally {
    // Fermer la connexion Prisma
    await prisma.$disconnect();
  }
}

// Exécuter la fonction
listRagDocuments();
