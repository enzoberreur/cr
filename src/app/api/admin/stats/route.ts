import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Utiliser l'instance singleton de Prisma
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  try {
    // Vérifier l'authentification
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.userType !== "ADMIN") {
      return new NextResponse(JSON.stringify({ error: "Non autorisé" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Récupérer les statistiques de la base de données
    const [
      totalUsers,
      totalBeneficiaries,
      totalVolunteers, 
      totalAdmins,
      activeUsers,
      pendingUsers,
      totalDiagnostics,
    ] = await Promise.all([
      prisma.users.count(),
      prisma.beneficiaries.count(),
      prisma.volunteers.count(),
      prisma.admins.count(),
      prisma.users.count({ where: { status: "ACTIVE" } }),
      prisma.users.count({ where: { status: "PENDING" } }),
      prisma.diagnostics.count(),
    ]);

    // Calculer les diagnostics du dernier mois
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    
    const diagnosticsLastMonth = await prisma.diagnostics.count({
      where: {
        diagnosticDate: {
          gte: oneMonthAgo,
        }
      }
    });

    // Renvoyer les statistiques
    return new NextResponse(
      JSON.stringify({
        totalUsers,
        totalBeneficiaries,
        totalVolunteers,
        totalAdmins,
        activeUsers,
        pendingUsers,
        totalDiagnostics,
        diagnosticsLastMonth,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Erreur lors de la récupération des statistiques:", error);
    
    return new NextResponse(
      JSON.stringify({
        error: "Erreur lors de la récupération des statistiques",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
