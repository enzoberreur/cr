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
import { UseFormReturn } from "react-hook-form";
import { DiagnosticFormData } from "@/lib/schemas/diagnostic";

const AIDES_SOCIALES = [
  { id: "rsa", label: "RSA" },
  { id: "apl", label: "APL" },
  { id: "aah", label: "AAH" },
  { id: "prime_activite", label: "Prime d'activité" },
  { id: "chomage", label: "Allocation chômage" },
  { id: "css", label: "Complémentaire Santé Solidaire" },
] as const;

interface FinancesSectionProps {
  form: UseFormReturn<DiagnosticFormData>;
}

export function FinancesSection({ form }: FinancesSectionProps) {
  const revenuMensuel = form.watch("finances.revenuMensuel");
  const dettes = form.watch("finances.dettes");

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="finances.revenuMensuel"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Revenu mensuel total</FormLabel>
            <FormControl>
              <Input
                type="number"
                min={0}
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
                placeholder="0"
              />
            </FormControl>
            <FormDescription>
              Incluez toutes vos sources de revenus (salaire, aides, pensions...)
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="finances.aidesSociales"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel>Aides sociales perçues</FormLabel>
              <FormDescription>
                Sélectionnez toutes les aides que vous recevez actuellement
              </FormDescription>
            </div>
            {AIDES_SOCIALES.map((aide) => (
              <FormField
                key={aide.id}
                control={form.control}
                name="finances.aidesSociales"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={aide.id}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(aide.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, aide.id])
                              : field.onChange(
                                  field.value?.filter((value) => value !== aide.id)
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {aide.label}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="space-y-4">
        <FormLabel className="text-lg">Charges mensuelles</FormLabel>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="finances.charges.loyer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Loyer/Crédit</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    placeholder="0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="finances.charges.energie"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Énergie</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    placeholder="0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="finances.charges.alimentation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alimentation</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    placeholder="0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="finances.charges.transport"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transport</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    placeholder="0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="finances.charges.autres"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Autres charges</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    placeholder="0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <FormField
        control={form.control}
        name="finances.dettes"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>Dettes</FormLabel>
              <FormDescription>
                Avez-vous des dettes ou des crédits en cours ?
              </FormDescription>
            </div>
          </FormItem>
        )}
      />

      {dettes && (
        <FormField
          control={form.control}
          name="finances.montantDettes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Montant total des dettes</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  placeholder="0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {revenuMensuel === 0 && (
        <div className="p-4 bg-yellow-50 rounded-lg">
          <p className="text-sm text-yellow-800">
            Si vous n&apos;avez aucun revenu, nous vous recommandons de contacter rapidement 
            une assistante sociale pour évaluer vos droits aux aides sociales.
          </p>
        </div>
      )}
    </div>
  );
}