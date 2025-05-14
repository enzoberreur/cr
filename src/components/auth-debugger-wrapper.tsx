"use client";

import dynamic from "next/dynamic";

// Charger dynamiquement le composant AuthDebugger uniquement en développement
const AuthDebugger = dynamic(() => import("@/components/auth-debugger").then(mod => mod.AuthDebugger), {
  ssr: false
});

export function AuthDebuggerWrapper() {
  return process.env.NODE_ENV !== "production" ? <AuthDebugger /> : null;
}
