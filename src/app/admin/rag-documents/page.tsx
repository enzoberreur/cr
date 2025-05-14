import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';

export const metadata = {
  title: 'Documents RAG - Croix-Rouge française',
  description: 'Visualisation des documents de la base de connaissances RAG',
};

export default async function RagDocumentsPage() {
  // Vérification de l'authentification
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect('/login');
  }
  
  // Récupération des documents RAG directement depuis le serveur
  const documents = await prisma.knowledge_documents.findMany({
    orderBy: {
      updatedAt: 'desc',
    },
    include: {
      admins: {
        select: {
          firstName: true,
          lastName: true,
        }
      }
    }
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Documents de la base de connaissances RAG</h1>
      
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <p className="text-gray-700">
          Total: <span className="font-semibold">{documents.length}</span> documents trouvés
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {documents.map(doc => (
          <div key={doc.id} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white p-4">
              <h2 className="font-semibold text-lg">{doc.title}</h2>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">
                Par {doc.admins.firstName} {doc.admins.lastName} • 
                {' '}{new Date(doc.updatedAt).toLocaleDateString()}
              </p>
              <div className="mb-4">
                {doc.tags.map(tag => (
                  <span key={tag} className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs mr-2 mb-2">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="border-t pt-3 mt-2">
                <p className="text-gray-700 text-sm line-clamp-3">
                  {doc.content.substring(0, 150)}...
                </p>
              </div>
            </div>
          </div>
        ))}

        {documents.length === 0 && (
          <div className="col-span-3 p-8 text-center">
            <p className="text-gray-500">Aucun document trouvé dans la base de données.</p>
          </div>
        )}
      </div>
    </div>
  );
}
