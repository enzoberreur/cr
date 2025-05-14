"use client";

import { useState } from "react";
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

// Type simple sans destructuration
interface User {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: "VOLUNTEER";
  status: "ACTIVE" | "PENDING" | "BLOCKED";
  password?: string;
}

// Fonction pour générer un mot de passe aléatoire
function generateRandomPassword(length = 10) {
  const charset = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

// Un composant très simple, sans destructuration complexe
export default function SimpleVolunteerDialog({ 
  open, 
  onClose, 
  onSave 
}: { 
  open: boolean; 
  onClose: () => void;
  onSave: (user: User) => void;
}) {
  // États directement dans le composant
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(generateRandomPassword());
  const [status, setStatus] = useState<"ACTIVE" | "PENDING" | "BLOCKED">("ACTIVE");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordCopied, setPasswordCopied] = useState(false);

  // Réinitialiser le formulaire
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword(generateRandomPassword());
    setStatus("ACTIVE");
    setPasswordCopied(false);
  };

  // Gérer la fermeture
  const handleClose = () => {
    resetForm();
    onClose();
  };

  // Copier le mot de passe
  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
    setPasswordCopied(true);
    setTimeout(() => setPasswordCopied(false), 2000);
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Créer l'objet utilisateur (bénévole)
      const newUser: User = {
        firstName,
        lastName,
        email,
        userType: "VOLUNTEER", // Toujours un bénévole
        status,
        password
      };
      
      // Simuler une requête API
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Appeler la fonction de callback
      onSave(newUser);
      handleClose();
    } catch (error) {
      console.error("Erreur lors de la création du bénévole:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Ne rien rendre si le dialogue est fermé
  if (!open) {
    return null;
  }

  return (
    <Dialog open={true} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Ajouter un bénévole</DialogTitle>
          <DialogDescription>
            Remplissez le formulaire pour créer un nouveau bénévole.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <FormLabel htmlFor="firstName">Prénom</FormLabel>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Prénom"
                required
              />
            </div>

            <div className="space-y-2">
              <FormLabel htmlFor="lastName">Nom</FormLabel>
              <Input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@exemple.com"
              required
            />
          </div>

          <div className="space-y-2">
            <FormLabel htmlFor="password">Mot de passe</FormLabel>
            <div className="flex gap-2">
              <Input
                id="password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
                required
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handleCopyPassword}
                className="flex-shrink-0"
                title="Copier le mot de passe"
              >
                {passwordCopied ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Un mot de passe aléatoire a été généré. Vous pouvez le copier ou le modifier.
            </p>
          </div>

          <div className="space-y-2">
            <FormLabel htmlFor="status">Statut</FormLabel>
            <Select
              value={status}
              onValueChange={(value: "ACTIVE" | "PENDING" | "BLOCKED") => setStatus(value)}
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
              onClick={handleClose}
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
