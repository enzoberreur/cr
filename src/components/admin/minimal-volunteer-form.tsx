"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Copy, CheckCircle, X } from "lucide-react";

// Définir les types nécessaires
interface User {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: "VOLUNTEER";
  status: "ACTIVE" | "PENDING" | "BLOCKED";
  password?: string;
}

// Props de base sans destructuration complexe
interface BasicDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (user: User) => void;
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

// Un composant modal très basique qui n'utilise pas Dialog de shadcn
export default function MinimalVolunteerForm(props: BasicDialogProps) {
  // États directement dans le composant, sans destructuration complexe
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(generateRandomPassword());
  const [status, setStatus] = useState<"ACTIVE" | "PENDING" | "BLOCKED">("ACTIVE");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordCopied, setPasswordCopied] = useState(false);

  // Si pas ouvert, ne rien afficher
  if (!props.open) {
    return null;
  }

  // Réinitialiser le formulaire
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword(generateRandomPassword());
    setStatus("ACTIVE");
  };

  // Gérer la fermeture
  const handleClose = () => {
    resetForm();
    props.onClose();
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
      
      // Envoyer les données à l'API
      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de la création du bénévole');
      }
      
      const createdUser = await response.json();
      
      // Appeler la fonction de callback avec l'utilisateur créé
      props.onSave(createdUser);
      handleClose();
    } catch (error) {
      console.error("Erreur lors de la création du bénévole:", error);
      alert(`Erreur: ${error instanceof Error ? error.message : 'Une erreur est survenue'}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Utiliser une modal très basique en HTML/CSS pur
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-[500px] shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Ajouter un bénévole</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleClose}
            className="h-8 w-8 rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <p className="text-gray-500 mb-6">
          Remplissez le formulaire pour créer un nouveau bénévole.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">Prénom</label>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Prénom"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">Nom</label>
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
            <label htmlFor="email" className="text-sm font-medium">Email</label>
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
            <label htmlFor="password" className="text-sm font-medium">Mot de passe</label>
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
            <label htmlFor="status" className="text-sm font-medium">Statut</label>
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

          <div className="flex justify-end gap-2 pt-4">
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
          </div>
        </form>
      </div>
    </div>
  );
}
