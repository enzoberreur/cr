'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Webcam from 'react-webcam';

// Fonction pour simuler l'extraction d'embedding facial depuis une image
// Normalement, cette fonctionnalité serait implémentée avec une véritable API de machine learning
const extractFaceEmbedding = async (imageData: string): Promise<number[]> => {
  // Simuler l'appel à un modèle d'embedding facial
  // À remplacer par un véritable appel à une API comme Face-API.js, TensorFlow.js ou à une API externe
  console.log("Extraction de l'embedding facial simulée...");
  
  // Création d'un embedding aléatoire (à remplacer par un réel embedding)
  return Array.from({ length: 128 }, () => Math.random() * 2 - 1);
};

export default function FacialLoginPage() {
  const webcamRef = useRef<Webcam | null>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const router = useRouter();

  const handleUserMedia = useCallback(() => {
    setIsCameraReady(true);
  }, []);

  const captureImage = useCallback(async () => {
    if (!webcamRef.current) return;
    
    try {
      setIsCapturing(true);
      setError('');
      
      // Prendre la photo
      const imageSrc = webcamRef.current.getScreenshot();
      if (!imageSrc) {
        throw new Error("Impossible de capturer l'image de la caméra");
      }
      
      setCapturedImage(imageSrc);
      
      // Extraire l'embedding facial (à remplacer par une véritable implémentation)
      const faceEmbedding = await extractFaceEmbedding(imageSrc);
      
      // Tenter l'authentification avec l'embedding facial
      setSuccess("Vérification de votre visage...");
      const result = await signIn('face-recognition', {
        faceEmbedding: JSON.stringify(faceEmbedding),
        searchMode: 'false',
        redirect: false,
      });
      
      if (result?.error) {
        setError("Visage non reconnu. Veuillez réessayer ou utiliser votre identifiant/mot de passe.");
        setSuccess('');
      } else {
        setSuccess("Visage reconnu ! Redirection...");
        setTimeout(() => {
          router.push('/beneficiary/dashboard');
        }, 1000);
      }
    } catch (error) {
      console.error("Erreur lors de la capture:", error);
      setError("Une erreur est survenue lors de la reconnaissance faciale.");
    } finally {
      setIsCapturing(false);
    }
  }, [router]);

  // Détecter si la caméra est disponible
  useEffect(() => {
    const checkCamera = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        if (videoDevices.length === 0) {
          setError("Aucune caméra détectée. Veuillez utiliser l'authentification par mot de passe.");
        }
      } catch (error) {
        console.error("Erreur lors de la détection de la caméra:", error);
        setError("Impossible d'accéder à la caméra. Veuillez autoriser l'accès ou utiliser l'authentification par mot de passe.");
      }
    };
    
    checkCamera();
  }, []);

  const resetCapture = () => {
    setCapturedImage(null);
    setError('');
    setSuccess('');
  };

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
              />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Connexion par reconnaissance faciale
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Positionnez votre visage face à la caméra
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Reconnaissance faciale</CardTitle>
            <CardDescription>
              Cette méthode est réservée aux bénéficiaires enregistrés
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{error}</span>
              </div>
            )}

            {success && (
              <div className="bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{success}</span>
              </div>
            )}

            <div className="flex flex-col items-center justify-center">
              {!capturedImage ? (
                <div className="relative w-full h-64 md:h-80 rounded-md overflow-hidden bg-gray-100 border">
                  {isCameraReady ? (
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      videoConstraints={{ facingMode: "user" }}
                      onUserMedia={handleUserMedia}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-gray-500">Chargement de la caméra...</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative w-full h-64 md:h-80 rounded-md overflow-hidden bg-gray-100 border">
                  <img 
                    src={capturedImage} 
                    alt="Photo capturée" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="mt-4 space-x-2">
                {!capturedImage ? (
                  <Button
                    onClick={captureImage}
                    disabled={!isCameraReady || isCapturing}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    {isCapturing ? 'Reconnaissance en cours...' : 'Prendre une photo'}
                  </Button>
                ) : (
                  <Button
                    onClick={resetCapture}
                    disabled={isCapturing}
                    variant="outline"
                  >
                    Reprendre une photo
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="text-sm text-center w-full">
              <p>
                Problème avec la reconnaissance faciale ?{" "}
                <Link href="/connexion" className="text-red-600 hover:text-red-500">
                  Se connecter par mot de passe
                </Link>
              </p>
            </div>
            <div className="text-sm text-center w-full">
              <Link href="/diagnostic/anonyme" className="text-gray-600 hover:text-gray-500">
                Faire un diagnostic anonyme
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}