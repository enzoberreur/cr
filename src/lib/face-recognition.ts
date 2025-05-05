// Bibliothèque pour la gestion de la reconnaissance faciale

/**
 * Type pour les embeddings faciaux
 */
export type FacialEmbedding = number[];

/**
 * Type pour les résultats de comparaison faciale avec score
 */
export interface FaceMatchResult {
  embedding: any;
  score: number;
}

/**
 * Calcule la similarité cosinus entre deux vecteurs d'embedding
 * 
 * @param embedding1 Premier vecteur d'embedding
 * @param embedding2 Second vecteur d'embedding
 * @returns Score de similarité (entre 0 et 1, 1 étant une correspondance parfaite)
 */
export function calculateCosineSimilarity(embedding1: FacialEmbedding, embedding2: FacialEmbedding): number {
  if (embedding1.length !== embedding2.length) {
    throw new Error("Les embeddings doivent avoir la même dimension");
  }

  let dotProduct = 0;
  let norm1 = 0;
  let norm2 = 0;

  // Calculer le produit scalaire et les normes
  for (let i = 0; i < embedding1.length; i++) {
    dotProduct += embedding1[i] * embedding2[i];
    norm1 += Math.pow(embedding1[i], 2);
    norm2 += Math.pow(embedding2[i], 2);
  }

  // Vérifier que les normes ne sont pas nulles pour éviter la division par zéro
  if (norm1 === 0 || norm2 === 0) {
    return 0;
  }

  // Calculer la similarité cosinus
  return dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));
}

/**
 * Compare un embedding facial avec une liste d'embeddings stockés et retourne le meilleur match
 * 
 * @param newEmbedding Nouvel embedding à comparer
 * @param storedEmbeddings Liste des embeddings stockés en base de données
 * @param threshold Seuil de similarité minimal pour considérer un match (entre 0 et 1)
 * @returns Le meilleur match trouvé ou null si aucun ne dépasse le seuil
 */
export async function compareFaceEmbeddings(
  newEmbedding: FacialEmbedding, 
  storedEmbeddings: any[], 
  threshold: number = 0.8
): Promise<any | null> {
  if (!storedEmbeddings.length) {
    return null;
  }

  // Calculer les scores de similarité pour tous les embeddings stockés
  const matchScores = storedEmbeddings.map(stored => {
    // Les embeddings sont stockés sous forme de JSON en base de données
    const storedEmbeddingVector = typeof stored.embedding === 'string' 
      ? JSON.parse(stored.embedding) 
      : stored.embedding;
    
    const score = calculateCosineSimilarity(newEmbedding, storedEmbeddingVector);
    return { ...stored, score };
  });

  // Trier par score de similarité décroissant
  matchScores.sort((a, b) => b.score - a.score);

  // Retourner le meilleur match s'il dépasse le seuil de confiance
  if (matchScores[0].score >= threshold) {
    return matchScores[0];
  }

  return null;
}

/**
 * Compare un embedding facial avec tous les embeddings stockés et retourne les meilleurs matchs
 * 
 * @param newEmbedding Nouvel embedding à comparer
 * @param storedEmbeddings Liste des embeddings stockés en base de données
 * @param limit Nombre maximum de résultats à retourner
 * @param threshold Seuil de similarité minimal (optionnel)
 * @returns Liste des meilleurs matchs avec leurs scores
 */
export async function findTopFaceMatches(
  newEmbedding: FacialEmbedding,
  storedEmbeddings: any[],
  limit: number = 5,
  threshold: number = 0.7
): Promise<FaceMatchResult[]> {
  if (!storedEmbeddings.length) {
    return [];
  }

  // Calculer les scores de similarité
  const matchScores = storedEmbeddings.map(stored => {
    const storedEmbeddingVector = typeof stored.embedding === 'string'
      ? JSON.parse(stored.embedding)
      : stored.embedding;
    
    const score = calculateCosineSimilarity(newEmbedding, storedEmbeddingVector);
    return { ...stored, score };
  });

  // Filtrer par seuil et trier par score de similarité décroissant
  return matchScores
    .filter(match => match.score >= threshold)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}