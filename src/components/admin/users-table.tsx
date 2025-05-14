"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MoreHorizontal, Edit, Trash2, Shield, UserCheck, User, CalendarClock,
  Loader2, AlertCircle
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import UserFormDialogFixed from "./user-form-dialog-fixed";
import EditUserDialog from "./edit-user-dialog";

// Interface pour les utilisateurs
interface User {
  id?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  userType: "ADMIN" | "VOLUNTEER" | "BENEFICIARY";
  status: "ACTIVE" | "PENDING" | "BLOCKED";
  createdAt?: string;
  lastLogin?: string | null;
  password?: string;
}

// Un utilisateur vide pour le formulaire de création
const emptyUser: User = {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  userType: "BENEFICIARY",
  status: "PENDING",
  createdAt: new Date().toISOString(),
};

interface UsersTableProps {
  refreshTrigger?: number;
}

export default function UsersTable({ refreshTrigger = 0 }: UsersTableProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour formatter la date
  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  // Récupération des utilisateurs
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch("/api/admin/users");
        
        if (!response.ok) {
          throw new Error(`Erreur: ${response.status}`);
        }
        
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error("Erreur lors de la récupération des utilisateurs:", err);
        setError("Impossible de charger les utilisateurs. Veuillez réessayer plus tard.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [refreshTrigger]); // Recharger les utilisateurs quand refreshTrigger change

  // Fonction pour gérer la suppression d'un utilisateur
  const handleDelete = async () => {
    if (!selectedUser?.id) return;
    
    try {
      const response = await fetch(`/api/admin/users/${selectedUser.id}`, {
        method: "DELETE",
      });
      
      if (!response.ok) {
        throw new Error(`Erreur: ${response.status}`);
      }
      
      // Filtrer l'utilisateur supprimé de la liste
      setUsers(users.filter(user => user.id !== selectedUser.id));
      setIsDeleteDialogOpen(false);
      setSelectedUser(null);
    } catch (err) {
      console.error("Erreur lors de la suppression de l'utilisateur:", err);
      setError("Impossible de supprimer l'utilisateur. Veuillez réessayer plus tard.");
    }
  };

  // Fonction pour gérer la mise à jour d'un utilisateur
  const handleUpdateUser = async (updatedUser: User) => {
    console.log("handleUpdateUser appelé avec:", updatedUser);
    
    try {
      console.log("Envoi de la requête PUT à", `/api/admin/users/${updatedUser.id}`);
      const response = await fetch(`/api/admin/users/${updatedUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });
      
      if (!response.ok) {
        console.error("Erreur de réponse:", response.status, response.statusText);
        throw new Error(`Erreur: ${response.status}`);
      }
      
      console.log("Mise à jour réussie, mise à jour de la liste d'utilisateurs");
      // Mettre à jour l'utilisateur dans la liste
      setUsers(users.map(user => 
        user.id === updatedUser.id ? updatedUser : user
      ));
      
      setIsEditDialogOpen(false);
      setSelectedUser(null);
      console.log("Dialogue fermé et utilisateur sélectionné réinitialisé");
    } catch (err) {
      console.error("Erreur lors de la mise à jour de l'utilisateur:", err);
      setError("Impossible de mettre à jour l'utilisateur. Veuillez réessayer plus tard.");
    }
  };

  // Fonction pour générer la couleur du badge en fonction du statut
  const getStatusColor = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return "bg-green-500";
      case "PENDING":
        return "bg-yellow-500";
      case "BLOCKED":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  // Fonction pour obtenir l'icône en fonction du type d'utilisateur
  const getUserTypeIcon = (userType: string) => {
    switch (userType) {
      case "ADMIN":
        return <Shield className="h-4 w-4 mr-1" />;
      case "VOLUNTEER":
        return <UserCheck className="h-4 w-4 mr-1" />;
      case "BENEFICIARY":
        return <User className="h-4 w-4 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          <div className="flex items-center">
            <AlertCircle className="h-4 w-4 mr-2" />
            <span>{error}</span>
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="w-full flex justify-center items-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
          <span className="ml-2 text-gray-500">Chargement des utilisateurs...</span>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Création</TableHead>
              <TableHead>Dernière Connexion</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                  Aucun utilisateur trouvé
                </TableCell>
              </TableRow>
            ) : (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    {user.firstName} {user.lastName}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {getUserTypeIcon(user.userType)}
                      <span>
                        {user.userType === "ADMIN" && "Administrateur"}
                        {user.userType === "VOLUNTEER" && "Bénévole"}
                        {user.userType === "BENEFICIARY" && "Bénéficiaire"}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(user.status)}>
                      {user.status === "ACTIVE" && "Actif"}
                      {user.status === "PENDING" && "En attente"}
                      {user.status === "BLOCKED" && "Bloqué"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <CalendarClock className="h-4 w-4 mr-1 text-gray-500" />
                      {formatDate(user.createdAt)}
                    </div>
                  </TableCell>
                  <TableCell>
                    {user.lastLogin ? formatDate(user.lastLogin) : "Jamais"}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onClick={() => {
                            console.log("Clic sur Modifier pour l'utilisateur:", user);
                            // Créer une copie de l'utilisateur pour éviter les problèmes de référence
                            setSelectedUser({...user});
                            // Ouvrir le dialogue d'édition
                            setTimeout(() => {
                              setIsEditDialogOpen(true);
                            }, 10); // Petit délai pour s'assurer que selectedUser est défini
                          }}
                        >
                          <Edit className="h-4 w-4 mr-2" />
                          Modifier
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => {
                            setSelectedUser(user);
                            setIsDeleteDialogOpen(true);
                          }}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      )}

      {/* Dialogue de confirmation de suppression */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Êtes-vous certain de vouloir supprimer cet utilisateur ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible. L'utilisateur {selectedUser?.firstName} {selectedUser?.lastName} ({selectedUser?.email}) sera définitivement supprimé.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Dialogue de modification d'utilisateur */}
      {isEditDialogOpen && selectedUser && (
        <EditUserDialog
          isOpen={isEditDialogOpen}
          onClose={() => {
            setIsEditDialogOpen(false);
            // Réinitialiser l'utilisateur sélectionné après la fermeture du dialogue
            setTimeout(() => setSelectedUser(null), 100);
          }}
          user={selectedUser}
          onSave={handleUpdateUser}
        />
      )}
    </div>
  );
}