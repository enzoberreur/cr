'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative h-12 w-12">
              <Image
                src="/logo.svg"
                alt="Logo Croix-Rouge"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Créer un compte
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Rejoignez la Croix-Rouge Française en créant un compte bénéficiaire
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="bg-red-50">
            <CardTitle>Inscription Bénéficiaire</CardTitle>
            <CardDescription>
              Créez un compte pour accéder à des services d'aide et faire des diagnostics
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
              <li>Faites des diagnostics personnalisés</li>
              <li>Suivez vos demandes d'aide</li>
              <li>Accédez à votre historique</li>
              <li>Communiquez avec vos référents bénévoles</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-red-600 hover:bg-red-700">
              <Link href="/inscription/beneficiaire">
                Créer un compte bénéficiaire
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">Vous êtes bénévole ?</span> Les comptes bénévoles sont créés par les administrateurs. 
            Veuillez contacter votre responsable d'unité locale pour demander la création de votre compte.
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Vous avez déjà un compte ?{" "}
            <Link href="/connexion" className="text-red-600 hover:text-red-500">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}