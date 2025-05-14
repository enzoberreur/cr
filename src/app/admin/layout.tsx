import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Import des composants client
import ClientLayout from "@/components/admin/client-layout";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  console.log("Admin Layout - Session:", session);

  // Vérifier si l'utilisateur est connecté et est un administrateur
  // Si l'utilisateur n'est pas connecté ou n'est pas administrateur, rediriger vers la page de connexion
  if (!session) {
    console.error("Aucune session trouvée, redirection vers /login");
    redirect("/login");
  }
  
  if (session?.user?.userType !== "ADMIN") {
    console.error(`Type utilisateur invalide: ${session?.user?.userType}, redirection vers /login`);
    redirect("/login");
  }

  console.log("Accès admin accordé à:", session.user);
  
  return <ClientLayout>{children}</ClientLayout>;
}
