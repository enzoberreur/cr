"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { NavbarVolunteer } from "@/components/volunteer/navbar-volunteer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Loader2,
  ChevronLeft,
  FileDown,
  UserCircle,
  Calendar,
  CheckCircle,
  AlertTriangle,
  AlertCircle,
  FileText
} from "lucide-react";

// Types pour les diagnostics
interface Diagnostic {
  id: string;
  diagnosticDate: string;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED";
  formResponses?: Record<string, unknown>;
  results?: Record<string, number>;
  recommendations?: Record<string, string>;
  nextSteps?: string;
  pdfUrl?: string;
  version?: string;
  beneficiary: {
    id: string;
    firstName: string;
    lastName: string;
    birthDate?: string;
  };
}

export default function DiagnosticDetail() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    }
  });

  const [diagnostic, setDiagnostic] = useState<Diagnostic | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Récupération des données du diagnostic
  useEffect(() => {
    const fetchDiagnostic = async () => {
      if (!id) return;
      try {
        setIsLoading(true);
        const response = await fetch(`/api/volunteer/diagnostic/${id}`);
        if (!response.ok) {
          throw new Error(`Erreur: ${response.status}`);
        }
        const data = await response.json();
        setDiagnostic(data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Erreur lors du chargement du diagnostic:", err);
        setError("Impossible de charger le diagnostic demandé");
      } finally {
        setIsLoading(false);
      }
    };
    fetchDiagnostic();
  }, [id]);

  // Formatage de la date
  const formatDate = (dateString: string): string => {
    return format(new Date(dateString), "d MMMM yyyy à HH:mm", { locale: fr });
  };

  // Télécharger le PDF
  const downloadPdf = () => {
    if (diagnostic?.id) {
      window.open(`/api/diagnostic/${diagnostic.id}/pdf`, "_blank");
    }
  };

  // Aller à la page du bénéficiaire
  const goToBeneficiary = () => {
    if (diagnostic?.beneficiary?.id) {
      router.push(`/volunteer/beneficiary/${diagnostic.beneficiary.id}`);
    }
  };

  // Obtenir le statut avec le bon style
  const getStatusBadge = (status: Diagnostic["status"] | undefined) => {
    if (!status) return null;
    switch (status) {
      case "COMPLETED":
        return (
          <div className="flex items-center text-green-600">
            <CheckCircle className="h-5 w-5 mr-2" />
            <span className="font-medium">Diagnostic complet</span>
          </div>
        );
      case "IN_PROGRESS":
        return (
          <div className="flex items-center text-orange-600">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <span className="font-medium">Diagnostic en cours</span>
          </div>
        );
      case "PENDING":
      default:
        return (
          <div className="flex items-center text-blue-600">
            <AlertCircle className="h-5 w-5 mr-2" />
            <span className="font-medium">À compléter</span>
          </div>
        );
    }
  };

  // Calcul du score global et des catégories
  const calculateScores = (results: Record<string, number> | undefined) => {
    if (!results) return { globalScore: 0, categories: [] as { name: string; score: number }[] };
    const categories = Object.entries(results).map(([category, score]) => ({
      name: category,
      score: typeof score === "number" ? score : 0
    }));
    const totalScore = categories.reduce((sum, cat) => sum + cat.score, 0);
    const globalScore = categories.length > 0 ? Math.round(totalScore / categories.length) : 0;
    return { globalScore, categories };
  };

  if (isLoading) {
    return (
      <>
        <NavbarVolunteer />
        <div className="pt-20 p-4 md:p-6 max-w-7xl mx-auto flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-[#E2001A]" />
          <span className="ml-2 text-gray-600">Chargement du diagnostic…</span>
        </div>
      </>
    );
  }

  if (error || !diagnostic) {
    return (
      <>
        <NavbarVolunteer />
        <div className="pt-20 p-4 md:p-6 max-w-7xl mx-auto">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-center">
            <h2 className="text-lg font-medium text-red-800">Diagnostic non trouvé</h2>
            <p className="text-red-600 mt-1">
              {error || "Le diagnostic demandé n&apos;existe pas ou vous n&apos;avez pas les droits pour y accéder."}
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

  const { globalScore, categories } = calculateScores(diagnostic.results);

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
                onClick={goToBeneficiary}
                className="mb-2"
              >
                <ChevronLeft className="h-4 w-4 mr-1" /> Retour au bénéficiaire
              </Button>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Diagnostic
              </h1>
              <div className="flex items-center text-gray-500 space-x-2 mt-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(diagnostic.diagnosticDate)}</span>
              </div>
            </div>
            <div className="flex gap-2">
              {diagnostic.pdfUrl && (
                <Button
                  variant="outline"
                  onClick={downloadPdf}
                >
                  <FileDown className="h-4 w-4 mr-1" />
                  Télécharger PDF
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="space-y-8">
          {/* Entête du diagnostic */}
          <Card>
            <CardHeader className="bg-gray-50 rounded-t-lg">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Informations</CardTitle>
                  <CardDescription>Détails du diagnostic</CardDescription>
                </div>
                {getStatusBadge(diagnostic.status)}
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="sm:w-1/2">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Bénéficiaire</p>
                      <div className="flex items-center gap-2 mt-1">
                        <UserCircle className="h-5 w-5 text-gray-400" />
                        <p className="font-medium">
                          {diagnostic.beneficiary.firstName} {diagnostic.beneficiary.lastName}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date du diagnostic</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-5 w-5 text-gray-400" />
                        <p className="font-medium">{formatDate(diagnostic.diagnosticDate)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm:w-1/2">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Version du formulaire</p>
                      <p className="font-medium">{diagnostic.version || "v1"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Statut</p>
                      <Badge className={`mt-1 ${
                        diagnostic.status === "COMPLETED" ? "bg-green-500" :
                        diagnostic.status === "IN_PROGRESS" ? "bg-orange-500" :
                        "bg-gray-500"
                      }`}>
                        {diagnostic.status === "COMPLETED" ? "Terminé" :
                         diagnostic.status === "IN_PROGRESS" ? "En cours" :
                         "En attente"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Résultats du diagnostic */}
          <Card>
            <CardHeader className="bg-gray-50">
              <CardTitle>Résultats</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {diagnostic.results ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-gray-500 mb-2">Score global</div>
                    <div className="text-4xl font-bold">
                      {globalScore}/10
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categories.map((category, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="font-medium">{category.name}</div>
                        <div className="text-2xl font-semibold mt-2">
                          {category.score}/10
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500">
                  <FileText className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                  <p>Aucun résultat disponible pour ce diagnostic.</p>
                </div>
              )}
            </CardContent>
          </Card>
          {/* Recommandations */}
          <Card>
            <CardHeader className="bg-gray-50">
              <CardTitle>Recommandations</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {diagnostic.recommendations ? (
                <div className="space-y-4">
                  {Object.entries(diagnostic.recommendations).map(([key, value], index) => (
                    <div key={index} className="border-l-4 border-[#E2001A] pl-4 py-2">
                      <h3 className="font-medium text-lg">{key}</h3>
                      <p className="text-gray-600 mt-1">{value}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500">
                  <p>Aucune recommandation disponible pour ce diagnostic.</p>
                </div>
              )}
            </CardContent>
          </Card>
          {/* Prochaines étapes */}
          <Card>
            <CardHeader className="bg-gray-50">
              <CardTitle>Prochaines étapes</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {diagnostic.nextSteps ? (
                <div className="prose max-w-none">
                  <p>{diagnostic.nextSteps}</p>
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500">
                  <p>Aucune prochaine étape définie pour ce diagnostic.</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="border-t pt-4 flex justify-end">
              <Button
                className="bg-[#E2001A] hover:bg-[#c0001a]"
                onClick={goToBeneficiary}
              >
                Retour au bénéficiaire
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
