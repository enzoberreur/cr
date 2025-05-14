import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

/**
 * Récupère la session utilisateur côté serveur
 */
export async function getSession() {
  return await getServerSession(authOptions);
}

/**
 * Récupère l'utilisateur actuellement connecté
 */
export async function getCurrentUser() {
  const session = await getSession();
  return session?.user || null;
}

/**
 * Vérifie si l'utilisateur est un administrateur
 */
export function isAdmin(userType: string | undefined) {
  return userType === "ADMIN";
}

/**
 * Vérifie si l'utilisateur est un bénévole
 */
export function isVolunteer(userType: string | undefined) {
  return userType === "VOLUNTEER";
}

/**
 * Vérifie si l'utilisateur est un bénéficiaire
 */
export function isBeneficiary(userType: string | undefined) {
  return userType === "BENEFICIARY";
}