"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { Download, UserPlus } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface DiagnosticResult {
  summary: string;
  recommendations: string[];
  suggestions: string[];
  timestamp: string;
}

export default function ResultatsPage() {
  const [diagnosticData, setDiagnosticData] = useState<unknown>(null);
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  useEffect(() => {
    // Récupérer les données du diagnostic depuis le localStorage
    const savedData = localStorage.getItem("lastDiagnostic");
    if (savedData) {
      setDiagnosticData(JSON.parse(savedData));
    }
  }, []);

  const generatePDF = async () => {
    if (!result) return;

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { height } = page.getSize();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontSize = 12;

    // En-tête
    page.drawText("Diagnostic social - Croix-Rouge française", {
      x: 50,
      y: height - 50,
      size: 20,
      font,
      color: rgb(0.88, 0, 0.1), // Rouge Croix-Rouge
    });

    page.drawText(new Date(result.timestamp).toLocaleDateString("fr-FR"), {
      x: 50,
      y: height - 80,
      size: fontSize,
      font,
    });

    // Résumé
    page.drawText("Résumé de la situation :", {
      x: 50,
      y: height - 120,
      size: 14,
      font,
      color: rgb(0, 0, 0),
    });

    const lines = result.summary.split("\n");

    let currentY = height - 150;
    for (const line of lines) {
      page.drawText(line, {
        x: 50,
        y: currentY,
        size: fontSize,
        font,
      });
      currentY -= fontSize * 1.5;
    }

    // Recommandations
    currentY -= 30;
    page.drawText("Recommandations prioritaires :", {
      x: 50,
      y: currentY,
      size: 14,
      font,
      color: rgb(0, 0, 0),
    });

    currentY -= 20;
    for (const rec of result.recommendations) {
      page.drawText(`• ${rec}`, {
        x: 50,
        y: currentY,
        size: fontSize,
        font,
      });
      currentY -= fontSize * 1.5;
    }

    // Suggestions d'aides
    currentY -= 30;
    page.drawText("Dispositifs et aides accessibles :", {
      x: 50,
      y: currentY,
      size: 14,
      font,
      color: rgb(0, 0, 0),
    });

    currentY -= 20;
    for (const sugg of result.suggestions) {
      page.drawText(`• ${sugg}`, {
        x: 50,
        y: currentY,
        size: fontSize,
        font,
      });
      currentY -= fontSize * 1.5;
    }

    // Pied de page
    page.drawText("Document généré automatiquement - Usage informatif uniquement", {
      x: 50,
      y: 30,
      size: 10,
      font,
      color: rgb(0.5, 0.5, 0.5),
    });

    // Générer le PDF
    const pdfBytes = await pdfDoc.save();
    
    // Télécharger le fichier
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `diagnostic-social-${new Date().toISOString().split("T")[0]}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const fetchResults = async () => {
      if (!diagnosticData) return;

      try {
        const response = await fetch("/api/diagnostic/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(diagnosticData),
        });

        if (!response.ok) throw new Error("Erreur lors de la génération");
        
        const data = await response.json();
        setResult(data);
      } catch (error) {
        console.error("Erreur:", error);
      }
    };

    fetchResults();
  }, [diagnosticData]);

  if (!result) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Badge variant="gray" className="mb-4">
            Traitement en cours
          </Badge>
          <h1 className="text-2xl font-bold tracking-tight mb-6">Génération de votre diagnostic</h1>
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-12 text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="mx-auto mb-4 h-8 w-8 text-gray-400"
              >
                ⟳
              </motion.div>
              <p className="text-gray-600">Chargement des résultats...</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 space-y-8">
      {/* Subtle background texture - Notion style */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnY2aDZ2LTZoLTZ6bTYgMHY2aDZ2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 -z-20"></div>
      
      {/* En-tête */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <Badge variant="red" className="mb-4">
          Résultats
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Votre diagnostic social</h1>
        <p className="text-gray-600">
          Diagnostic réalisé le {new Date(result.timestamp).toLocaleDateString("fr-FR")}
        </p>
      </motion.div>

      {/* Résumé */}
      <Card>
        <CardHeader>
          <CardTitle>Résumé de votre situation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-line">{result.summary.replace(/'/g, "&apos;")}</p>
        </CardContent>
      </Card>

      {/* Recommandations */}
      <Card>
        <CardHeader>
          <CardTitle>Recommandations prioritaires</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            {result.recommendations.map((rec, index) => (
              <li key={index} className="text-gray-700">{rec.replace(/'/g, "&apos;")}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Suggestions d'aides */}
      <Card>
        <CardHeader>
          <CardTitle>Dispositifs et aides accessibles</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            {result.suggestions.map((sugg, index) => (
              <li key={index} className="text-gray-700">{sugg.replace(/'/g, "&apos;")}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <Button onClick={generatePDF} className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Télécharger en PDF
        </Button>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="/signup?withDiagnostic=true" className="flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            Créer un compte pour sauvegarder
          </Link>
        </Button>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600 text-center">
        <p>
          Ce diagnostic n&apos;est pas enregistré et sera perdu si vous fermez cette page.
          Créez un compte pour le sauvegarder et accéder à un suivi personnalisé.
        </p>
      </div>
    </div>
  );
}