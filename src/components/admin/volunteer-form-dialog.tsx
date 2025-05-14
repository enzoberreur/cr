"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Copy, CheckCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormLabel } from "@/components/ui/form";

// Interface simplifiée pour un bénévole
interface Volunteer {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  userType: "VOLUNTEER";
  status: "ACTIVE" | "PENDING" | "BLOCKED";
}

interface VolunteerFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (volunteer: Volunteer) => void;
}

// Fonction pour générer un mot de passe aléatoire
const generateRandomPassword = (length: number = 10): string => {
  const charset = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

export default function VolunteerFormDialog({ isOpen, onClose, onSave }: VolunteerFormDialogProps) {
  const [passwordCopied, setPasswordCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // État du formulaire avec valeurs par défaut
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: generateRandomPassword(),
    userType: "VOLUNTEER" as const,
    status: "ACTIVE" as const,
  });

  // Réinitialiser le formulaire quand il s'ouvre
  useEffect(() => {
    if (isOpen) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: generateRandomPassword(),
        userType: "VOLUNTEER",
        status: "ACTIVE",
      });
      setPasswordCopied(false);
    }
  }, [isOpen]);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Appel à l'API pour créer le bénévole
      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          userType: formData.userType,
          status: formData.status,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Erreur ${response.status}`);
      }
      
      const newVolunteer = await response.json();
      
      // Si onSave est fourni, appeler cette fonction avec le nouveau bénévole
      if (onSave) {
        onSave(newVolunteer);
      }
      
      onClose();
    } catch (error) {
      console.error("Erreur lors de la création du bénévole:", error);
      alert(`Erreur: ${error instanceof Error ? error.message : "Une erreur est survenue"}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Ajouter un bénévole</DialogTitle>
          <DialogDescription>
            Remplissez le formulaire pour créer un nouveau compte bénévole.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <FormLabel htmlFor="firstName">Prénom</FormLabel>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                placeholder="Prénom"
                required
              />
            </div>

            <div className="space-y-2">
              <FormLabel htmlFor="lastName">Nom</FormLabel>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                placeholder="Nom"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="email@exemple.com"
              required
            />
          </div>

          <div className="space-y-2">
            <FormLabel htmlFor="password">Mot de passe provisoire</FormLabel>
            <div className="flex space-x-2">
              <div className="relative flex-grow">
                <Input
                  id="password"
                  type="text"
                  value={formData.password}
                  readOnly
                  className="pr-10"
                />
                <Button 
                  type="button"
                  variant="ghost" 
                  className="absolute right-0 top-0 h-full px-3 py-2" 
                  onClick={() => {
                    navigator.clipboard.writeText(formData.password);
                    setPasswordCopied(true);
                    setTimeout(() => setPasswordCopied(false), 2000);
                  }}
                >
                  {passwordCopied ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => {
                  const newPassword = generateRandomPassword();
                  handleChange("password", newPassword);
                  setPasswordCopied(false);
                }}
              >
                Régénérer
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Le bénévole devra changer ce mot de passe provisoire à sa première connexion.
            </p>
          </div>

          <div className="space-y-2">
            <FormLabel htmlFor="status">Statut</FormLabel>
            <Select
              value={formData.status}
              onValueChange={(value) => handleChange("status", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner un statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ACTIVE">Actif</SelectItem>
                <SelectItem value="PENDING">En attente</SelectItem>
                <SelectItem value="BLOCKED">Bloqué</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className="mt-6">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              disabled={isLoading}
            >
              Annuler
            </Button>
            <Button 
              type="submit" 
              className="bg-[#E2001A] hover:bg-[#C0001A] text-white"
              disabled={isLoading}
            >
              {isLoading ? "En cours..." : "Créer"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
