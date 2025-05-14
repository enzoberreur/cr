"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { 
  Search, MoreHorizontal, Eye, FileText, Calendar, Plus, Camera, Filter, 
  SortAsc, SortDesc, Notebook, Loader2, AlertCircle 
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Beneficiary = {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string | null;
  photoUrl: string | null;
  lastDiagnostic?: {
    id: string;
    diagnosticDate: string;
    status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
    completionPercentage?: number;
  };
  status?: 'ok' | 'follow' | 'incomplete';
};

const calculateAge = (birthDateString: string | null): number => {
  if (!birthDateString) return 0;
  
  const birthDate = new Date(birthDateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export function BeneficiariesTable() {
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([]);
  const [filteredBeneficiaries, setFilteredBeneficiaries] = useState<Beneficiary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [isFaceSearchOpen, setIsFaceSearchOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  // Récupérer les bénéficiaires assignés au bénévole
  useEffect(() => {
    const fetchBeneficiaries = async () => {
      if (!session?.user?.id) return;

      try {
        setIsLoading(true);
        const response = await fetch(`/api/volunteer/beneficiaries?volunteerId=${session.user.id}`);
        
        if (!response.ok) {
          throw new Error(`Erreur: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Traitement des données pour calculer l'âge, le statut, etc.
        const processedData = data.map((beneficiary: Record<string, unknown>) => {
          // Calculer le statut en fonction du dernier diagnostic
          let status: 'ok' | 'follow' | 'incomplete' = 'incomplete';
          let lastDiag = null;
          
          if (beneficiary.diagnostics && beneficiary.diagnostics.length > 0) {
            // Trier les diagnostics par date (le plus récent d'abord)
            const sortedDiagnostics = [...beneficiary.diagnostics].sort(
              (a, b) => new Date(b.diagnosticDate).getTime() - new Date(a.diagnosticDate).getTime()
            );
            
            lastDiag = {
              id: sortedDiagnostics[0].id,
              diagnosticDate: sortedDiagnostics[0].diagnosticDate,
              status: sortedDiagnostics[0].status,
              completionPercentage: calculateCompletionPercentage(sortedDiagnostics[0])
            };
            
            // Définir le statut en fonction du diagnostic
            if (sortedDiagnostics[0].status === 'COMPLETED') {
              status = 'ok';
            } else if (sortedDiagnostics[0].status === 'IN_PROGRESS') {
              status = 'follow';
            }
          }
          
          return {
            id: beneficiary.id,
            firstName: beneficiary.firstName,
            lastName: beneficiary.lastName,
            birthDate: beneficiary.birthDate,
            photoUrl: beneficiary.photoUrl,
            lastDiagnostic: lastDiag,
            status
          };
        });
        
        setBeneficiaries(processedData);
        setFilteredBeneficiaries(processedData);
      } catch (err) {
        console.error("Erreur lors du chargement des bénéficiaires:", err);
        setError("Impossible de charger les bénéficiaires.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBeneficiaries();
  }, [session?.user?.id]);
  
  // Filtrer les bénéficiaires en fonction de la recherche et du filtre de statut
  useEffect(() => {
    let result = [...beneficiaries];
    
    // Filtre de recherche
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        beneficiary => 
          `${beneficiary.firstName} ${beneficiary.lastName}`.toLowerCase().includes(term)
      );
    }
    
    // Filtre par statut
    if (statusFilter) {
      result = result.filter(beneficiary => beneficiary.status === statusFilter);
    }
    
    // Tri
    if (sortConfig) {
      result.sort((a, b) => {
        let aValue, bValue;
        
        switch (sortConfig.key) {
          case 'name':
            aValue = `${a.lastName} ${a.firstName}`.toLowerCase();
            bValue = `${b.lastName} ${b.firstName}`.toLowerCase();
            break;
          case 'age':
            aValue = calculateAge(a.birthDate);
            bValue = calculateAge(b.birthDate);
            break;
          case 'date':
            aValue = a.lastDiagnostic?.diagnosticDate ? new Date(a.lastDiagnostic.diagnosticDate).getTime() : 0;
            bValue = b.lastDiagnostic?.diagnosticDate ? new Date(b.lastDiagnostic.diagnosticDate).getTime() : 0;
            break;
          case 'completion':
            aValue = a.lastDiagnostic?.completionPercentage || 0;
            bValue = b.lastDiagnostic?.completionPercentage || 0;
            break;
          case 'status':
            aValue = a.status || '';
            bValue = b.status || '';
            break;
          default:
            return 0;
        }
        
        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    
    setFilteredBeneficiaries(result);
  }, [beneficiaries, searchTerm, statusFilter, sortConfig]);

  // Calculer le pourcentage de complétion d'un diagnostic
  const calculateCompletionPercentage = (diagnostic: Record<string, unknown>): number => {
    if (!diagnostic.formResponses) return 0;
    
    // Logique simplifiée pour calculer le pourcentage de complétion
    // Dans une implémentation réelle, il faudrait compter les champs remplis
    const responses = diagnostic.formResponses as Record<string, unknown>;
    const totalFields = Object.keys(responses).length;
    const filledFields = Object.values(responses).filter(value => 
      value !== null && value !== undefined && value !== ''
    ).length;
    
    return Math.round((filledFields / Math.max(1, totalFields)) * 100);
  };

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    
    setSortConfig({ key, direction });
  };
  
  const getSortIcon = (key: string) => {
    if (!sortConfig || sortConfig.key !== key) {
      return null;
    }
    return sortConfig.direction === 'asc' ? <SortAsc className="h-4 w-4 ml-1" /> : <SortDesc className="h-4 w-4 ml-1" />;
  };

  // Fonction pour ouvrir un diagnostic
  const viewDiagnostic = (beneficiaryId: string, diagnosticId?: string) => {
    if (diagnosticId) {
      router.push(`/volunteer/diagnostic/${diagnosticId}`);
    } else {
      // Créer un nouveau diagnostic
      router.push(`/volunteer/diagnostic/new?beneficiaryId=${beneficiaryId}`);
    }
  };
  
  // Fonction pour voir le profil d'un bénéficiaire
  const viewBeneficiary = (id: string) => {
    router.push(`/volunteer/beneficiary/${id}`);
  };
  
  // Fonction pour télécharger le PDF d'un diagnostic
  const downloadPdf = (diagnosticId: string) => {
    window.open(`/api/diagnostic/${diagnosticId}/pdf`, '_blank');
  };
  
  // Fonction pour ajouter une note
  const addNote = (beneficiaryId: string) => {
    router.push(`/volunteer/beneficiary/${beneficiaryId}/note`);
  };
  
  // Obtenir le style de badge en fonction du statut
  const getStatusBadge = (status: string | undefined) => {
    switch (status) {
      case 'ok':
        return <Badge className="bg-green-500">OK</Badge>;
      case 'follow':
        return <Badge className="bg-orange-500">À suivre</Badge>;
      case 'incomplete':
      default:
        return <Badge className="bg-gray-500">Incomplet</Badge>;
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-[#E2001A]" />
        <span className="ml-2 text-gray-600">Chargement des bénéficiaires...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
        <AlertCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
        <div>
          <h4 className="text-red-800 font-medium">Erreur</h4>
          <p className="text-red-600">{error}</p>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => window.location.reload()} 
            className="mt-2"
          >
            Réessayer
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Barre d'outils (on l'enlève ici puisqu'elle est dans le dashboard) */}
      
      {/* Barre de recherche et filtres internes au tableau */}
      <div className="p-4 border-b flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Rechercher par nom, téléphone ou email..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
          
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              {statusFilter ? `Statut: ${statusFilter === 'ok' ? 'OK' : statusFilter === 'follow' ? 'À suivre' : 'Incomplet'}` : 'Statut'}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Filtrer par statut</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setStatusFilter(null)}>
              Tous les statuts
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter('ok')}>
              <div className="h-2 w-2 bg-green-500 rounded-full mr-2" />
              OK
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter('follow')}>
              <div className="h-2 w-2 bg-orange-500 rounded-full mr-2" />
              À suivre
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter('incomplete')}>
              <div className="h-2 w-2 bg-gray-500 rounded-full mr-2" />
              Incomplet
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Tableau des bénéficiaires */}
      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead className="w-14 text-center">Photo</TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('name')}>
                <div className="flex items-center">
                  Nom complet
                  {getSortIcon('name')}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer w-20" onClick={() => handleSort('age')}>
                <div className="flex items-center">
                  Âge
                  {getSortIcon('age')}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('date')}>
                <div className="flex items-center">
                  Dernier diagnostic
                  {getSortIcon('date')}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer w-32" onClick={() => handleSort('completion')}>
                <div className="flex items-center">
                  % Complétion
                  {getSortIcon('completion')}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer w-24" onClick={() => handleSort('status')}>
                <div className="flex items-center">
                  Statut
                  {getSortIcon('status')}
                </div>
              </TableHead>
              <TableHead className="w-28 text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBeneficiaries.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-10 text-gray-500">
                  {searchTerm || statusFilter 
                    ? "Aucun bénéficiaire ne correspond à votre recherche."
                    : "Vous n'avez pas encore de bénéficiaires assignés."}
                </TableCell>
              </TableRow>
            ) : (
              filteredBeneficiaries.map((beneficiary) => (
                <TableRow 
                  key={beneficiary.id} 
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => viewBeneficiary(beneficiary.id)}
                >
                  <TableCell className="text-center">
                    <div className="h-12 w-12 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center mx-auto border border-gray-200">
                      {beneficiary.photoUrl ? (
                        <Image 
                          src={beneficiary.photoUrl}
                          alt={`${beneficiary.firstName} ${beneficiary.lastName}`}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <span className="text-gray-600 font-medium">
                          {beneficiary.firstName.charAt(0)}{beneficiary.lastName.charAt(0)}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    {beneficiary.lastName.toUpperCase()} {beneficiary.firstName}
                  </TableCell>
                  <TableCell>{calculateAge(beneficiary.birthDate)} ans</TableCell>
                  <TableCell>
                    {beneficiary.lastDiagnostic ? (
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-[#E2001A]" />
                        <span>{formatDate(beneficiary.lastDiagnostic.diagnosticDate)}</span>
                      </div>
                    ) : (
                      <span className="text-gray-400 italic">Aucun diagnostic</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="w-full">
                      <Progress 
                        value={beneficiary.lastDiagnostic?.completionPercentage || 0}
                        className={`h-2 ${
                          (beneficiary.lastDiagnostic?.completionPercentage || 0) > 80 
                            ? "[&>div]:bg-green-500" 
                            : (beneficiary.lastDiagnostic?.completionPercentage || 0) > 40
                              ? "[&>div]:bg-orange-500"
                              : "[&>div]:bg-gray-500"
                        }`}
                      />
                      <span className="text-xs text-gray-600 mt-1 block">
                        {beneficiary.lastDiagnostic?.completionPercentage || 0}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(beneficiary.status)}
                  </TableCell>
                  <TableCell className="space-x-1 text-center" onClick={(e) => e.stopPropagation()}>
                    <Button
                      variant="ghost" 
                      size="icon"
                      className="h-8 w-8 text-gray-600 hover:text-[#E2001A]"
                      onClick={() => viewBeneficiary(beneficiary.id)}
                      title="Voir détails"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost" 
                      size="icon"
                      className="h-8 w-8 text-gray-600 hover:text-[#E2001A]"
                      onClick={() => viewDiagnostic(
                        beneficiary.id, 
                        beneficiary.lastDiagnostic?.id
                      )}
                      title={beneficiary.lastDiagnostic ? "Voir diagnostic" : "Créer diagnostic"}
                    >
                      <FileText className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost" 
                      size="icon"
                      className="h-8 w-8 text-gray-600 hover:text-[#E2001A]"
                      onClick={() => addNote(beneficiary.id)}
                      title="Ajouter une note"
                    >
                      <Notebook className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      
    </div>
  );
}
