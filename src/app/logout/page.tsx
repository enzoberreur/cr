"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const performLogout = async () => {
      try {
        // Déconnecter l'utilisateur
        await signOut({ redirect: false });
        
        // Rediriger vers la page d'accueil après 1 seconde
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } catch (error) {
        console.error("Erreur lors de la déconnexion:", error);
        // Rediriger vers la page d'accueil en cas d'erreur
        router.push("/");
      }
    };

    performLogout();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <Loader2 className="h-12 w-12 text-[#E2001A] mx-auto animate-spin" />
        <h1 className="mt-6 text-2xl font-semibold text-gray-900">Déconnexion en cours...</h1>
        <p className="mt-2 text-gray-500">Vous serez redirigé vers la page d&apos;accueil.</p>
      </div>
    </div>
  );
}
