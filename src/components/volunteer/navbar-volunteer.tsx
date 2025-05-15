"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import LogoutButton from "@/components/logout-button";
import { UserCircle, Heart, ChevronDown } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";

export function NavbarVolunteer() {
  const { data: session } = useSession();
  
  const userName = session?.user?.name || 
                  `${session?.user?.volunteer?.firstName || ''} ${session?.user?.volunteer?.lastName || ''}`;

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 h-[64px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full">
          {/* Logo et nom du site */}
          <div className="flex items-center">
            <Link href="/volunteer/dashboard" className="flex-shrink-0 flex items-center space-x-2 group">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Heart className="h-6 w-6 text-[#E2001A] transition-all duration-300" />
                </motion.div>
                {/* Effet de pulsation subtil */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-[#E2001A]/10" 
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
              <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#E2001A] to-[#C0001A]">
                Croix-Rouge française
              </span>
            </Link>
          </div>
          
          {/* Profil utilisateur et déconnexion */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 hover:bg-gray-50 px-4 py-2 rounded-full transition-colors border border-gray-100">
                <UserCircle className="h-5 w-5 text-[#E2001A]" />
                <span className="text-sm font-medium text-gray-800">{userName}</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 p-2">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{userName}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {session?.user?.email || ''}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/volunteer/dashboard" className="flex items-center">
                    <span className="mr-2">🏠</span>
                    <span>Tableau de bord</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/volunteer/dashboard" className="flex items-center">
                    <span className="mr-2">👥</span>
                    <span>Mes bénéficiaires</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/volunteer/notes" className="flex items-center">
                    <span className="mr-2">📝</span>
                    <span>Mes notes</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/volunteer/profile" className="flex items-center">
                    <span className="mr-2">⚙️</span>
                    <span>Paramètres du profil</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <div className="p-2">
                  <LogoutButton className="w-full" />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
