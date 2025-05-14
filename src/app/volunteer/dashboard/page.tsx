"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Calendar, UserCircle, Bell, MapPin, Clock } from "lucide-react";

export default function VolunteerDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  
  // Vérification d'authentification côté client
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // Redirection vers la page de connexion si non authentifié
      router.push("/login");
    }
  });
  
  // Vérifier que l'utilisateur est bien un bénévole
  useEffect(() => {
    if (session && session.user?.userType !== "VOLUNTEER") {
      console.error("Utilisateur non bénévole, redirection vers /login");
      router.push("/login");
    }
  }, [session, router]);
  
  // Simuler le chargement des données
  useEffect(() => {
    const timer = setTimeout(() => {
      if (status === 'authenticated') {
        setIsLoading(false);
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [status]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Loader2 className="h-12 w-12 animate-spin text-[#E2001A]" />
          <p className="mt-4 text-lg font-medium text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Tableau de bord bénévole</h1>
          <p className="text-gray-500">Bienvenue, {session?.user?.email || "Bénévole"}</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Calendrier</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </Button>
        </div>
      </div>
      
      <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-6">
        <h2 className="font-medium text-lg text-[#E2001A] mb-2">Prochaine mission</h2>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="font-medium text-gray-900">Distribution alimentaire</p>
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
              <Clock className="h-4 w-4" />
              <span>Jeudi 20 Octobre, 14h00-17h00</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
              <MapPin className="h-4 w-4" />
              <span>Centre-ville, 33 rue de la République</span>
            </div>
          </div>
          <Button className="bg-[#E2001A] hover:bg-[#C0001A] text-white">
            Voir les détails
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <Card>
          <CardHeader className="bg-red-50 rounded-t-lg">
            <CardTitle>Vos missions</CardTitle>
            <CardDescription>
              Consultez vos missions à venir
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="border-l-4 border-[#E2001A] pl-4 py-2">
                <p className="text-sm text-gray-500">Jeudi 20 Octobre</p>
                <p className="font-medium">Distribution alimentaire</p>
                <p className="text-sm text-gray-600">14h00-17h00 • Centre-ville</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4 py-2">
                <p className="text-sm text-gray-500">Samedi 22 Octobre</p>
                <p className="font-medium">Formation premiers secours</p>
                <p className="text-sm text-gray-600">09h00-18h00 • Salle Bordeaux</p>
              </div>
            </div>
            <Button variant="outline" className="mt-6 w-full">Voir toutes mes missions</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-red-50 rounded-t-lg">
            <CardTitle>Votre profil</CardTitle>
            <CardDescription>
              Informations personnelles
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Email</span>
                <span className="font-medium">{session?.user?.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Statut</span>
                <span className="font-medium">Bénévole actif</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Formation</span>
                <span className="font-medium">PSC1</span>
              </div>
            </div>
            <Button variant="outline" className="mt-6 w-full">Modifier mon profil</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-red-50 rounded-t-lg">
            <CardTitle>Actualités</CardTitle>
            <CardDescription>
              Restez informé des dernières actualités
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Nouvelle formation disponible</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Une formation aux premiers secours pédiatriques sera organisée le mois prochain.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Collecte de vêtements</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Participez à notre collecte de vêtements pour l'hiver du 1er au 15 novembre.
                </p>
              </div>
            </div>
            <Button variant="outline" className="mt-6 w-full">Toutes les actualités</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
