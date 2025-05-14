import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;
    
    console.log("Middleware - Path:", path);
    console.log("Middleware - Token:", token);

    // Si aucun token n'existe, rediriger vers la page de connexion
    if (!token) {
      console.log("Aucun token trouvé, redirection vers /login");
      return NextResponse.redirect(new URL("/login", req.url));
    }
    
    // Rediriger l'utilisateur vers son tableau de bord s'il accède à la racine ou à /login alors qu'il est déjà authentifié
    if ((path === "/" || path === "/login") && token.userType) {
      console.log("Utilisateur déjà authentifié, redirection vers son tableau de bord");
      
      if (token.userType === "ADMIN") {
        console.log("Redirection admin vers /admin/dashboard");
        return NextResponse.redirect(new URL("/admin/dashboard", req.url));
      }
      
      if (token.userType === "VOLUNTEER") {
        console.log("Redirection bénévole vers /volunteer/dashboard");
        return NextResponse.redirect(new URL("/volunteer/dashboard", req.url));
      }
      
      if (token.userType === "BENEFICIARY") {
        console.log("Redirection bénéficiaire vers /beneficiary/dashboard");
        return NextResponse.redirect(new URL("/beneficiary/dashboard", req.url));
      }
    }

    // Redirection si l'utilisateur tente d'accéder à une zone non autorisée
    if (path.startsWith("/admin") && token.userType !== "ADMIN") {
      console.log("Accès non autorisé à /admin, redirection vers /login");
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (path.startsWith("/volunteer") && token.userType !== "VOLUNTEER") {
      console.log("Accès non autorisé à /volunteer, redirection vers /login");
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (path.startsWith("/beneficiary") && token.userType !== "BENEFICIARY") {
      console.log("Accès non autorisé à /beneficiary, redirection vers /login");
      return NextResponse.redirect(new URL("/login", req.url));
    }

    console.log("Accès autorisé pour", token.userType);
    return NextResponse.next();
  },
  {
    callbacks: {
      // Cette fonction est appelée avant le middleware et doit retourner true pour y accéder
      authorized: ({ token, req }) => {
        const path = req.nextUrl.pathname;
        console.log("Middleware - Vérification pour:", path);
        
        // Plus besoin de retourner !!token car nous gérons cela dans le middleware
        // Mais cette fonction doit retourner true pour que le middleware soit exécuté
        return true;
      },
    },
    pages: {
      signIn: "/login",
    },
  }
);

export const config = {
  // S'assurer que toutes les routes qui nécessitent une authentification sont protégées
  // et ajouter la racine et login pour gérer les redirections automatiques
  matcher: [
    "/",
    "/login",
    "/admin/:path*", 
    "/volunteer/:path*", 
    "/beneficiary/:path*",
    "/admin/dashboard",
    "/volunteer/dashboard",
    "/beneficiary/dashboard"
  ],
};