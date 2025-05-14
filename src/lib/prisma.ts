import { PrismaClient } from '@/generated/prisma';

// Cette variable permettra de stocker l'instance de PrismaClient entre les rechargements en développement
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Configurer l'instance de PrismaClient avec moins de logs
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['error'], // N'affiche que les erreurs, supprime les logs de requêtes et d'avertissements
  });

// Assigner l'instance à la variable globale uniquement en développement
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Gestionnaire pour fermer proprement la connexion quand l'application s'arrête
if (process.env.NODE_ENV !== 'production') {
  process.on('beforeExit', async () => {
    await prisma.$disconnect();
  });
}