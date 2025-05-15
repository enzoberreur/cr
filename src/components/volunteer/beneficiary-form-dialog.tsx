"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Camera, Upload } from "lucide-react";

// Définir le type pour le formulaire de bénéficiaire
interface BeneficiaryFormData {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  familySituation: string;
  housing: string;
  professionalSituation: string;
  monthlyIncome: string;
  photoUrl: string | null;
  uploadedPhoto: File | null;
}

interface BeneficiaryFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export function BeneficiaryFormDialog({
  open,
  onOpenChange,
  onSuccess,
}: BeneficiaryFormDialogProps) {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // État du formulaire
  const [formData, setFormData] = useState<BeneficiaryFormData>({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    familySituation: "SINGLE",
    housing: "TENANT",
    professionalSituation: "EMPLOYED",
    monthlyIncome: "",
    photoUrl: null,
    uploadedPhoto: null,
  });

  // Gérer les changements de champs du formulaire
  const handleChange = (field: keyof BeneficiaryFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Gérer l'upload de photo
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        uploadedPhoto: file,
      }));

      // Créer une URL d'aperçu
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  // Soumettre le formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Préparer les données pour l'API
      const formPayload = new FormData();
      
      // Ajouter les champs textuels
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'uploadedPhoto' && key !== 'photoUrl' && value) {
          formPayload.append(key, value.toString());
        }
      });
      
      // Ajouter le volunteerRefId
      if (session?.user?.id) {
        formPayload.append('volunteerRefId', session.user.id);
      }
      
      // Ajouter la photo si présente
      if (formData.uploadedPhoto) {
        formPayload.append('photo', formData.uploadedPhoto);
      }
      
      // Appel à l'API pour créer un bénéficiaire
      const response = await fetch("/api/volunteer/beneficiaries", {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${await response.text()}`);
      }

      // Fermer le dialogue et rafraîchir la page
      onOpenChange(false);
      if (onSuccess) {
        onSuccess();
      }
      
    } catch (error) {
      console.error("Erreur lors de la création du bénéficiaire:", error);
      alert(`Une erreur est survenue lors de la création du bénéficiaire. Veuillez réessayer.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Ajouter un nouveau bénéficiaire</DialogTitle>
          <DialogDescription>
            Remplissez le formulaire ci-dessous pour ajouter un nouveau bénéficiaire.
            Les champs marqués d&apos;un * sont obligatoires.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <div className="flex flex-col items-center">
              <div
                className="h-24 w-24 rounded-full bg-gray-200 overflow-hidden mb-2 flex items-center justify-center"
                style={{
                  backgroundImage: previewUrl ? `url(${previewUrl})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {!previewUrl && <Camera className="h-8 w-8 text-gray-400" />}
              </div>
              <label
                htmlFor="photo-upload"
                className="cursor-pointer bg-white border border-gray-300 rounded-md py-1.5 px-3 text-sm flex items-center gap-1 hover:bg-gray-50"
              >
                <Upload className="h-4 w-4" />
                Ajouter une photo
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoChange}
                />
              </label>
            </div>
          </div>

          {/* Informations personnelles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <FormLabel htmlFor="firstName">Prénom *</FormLabel>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <FormLabel htmlFor="lastName">Nom *</FormLabel>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <FormLabel htmlFor="birthDate">Date de naissance</FormLabel>
              <Input
                id="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={(e) => handleChange("birthDate", e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <FormLabel htmlFor="phone">Téléphone</FormLabel>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="06 XX XX XX XX"
              />
            </div>
            <div className="space-y-2">
              <FormLabel htmlFor="familySituation">Situation familiale</FormLabel>
              <Select
                value={formData.familySituation}
                onValueChange={(value) => handleChange("familySituation", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SINGLE">Célibataire</SelectItem>
                  <SelectItem value="MARRIED">Marié(e)</SelectItem>
                  <SelectItem value="DIVORCED">Divorcé(e)</SelectItem>
                  <SelectItem value="WIDOWED">Veuf/ve</SelectItem>
                  <SelectItem value="CIVIL_UNION">En couple (PACS)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Adresse */}
          <div className="space-y-2">
            <FormLabel htmlFor="address">Adresse</FormLabel>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <FormLabel htmlFor="city">Ville</FormLabel>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <FormLabel htmlFor="postalCode">Code postal</FormLabel>
              <Input
                id="postalCode"
                value={formData.postalCode}
                onChange={(e) => handleChange("postalCode", e.target.value)}
              />
            </div>
          </div>

          {/* Situation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <FormLabel htmlFor="housing">Logement</FormLabel>
              <Select
                value={formData.housing}
                onValueChange={(value) => handleChange("housing", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="OWNER">Propriétaire</SelectItem>
                  <SelectItem value="TENANT">Locataire</SelectItem>
                  <SelectItem value="SOCIAL_HOUSING">Logement social</SelectItem>
                  <SelectItem value="HOMELESS">Sans domicile</SelectItem>
                  <SelectItem value="OTHER">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <FormLabel htmlFor="professionalSituation">Situation professionnelle</FormLabel>
              <Select
                value={formData.professionalSituation}
                onValueChange={(value) => handleChange("professionalSituation", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EMPLOYED">Employé(e)</SelectItem>
                  <SelectItem value="UNEMPLOYED">Sans emploi</SelectItem>
                  <SelectItem value="STUDENT">Étudiant(e)</SelectItem>
                  <SelectItem value="RETIRED">Retraité(e)</SelectItem>
                  <SelectItem value="OTHER">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <FormLabel htmlFor="monthlyIncome">Revenu mensuel (€)</FormLabel>
            <Input
              id="monthlyIncome"
              type="number"
              min="0"
              step="0.01"
              value={formData.monthlyIncome}
              onChange={(e) => handleChange("monthlyIncome", e.target.value)}
            />
          </div>

          <DialogFooter className="mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="bg-[#E2001A] hover:bg-[#C0001A] text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Création en cours...
                </>
              ) : (
                "Créer le bénéficiaire"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
