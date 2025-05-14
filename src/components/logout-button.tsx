"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut, Loader2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface LogoutButtonProps {
  variant?: "ghost" | "default" | "destructive" | "outline" | "secondary" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  showIcon?: boolean;
  showText?: boolean;
  className?: string;
}

export default function LogoutButton({
  variant = "ghost",
  size = "default",
  showIcon = true,
  showText = true,
  className = "text-gray-600 hover:text-[#E2001A] hover:bg-red-50"
}: LogoutButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  
  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await signOut({ redirect: false });
      router.push("/logout");
    } catch (error) {
      console.error("Erreur de déconnexion:", error);
      setIsLoggingOut(false);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button
        onClick={handleLogout}
        disabled={isLoggingOut}
        variant={variant}
        size={size}
        className={`transition-all duration-300 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="flex items-center gap-2"
          animate={{ x: isHovered && !isLoggingOut ? 5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isLoggingOut ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : showIcon && (
            <LogOut className="h-4 w-4" />
          )}
          {showText && <span>Déconnexion</span>}
        </motion.div>
      </Button>
    </motion.div>
  );
}