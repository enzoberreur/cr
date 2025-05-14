"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { DiagnosticFormData } from "@/lib/schemas/diagnostic";

const DROITS_SOCIAUX = [
  { id: "caf", label: "CAF (allocations familiales)" },
  { id: "cpam", label: "CPAM (sécurité sociale)" },
  { id: "pole_emploi", label: "Pôle Emploi" },
  { id: "retraite", label: "Caisse de retraite" },
  { id: "mdph", label: "MDPH" },
  { id: "ccas", label: "CCAS" },
] as const;

const DIFFICULTES_ACCES = [
  { id: "numerique", label: "Difficultés avec le numérique" },
  { id: "langue", label: "Barrière de la langue" },
  { id: "comprehension", label: "Difficultés de compréhension" },
  { id: "mobilite", label: "Problèmes de mobilité" },
  { id: "documents", label: "Documents manquants" },
  { id: "delais", label: "Délais trop longs" },
] as const;

interface DroitsSociauxSectionProps {
  form: UseFormReturn<DiagnosticFormData>;
}

export function DroitsSociauxSection({ form }: DroitsSociauxSectionProps) {
  return (
    <div className="space-y-8">
      <FormField
        control={form.control}
        name="droitsSociaux.droitsConnus"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel>Droits et services connus</FormLabel>
              <FormDescription>
                Cochez les organismes avec lesquels vous avez déjà été en contact
              </FormDescription>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {DROITS_SOCIAUX.map((droit) => (
                <FormField
                  key={droit.id}
                  control={form.control}
                  name="droitsSociaux.droitsConnus"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={droit.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(droit.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, droit.id])
                                : field.onChange(
                                    field.value?.filter((value) => value !== droit.id)
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {droit.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="droitsSociaux.difficultesAcces"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel>Difficultés rencontrées</FormLabel>
              <FormDescription>
                Quelles difficultés rencontrez-vous dans l'accès à vos droits ?
              </FormDescription>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {DIFFICULTES_ACCES.map((difficulte) => (
                <FormField
                  key={difficulte.id}
                  control={form.control}
                  name="droitsSociaux.difficultesAcces"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={difficulte.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(difficulte.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, difficulte.id])
                                : field.onChange(
                                    field.value?.filter((value) => value !== difficulte.id)
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {difficulte.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="droitsSociaux.besoinAccompagnement"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>Besoin d'accompagnement</FormLabel>
              <FormDescription>
                Souhaitez-vous être accompagné(e) dans vos démarches administratives ?
              </FormDescription>
            </div>
          </FormItem>
        )}
      />
    </div>
  );
}