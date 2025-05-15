"use client";

import React, { useState } from 'react';
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

// Fonction pour générer un mot de passe aléatoire (simple, sans caractères ambigus)
const generatePassword = (length = 10) => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

// Interface pour le composant AddVolunteerDialog
interface AddVolunteerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SimplifiedVolunteerDialog({ open, onOpenChange }: AddVolunteerDialogProps) {
  // États du formulaire
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(generatePassword());
  const [status, setStatus] = useState<"ACTIVE" | "PENDING" | "BLOCKED">("ACTIVE");
  const [passwordCopied, setPasswordCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fonction pour copier le mot de passe dans le presse-papier
  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    setPasswordCopied(true);
    setTimeout(() => setPasswordCopied(false), 2000);
  };

  // Fonction pour générer un nouveau mot de passe
  const regeneratePassword = () => {
    setPassword(generatePassword());
    setPasswordCopied(false);
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          userType: "VOLUNTEER",
          status,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Erreur ${response.status}`);
      }
      
      onOpenChange(false); // Fermer le dialogue après succès
      
      // Réinitialiser le formulaire
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword(generatePassword());
      setStatus("ACTIVE");
      
    } catch (error) {
      console.error('Erreur lors de la création du bénévole:', error);
      alert('Erreur lors de la création du bénévole. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
            <FormLabel htmlFor="password">Mot de passe provisoire</FormLabel>
            <div className="flex space-x-2">
              <div className="relative flex-grow">
                <Input
                  id="password"
                  type="text"
                  value={password}
                  readOnly
                  className="pr-10"
                />
                <Button 
                  type="button"
                  variant="ghost" 
                  className="absolute right-0 top-0 h-full px-3 py-2" 
                  onClick={copyPassword}
                >
                  {passwordCopied ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <Button 
                type="button" 
                variant="outline" 
                onClick={regeneratePassword}
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
              {isLoading ? "En cours..." : "Créer"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
