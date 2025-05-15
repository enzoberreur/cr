"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, UserCircle2, Settings } from "lucide-react";
import LogoutButton from "../logout-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavbarAdmin() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-[#E2001A]" />
            <span className="hidden font-bold text-xl text-gray-800 sm:inline-block">Admin</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            {/* Les liens de navigation ont été supprimés */}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <UserCircle2 className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserCircle2 className="mr-2 h-4 w-4" />
                <span>{session?.user?.email}</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/admin/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Paramètres</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogoutButton
                  showIcon={true}
                  showText={true}
                  variant="link"
                  size="sm"
                  className="p-0 h-auto font-normal w-full justify-start text-red-600 hover:text-red-700 hover:bg-transparent"
                />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
