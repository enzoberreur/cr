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

// Types pour les props du composant
interface User {
  id?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  userType: "ADMIN" | "VOLUNTEER" | "BENEFICIARY";
  status: "ACTIVE" | "PENDING" | "BLOCKED";
  createdAt?: string;
  lastLogin?: string | null;
}

interface EditUserDialogProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
  onSave: (user: User) => void;
}

const EditUserDialog = ({ isOpen, onClose, user, onSave }: EditUserDialogProps) => {
  // État du formulaire
  const [formData, setFormData] = useState({
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    email: user.email || "",
    password: "",
    userType: user.userType || "VOLUNTEER",
    status: user.status || "ACTIVE",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [passwordCopied, setPasswordCopied] = useState(false);

  // Mettre à jour le formulaire lorsque l'utilisateur change
  useEffect(() => {
    setFormData({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      password: "", // Vide pour modification
      userType: user.userType || "VOLUNTEER",
      status: user.status || "ACTIVE",
    });
  }, [user]);

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  // Fonction pour copier le mot de passe dans le presse-papiers
  const handleCopyPassword = () => {
    navigator.clipboard.writeText(formData.password);
    setPasswordCopied(true);
    setTimeout(() => setPasswordCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("EditUserDialog - Formulaire soumis");
    setIsLoading(true);

    try {
      // Créer l'utilisateur mis à jour
      const updatedUser: User = {
        ...user,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        userType: formData.userType as "ADMIN" | "VOLUNTEER" | "BENEFICIARY",
        status: formData.status as "ACTIVE" | "PENDING" | "BLOCKED",
      };
      
      // Ajouter le mot de passe uniquement s'il est fourni
      if (formData.password && formData.password.trim() !== '') {
        (updatedUser as any).password = formData.password;
      }
      
      console.log("EditUserDialog - Appel de onSave avec:", updatedUser);
      await onSave(updatedUser);
      onClose();
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog 
      open={isOpen} 
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Modifier l'utilisateur</DialogTitle>
          <DialogDescription>
            Modifiez les informations de l'utilisateur ci-dessous.
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
            <FormLabel htmlFor="password">
              Nouveau mot de passe (facultatif)
            </FormLabel>
            <div className="flex gap-2">
              <Input
                id="password"
                type="text" 
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                placeholder="Laisser vide pour ne pas modifier"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handleCopyPassword}
                className="flex-shrink-0"
                title="Copier le mot de passe"
                disabled={!formData.password}
              >
                {passwordCopied ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <FormLabel htmlFor="userType">Type d'utilisateur</FormLabel>
              <Select
                value={formData.userType}
                onValueChange={(value) => handleChange("userType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner un type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ADMIN">Administrateur</SelectItem>
                  <SelectItem value="VOLUNTEER">Bénévole</SelectItem>
                  <SelectItem value="BENEFICIARY">Bénéficiaire</SelectItem>
                </SelectContent>
              </Select>
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
              {isLoading ? "En cours..." : "Mettre à jour"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserDialog;
