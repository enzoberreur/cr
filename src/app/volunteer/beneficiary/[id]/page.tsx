"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Image from "next/image";
import { NavbarVolunteer } from "@/components/volunteer/navbar-volunteer";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Loader2, 
  Calendar, 
  Home, 
  Phone, 
  Mail, 
  MapPin,
  FileText, 
  User, 
  PlusCircle, 
  Edit, 
  FileDown, 
  ChevronLeft,
  Briefcase,
  Euro,
  Users
} from "lucide-react";

// Types pour un bénéficiaire
interface Beneficiary {
  id: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  familySituation?: string;
  housing?: string;
  professionalSituation?: string;
  monthlyIncome?: number;
  photoUrl?: string;
  diagnostics: Diagnostic[];
}

// Type pour un diagnostic
interface Diagnostic {
  id: string;
  diagnosticDate: string;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED";
  formResponses?: any;
  results?: any;
  recommendations?: any;
  nextSteps?: string;
  pdfUrl?: string;
  version?: string;
}

export default function BeneficiaryDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    }
  });

  const [beneficiary, setBeneficiary] = useState<Beneficiary | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("profile");
  const [privateNote, setPrivateNote] = useState("");
  const [isSavingNote, setIsSavingNote] = useState(false);

  // Récupération des données du bénéficiaire
  useEffect(() => {
    const fetchBeneficiary = async () => {
      if (!params.id) return;

      try {
        setIsLoading(true);
        const response = await fetch(`/api/volunteer/beneficiary/${params.id}`);
        
        if (!response.ok) {
          throw new Error(`Erreur: ${response.status}`);
        }

        const data = await response.json();
        setBeneficiary(data);

        // Fetch private note if any
        try {
          const noteResponse = await fetch(`/api/volunteer/beneficiary/${params.id}/note`);
          if (noteResponse.ok) {
            const noteData = await noteResponse.json();
            setPrivateNote(noteData.content || "");
          }
        } catch (err) {
          console.error("Erreur lors du chargement de la note:", err);
        }
      } catch (err) {
        console.error("Erreur lors du chargement du bénéficiaire:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBeneficiary();
  }, [params.id]);

  // Calcul de l'âge
  const calculateAge = (birthDateString?: string): number | null => {
    if (!birthDateString) return null;
    
    const birthDate = new Date(birthDateString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  // Formatage de la date
  const formatDate = (dateString?: string): string => {
    if (!dateString) return "Non renseigné";
    return format(new Date(dateString), "d MMMM yyyy", { locale: fr });
  };

  // Créer un nouveau diagnostic
  const createDiagnostic = () => {
    router.push(`/volunteer/diagnostic/new?beneficiaryId=${params.id}`);
  };

  // Voir un diagnostic existant
  const viewDiagnostic = (diagnosticId: string) => {
    router.push(`/volunteer/diagnostic/${diagnosticId}`);
  };

  // Télécharger un PDF de diagnostic
  const downloadPdf = (diagnosticId: string) => {
    window.open(`/api/diagnostic/${diagnosticId}/pdf`, '_blank');
  };

  // Enregistrer une note privée
  const savePrivateNote = async () => {
    if (!params.id) return;

    setIsSavingNote(true);
    try {
      const response = await fetch(`/api/volunteer/beneficiary/${params.id}/note`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: privateNote,
        }),
      });
      
      if (!response.ok) {
        throw new Error(`Erreur: ${response.status}`);
      }
      
      alert("Note enregistrée avec succès");
    } catch (err) {
      console.error("Erreur lors de l'enregistrement de la note:", err);
      alert("Une erreur est survenue lors de l'enregistrement de la note");
    } finally {
      setIsSavingNote(false);
    }
  };

  // Traduction des valeurs d'énumération
  const translateEnumValue = (key: string | undefined, type: string): string => {
    if (!key) return "Non renseigné";
    
    const translations: Record<string, Record<string, string>> = {
      familySituation: {
        SINGLE: "Célibataire",
        MARRIED: "Marié(e)",
        DIVORCED: "Divorcé(e)",
        WIDOWED: "Veuf/ve",
        CIVIL_UNION: "En couple (PACS)"
      },
      housing: {
        OWNER: "Propriétaire",
        TENANT: "Locataire",
        SOCIAL_HOUSING: "Logement social",
        HOMELESS: "Sans domicile",
        OTHER: "Autre"
      },
      professionalSituation: {
        EMPLOYED: "Employé(e)",
        UNEMPLOYED: "Sans emploi",
        STUDENT: "Étudiant(e)",
        RETIRED: "Retraité(e)",
        OTHER: "Autre"
      },
      diagnosticStatus: {
        PENDING: "En attente",
        IN_PROGRESS: "En cours",
        COMPLETED: "Terminé"
      }
    };
    
    return translations[type][key] || key;
  };

  // Status du diagnostic avec badge
  const getDiagnosticStatusBadge = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return <Badge className="bg-green-500">Terminé</Badge>;
      case "IN_PROGRESS":
        return <Badge className="bg-orange-500">En cours</Badge>;
      case "PENDING":
      default:
        return <Badge className="bg-gray-500">En attente</Badge>;
    }
  };

  if (isLoading) {
    return (
      <>
        <NavbarVolunteer />
        <div className="pt-20 p-4 md:p-6 max-w-7xl mx-auto flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-[#E2001A]" />
          <span className="ml-2 text-gray-600">Chargement des informations...</span>
        </div>
      </>
    );
  }

  if (!beneficiary) {
    return (
      <>
        <NavbarVolunteer />
        <div className="pt-20 p-4 md:p-6 max-w-7xl mx-auto">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-center">
            <h2 className="text-lg font-medium text-red-800">Bénéficiaire non trouvé</h2>
            <p className="text-red-600 mt-1">
              Le bénéficiaire que vous recherchez n'existe pas ou vous n'avez pas les droits pour y accéder.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => router.push("/volunteer/dashboard")}
            >
              <ChevronLeft className="h-4 w-4 mr-1" /> Retour au tableau de bord
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <NavbarVolunteer />
      <div className="pt-20 p-4 md:p-6 max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => router.push("/volunteer/dashboard?tab=beneficiaries")}
                className="mb-2"
              >
                <ChevronLeft className="h-4 w-4 mr-1" /> Retour
              </Button>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {beneficiary.firstName} {beneficiary.lastName}
              </h1>
              <p className="text-gray-500">
                {calculateAge(beneficiary.birthDate) ? `${calculateAge(beneficiary.birthDate)} ans` : "Âge non renseigné"}
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Edit className="h-4 w-4 mr-1" /> 
                Modifier
              </Button>
              <Button className="bg-[#E2001A] hover:bg-[#c0001a]" onClick={createDiagnostic}>
                <PlusCircle className="h-4 w-4 mr-1" /> 
                Nouveau diagnostic
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Partie gauche - Informations principales */}
          <div className="md:w-1/3">
            <Card>
              <CardHeader className="bg-gray-50 rounded-t-lg">
                <CardTitle className="text-xl">Informations</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-2">
                    {beneficiary.photoUrl ? (
                      <Image 
                        src={beneficiary.photoUrl} 
                        alt={`${beneficiary.firstName} ${beneficiary.lastName}`} 
                        width={96} 
                        height={96} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                        <User size={32} />
                      </div>
                    )}
                  </div>
                  <h2 className="font-medium">
                    {beneficiary.firstName} {beneficiary.lastName}
                  </h2>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Date de naissance</p>
                      <p className="font-medium">{formatDate(beneficiary.birthDate)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Téléphone</p>
                      <p className="font-medium">{beneficiary.phone || "Non renseigné"}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{beneficiary.email || "Non renseigné"}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Adresse</p>
                      <p className="font-medium">
                        {beneficiary.address ? (
                          <>
                            {beneficiary.address}
                            <br />
                            {beneficiary.postalCode} {beneficiary.city}
                          </>
                        ) : (
                          "Non renseignée"
                        )}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Situation familiale</p>
                      <p className="font-medium">
                        {translateEnumValue(beneficiary.familySituation, "familySituation")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Home className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Logement</p>
                      <p className="font-medium">
                        {translateEnumValue(beneficiary.housing, "housing")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Briefcase className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Situation professionnelle</p>
                      <p className="font-medium">
                        {translateEnumValue(beneficiary.professionalSituation, "professionalSituation")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Euro className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Revenu mensuel</p>
                      <p className="font-medium">
                        {beneficiary.monthlyIncome 
                          ? `${beneficiary.monthlyIncome.toFixed(2)} €` 
                          : "Non renseigné"}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Partie droite - Contenu par onglets */}
          <div className="md:w-2/3">
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full grid grid-cols-2 mb-4">
                <TabsTrigger value="diagnostics">Diagnostics</TabsTrigger>
                <TabsTrigger value="notes">Notes privées</TabsTrigger>
              </TabsList>
              
              {/* Onglet des diagnostics */}
              <TabsContent value="diagnostics" className="space-y-4">
                <Card>
                  <CardHeader className="bg-gray-50">
                    <div className="flex items-center justify-between">
                      <CardTitle>Historique des diagnostics</CardTitle>
                      <Button 
                        size="sm"
                        className="bg-[#E2001A] hover:bg-[#c0001a]"
                        onClick={createDiagnostic}
                      >
                        <PlusCircle className="h-4 w-4 mr-1" /> 
                        Nouveau diagnostic
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    {beneficiary.diagnostics && beneficiary.diagnostics.length > 0 ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Statut</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {beneficiary.diagnostics
                            .sort((a, b) => new Date(b.diagnosticDate).getTime() - new Date(a.diagnosticDate).getTime())
                            .map((diagnostic) => (
                              <TableRow key={diagnostic.id}>
                                <TableCell>
                                  {formatDate(diagnostic.diagnosticDate)}
                                </TableCell>
                                <TableCell>
                                  {getDiagnosticStatusBadge(diagnostic.status)}
                                </TableCell>
                                <TableCell>
                                  <div className="flex gap-2">
                                    <Button 
                                      size="sm" 
                                      variant="outline"
                                      onClick={() => viewDiagnostic(diagnostic.id)}
                                    >
                                      <FileText className="h-4 w-4 mr-1" /> 
                                      Voir
                                    </Button>
                                    {diagnostic.pdfUrl && (
                                      <Button 
                                        size="sm" 
                                        variant="outline"
                                        onClick={() => downloadPdf(diagnostic.id)}
                                      >
                                        <FileDown className="h-4 w-4 mr-1" /> 
                                        PDF
                                      </Button>
                                    )}
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <div className="text-center py-6 text-gray-500">
                        <FileText className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                        <p>Aucun diagnostic enregistré pour ce bénéficiaire.</p>
                        <Button 
                          className="mt-4 bg-[#E2001A] hover:bg-[#c0001a]"
                          onClick={createDiagnostic}
                        >
                          Créer le premier diagnostic
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Onglet des notes privées */}
              <TabsContent value="notes" className="space-y-4">
                <Card>
                  <CardHeader className="bg-gray-50">
                    <CardTitle>Notes privées</CardTitle>
                    <CardDescription>
                      Ces notes sont confidentielles et ne sont visibles que par vous
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Ajoutez vos notes privées ici..."
                      className="min-h-[200px]"
                      value={privateNote}
                      onChange={(e) => setPrivateNote(e.target.value)}
                    />
                  </CardContent>
                  <CardFooter className="flex justify-end border-t pt-4">
                    <Button 
                      className="bg-[#E2001A] hover:bg-[#c0001a]"
                      onClick={savePrivateNote}
                      disabled={isSavingNote}
                    >
                      {isSavingNote ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Enregistrement...
                        </>
                      ) : "Enregistrer"}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
