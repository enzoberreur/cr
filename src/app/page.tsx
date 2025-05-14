"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, Heart, ShieldCheck, Users, ChevronRight, 
  CheckCircle, Clock, FileText, ArrowDownCircle
} from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  // Effet de changement de navbar au scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-white">
      {/* Navbar pour la landing page */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur transition-all duration-300 ${
          scrolled ? "bg-white/95 border-b border-gray-200 shadow-md" : "bg-white/60 border-b border-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Heart className="h-6 w-6 text-primary transition-all duration-300" />
              </motion.div>
              {/* Effet de pulsation subtil */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-primary/10" 
                initial={{ scale: 1, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.2, 1], 
                  opacity: [0, 0.3, 0] 
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
            </div>
            <motion.span 
              className="font-medium text-base md:text-lg text-gray-800 font-semibold"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Le cœur sur la main
            </motion.span>
          </Link>

          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="rounded-full hover:bg-muted/50 hover:text-primary">
              <Link href="/login">Connexion</Link>
            </Button>
            <Button asChild variant="default" size="sm" className="rounded-full shadow-sm hover:shadow-md transition-all bg-primary hover:bg-primary/90">
              <Link href="/signup">Inscription</Link>
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Subtle background texture - Notion style */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnY2aDZ2LTZoLTZ6bTYgMHY2aDZ2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 -z-20"></div>
      
      {/* Hero Section - Notion-inspired clean design */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-32 md:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            {/* Subtle badge */}
            <Badge variant="red" className="mb-8">
              Croix-Rouge française
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
              Diagnostic social 
              <span className="block text-primary mt-2">personnalisé</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Un diagnostic complet de votre situation pour vous orienter vers les services adaptés à vos besoins spécifiques.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/diagnostic-anonyme">
                  <span>Commencer le diagnostic</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link href="/signup">
                  <span>Créer un compte</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
          
          {/* Simple scroll indicator */}
          <motion.div 
            className="absolute left-1/2 bottom-8 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <p className="text-sm text-gray-500 font-medium mb-2">Découvrir</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDownCircle className="h-5 w-5 text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Clean, Notion-like design */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="gray" className="mb-4">
              Nos services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Comment nous vous accompagnons</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                Nos services sont conçus pour répondre à vos besoins spécifiques et vous offrir un accompagnement personnalisé
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="h-6 w-6 text-primary" />,
                title: "Confidentialité garantie",
                description: "Vos données sont protégées et votre anonymat est préservé tout au long du diagnostic."
              },
              {
                icon: <Heart className="h-6 w-6 text-primary" />,
                title: "Accompagnement personnalisé",
                description: "Des recommandations adaptées à votre situation et à vos besoins spécifiques."
              },
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "Réseau d'entraide",
                description: "Une communauté de bénévoles engagés pour vous aider dans vos démarches."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Card className="p-6 h-full border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-300 bg-white">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section - Toggle-like Notion blocks */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Badge variant="gray" className="mb-4">
              Processus
            </Badge>
            <h2 className="text-3xl font-bold mb-12">Comment fonctionne notre diagnostic</h2>
            
            {[
              {
                icon: <CheckCircle className="h-5 w-5 text-primary" />,
                title: "Réponse à un questionnaire",
                description: "Répondez à nos questions pour nous permettre d'évaluer votre situation personnelle."
              },
              {
                icon: <Clock className="h-5 w-5 text-primary" />,
                title: "Analyse de votre situation",
                description: "Notre système analyse vos réponses pour identifier vos besoins spécifiques."
              },
              {
                icon: <FileText className="h-5 w-5 text-primary" />,
                title: "Recommandations personnalisées",
                description: "Recevez un rapport détaillé avec les services adaptés à votre situation."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="mb-8 border-b border-gray-200 pb-8 last:border-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <div className="flex items-start">
                  <div className="mr-4 pt-1">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Call to action section - Notion's clean style */}
      <section className="py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="red" className="mb-4">
              Commencer
            </Badge>
            <h2 className="text-3xl font-bold mb-6">
              Prêt à démarrer votre diagnostic ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Découvrez les ressources et services à votre disposition pour améliorer votre situation
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/diagnostic-anonyme">
                <span>Démarrer maintenant</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
