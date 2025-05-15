"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, FileText, BriefcaseMedical, UserCheck } from "lucide-react";

// Interface pour les statistiques
interface Stats {
  totalUsers: number;
  totalBeneficiaries: number;
  totalVolunteers: number;
  totalAdmins: number;
  totalDiagnostics: number;
  diagnosticsLastMonth: number;
  activeUsers: number;
  pendingUsers: number;
}

// Données par défaut (utilisées pendant le chargement)
const defaultStats: Stats = {
  totalUsers: 0,
  totalBeneficiaries: 0,
  totalVolunteers: 0,
  totalAdmins: 0,
  totalDiagnostics: 0,
  diagnosticsLastMonth: 0,
  activeUsers: 0,
  pendingUsers: 0,
};

export default function StatsCards() {
  const [stats, setStats] = useState<Stats>(defaultStats);
  const [isLoading, setIsLoading] = useState(true);

  // Charger les vraies données depuis l'API
  useEffect(() => {
    async function fetchStats() {
      try {
        setIsLoading(true);
        const response = await fetch('/api/admin/stats');
        
        if (!response.ok) {
          throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        setStats(data);
      } catch (err) {
        console.error("Erreur lors de la récupération des stats:", err);
        // Utiliser des données fictives en cas d'erreur pour le développement
        setStats({
          totalUsers: 487,
          totalBeneficiaries: 328,
          totalVolunteers: 142,
          totalAdmins: 17,
          totalDiagnostics: 845,
          diagnosticsLastMonth: 32,
          activeUsers: 421,
          pendingUsers: 66,
        });
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchStats();
  }, []);

  // Calculer les pourcentages pour les barres de progression
  const activeUserPercentage = Math.round((stats.activeUsers / stats.totalUsers) * 100);
  const beneficiaryPercentage = Math.round((stats.totalBeneficiaries / stats.totalUsers) * 100);
  const volunteerPercentage = Math.round((stats.totalVolunteers / stats.totalUsers) * 100);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* Carte pour le total des utilisateurs */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Utilisateurs totaux</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{isLoading ? "..." : stats.totalUsers}</div>
          <div className="text-xs text-muted-foreground">
            {isLoading ? "" : `${stats.activeUsers} actifs, ${stats.pendingUsers} en attente`}
          </div>
          <Progress 
            value={isLoading ? 0 : activeUserPercentage} 
            className="h-2 mt-2" 
          />
        </CardContent>
      </Card>

      {/* Carte pour les bénéficiaires */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Bénéficiaires</CardTitle>
          <UserCheck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{isLoading ? "..." : stats.totalBeneficiaries}</div>
          <div className="text-xs text-muted-foreground">
            {isLoading ? "" : `${beneficiaryPercentage}% des utilisateurs`}
          </div>
          <Progress 
            value={isLoading ? 0 : beneficiaryPercentage} 
            className="h-2 mt-2" 
          />
        </CardContent>
      </Card>

      {/* Carte pour les bénévoles */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Bénévoles</CardTitle>
          <BriefcaseMedical className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{isLoading ? "..." : stats.totalVolunteers}</div>
          <div className="text-xs text-muted-foreground">
            {isLoading ? "" : `${volunteerPercentage}% des utilisateurs`}
          </div>
          <Progress 
            value={isLoading ? 0 : volunteerPercentage} 
            className="h-2 mt-2" 
          />
        </CardContent>
      </Card>

      {/* Carte pour les diagnostics */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Diagnostics</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{isLoading ? "..." : stats.totalDiagnostics}</div>
          <div className="text-xs text-muted-foreground">
            {isLoading ? "" : `+${stats.diagnosticsLastMonth} ce mois-ci`}
          </div>
          <Progress 
            value={isLoading ? 0 : 70} 
            className="h-2 mt-2" 
          />
        </CardContent>
      </Card>
    </div>
  );
}
