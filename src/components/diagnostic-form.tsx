"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DiagnosticFormData, diagnosticFormSchema } from "@/lib/schemas/diagnostic";
import { useState } from "react";
import { IdentiteSection } from "./form-sections/identite-section";
import { SituationFamilialeSection } from "./form-sections/situation-familiale-section";
import { LogementSection } from "./form-sections/logement-section";
import { FinancesSection } from "./form-sections/finances-section";
import { SanteSection } from "./form-sections/sante-section";
import { DroitsSociauxSection } from "./form-sections/droits-sociaux-section";
import { BesoinsSection } from "./form-sections/besoins-section";

export function DiagnosticForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sections du formulaire avec style Notion
  const sections = [
    { name: "Identité", icon: "👤" },
    { name: "Situation familiale", icon: "👪" },
    { name: "Logement", icon: "🏠" },
    { name: "Finances", icon: "💰" },
    { name: "Santé", icon: "🩺" },
    { name: "Droits sociaux", icon: "📑" },
    { name: "Besoins", icon: "🔍" },
  ];

  const form = useForm<DiagnosticFormData>({
    resolver: zodResolver(diagnosticFormSchema),
    defaultValues: {
      identite: {
        age: null as unknown as number, // Initialiser comme null mais typé comme number
        genre: "" as any, // Utiliser any pour éviter les problèmes d'enum
        nationalite: "",
        ville: "",
        codePostal: "",
      },
      situationFamiliale: {
        statut: "" as any, // Utiliser any pour éviter les problèmes d'enum
        enfants: 0,
        personnesACharge: 0,
        soutienFamilial: false,
      },
      logement: {
        situation: "" as any, // Utiliser any pour éviter les problèmes d'enum
        typeLogement: "" as any, // Utiliser any pour éviter les problèmes d'enum
        montantLoyer: 0,
        difficultesPaiement: false,
      },
      finances: {
        revenuMensuel: 0,
        aidesSociales: [],
        charges: {
          loyer: 0,
          energie: 0,
          alimentation: 0,
          transport: 0,
          autres: 0,
        },
        dettes: false,
        montantDettes: 0,
      },
      sante: {
        couvertureMedicale: "" as any, // Utiliser any pour éviter les problèmes d'enum
        mutuelle: false,
        problemesSante: false,
        suiviMedical: false,
        besoinsSante: [],
      },
      droitsSociaux: {
        droitsConnus: [],
        difficultesAcces: [],
        besoinAccompagnement: false,
      },
      besoins: {
        prioritaires: [],
        commentaires: "",
      },
    },
  });

  const steps = [
    { title: "Identité", component: IdentiteSection },
    { title: "Situation familiale", component: SituationFamilialeSection },
    { title: "Logement", component: LogementSection },
    { title: "Finances", component: FinancesSection },
    { title: "Santé", component: SanteSection },
    { title: "Droits sociaux", component: DroitsSociauxSection },
    { title: "Besoins", component: BesoinsSection },
  ];

  const CurrentStepComponent = steps[currentStep].component;

  async function onSubmit(formData: DiagnosticFormData) {
    setIsSubmitting(true);
    try {
      // Vérifier les valeurs vides pour les champs obligatoires avant soumission
      const data = {
        ...formData,
        identite: {
          ...formData.identite,
          // Convertir les champs qui peuvent être vides ou null
          age: formData.identite.age || 0, // 0 sera refusé par la validation min(16)
          genre: formData.identite.genre || "", // chaîne vide sera détectée
        },
        situationFamiliale: {
          ...formData.situationFamiliale,
          statut: formData.situationFamiliale.statut || "",
        },
        logement: {
          ...formData.logement,
          situation: formData.logement.situation || "",
        },
        sante: {
          ...formData.sante,
          couvertureMedicale: formData.sante.couvertureMedicale || "",
        }
      };

      // Validation finale avant soumission
      const validationResult = diagnosticFormSchema.safeParse(data);
      if (!validationResult.success) {
        console.error("Erreur de validation:", validationResult.error);
        alert("Veuillez remplir tous les champs obligatoires avant de soumettre le formulaire.");
        setIsSubmitting(false);
        return;
      }
      
      const response = await fetch("/api/diagnostic/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la soumission du diagnostic");
      }

      // Sauvegarder temporairement dans le localStorage
      localStorage.setItem("lastDiagnostic", JSON.stringify(data));
      
      // Rediriger vers la page de résultats
      window.location.href = "/diagnostic-anonyme/resultats";
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue lors du traitement du formulaire.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>{steps[currentStep].title}</CardTitle>
            <CardDescription>
              Étape {currentStep + 1} sur {steps.length}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <CurrentStepComponent form={form} />
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
            >
              Précédent
            </Button>

            {currentStep < steps.length - 1 ? (
              <Button
                type="button"
                onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
              >
                Suivant
              </Button>
            ) : (
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="bg-primary hover:bg-primary/90 text-white"
              >
                {isSubmitting ? "Traitement..." : "Terminer le diagnostic"}
              </Button>
            )}
          </CardFooter>
        </Card>
      </form>

      <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
        <p className="flex items-center">
          <span className="mr-2">⚠️</span>
          Ce diagnostic n'est pas enregistré. Il sera supprimé si vous fermez cette page.
        </p>
      </div>
    </Form>
  );
}