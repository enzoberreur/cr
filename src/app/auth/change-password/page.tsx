"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, AlertCircle, CheckCircle } from "lucide-react";

export default function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const { data: session } = useSession({ required: true });
  const router = useRouter();

  const validateForm = () => {
    if (!currentPassword) {
      setError("Veuillez saisir votre mot de passe actuel");
      return false;
    }
    
    if (!newPassword) {
      setError("Veuillez saisir un nouveau mot de passe");
      return false;
    }
    
    if (newPassword.length < 8) {
      setError("Le nouveau mot de passe doit contenir au moins 8 caractères");
      return false;
    }
    
    if (newPassword !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return false;
    }
    
    if (currentPassword === newPassword) {
      setError("Le nouveau mot de passe doit être différent de l'ancien");
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Une erreur est survenue");
      }
      
      setSuccess(true);
      
      setTimeout(() => {
        if (session?.user?.userType === "VOLUNTEER") {
          router.push("/volunteer/dashboard");
        } else if (session?.user?.userType === "ADMIN") {
          router.push("/admin/dashboard");
        } else if (session?.user?.userType === "BENEFICIARY") {
          router.push("/beneficiary/dashboard");
        } else {
          router.push("/");
        }
      }, 2000);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Changez votre mot de passe</CardTitle>
          <CardDescription>
            Pour sécuriser votre compte, veuillez changer votre mot de passe provisoire
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {success ? (
            <div className="py-6 text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Mot de passe modifié avec succès!</h3>
              <p className="mt-2 text-gray-500">Vous allez être redirigé vers votre tableau de bord...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="currentPassword" className="text-sm font-medium text-gray-700">
                  Mot de passe actuel
                </label>
                <Input
                  id="currentPassword"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="newPassword" className="text-sm font-medium text-gray-700">
                  Nouveau mot de passe
                </label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  disabled={isLoading}
                  required
                />
                <p className="text-xs text-gray-500">
                  Utilisez au moins 8 caractères avec des lettres et des chiffres
                </p>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                  Confirmez le mot de passe
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
              
              {error && (
                <div className="p-3 rounded-md bg-red-50 text-red-700 text-sm flex items-start">
                  <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-[#E2001A] hover:bg-[#C0001A] text-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <Loader2 className="animate-spin mr-2 h-4 w-4" />
                    Modification en cours...
                  </span>
                ) : (
                  "Changer mon mot de passe"
                )}
              </Button>
            </form>
          )}
        </CardContent>
        
        <CardFooter className="text-sm text-gray-500 text-center">
          Changez votre mot de passe pour sécuriser votre compte
        </CardFooter>
      </Card>
    </div>
  );
}
