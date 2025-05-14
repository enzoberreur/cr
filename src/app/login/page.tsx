"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // Le router est utilisé implicitement via signIn avec redirect

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      console.log("Tentative de connexion avec:", { email });
      // Modifier le callbackUrl pour qu'il soit vide - nous gérerons la redirection nous-mêmes
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      
      console.log("Résultat de signIn:", res);

      if (res?.error) {
        console.error("Erreur de connexion:", res.error);
        
        // Message d'erreur plus détaillé
        if (res.error === "CredentialsSignin") {
          setError("Identifiants incorrects. Vérifiez votre email et mot de passe.");
        } else {
          setError(`Erreur de connexion: ${res.error}`);
        }
        
        setIsLoading(false);
        return;
      }

      if (res?.ok) {
        try {
          // Attendre un peu plus longtemps pour s'assurer que la session est bien créée
          console.log("Attente avant récupération de la session...");
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Récupérer la session après la connexion
          console.log("Récupération de la session...");
          const sessionResponse = await fetch("/api/auth/session");
          console.log("Status de la réponse:", sessionResponse.status);
          
          const session = await sessionResponse.json();
          console.log("Session récupérée (détails complets):", JSON.stringify(session, null, 2));
          
          const userType = session?.user?.userType;
          console.log("Type d'utilisateur extrait:", userType);

          // Fonction de redirection directe pour éviter tout problème de synchronisation
          const redirectToUserDashboard = (type: string) => {
            let path = "/";
            
            if (type === "ADMIN") {
              path = "/admin/dashboard";
              console.log("Redirection vers le tableau de bord admin");
            } else if (type === "VOLUNTEER") {
              path = "/volunteer/dashboard";
              console.log("Redirection vers le tableau de bord bénévole");
            } else if (type === "BENEFICIARY") {
              path = "/beneficiary/dashboard";
              console.log("Redirection vers le tableau de bord bénéficiaire");
            } else {
              console.warn("Type d'utilisateur inconnu ou invalide:", type);
            }
            
            console.log("Chemin de redirection:", path);
            
            // Forcer la redirection avec window.location.replace pour un rafraîchissement complet
            // et éviter les problèmes de cache de Next.js
            window.location.replace(path);
          };
          
          // Effectuer la redirection en fonction du type d'utilisateur
          redirectToUserDashboard(userType);
        } catch (sessionError) {
          console.error("Erreur lors de la récupération de la session:", sessionError);
          setError("Erreur lors de la récupération de votre session");
          setIsLoading(false);
        }
      }
    } catch (err) {
      console.error("Erreur lors de la connexion:", err);
      setError(`Une erreur est survenue lors de la connexion: ${err instanceof Error ? err.message : String(err)}`);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Subtle background texture - Notion style */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnY2aDZ2LTZoLTZ6bTYgMHY2aDZ2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 -z-20"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Retour à l'accueil */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#E2001A] transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Retour à l&apos;accueil</span>
        </Link>

        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="space-y-3 text-center">
            <Badge variant="red" className="mx-auto mb-2">
              Accès sécurisé
            </Badge>
            <CardTitle className="text-2xl font-bold">Connexion</CardTitle>
            <CardDescription className="text-gray-600">
              Accédez à votre espace personnel
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="transition-all duration-200 focus:ring-[#E2001A] focus:border-[#E2001A]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Mot de passe
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  className="transition-all duration-200 focus:ring-[#E2001A] focus:border-[#E2001A]"
                />
              </div>

              {error && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-[#E2001A]"
                >
                  {error}
                </motion.p>
              )}

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Connexion en cours...
                  </span>
                ) : (
                  "Se connecter"
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-gray-500">
              Pas encore de compte ?{" "}
              <Link href="/signup" className="text-[#E2001A] hover:text-red-700 hover:underline transition-colors duration-200">
                Créer un compte
              </Link>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}