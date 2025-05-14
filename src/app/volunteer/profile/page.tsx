"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, User, Mail, Lock, Save } from "lucide-react";
import { NavbarVolunteer } from "@/components/volunteer/navbar-volunteer";
import { toast } from "sonner";

export default function VolunteerProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();
  
  // État du formulaire
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  
  // Vérification d'authentification côté client
  const { data: session, status, update } = useSession({
    required: true,
    onUnauthenticated() {
      // Redirection vers la page de connexion si non authentifié
      router.push("/login");
    }
  });
  
  // Vérifier que l'utilisateur est bien un bénévole
  useEffect(() => {
    if (status === "loading") return;
    
    if (session && session.user?.userType !== "VOLUNTEER") {
      console.error("Utilisateur non bénévole, redirection vers /login");
      router.push("/login");
      return;
    }
    
    // Pré-remplir le formulaire avec les données de l'utilisateur
    if (session?.user) {
      setFormData(prev => ({
        ...prev,
        firstName: session.user?.volunteer?.firstName || "",
        lastName: session.user?.volunteer?.lastName || "",
        email: session.user?.email || "",
      }));
      setIsLoading(false);
    }
  }, [session, status, router]);

  // Gestion des changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Gestion de la soumission du formulaire de profil
  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      // Dans une implémentation réelle, vous enverriez ces données à votre API
      // pour mettre à jour le profil de l'utilisateur
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simuler une requête API
      
      // Mettre à jour la session avec les nouvelles informations
      await update({
        ...session,
        user: {
          ...session?.user,
          volunteer: {
            ...session?.user?.volunteer,
            firstName: formData.firstName,
            lastName: formData.lastName,
          }
        }
      });
      
      toast.success("Profil mis à jour avec succès");
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil:", error);
      toast.error("Erreur lors de la mise à jour du profil");
    } finally {
      setIsSaving(false);
    }
  };

  // Gestion de la soumission du formulaire de mot de passe
  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Les nouveaux mots de passe ne correspondent pas");
      return;
    }
    
    if (formData.newPassword.length < 8) {
      toast.error("Le nouveau mot de passe doit contenir au moins 8 caractères");
      return;
    }
    
    setIsSaving(true);
    
    try {
      // Dans une implémentation réelle, appelez votre API pour changer le mot de passe
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simuler une requête API
      
      // Réinitialiser les champs de mot de passe
      setFormData(prev => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
      
      toast.success("Mot de passe mis à jour avec succès");
    } catch (error) {
      console.error("Erreur lors du changement de mot de passe:", error);
      toast.error("Erreur lors du changement de mot de passe");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavbarVolunteer />
        <div className="h-[64px] w-full"></div>
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-[#E2001A]" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarVolunteer />
      <div className="h-[64px] w-full"></div>
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Mon Profil</h1>
        
        <Tabs defaultValue="info" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="info">Informations personnelles</TabsTrigger>
            <TabsTrigger value="password">Changer de mot de passe</TabsTrigger>
          </TabsList>
          
          <TabsContent value="info">
            <Card>
              <CardHeader>
                <CardTitle>Informations personnelles</CardTitle>
                <CardDescription>Modifiez vos informations personnelles ci-dessous.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Votre prénom"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className="pl-10"
                        disabled
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      Contactez un administrateur pour modifier votre adresse email.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="bg-[#E2001A] hover:bg-[#C0001A] text-white w-full sm:w-auto"
                    disabled={isSaving}
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enregistrement...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Enregistrer les modifications
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Changer de mot de passe</CardTitle>
                <CardDescription>
                  Assurez-vous de créer un mot de passe fort.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePasswordSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Mot de passe actuel</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="currentPassword"
                        name="currentPassword"
                        type="password"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Nouveau mot de passe</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="newPassword"
                        name="newPassword"
                        type="password"
                        value={formData.newPassword}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmer le nouveau mot de passe</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="bg-[#E2001A] hover:bg-[#C0001A] text-white w-full sm:w-auto"
                    disabled={isSaving}
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enregistrement...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Mettre à jour le mot de passe
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
