"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { NavbarVolunteer } from "@/components/volunteer/navbar-volunteer";
import { DiagnosticForm } from "@/components/volunteer/diagnostic-form";
import { Button } from "@/components/ui/button";
import { Loader2, ChevronLeft } from "lucide-react";

export default function EditDiagnostic() {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [diagnostic, setDiagnostic] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Récupérer le diagnostic existant
  useEffect(() => {
    const fetchDiagnostic = async () => {
      if (!id) {
        setError("ID du diagnostic manquant");
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const response = await fetch(`/api/volunteer/diagnostic/${id}`);
        
        if (!response.ok) {
          throw new Error(`Erreur: ${response.status}`);
        }
        
        const data = await response.json();
        setDiagnostic(data);
        setIsLoading(false);
      } catch (err) {
        console.error("Erreur lors du chargement du diagnostic:", err);
        setError("Impossible de charger le diagnostic");
        setIsLoading(false);
      }
    };
    
    if (status !== "loading") {
      fetchDiagnostic();
    }
  }, [id, status]);

  if (status === "loading" || isLoading) {
    return (
      <>
        <NavbarVolunteer />
        <div className="pt-20 p-4 md:p-6 max-w-7xl mx-auto flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-[#E2001A]" />
          <span className="ml-2 text-gray-600">Chargement du diagnostic...</span>
        </div>
      </>
    );
  }

  if (error || !diagnostic) {
    return (
      <>
        <NavbarVolunteer />
        <div className="pt-20 p-4 md:p-6 max-w-7xl mx-auto">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-center">
            <h2 className="text-lg font-medium text-red-800">Erreur</h2>
            <p className="text-red-600 mt-1">
              {error || "Diagnostic non trouvé ou accès non autorisé"}
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => router.push("/volunteer/dashboard")}
            >
              <ChevronLeft className="h-4 w-4 mr-1" /> Retour au tableau de bord
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <NavbarVolunteer />
      <div className="pt-20 p-4 md:p-6 max-w-7xl mx-auto">
        <div className="mb-6">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => router.back()}
            className="mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Retour
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Modifier le diagnostic
          </h1>
          <p className="text-gray-500">
            Modifiez ou complétez le diagnostic ci-dessous.
          </p>
        </div>
        
        <DiagnosticForm 
          diagnosticId={id} 
          beneficiaryId={diagnostic.beneficiaryId}
          isEdit={true}
        />
      </div>
    </>
  );
}
