"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { DiagnosticFormData } from "@/lib/schemas/diagnostic";
import { useEffect } from "react";

interface LogementSectionProps {
  form: UseFormReturn<DiagnosticFormData>;
}

export function LogementSection({ form }: LogementSectionProps) {
  const situation = form.watch("logement.situation");

  // Réinitialiser les champs conditionnels lorsque la situation change
  useEffect(() => {
    if (situation === "sans_domicile" || situation === "hebergement_urgence") {
      form.setValue("logement.typeLogement", undefined);
      form.setValue("logement.montantLoyer", 0);
      form.setValue("logement.difficultesPaiement", false);
    }
  }, [situation, form]);

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="logement.situation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Situation de logement</FormLabel>
            <Select 
              onValueChange={field.onChange} 
              value={field.value || ""}
              defaultValue=""
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre situation" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="proprietaire">Propriétaire</SelectItem>
                <SelectItem value="locataire">Locataire</SelectItem>
                <SelectItem value="hebergement_famille">
                  Hébergé(e) par la famille/amis
                </SelectItem>
                <SelectItem value="hebergement_urgence">
                  Hébergement d'urgence
                </SelectItem>
                <SelectItem value="sans_domicile">Sans domicile</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Champs conditionnels basés sur la situation */}
      {(situation === "proprietaire" || situation === "locataire") && (
        <>
          <FormField
            control={form.control}
            name="logement.typeLogement"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type de logement</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  value={field.value || ""}
                  defaultValue=""
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez le type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="appartement">Appartement</SelectItem>
                    <SelectItem value="maison">Maison</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="logement.montantLoyer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {situation === "proprietaire"
                    ? "Mensualité de crédit"
                    : "Montant du loyer"}
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="logement.difficultesPaiement"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Difficultés de paiement</FormLabel>
                  <FormDescription>
                    Avez-vous des difficultés à payer votre {situation === "proprietaire" ? "crédit" : "loyer"} ?
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
        </>
      )}

      {situation === "sans_domicile" && (
        <div className="p-4 bg-red-50 rounded-lg">
          <p className="text-sm text-red-800">
            Si vous êtes sans domicile, nous vous recommandons de contacter immédiatement le 115 
            (numéro gratuit) pour obtenir une aide d'urgence.
          </p>
        </div>
      )}

      {situation === "hebergement_urgence" && (
        <div className="p-4 bg-yellow-50 rounded-lg">
          <p className="text-sm text-yellow-800">
            Si vous êtes en hébergement d'urgence, un travailleur social peut vous 
            accompagner dans vos démarches pour trouver une solution plus stable.
          </p>
        </div>
      )}
    </div>
  );
}