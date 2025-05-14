"use client";

import { DiagnosticForm } from "@/components/diagnostic-form";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function DiagnosticAnonymePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10 text-center"
      >
        {/* Subtle badge */}
        <Badge variant="red" className="mb-6">
          Questionnaire
        </Badge>
        
        <h1 className="text-4xl font-bold tracking-tight mb-4">Diagnostic social anonyme</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ce questionnaire vous permettra d'évaluer votre situation et d'obtenir des 
          recommandations personnalisées. Vos réponses ne seront pas sauvegardées 
          sans votre consentement.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <DiagnosticForm />
      </motion.div>
    </div>
  );
}