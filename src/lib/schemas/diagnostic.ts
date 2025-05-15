import * as z from "zod";

export const diagnosticFormSchema = z.object({
  // 1. Identité & contexte général
  identite: z.object({
    age: z.union([z.null(), z.number().min(16).max(120)]),
    genre: z.union([z.literal(''), z.enum(["homme", "femme", "autre"])]),
    nationalite: z.string(),
    ville: z.string(),
    codePostal: z.string(),
  }),

  // 2. Situation familiale
  situationFamiliale: z.object({
    statut: z.union([z.literal(''), z.enum(["celibataire", "marie", "pacse", "divorce", "veuf"])]),
    enfants: z.number().min(0),
    personnesACharge: z.number().min(0),
    soutienFamilial: z.boolean(),
  }),

  // 3. Logement
  logement: z.object({
    situation: z.union([
      z.literal(''),
      z.enum([
        "proprietaire",
        "locataire",
        "hebergement_famille",
        "hebergement_urgence",
        "sans_domicile",
      ])
    ]),
    typeLogement: z.union([z.literal(''), z.enum(["appartement", "maison", "autre"])]).optional(),
    montantLoyer: z.number().min(0).optional(),
    difficultesPaiement: z.boolean().optional(),
  }),

  // 4. Revenus & charges
  finances: z.object({
    revenuMensuel: z.number().min(0),
    aidesSociales: z.array(z.string()),
    charges: z.object({
      loyer: z.number().min(0),
      energie: z.number().min(0),
      alimentation: z.number().min(0),
      transport: z.number().min(0),
      autres: z.number().min(0),
    }),
    dettes: z.boolean(),
    montantDettes: z.number().min(0).optional(),
  }),

  // 5. Santé et accès aux soins
  sante: z.object({
    couvertureMedicale: z.union([
      z.literal(''),
      z.enum(["securite_sociale", "cmu", "ame", "aucune"])
    ]),
    mutuelle: z.boolean(),
    problemesSante: z.boolean(),
    suiviMedical: z.boolean(),
    besoinsSante: z.array(z.string()),
  }),

  // 6. Accès aux droits sociaux
  droitsSociaux: z.object({
    droitsConnus: z.array(z.string()),
    difficultesAcces: z.array(z.string()),
    besoinAccompagnement: z.boolean(),
  }),

  // 7. Besoins exprimés
  besoins: z.object({
    prioritaires: z.array(z.string()),
    commentaires: z.string().optional(),
  }),
});

export type DiagnosticFormData = z.infer<typeof diagnosticFormSchema>;