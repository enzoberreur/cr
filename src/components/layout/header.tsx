import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            {/* Logo de la Croix-Rouge */}
            <div className="relative h-8 w-8">
              <Image
                src="/logo.svg"
                alt="Logo Croix-Rouge"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold text-xl">Le Cœur sur la Main</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/connexion">Connexion</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/inscription/beneficiaire">Inscription</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}