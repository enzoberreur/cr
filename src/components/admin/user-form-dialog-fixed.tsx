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

// Fonction pour générer un mot de passe aléatoire
const generateRandomPassword = (length = 10) => {
  const charset = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

// Définir un type pour s'assurer que formData a la structure correcte
interface FormDataType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: "ADMIN" | "VOLUNTEER" | "BENEFICIARY";
  status: "ACTIVE" | "PENDING" | "BLOCKED";
}

interface UserFormDialogFixedProps {
  isOpen?: boolean;
  onClose?: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  user?: User | null;
  onSave?: (user: User) => void;
}

export default function UserFormDialogFixed(props: UserFormDialogFixedProps) {
  // Vérifier que props n'est pas undefined/null
  if (!props) {
    throw new Error("Props is undefined or null");
  }

  // Extraire les props de manière sécurisée avec des valeurs par défaut explicites
  const isOpen = props.isOpen ?? false;
  const onClose = props.onClose ?? (() => {});
  const open = props.open ?? false;
  const onOpenChange = props.onOpenChange;
  const user = props.user ?? null;
  const onSave = props.onSave;
  
  // Compatibilité avec les deux styles de props (open/onOpenChange et isOpen/onClose)
  const dialogOpen = isOpen !== undefined ? isOpen : (open || false);
  
  const [passwordCopied, setPasswordCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // État du formulaire avec des valeurs par défaut sécurisées
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    password: generateRandomPassword(),
    userType: "VOLUNTEER", // Par défaut, c'est un bénévole
    status: "ACTIVE",
  });

  // Fonction de fermeture de la boîte de dialogue
  const handleClose = () => {
    console.log("UserFormDialogFixed - handleClose appelé, fermeture du dialogue");
    if (onClose) {
      console.log("UserFormDialogFixed - Appel de onClose");
      onClose();
    }
    if (onOpenChange) {
      console.log("UserFormDialogFixed - Appel de onOpenChange(false)");
      onOpenChange(false);
    }
  };

  // Réinitialise le formulaire lorsque l'utilisateur change ou lorsque le dialogue s'ouvre
  useEffect(() => {
    console.log("UserFormDialogFixed - useEffect déclenché avec user:", user, "dialogOpen:", dialogOpen);
    
    // S'assurer que user est bien défini avant d'accéder à ses propriétés
    const firstName = user && user.firstName ? user.firstName : "";
    const lastName = user && user.lastName ? user.lastName : "";
    const email = user && user.email ? user.email : "";
    const userType = user && user.userType ? user.userType : "VOLUNTEER";
    const status = user && user.status ? user.status : "ACTIVE";
    
    const newFormData = {
      firstName,
      lastName,
      email,
      password: user ? "" : generateRandomPassword(),
      userType: userType as "ADMIN" | "VOLUNTEER" | "BENEFICIARY",
      status: status as "ACTIVE" | "PENDING" | "BLOCKED",
    };
    
    console.log("UserFormDialogFixed - Initialisation du formulaire avec:", newFormData);
    setFormData(newFormData);
    setPasswordCopied(false);
  }, [user, dialogOpen]); // Ajout de dialogOpen pour s'assurer que le formulaire est réinitialisé lorsque le dialogue est ouvert

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("UserFormDialogFixed - handleSubmit appelé, formulaire soumis");
    setIsLoading(true);

    try {
      // Dans une implémentation réelle, vous appelleriez une API ici
      console.log("UserFormDialogFixed - Envoi des données:", formData);
      
      // Simule une requête API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Si onSave est fourni, appeler cette fonction
      if (onSave) {
        console.log("UserFormDialogFixed - onSave existe, préparation des données");
        
        if (user) {
          console.log("UserFormDialogFixed - Modification d'un utilisateur existant", user.id);
          // Pour une modification, créer un nouvel objet avec les propriétés préservées
          const updatedUser: User = {
            id: user.id,
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            userType: formData.userType as "ADMIN" | "VOLUNTEER" | "BENEFICIARY",
            status: formData.status as "ACTIVE" | "PENDING" | "BLOCKED",
            createdAt: user.createdAt,
            lastLogin: user.lastLogin
          };
          
          // Ajouter le mot de passe uniquement s'il est fourni
          if (formData.password && formData.password.trim() !== '') {
            console.log("UserFormDialogFixed - Mot de passe fourni, ajout au payload");
            (updatedUser as User & { password: string }).password = formData.password;
          }
          
          console.log("UserFormDialogFixed - Appel de onSave avec", updatedUser);
          onSave(updatedUser);
        } else {
          // Pour un nouvel utilisateur
          const newUser: User = {
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            userType: formData.userType as "ADMIN" | "VOLUNTEER" | "BENEFICIARY",
            status: formData.status as "ACTIVE" | "PENDING" | "BLOCKED",
          };
          
          // Ajouter le mot de passe seulement s'il existe
          if (formData.password) {
            (newUser as User & { password: string }).password = formData.password;
          }
          
          onSave(newUser);
        }
      }
      
      handleClose();
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction pour copier le mot de passe dans le presse-papiers
  const handleCopyPassword = () => {
    navigator.clipboard.writeText(formData.password);
    setPasswordCopied(true);
    setTimeout(() => setPasswordCopied(false), 2000);
  };

  // Le dialogue sera contrôlé par la prop open
  console.log("UserFormDialogFixed - État final du dialogue:", { dialogOpen, open, isOpen, user });
  
  // S'assurer que le composant Dialog reçoit les bonnes props
  return (
    <Dialog 
      open={dialogOpen}
      onOpenChange={(newOpenState) => {
        console.log("UserFormDialogFixed - onOpenChange appelé avec:", newOpenState);
        // Appeler handleClose seulement si on ferme le dialogue
        if (!newOpenState) {
          handleClose();
        }
        // Propager le changement d'état au parent
        if (onOpenChange) {
          onOpenChange(newOpenState);
        }
      }}
    >
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{user ? "Modifier l'utilisateur" : "Ajouter un utilisateur"}</DialogTitle>
          <DialogDescription>
            {user
              ? "Modifiez les informations de l'utilisateur ci-dessous."
              : "Remplissez le formulaire pour créer un nouvel utilisateur."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">Prénom</label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                placeholder="Prénom"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">Nom</label>
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
            <label htmlFor="email" className="text-sm font-medium">Email</label>
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
            <label htmlFor="password" className="text-sm font-medium">
              {user ? "Nouveau mot de passe (facultatif)" : "Mot de passe"}
            </label>
            <div className="flex gap-2">
              <Input
                id="password"
                type="text" // Utilisez text au lieu de password pour pouvoir voir et copier
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                placeholder={user ? "Laisser vide pour ne pas modifier" : "Mot de passe"}
                required={!user} // Requis uniquement pour les nouveaux utilisateurs
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
            {!user && (
              <p className="text-xs text-gray-500 mt-1">
                Un mot de passe aléatoire a été généré. Vous pouvez le copier ou le modifier.
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="userType" className="text-sm font-medium">Type d&apos;utilisateur</label>
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
              <label htmlFor="status" className="text-sm font-medium">Statut</label>
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
              {isLoading ? "En cours..." : user ? "Mettre à jour" : "Créer"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
