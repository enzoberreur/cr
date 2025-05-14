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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { DiagnosticFormData } from "@/lib/schemas/diagnostic";

const BESOINS_SANTE = [
  { id: "consultation_medecin", label: "Consultation médecin" },
  { id: "medicaments", label: "Accès aux médicaments" },
  { id: "soins_dentaires", label: "Soins dentaires" },
  { id: "soins_optiques", label: "Soins optiques" },
  { id: "sante_mentale", label: "Soutien psychologique" },
  { id: "autre", label: "Autre besoin médical" },
] as const;

interface SanteSectionProps {
  form: UseFormReturn<DiagnosticFormData>;
}

export function SanteSection({ form }: SanteSectionProps) {
  const problemesSante = form.watch("sante.problemesSante");

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="sante.couvertureMedicale"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Couverture médicale</FormLabel>
            <Select 
              onValueChange={field.onChange} 
              value={field.value || ""}
              defaultValue=""
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre couverture" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="securite_sociale">Sécurité sociale</SelectItem>
                <SelectItem value="cmu">CMU / CSS</SelectItem>
                <SelectItem value="ame">AME</SelectItem>
                <SelectItem value="aucune">Aucune couverture</SelectItem>
              </SelectContent>
            </Select>
            <FormDescription>
              Sélectionnez votre type de couverture médicale principale
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="sante.mutuelle"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>Mutuelle complémentaire</FormLabel>
              <FormDescription>
                Avez-vous une mutuelle en plus de votre couverture de base ?
              </FormDescription>
            </div>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="sante.problemesSante"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>Problèmes de santé</FormLabel>
              <FormDescription>
                Avez-vous actuellement des problèmes de santé nécessitant un suivi ?
              </FormDescription>
            </div>
          </FormItem>
        )}
      />

      {problemesSante && (
        <FormField
          control={form.control}
          name="sante.suiviMedical"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Suivi médical régulier</FormLabel>
                <FormDescription>
                  Êtes-vous actuellement suivi(e) par un médecin ?
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
      )}

      <FormField
        control={form.control}
        name="sante.besoinsSante"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel>Besoins en matière de santé</FormLabel>
              <FormDescription>
                Sélectionnez vos besoins actuels en matière de santé
              </FormDescription>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {BESOINS_SANTE.map((besoin) => (
                <FormField
                  key={besoin.id}
                  control={form.control}
                  name="sante.besoinsSante"
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
          </FormItem>
        )}
      />
    </div>
  );
}