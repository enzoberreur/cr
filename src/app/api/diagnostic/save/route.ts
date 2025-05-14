import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const data = await req.json();
    const { diagnostic, results } = data;

    // Créer un nouveau diagnostic dans la base de données
    const savedDiagnostic = await prisma.diagnostics.create({
      data: {
        id: randomUUID(),
        diagnosticDate: new Date(),
        status: "COMPLETED",
        formResponses: diagnostic,
        results: results,
        recommendations: results.recommendations,
        nextSteps: "À définir avec un bénévole",
        beneficiaryId: session.user.id,
        version: "v1",
      },
    });

    return NextResponse.json({
      success: true,
      diagnosticId: savedDiagnostic.id,
    });

  } catch (error) {
    console.error("Erreur lors de la sauvegarde du diagnostic:", error);
    return NextResponse.json(
      { error: "Erreur lors de la sauvegarde du diagnostic" },
      { status: 500 }
    );
  }
}