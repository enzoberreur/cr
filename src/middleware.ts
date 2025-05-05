import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

// Définition des routes protégées par rôle
const adminRoutes = ['/admin', '/admin/dashboard'];
const volunteerRoutes = ['/volunteer', '/volunteer/dashboard'];
const beneficiaryRoutes = ['/beneficiary', '/beneficiary/dashboard'];
const authRoutes = ['/connexion', '/inscription/beneficiaire', '/login-facial'];

// Routes publiques accessibles sans connexion
const publicRoutes = ['/', '/diagnostic', '/contact', '/a-propos', '/diagnostic/anonyme'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Récupération du token (session)
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  
  // Fonction pour rediriger vers la page appropriée
  const redirectToHomePage = () => {
    return NextResponse.redirect(new URL('/', request.url));
  };
  
  const redirectToDashboard = (role: string) => {
    const dashboardPath = {
      admin: '/admin/dashboard',
      volunteer: '/volunteer/dashboard',
      beneficiary: '/beneficiary/dashboard',
    }[role] || '/';
    
    return NextResponse.redirect(new URL(dashboardPath, request.url));
  };
  
  // Routes publiques - accès pour tous
  if (publicRoutes.some(route => pathname === route || pathname.startsWith(`${route}/`))) {
    return NextResponse.next();
  }
  
  // Routes API - gérées par leurs propres mécanismes d'authentification
  if (pathname.startsWith('/api/')) {
    return NextResponse.next();
  }
  
  // Routes d'authentification - redirection si déjà connecté
  if (authRoutes.some(route => pathname === route || pathname.startsWith(`${route}/`))) {
    if (token) {
      // Si l'utilisateur est déjà connecté, on le redirige vers son tableau de bord
      return redirectToDashboard(token.userType as string);
    }
    return NextResponse.next();
  }
  
  // Si l'utilisateur n'est pas connecté et essaie d'accéder à une route protégée
  if (!token) {
    return NextResponse.redirect(new URL('/connexion', request.url));
  }
  
  // Vérifier si le compte est actif
  if (token.accountStatus !== 'active') {
    // Vérifier si la route actuelle est déjà la page de compte inactif
    if (pathname === '/compte-inactif') {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/compte-inactif', request.url));
  }
  
  const userRole = token.userType as string;
  
  // Vérification des accès selon le rôle
  if (adminRoutes.some(route => pathname === route || pathname.startsWith(`${route}/`)) && userRole !== 'admin') {
    if (userRole === 'volunteer') {
      return redirectToDashboard('volunteer');
    }
    if (userRole === 'beneficiary') {
      return redirectToDashboard('beneficiary');
    }
    return redirectToHomePage();
  }
  
  if (volunteerRoutes.some(route => pathname === route || pathname.startsWith(`${route}/`)) && userRole !== 'volunteer') {
    if (userRole === 'admin') {
      return redirectToDashboard('admin');
    }
    if (userRole === 'beneficiary') {
      return redirectToDashboard('beneficiary');
    }
    return redirectToHomePage();
  }
  
  if (beneficiaryRoutes.some(route => pathname === route || pathname.startsWith(`${route}/`)) && userRole !== 'beneficiary') {
    if (userRole === 'admin') {
      return redirectToDashboard('admin');
    }
    if (userRole === 'volunteer') {
      return redirectToDashboard('volunteer');
    }
    return redirectToHomePage();
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};