"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";

// Sections du formulaire de diagnostic
import { IdentiteSection } from "@/components/form-sections/identite-section";
import { SituationFamilialeSection } from "@/components/form-sections/situation-familiale-section";
import { LogementSection } from "@/components/form-sections/logement-section";
import { FinancesSection } from "@/components/form-sections/finances-section";
import { SanteSection } from "@/components/form-sections/sante-section";
import { DroitsSociauxSection } from "@/components/form-sections/droits-sociaux-section";
import { BesoinsSection } from "@/components/form-sections/besoins-section";

// Schéma de validation pour le formulaire (simplifié)
const diagnosticFormSchema = z.object({
  beneficiaryId: z.string().min(1, "Bénéficiaire requis"),
  status: z.enum(["PENDING", "IN_PROGRESS", "COMPLETED"], {
    required_error: "Statut requis",
  }),
  formResponses: z.record(z.any()), // Un objet pour stocker toutes les réponses
  results: z.record(z.any()).optional(),
  recommendations: z.record(z.string()).optional(),
  nextSteps: z.string().optional(),
});

type DiagnosticFormValues = z.infer<typeof diagnosticFormSchema>;

interface DiagnosticFormProps {
  diagnosticId?: string;
  beneficiaryId?: string;
  isEdit?: boolean;
}

// Interface pour le bénéficiaire
interface Beneficiary {
  id: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  familySituation?: string;
  housing?: string;
  professionalSituation?: string;
  monthlyIncome?: number;
}

export function DiagnosticForm({ diagnosticId, beneficiaryId, isEdit = false }: DiagnosticFormProps) {
  const router = useRouter();
  useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("identite");
  const [beneficiary, setBeneficiary] = useState<Beneficiary | null>(null);
  
  // Définir les valeurs par défaut du formulaire
  const defaultValues: DiagnosticFormValues = {
    beneficiaryId: beneficiaryId || "",
    status: "IN_PROGRESS",
    formResponses: {},
    results: {},
    recommendations: {},
    nextSteps: "",
  };
  
  // Initialiser le formulaire
  const form = useForm<DiagnosticFormValues>({
    resolver: zodResolver(diagnosticFormSchema),
    defaultValues,
  });

  // Charger les détails du bénéficiaire et du diagnostic si en mode édition
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      
      try {
        // Charger les informations du bénéficiaire
        if (beneficiaryId) {
          const benefResponse = await fetch(`/api/volunteer/beneficiary/${beneficiaryId}`);
          
          if (benefResponse.ok) {
            const benefData = await benefResponse.json();
            setBeneficiary(benefData);
          }
        }
        
        // Si en mode édition, charger les données du diagnostic existant
        if (isEdit && diagnosticId) {
          const diagResponse = await fetch(`/api/volunteer/diagnostic/${diagnosticId}`);
          
          if (diagResponse.ok) {
            const diagData = await diagResponse.json();
            
            // Remplir le formulaire avec les données existantes
            form.reset({
              beneficiaryId: diagData.beneficiaryId,
              status: diagData.status,
              formResponses: diagData.formResponses || {},
              results: diagData.results || {},
              recommendations: diagData.recommendations || {},
              nextSteps: diagData.nextSteps || "",
            });
          }
        }
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, [beneficiaryId, diagnosticId, isEdit, form]);
  
  // Gérer la soumission du formulaire
  const onSubmit = async (data: DiagnosticFormValues) => {
    setIsLoading(true);
    
    try {
      const apiUrl = isEdit && diagnosticId 
        ? `/api/volunteer/diagnostic/${diagnosticId}` 
        : "/api/volunteer/diagnostic";
      
      const response = await fetch(apiUrl, {
        method: isEdit ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${await response.text()}`);
      }
      
      const result = await response.json();
      
      // Rediriger vers la page du diagnostic créé ou mis à jour
      router.push(`/volunteer/diagnostic/${result.id}`);
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du diagnostic:", error);
      alert("Une erreur est survenue lors de l'enregistrement du diagnostic");
    } finally {
      setIsLoading(false);
    }
  };

  // Navigation entre les différentes sections du formulaire
  const nextTab = () => {
    const tabs = ["identite", "situation", "logement", "finances", "sante", "droits", "besoins", "conclusion"];
    const currentIndex = tabs.indexOf(activeTab);
    
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };
  
  const previousTab = () => {
    const tabs = ["identite", "situation", "logement", "finances", "sante", "droits", "besoins", "conclusion"];
    const currentIndex = tabs.indexOf(activeTab);
    
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };
  
  // Mettre à jour les réponses du formulaire
  const updateFormResponses = (section: string, responses: Record<string, unknown>) => {
    const currentResponses = form.getValues("formResponses") || {};
    
    form.setValue("formResponses", {
      ...currentResponses,
      [section]: responses,
    });
  };
  
  // Fonction pour calculer automatiquement les résultats et recommandations
  const calculateResults = () => {
    const formResponses = form.getValues("formResponses");
    
    // Exemple de calcul simpliste des scores par catégorie
    // Dans une implémentation réelle, cela serait beaucoup plus complexe
    const results: Record<string, number> = {};
    const recommendations: Record<string, string> = {};
    
    // Logement
    if (formResponses.logement) {
      const logementScore = formResponses.logement.hasHousing ? 7 : 2;
      results.Logement = logementScore;
      
      recommendations.Logement = formResponses.logement.hasHousing 
        ? "La situation de logement est stable." 
        : "Orienter vers des services d'aide au logement et l'hébergement d'urgence.";
    }
    
    // Finances
    if (formResponses.finances) {
      const incomeLevel = parseFloat(formResponses.finances.monthlyIncome || "0");
      let financesScore = 5;
      
      if (incomeLevel < 500) financesScore = 2;
      else if (incomeLevel < 1000) financesScore = 4;
      else if (incomeLevel < 1500) financesScore = 6;
      else financesScore = 8;
      
      results.Finances = financesScore;
      
      if (financesScore <= 4) {
        recommendations.Finances = "Orientation vers des aides financières et alimentaires.";
      } else if (financesScore <= 6) {
        recommendations.Finances = "Vérifier l'éligibilité aux aides sociales complémentaires.";
      } else {
        recommendations.Finances = "La situation financière est stable.";
      }
    }
    
    // Santé
    if (formResponses.sante) {
      const santeScore = formResponses.sante.hasHealthIssues ? 4 : 8;
      results.Santé = santeScore;
      
      recommendations.Santé = formResponses.sante.hasHealthIssues 
        ? "Orienter vers des services médicaux appropriés et vérifier la couverture santé." 
        : "Aucun problème de santé majeur signalé.";
    }
    
    // Droits sociaux
    if (formResponses.droits) {
      const socialRightsScore = formResponses.droits.hasSocialSecurityNumber ? 8 : 3;
      results.DroitsSociaux = socialRightsScore;
      
      recommendations.DroitsSociaux = formResponses.droits.hasSocialSecurityNumber 
        ? "Les droits sociaux de base sont en place." 
        : "Accompagnement urgent pour l'ouverture des droits sociaux de base.";
    }
    
    // Mettre à jour le formulaire avec les résultats calculés
    form.setValue("results", results);
    form.setValue("recommendations", recommendations);
    
    // Générer les prochaines étapes
    const nextSteps = Object.values(recommendations).join("\n\n");
    form.setValue("nextSteps", nextSteps);
  };

  if (isLoading && !form.formState.isSubmitting) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-[#E2001A]" />
        <span className="ml-2 text-gray-600">Chargement du formulaire...</span>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* En-tête avec informations sur le bénéficiaire */}
        {beneficiary && (
          <Card className="bg-gray-50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="font-medium text-lg">
                  {beneficiary.firstName} {beneficiary.lastName}
                </div>
                <div className="text-sm text-gray-500">
                  {beneficiary.birthDate ? `Né(e) le ${new Date(beneficiary.birthDate).toLocaleDateString('fr-FR')}` : ''}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Onglets du formulaire */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 w-full">
            <TabsTrigger value="identite">Identité</TabsTrigger>
            <TabsTrigger value="situation">Situation familiale</TabsTrigger>
            <TabsTrigger value="logement">Logement</TabsTrigger>
            <TabsTrigger value="finances">Finances</TabsTrigger>
            <TabsTrigger value="sante">Santé</TabsTrigger>
            <TabsTrigger value="droits">Droits sociaux</TabsTrigger>
            <TabsTrigger value="besoins">Besoins</TabsTrigger>
            <TabsTrigger value="conclusion">Conclusion</TabsTrigger>
          </TabsList>
          
          {/* Section Identité */}
          <TabsContent value="identite" className="space-y-4 mt-4">
            <IdentiteSection 
              defaultValues={form.getValues().formResponses?.identite} 
              onValuesChange={(values) => updateFormResponses("identite", values)}
              beneficiary={beneficiary}
            />
            <div className="flex justify-end">
              <Button type="button" onClick={nextTab}>Suivant</Button>
            </div>
          </TabsContent>
          
          {/* Section Situation familiale */}
          <TabsContent value="situation" className="space-y-4 mt-4">
            <SituationFamilialeSection 
              defaultValues={form.getValues().formResponses?.situation} 
              onValuesChange={(values) => updateFormResponses("situation", values)}
              beneficiary={beneficiary}
            />
            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={previousTab}>Précédent</Button>
              <Button type="button" onClick={nextTab}>Suivant</Button>
            </div>
          </TabsContent>
          
          {/* Section Logement */}
          <TabsContent value="logement" className="space-y-4 mt-4">
            <LogementSection 
              defaultValues={form.getValues().formResponses?.logement} 
              onValuesChange={(values) => updateFormResponses("logement", values)}
              beneficiary={beneficiary}
            />
            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={previousTab}>Précédent</Button>
              <Button type="button" onClick={nextTab}>Suivant</Button>
            </div>
          </TabsContent>
          
          {/* Section Finances */}
          <TabsContent value="finances" className="space-y-4 mt-4">
            <FinancesSection 
              defaultValues={form.getValues().formResponses?.finances} 
              onValuesChange={(values) => updateFormResponses("finances", values)}
              beneficiary={beneficiary}
            />
            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={previousTab}>Précédent</Button>
              <Button type="button" onClick={nextTab}>Suivant</Button>
            </div>
          </TabsContent>
          
          {/* Section Santé */}
          <TabsContent value="sante" className="space-y-4 mt-4">
            <SanteSection 
              defaultValues={form.getValues().formResponses?.sante} 
              onValuesChange={(values) => updateFormResponses("sante", values)}
            />
            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={previousTab}>Précédent</Button>
              <Button type="button" onClick={nextTab}>Suivant</Button>
            </div>
          </TabsContent>
          
          {/* Section Droits sociaux */}
          <TabsContent value="droits" className="space-y-4 mt-4">
            <DroitsSociauxSection 
              defaultValues={form.getValues().formResponses?.droits} 
              onValuesChange={(values) => updateFormResponses("droits", values)}
            />
            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={previousTab}>Précédent</Button>
              <Button type="button" onClick={nextTab}>Suivant</Button>
            </div>
          </TabsContent>
          
          {/* Section Besoins */}
          <TabsContent value="besoins" className="space-y-4 mt-4">
            <BesoinsSection 
              defaultValues={form.getValues().formResponses?.besoins} 
              onValuesChange={(values) => updateFormResponses("besoins", values)}
            />
            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={previousTab}>Précédent</Button>
              <Button type="button" onClick={nextTab}>Suivant</Button>
            </div>
          </TabsContent>
          
          {/* Section Conclusion et récapitulatif */}
          <TabsContent value="conclusion" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Conclusion du diagnostic</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Bouton pour calculer les résultats */}
                <div className="flex justify-center mb-6">
                  <Button 
                    type="button" 
                    className="bg-[#E2001A] hover:bg-[#c0001a]"
                    onClick={calculateResults}
                  >
                    Calculer les résultats automatiquement
                  </Button>
                </div>
                
                {/* Status du diagnostic */}
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Statut du diagnostic</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionner un statut" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="PENDING">En attente</SelectItem>
                          <SelectItem value="IN_PROGRESS">En cours</SelectItem>
                          <SelectItem value="COMPLETED">Terminé</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Champ pour les prochaines étapes */}
                <FormField
                  control={form.control}
                  name="nextSteps"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prochaines étapes recommandées</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Entrez les prochaines étapes recommandées..." 
                          className="h-32" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            
            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={previousTab}>Précédent</Button>
              <Button 
                type="submit" 
                className="bg-[#E2001A] hover:bg-[#c0001a]"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enregistrement...
                  </>
                ) : isEdit ? "Mettre à jour" : "Enregistrer"}
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </form>
    </Form>
  );
}
