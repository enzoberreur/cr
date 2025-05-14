"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import NavbarAdmin from "./navbar-admin";
import { Loader2 } from "lucide-react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  // Protection côté client supplémentaire
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (session && session.user?.userType !== "ADMIN") {
      router.push("/login");
    }
  }, [session, status, router]);
  
  // Afficher un écran de chargement pendant la vérification
  if (status === "loading" || (status === "authenticated" && session?.user?.userType !== "ADMIN")) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-[#E2001A] mx-auto animate-spin" />
          <h2 className="mt-4 text-xl font-semibold">Chargement de l'interface administrateur...</h2>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarAdmin />
      <main className="flex-grow bg-gray-50">
        {children}
      </main>
    </div>
  );
}
