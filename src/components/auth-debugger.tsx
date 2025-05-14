"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

/**
 * Composant pour afficher l'état de la session et aider au débogage
 * À utiliser uniquement en développement
 */
export function AuthDebugger() {
  const { data: session, status, update } = useSession();
  const [isExpanded, setIsExpanded] = useState(false);

  if (process.env.NODE_ENV === "production") {
    return null; // Ne pas afficher en production
  }

  return (
    <Card className="fixed bottom-4 right-4 w-96 bg-slate-100 text-slate-800 shadow-lg z-50 opacity-90 hover:opacity-100 transition-opacity">
      <CardHeader className="py-2 bg-slate-200 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <CardTitle className="text-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${status === "authenticated" ? "bg-green-500" : status === "loading" ? "bg-yellow-500" : "bg-red-500"}`}></div>
            NextAuth Status: {status}
          </div>
          <span>{isExpanded ? "▼" : "◀"}</span>
        </CardTitle>
      </CardHeader>
      
      {isExpanded && (
        <>
          <CardContent className="py-2 text-xs overflow-auto max-h-60">
            <div className="font-mono">
              <pre>{JSON.stringify(session, null, 2)}</pre>
            </div>
          </CardContent>
          <CardFooter className="py-2 flex gap-2">
            <Button size="sm" variant="outline" onClick={() => update()}>
              Rafraîchir Session
            </Button>
            <Button size="sm" variant="outline" onClick={() => {
              fetch("/api/auth/session")
                .then(r => r.json())
                .then(data => {
                  console.log("API Session:", data);
                  alert("Session API vérifiée - voir console");
                });
            }}>
              Vérifier API
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
