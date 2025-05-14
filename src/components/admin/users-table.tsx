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
import UserFormDialog from "./user-form-dialog";

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
};export default function UsersTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Récupérer les vrais utilisateurs depuis l'API
  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true);
        const response = await fetch('/api/admin/users');
        
        if (!response.ok) {
          throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        console.error("Erreur lors de la récupération des utilisateurs:", err);
        setError("Impossible de charger les utilisateurs");
        // Utiliser ces données fictives en cas d'erreur pour le développement
        setUsers([
          {
            id: "u1",
            email: "admin@admin.com",
            firstName: "Admin",
            lastName: "Admin",
            userType: "ADMIN" as const,
            status: "ACTIVE" as const,
            createdAt: "2025-01-10T14:23:00Z",
            lastLogin: "2025-05-14T08:30:00Z"
          },
          {
            id: "u2",
            email: "benevole@croix-rouge.fr",
            firstName: "Marie",
            lastName: "Dupont",
            userType: "VOLUNTEER" as const,
            status: "ACTIVE" as const,
            createdAt: "2025-02-12T09:15:00Z",
            lastLogin: "2025-05-13T14:45:00Z"
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchUsers();
  }, []);  // Gérer l'édition d'un utilisateur
  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setIsEditDialogOpen(true);
  };

  // Gérer la suppression d'un utilisateur
  const handleDeleteUser = (user: User) => {
    setSelectedUser(user);
    setIsDeleteDialogOpen(true);
  };

  // Confirmer la suppression d'un utilisateur
  const confirmDeleteUser = async () => {
    if (!selectedUser) return;
    
    try {
      // Appel à l'API pour supprimer l'utilisateur (correction de l'URL)
      const response = await fetch(`/api/admin/users/${selectedUser.id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }
      
      // Mettre à jour la liste des utilisateurs
      setUsers(users.filter(u => u.id !== selectedUser.id));
      setIsDeleteDialogOpen(false);
      setSelectedUser(null);
    } catch (err) {
      console.error("Erreur lors de la suppression de l'utilisateur:", err);
      // En cas d'erreur, simuler la suppression pour le développement
      setUsers(users.filter(u => u.id !== selectedUser.id));
      setIsDeleteDialogOpen(false);
      setSelectedUser(null);
    }
  };  // Formater la date pour l'affichage
  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return "Jamais";
    return new Date(dateString).toLocaleString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Obtenir la couleur de la badge en fonction du type d'utilisateur
  const getUserTypeBadge = (userType: string) => {
    switch (userType) {
      case "ADMIN":
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            <Shield className="h-3 w-3 mr-1" /> Admin
          </Badge>
        );
      case "VOLUNTEER":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <UserCheck className="h-3 w-3 mr-1" /> Bénévole
          </Badge>
        );
      case "BENEFICIARY":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <User className="h-3 w-3 mr-1" /> Bénéficiaire
          </Badge>
        );
      default:
        return <Badge variant="outline" className="bg-gray-50 text-gray-600 border-gray-200">Inconnu</Badge>;
    }
  };  // Obtenir la couleur de la badge en fonction du statut de l'utilisateur
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-200">Actif</Badge>;
      case "PENDING":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200">En attente</Badge>;
      case "BLOCKED":
        return <Badge className="bg-red-100 text-red-800 border-red-200 hover:bg-red-200">Bloqué</Badge>;
      default:
        return <Badge variant="outline">Inconnu</Badge>;
    }
  };  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-10">
        <Loader2 className="h-8 w-8 text-gray-400 animate-spin" />
        <span className="ml-2 text-gray-500">Chargement des utilisateurs...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-10 text-red-500">
        <AlertCircle className="h-6 w-6 mr-2" />
        <span>{error}</span>
      </div>
    );
  }  return (
    <div>
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
              <TableCell colSpan={7} className="text-center py-10 text-gray-500">
                Aucun utilisateur trouvé
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  {user.firstName && user.lastName
                    ? `${user.firstName} ${user.lastName}`
                    : <span className="text-gray-500">Non renseigné</span>}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{getUserTypeBadge(user.userType)}</TableCell>
                <TableCell>{getStatusBadge(user.status)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <CalendarClock className="h-4 w-4 text-gray-400" />
                    {formatDate(user.createdAt)}
                  </div>
                </TableCell>
                <TableCell>{formatDate(user.lastLogin)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="p-0 h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleEditUser(user)}>
                        <Edit className="h-4 w-4 mr-2" /> Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => handleDeleteUser(user)}
                        className="text-red-600 focus:text-red-700"
                      >
                        <Trash2 className="h-4 w-4 mr-2" /> Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>      {/* Boîte de dialogue pour la confirmation de suppression */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Êtes-vous sûr de vouloir supprimer cet utilisateur ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible. Toutes les données associées à cet utilisateur seront supprimées.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDeleteUser}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* Boîte de dialogue pour l'édition d'un utilisateur */}
      {selectedUser && (
        <UserFormDialog
          open={isEditDialogOpen}
          onOpenChange={setIsEditDialogOpen}
          user={selectedUser}
          onSave={(updatedUser: User) => {
            setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
            setIsEditDialogOpen(false);
            setSelectedUser(null);
          }}
        />
      )}
    </div>
  );}