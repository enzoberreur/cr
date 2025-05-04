import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {/* Logo de la Croix-Rouge */}
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 bg-red-600 rounded-sm rotate-45"></div>
              <div className="absolute inset-0 bg-red-600 rounded-sm"></div>
            </div>
            <span className="font-bold text-xl">Croix-Rouge Française</span>
          </div>
          <p className="text-sm text-neutral-500">
            Système de gestion des diagnostics et suivi des bénéficiaires
          </p>
        </div>
        
        <div>
          <h3 className="font-medium text-sm mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#diagnostics" className="text-neutral-500 hover:text-neutral-900">
                Diagnostics
              </Link>
            </li>
            <li>
              <Link href="#suivi" className="text-neutral-500 hover:text-neutral-900">
                Suivi
              </Link>
            </li>
            <li>
              <Link href="#dossiers" className="text-neutral-500 hover:text-neutral-900">
                Gestion des dossiers
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-sm mb-3">Ressources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#formation" className="text-neutral-500 hover:text-neutral-900">
                Formation
              </Link>
            </li>
            <li>
              <Link href="#guide" className="text-neutral-500 hover:text-neutral-900">
                Guide d'utilisation
              </Link>
            </li>
            <li>
              <Link href="#faq" className="text-neutral-500 hover:text-neutral-900">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-sm mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#contact" className="text-neutral-500 hover:text-neutral-900">
                Nous contacter
              </Link>
            </li>
            <li>
              <Link href="#support" className="text-neutral-500 hover:text-neutral-900">
                Support technique
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Croix-Rouge Française. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-xs text-neutral-500">
            <Link href="#privacy" className="hover:text-neutral-900">
              Politique de confidentialité
            </Link>
            <Link href="#terms" className="hover:text-neutral-900">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}