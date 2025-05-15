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
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { DiagnosticFormData } from "@/lib/schemas/diagnostic";

const BESOINS_PRIORITAIRES = [
  { id: "alimentaire", label: "Aide alimentaire" },
  { id: "logement", label: "Aide au logement" },
  { id: "sante", label: "Accès aux soins" },
  { id: "demarches", label: "Aide aux démarches administratives" },
  { id: "emploi", label: "Recherche d'emploi" },
  { id: "formation", label: "Formation" },
  { id: "mobilite", label: "Aide à la mobilité" },
  { id: "garde_enfants", label: "Garde d'enfants" },
  { id: "equipement", label: "Équipement du logement" },
  { id: "vetements", label: "Vêtements" },
  { id: "soutien_psy", label: "Soutien psychologique" },
  { id: "lien_social", label: "Lien social" },
] as const;

interface BesoinsSectionProps {
  form: UseFormReturn<DiagnosticFormData>;
}

export function BesoinsSection({ form }: BesoinsSectionProps) {
  return (
    <div className="space-y-8">
      <FormField
        control={form.control}
        name="besoins.prioritaires"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel>Besoins prioritaires</FormLabel>
              <FormDescription>
                Sélectionnez les domaines dans lesquels vous avez besoin d&apos;aide en priorité
              </FormDescription>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {BESOINS_PRIORITAIRES.map((besoin) => (
                <FormField
                  key={besoin.id}
                  control={form.control}
                  name="besoins.prioritaires"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={besoin.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(besoin.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, besoin.id])
                                : field.onChange(
                                    field.value?.filter((value) => value !== besoin.id)
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {besoin.label}
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
        name="besoins.commentaires"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Autres besoins ou commentaires</FormLabel>
            <FormDescription>
              Si vous avez d&apos;autres besoins ou souhaitez ajouter des précisions, écrivez-les ici
            </FormDescription>
            <FormControl>
              <Textarea
                {...field}
                placeholder="Exprimez vos besoins..."
                className="min-h-[100px]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          Vos réponses nous aideront à mieux comprendre vos besoins et à vous proposer 
          des solutions adaptées. N&apos;hésitez pas à être précis dans vos commentaires.
        </p>
      </div>
    </div>
  );
}