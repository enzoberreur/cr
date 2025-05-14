"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Heart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import LogoutButton from "./logout-button";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { data: session } = useSession();
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
    <motion.header 
      className={`sticky top-0 z-50 w-full backdrop-blur transition-all duration-300 ${
        scrolled ? "border-b border-gray-200 bg-white/95 supports-[backdrop-filter]:bg-white/80" : "bg-white/0 supports-[backdrop-filter]:bg-white/0"
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
            className="hidden font-medium sm:inline-block text-base md:text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 font-semibold"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Croix-Rouge française
          </motion.span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-9 px-4 py-2 hover:bg-muted/50 hover:text-primary transition-colors duration-300 rounded-full text-sm font-medium">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[calc(100vw-2rem)] max-w-md p-4 md:w-[500px] bg-white rounded-xl shadow-lg border border-gray-100">
                  <ul className="grid gap-3 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/diagnostic-anonyme"
                          className="group block rounded-lg p-4 transition-all duration-300 hover:bg-muted/50"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-primary font-medium mb-1">Diagnostic Anonyme</div>
                              <p className="text-sm text-muted-foreground">Évaluez votre situation sans créer de compte</p>
                            </div>
                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href={session ? "/beneficiary/dashboard" : "/login"}
                          className="group block rounded-lg p-4 transition-all duration-300 hover:bg-muted/50"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-primary font-medium mb-1">Espace Bénéficiaire</div>
                              <p className="text-sm text-muted-foreground">Accédez à votre espace personnel</p>
                            </div>
                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-9 px-4 py-2 hover:bg-muted/50 hover:text-primary transition-colors duration-300 rounded-full text-sm font-medium">
                À propos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[calc(100vw-2rem)] max-w-md p-4 md:w-[400px] bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="grid gap-3 p-2">
                    <Link
                      href="#"
                      className="group block rounded-lg p-4 transition-all duration-300 hover:bg-muted/50"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-primary font-medium mb-1">Notre mission</div>
                          <p className="text-sm text-muted-foreground">Découvrez nos actions sociales</p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="group block rounded-lg p-4 transition-all duration-300 hover:bg-muted/50"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-primary font-medium mb-1">Contact</div>
                          <p className="text-sm text-muted-foreground">Besoin d'aide ?</p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
                      </div>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          {session ? (
            <div className="flex items-center gap-2">
              <span className="text-sm hidden md:block">
                Bonjour, <span className="font-semibold">{session.user?.email?.split('@')[0]}</span>
              </span>

              {session.user?.userType === "ADMIN" && (
                <Button asChild variant="ghost" size="sm" className="rounded-full">
                  <Link href="/admin/dashboard">
                    Administration
                  </Link>
                </Button>
              )}
              {session.user?.userType === "VOLUNTEER" && (
                <Button asChild variant="ghost" size="sm" className="rounded-full">
                  <Link href="/volunteer/dashboard">
                    Espace bénévole
                  </Link>
                </Button>
              )}
              {session.user?.userType === "BENEFICIARY" && (
                <Button asChild variant="ghost" size="sm" className="rounded-full">
                  <Link href="/beneficiary/dashboard">
                    Mon espace
                  </Link>
                </Button>
              )}
              
              <LogoutButton />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button asChild variant="ghost" size="sm" className="rounded-full hover:bg-muted/50 hover:text-primary">
                <Link href="/login">Connexion</Link>
              </Button>
              <Button asChild variant="default" size="sm" className="rounded-full shadow-sm hover:shadow-md transition-all">
                <Link href="/signup">Inscription</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
}