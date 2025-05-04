import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            {/* Logo de la Croix-Rouge */}
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 bg-red-600 rounded-sm rotate-45"></div>
              <div className="absolute inset-0 bg-red-600 rounded-sm"></div>
            </div>
            <span className="font-bold text-xl">Le Cœur sur la Main</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/connexion">Connexion</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/inscription">Inscription</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}