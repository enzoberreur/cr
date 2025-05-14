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

interface SituationFamilialeSectionProps {
  form: UseFormReturn<DiagnosticFormData>;
}

export function SituationFamilialeSection({ form }: SituationFamilialeSectionProps) {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="situationFamiliale.statut"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Situation familiale</FormLabel>
            <Select 
              onValueChange={field.onChange} 
              value={field.value || ""} // Utiliser une chaîne vide au lieu de undefined
              defaultValue=""
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre situation" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="celibataire">Célibataire</SelectItem>
                <SelectItem value="marie">Marié(e)</SelectItem>
                <SelectItem value="pacse">Pacsé(e)</SelectItem>
                <SelectItem value="divorce">Divorcé(e)</SelectItem>
                <SelectItem value="veuf">Veuf/Veuve</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="situationFamiliale.enfants"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre d'enfants</FormLabel>
            <FormControl>
              <Input
                type="number"
                min={0}
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            </FormControl>
            <FormDescription>
              Indiquez le nombre d'enfants à votre charge
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="situationFamiliale.personnesACharge"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Autres personnes à charge</FormLabel>
            <FormControl>
              <Input
                type="number"
                min={0}
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            </FormControl>
            <FormDescription>
              Personnes dépendantes dont vous avez la charge (hors enfants)
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="situationFamiliale.soutienFamilial"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>
                Soutien familial
              </FormLabel>
              <FormDescription>
                Bénéficiez-vous d'un soutien de votre famille (financier, logement, garde d'enfants...)?
              </FormDescription>
            </div>
          </FormItem>
        )}
      />
    </div>
  );
}