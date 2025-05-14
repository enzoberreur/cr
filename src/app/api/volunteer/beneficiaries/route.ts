import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/volunteer/beneficiaries
// Récupère la liste des bénéficiaires pour le bénévole connecté
export async function GET(req: NextRequest) {
  try {
    // Vérification de l'authentification
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user || session.user.userType !== "VOLUNTEER") {
      return NextResponse.json(
        { error: "Accès non autorisé" },
        { status: 401 }
      );
    }

    // Récupérer les paramètres de recherche
    const { searchParams } = new URL(req.url);
    const searchQuery = searchParams.get("search") || "";
    const status = searchParams.get("status");
    const sort = searchParams.get("sort");
    const order = searchParams.get("order") || "asc";
    
    // Construire la requête avec les filtres
    let whereClause: any = {
      volunteers: {
        userId: session.user.id,
      },
    };

    // Ajouter la recherche si une requête est fournie
    if (searchQuery) {
      whereClause.OR = [
        { firstName: { contains: searchQuery, mode: "insensitive" } },
        { lastName: { contains: searchQuery, mode: "insensitive" } },
      ];
    }

    // Filtrer par statut (basé sur le diagnostic le plus récent)
    // Note: Pour une implémentation complète, il faudrait une logique plus avancée
    // pour déterminer le statut en fonction des diagnostics

    // Récupérer les bénéficiaires avec leurs diagnostics
    const beneficiaries = await prisma.beneficiaries.findMany({
      where: whereClause,
      include: {
        diagnostics: {
          orderBy: {
            diagnosticDate: "desc",
          },
          take: 1,
        },
      },
      orderBy: sort
        ? { [sort]: order === "desc" ? "desc" : "asc" }
        : { lastName: "asc" },
    });

    // Pour chaque bénéficiaire, déterminer son statut global
    const enrichedBeneficiaries = beneficiaries.map((beneficiary) => {
      const latestDiagnostic = beneficiary.diagnostics[0];
      let diagnosticStatus = "NONE";
      
      if (latestDiagnostic) {
        diagnosticStatus = latestDiagnostic.status;
      }
      
      return {
        ...beneficiary,
        latestDiagnostic: latestDiagnostic || null,
        diagnosticStatus,
      };
    });

    // Filtrer par statut si demandé
    let filteredBeneficiaries = enrichedBeneficiaries;
    if (status) {
      filteredBeneficiaries = enrichedBeneficiaries.filter((b) => {
        if (status === "OK" && b.diagnosticStatus === "COMPLETED") return true;
        if (status === "FOLLOW_UP" && b.diagnosticStatus === "IN_PROGRESS") return true;
        if (status === "INCOMPLETE" && (b.diagnosticStatus === "PENDING" || b.diagnosticStatus === "NONE")) return true;
        return false;
      });
    }

    return NextResponse.json(filteredBeneficiaries);
  } catch (error) {
    console.error("Erreur lors de la récupération des bénéficiaires:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des bénéficiaires" },
      { status: 500 }
    );
  }
}

// POST /api/volunteer/beneficiaries
// Crée un nouveau bénéficiaire pour le bénévole connecté
export async function POST(req: NextRequest) {
  try {
    // Vérification de l'authentification
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user || session.user.userType !== "VOLUNTEER") {
      return NextResponse.json(
        { error: "Accès non autorisé" },
        { status: 401 }
      );
    }

    const formData = await req.formData();
    
    // Extraire les données du formulaire
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string || null;
    const birthDate = formData.get("birthDate") as string || null;
    const phone = formData.get("phone") as string || null;
    const address = formData.get("address") as string || null;
    const city = formData.get("city") as string || null;
    const postalCode = formData.get("postalCode") as string || null;
    const familySituation = formData.get("familySituation") as string || null;
    const housing = formData.get("housing") as string || null;
    const professionalSituation = formData.get("professionalSituation") as string || null;
    const monthlyIncome = formData.get("monthlyIncome") ? 
      parseFloat(formData.get("monthlyIncome") as string) : null;
    
    // Gérer le téléchargement de photo si présent
    const photo = formData.get("photo") as File;
    let photoUrl = null;
    
    if (photo) {
      // Ici, vous devriez implémenter la logique pour télécharger la photo
      // vers un service de stockage comme AWS S3, Cloudinary, etc.
      // puis stocker l'URL résultante dans photoUrl
      
      // Exemple simplifié (ne fonctionne pas en production) :
      photoUrl = `/uploads/beneficiaries/${Date.now()}-${photo.name}`;
      
      // Dans une implémentation réelle, vous utiliseriez :
      // const uploadResult = await uploadToYourStorageService(photo);
      // photoUrl = uploadResult.url;
    }
    
    // Créer un utilisateur pour le bénéficiaire
    const randomPassword = Math.random().toString(36).slice(-8); // Mot de passe aléatoire
    const userId = `beneficiary_${Date.now()}`;
    
    const newUser = await prisma.users.create({
      data: {
        id: userId,
        email: email || `beneficiary_${Date.now()}@placeholder.com`,
        password: randomPassword, // Dans un système réel, il faudrait hasher ce mot de passe
        userType: "BENEFICIARY",
        updatedAt: new Date(),
        status: "PENDING",
      },
    });
    
    // Créer le bénéficiaire
    const newBeneficiary = await prisma.beneficiaries.create({
      data: {
        id: `ben_${Date.now()}`,
        firstName,
        lastName,
        birthDate: birthDate ? new Date(birthDate) : null,
        phone,
        address,
        city,
        postalCode,
        familySituation,
        housing,
        professionalSituation,
        monthlyIncome,
        photoUrl,
        userId: newUser.id,
        volunteerRefId: session.user.id, // Lier au bénévole connecté
      },
    });
    
    return NextResponse.json(newBeneficiary, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de la création du bénéficiaire:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création du bénéficiaire" },
      { status: 500 }
    );
  }
}
