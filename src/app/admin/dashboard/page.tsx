"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Users, FileText, Settings, Book, Trash2, Edit, Plus, Search, FileEdit,
  MoreHorizontal, UserPlus, ChevronLeft, ChevronRight, AlertCircle, Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";

// Composants de tableau de bord
import UsersTable from "@/components/admin/users-table";
import RAGManager from "@/components/admin/rag-manager";
import StatsCards from "@/components/admin/stats-cards";
import MinimalVolunteerForm from "@/components/admin/minimal-volunteer-form"; // Utiliser une implémentation minimale qui évite tout problème de destructuration

// Interrogez les données d'authentification et redirigez si l'utilisateur n'est pas un admin
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshUsersTrigger, setRefreshUsersTrigger] = useState(0);
  const router = useRouter();
  
  // Vérification d'authentification côté client
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // Rediriger vers la page de connexion si non authentifié
      router.push("/login");
    }
  });
  
  // Vérifier si l'utilisateur est un administrateur
  useEffect(() => {
    if (session && session.user?.userType !== "ADMIN") {
      console.error("Utilisateur non administrateur, redirection vers /login");
      router.push("/login");
    }
  }, [session, router]);
  
  // Simuler le chargement des données
  useEffect(() => {
    const timer = setTimeout(() => {
      if (status === 'authenticated') {
        setIsLoading(false);
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [status]);
  
  // Afficher un écran de chargement pendant la vérification d'authentification
  if (status === "loading" || (status === "authenticated" && session?.user?.userType !== "ADMIN")) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="h-16 w-16 text-[#E2001A] mx-auto animate-spin" />
          <h2 className="mt-4 text-xl font-semibold">Chargement du tableau de bord administrateur...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Tableau de bord administrateur</h1>
          <p className="text-gray-500">Gérez les utilisateurs, les diagnostics et les ressources documentaires</p>
        </div>
        <Button 
          onClick={() => setIsAddUserOpen(true)}
          className="bg-[#E2001A] hover:bg-[#C0001A] text-white"
        >
          <UserPlus className="mr-2 h-4 w-4" /> Ajouter un bénévole
        </Button>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 bg-muted">
          <TabsTrigger value="overview">
            <FileText className="w-4 h-4 mr-2" /> Vue d'ensemble
          </TabsTrigger>
          <TabsTrigger value="users">
            <Users className="w-4 h-4 mr-2" /> Gestion des utilisateurs
          </TabsTrigger>
          <TabsTrigger value="rag">
            <Book className="w-4 h-4 mr-2" /> Base de connaissances
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <StatsCards />
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">Utilisateurs</CardTitle>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Rechercher..." className="pl-8 w-64" />
                  </div>
                  <Button 
                    onClick={() => setIsAddUserOpen(true)}
                    className="bg-[#E2001A] hover:bg-[#C0001A] text-white"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Ajouter un bénévole
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <UsersTable refreshTrigger={refreshUsersTrigger} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rag" className="space-y-4">
          <RAGManager />
        </TabsContent>
      </Tabs>
      
      {/* Formulaire minimal pour ajouter un bénévole - n'utilise pas du tout le composant Dialog */}
      <MinimalVolunteerForm 
        open={isAddUserOpen} 
        onClose={() => setIsAddUserOpen(false)} 
        onSave={(newUser) => {
          console.log("Nouveau bénévole créé:", newUser);
          // Fermer le dialogue
          setIsAddUserOpen(false);
          // Déclencher un rafraîchissement de la liste des utilisateurs
          setRefreshUsersTrigger(prev => prev + 1);
        }}
      />
    </div>
  );
}
