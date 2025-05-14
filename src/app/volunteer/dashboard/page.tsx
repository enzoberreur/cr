"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Camera, Plus, Search } from "lucide-react";

// Importation des composants personnalisés
import { NavbarVolunteer } from "@/components/volunteer/navbar-volunteer";
import { BeneficiariesTable } from "@/components/volunteer/beneficiaries-table";
import { GeminiAiHelper } from "@/components/volunteer/gemini-ai-helper";
import { BeneficiaryFormDialog } from "@/components/volunteer/beneficiary-form-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function VolunteerDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [isBeneficiaryFormOpen, setIsBeneficiaryFormOpen] = useState(false);
  const [isFaceSearchOpen, setIsFaceSearchOpen] = useState(false);
  const router = useRouter();
  
  // Vérification d'authentification côté client
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // Redirection vers la page de connexion si non authentifié
      router.push("/login");
    }
  });
  
  // Vérifier que l'utilisateur est bien un bénévole
  useEffect(() => {
    if (session && session.user?.userType !== "VOLUNTEER") {
      console.error("Utilisateur non bénévole, redirection vers /login");
      router.push("/login");
    }
  }, [session, router]);
  
  // Charger les données
  useEffect(() => {
    const timer = setTimeout(() => {
      if (status === 'authenticated') {
        setIsLoading(false);
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [status]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Loader2 className="h-12 w-12 animate-spin text-[#E2001A]" />
          <p className="mt-4 text-lg font-medium text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarVolunteer />
      {/* Spacer élément pour compenser la hauteur de la navbar fixe */}
      <div className="h-[64px] w-full"></div>
      <div className="flex-1 bg-gray-50 p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
        {/* En-tête avec titre et actions principales */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-2 md:mt-0">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Mes bénéficiaires</h1>
            <p className="text-gray-500">
              Gérez vos bénéficiaires et leurs diagnostics
            </p>
          </div>
          <div className="flex gap-2 flex-wrap justify-end">
            <Button 
              variant="outline" 
              className="gap-1" 
              onClick={() => setIsFaceSearchOpen(true)}
            >
              <Camera className="h-4 w-4" />
              <span>Rechercher par photo</span>
            </Button>
            <Button 
              className="bg-[#E2001A] hover:bg-[#c0001a] gap-1" 
              onClick={() => setIsBeneficiaryFormOpen(true)}
            >
              <Plus className="h-4 w-4" />
              <span>Ajouter un bénéficiaire</span>
            </Button>
          </div>
        </div>
        
        {/* Zone de recherche et filtres */}
        <div className="flex flex-col md:flex-row gap-2 items-end">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Rechercher par nom, téléphone ou email..."
              className="pl-10 w-full"
            />
          </div>
        </div>
        
        {/* Tableau des bénéficiaires */}
        <Card>
          <CardContent className="p-0">
            <BeneficiariesTable />
          </CardContent>
        </Card>
      </div>
      
      {/* L'assistant Gemini IA est intégré en tant que composant flottant */}
      <GeminiAiHelper />
      
      {/* Dialogue d'ajout de bénéficiaire */}
      <BeneficiaryFormDialog 
        open={isBeneficiaryFormOpen}
        onOpenChange={setIsBeneficiaryFormOpen}
        onSuccess={() => {
          // Rafraîchir la liste des bénéficiaires
          window.location.reload();
        }}
      />

      {/* Dialogue de recherche par reconnaissance faciale */}
      <Dialog open={isFaceSearchOpen} onOpenChange={setIsFaceSearchOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Recherche par reconnaissance faciale</DialogTitle>
            <DialogDescription>
              Utilisez votre webcam pour rechercher un bénéficiaire par son visage.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-md">
            <div className="bg-gray-100 w-full aspect-video rounded-md flex items-center justify-center">
              {/* Ici sera affiché le flux de la webcam */}
              <Camera className="h-16 w-16 text-gray-400" />
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Assurez-vous que le visage de la personne est bien visible et éclairé.
            </p>
            <Button 
              className="mt-4 bg-[#E2001A] hover:bg-[#c0001a]"
            >
              Prendre une photo
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Le bouton flottant est maintenant géré directement dans le composant GeminiAiHelper */}
    </div>
  );
}
