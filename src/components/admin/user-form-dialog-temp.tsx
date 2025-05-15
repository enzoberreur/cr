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

interface UserFormDialogProps {
  isOpen?: boolean;
  onClose?: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  user?: User | null;
  onSave?: (user: User) => void;
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

export default function UserFormDialog(props: UserFormDialogProps) {
  // Extraire les props de manière sécurisée avec des valeurs par défaut explicites
  const isOpen = props?.isOpen ?? false;
  const onClose = props?.onClose ?? (() => {});
  const open = props?.open ?? false;
  const onOpenChange = props?.onOpenChange;
  const user = props?.user ?? null;
  const onSave = props?.onSave;

  // Compatibilité avec les deux styles de props (open/onOpenChange et isOpen/onClose)
  const dialogOpen = isOpen !== undefined ? isOpen : (open || false);
  const handleClose = () => {
    if (onClose) onClose();
    if (onOpenChange) onOpenChange(false);
  };
  
  const [passwordCopied, setPasswordCopied] = useState(false);
  
  // Définir un type pour s'assurer que formData a la structure correcte
  interface FormDataType {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userType: "ADMIN" | "VOLUNTEER" | "BENEFICIARY";
    status: "ACTIVE" | "PENDING" | "BLOCKED";
  }
  
  // Générer un mot de passe aléatoire
  const defaultPassword = generateRandomPassword();
  
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    password: defaultPassword,
    userType: "VOLUNTEER", // Par défaut, c'est maintenant un bénévole
    status: "ACTIVE",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Pré-remplir le formulaire si un utilisateur est fourni pour modification
  useEffect(() => {
    // Pour déboguer: afficher les valeurs qui peuvent causer une erreur de déstructuration
    console.log("Dialog opened:", dialogOpen);
    console.log("User object:", user);
    
    // Réinitialiser le formulaire lorsque la boîte de dialogue s'ouvre
    if (dialogOpen) {
      if (user) {
        // Pour un utilisateur existant - éviter la déstructuration directe
        const firstName = user.firstName !== undefined ? user.firstName : "";
        const lastName = user.lastName !== undefined ? user.lastName : "";
        const email = user.email !== undefined ? user.email : "";
        const userType = user.userType !== undefined ? user.userType : "BENEFICIARY";
        const userStatus = user.status !== undefined ? user.status : "ACTIVE";
        
        setFormData({
          firstName,
          lastName,
          email,
          password: "", // Ne pas pré-remplir le mot de passe pour des raisons de sécurité
          userType,
          status: userStatus,
        });
      } else {
        // Pour un nouvel utilisateur (bénévole)
        const newPassword = generateRandomPassword();
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: newPassword,
          userType: "VOLUNTEER", // Par défaut, c'est maintenant un bénévole
          status: "ACTIVE",
        });
        setPasswordCopied(false);
      }
    }
  }, [dialogOpen, user]);

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Pour les nouveaux utilisateurs, envoyer à l'API
      if (!user) {
        const response = await fetch('/api/admin/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `Erreur ${response.status}`);
        }
        
        const newUser = await response.json();
        
        // Si onSave est fourni, appeler cette fonction avec le nouvel utilisateur
        if (onSave) {
          onSave(newUser);
        }
        
        handleClose();
        return;
      }
      
      // Pour les utilisateurs existants
      if (onSave) {
        if (user) {
          // Pour une modification, vérifier l'existence de chaque propriété de façon sécurisée
          const userId = typeof user.id === 'string' ? user.id : '';
          const createdAtStr = typeof user.createdAt === 'string' ? user.createdAt : new Date().toISOString();
          
          // Pour une modification, créer un nouvel objet avec les propriétés préservées
          const updatedUser: User = {
            // Assurer que l'ID est toujours défini
            id: userId,
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            userType: formData.userType,
            status: formData.status,
            // Utiliser des valeurs par défaut explicites
            createdAt: createdAtStr,
            lastLogin: null // Simplifier en mettant toujours null par défaut
          };
          
          // Ajouter le mot de passe uniquement s'il est fourni
          if (formData.password && formData.password.trim() !== '') {
            (updatedUser as User & { password: string }).password = formData.password;
          }
          
          onSave(updatedUser);
        } else {
          // Pour un nouvel utilisateur
          const newUser: User = {
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            userType: formData.userType,
            status: formData.status,
            password: formData.password
          } as User;
          
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

  return (
    <Dialog open={dialogOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{user ? "Modifier l&apos;utilisateur" : "Ajouter un bénévole"}</DialogTitle>
          <DialogDescription>
            {user
              ? "Modifiez les informations de l&apos;utilisateur ci-dessous."
              : "Remplissez le formulaire pour créer un nouveau compte bénévole."}
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
              {user ? "Nouveau mot de passe (facultatif)" : "Mot de passe provisoire"}
            </FormLabel>
            <div className="flex space-x-2">
              <div className="relative flex-grow">
                <Input
                  id="password"
                  type="text" // Changé pour être visible
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  placeholder={user ? "Laisser vide pour ne pas modifier" : "Mot de passe"}
                  required={!user} // Requis uniquement pour les nouveaux utilisateurs
                  readOnly={!user} // En lecture seule pour les nouveaux utilisateurs (car généré)
                  className="pr-10"
                />
                {!user && (
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
                )}
              </div>
              {!user && (
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
              )}
            </div>
            {!user && (
              <p className="text-xs text-gray-500 mt-1">
                Le bénévole devra changer ce mot de passe provisoire à sa première connexion.
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {user && (
              <div className="space-y-2">
                <FormLabel htmlFor="userType">Type d&apos;utilisateur</FormLabel>
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
            )}
            {!user && (
              <input type="hidden" name="userType" value="VOLUNTEER" />
            )}

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
