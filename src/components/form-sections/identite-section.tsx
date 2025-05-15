"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { DiagnosticFormData } from "@/lib/schemas/diagnostic";

// Type pour le bénéficiaire
interface Beneficiary {
  id: string;
  firstName?: string;
  lastName?: string;
  [key: string]: any;
}

interface IdentiteSectionProps {
  form?: UseFormReturn<DiagnosticFormData>;
  defaultValues?: any;
  onValuesChange?: (values: any) => void;
  beneficiary?: Beneficiary | null;
}

export function IdentiteSection({ form, defaultValues, onValuesChange, beneficiary }: IdentiteSectionProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="identite.age"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Âge</FormLabel>
            <FormControl>
              <Input
                type="number"
                {...field}
                value={field.value || ''} // Important: utiliser une chaîne vide si null/undefined
                onChange={(e) => {
                  const value = e.target.value === '' ? null : Number(e.target.value);
                  field.onChange(value);
                }}
                placeholder="Votre âge"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="identite.genre"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Genre</FormLabel>
            <Select 
              onValueChange={field.onChange} 
              value={field.value || ""} // Garantit une valeur définie (chaîne vide si null/undefined)
              defaultValue=""
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre genre" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="homme">Homme</SelectItem>
                <SelectItem value="femme">Femme</SelectItem>
                <SelectItem value="autre">Autre</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="identite.nationalite"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nationalité</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Votre nationalité" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="identite.ville"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Ville</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Votre ville" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="identite.codePostal"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Code postal</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Code postal" maxLength={5} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}