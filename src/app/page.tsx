import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-red-50 to-neutral-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/vercel.svg')] opacity-5 bg-repeat"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="text-red-600">Besoin d'aide ?</span> Nous sommes là pour vous
              </h1>
              <p className="text-base md:text-lg text-neutral-600">
                "Le Cœur sur la Main" par la Croix-Rouge Française vous permet de trouver rapidement les aides auxquelles vous avez droit grâce à un diagnostic personnalisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" asChild>
                  <Link href="/diagnostic">Faire mon diagnostic</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#comment-ca-marche">Comment ça marche ?</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl mx-auto w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                <div className="p-8 bg-white/90 rounded-lg shadow-lg text-center">
                  <div className="mx-auto mb-4 relative h-16 w-16">
                    <Image
                      src="/logo.svg"
                      alt="Logo Croix-Rouge"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <h3 className="font-bold text-lg">Le Cœur sur la Main</h3>
                  <p className="text-sm text-neutral-600 mt-2">Trouvez l'aide dont vous avez besoin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="comment-ca-marche" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Comment ça marche ?</h2>
            <p className="text-neutral-600">En quelques étapes simples, découvrez les aides auxquelles vous avez droit grâce à notre outil de diagnostic développé par la Croix-Rouge Française.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-neutral-50 border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xl font-bold mb-3">1</div>
                <CardTitle>Questionnaire simple</CardTitle>
                <CardDescription>Répondez à quelques questions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">Un questionnaire facile à remplir, conçu par nos bénévoles pour évaluer votre situation et vos besoins.</p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-50 border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xl font-bold mb-3">2</div>
                <CardTitle>Analyse personnalisée</CardTitle>
                <CardDescription>Votre situation est analysée</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">Notre système identifie rapidement les aides auxquelles vous pouvez prétendre en fonction de vos réponses.</p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-50 border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xl font-bold mb-3">3</div>
                <CardTitle>Accompagnement sur mesure</CardTitle>
                <CardDescription>Un bénévole vous accompagne</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">Un bénévole de la Croix-Rouge vous contacte pour vous accompagner dans vos démarches d'accès aux aides.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10 md:mt-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" asChild>
              <Link href="/diagnostic">Commencer mon diagnostic</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Types d'aide */}
      <section id="aides" className="py-16 md:py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Des aides adaptées à vos besoins</h2>
              <Separator className="bg-red-600 h-1 w-20" />
              <p className="text-neutral-600">
                Nous proposons différents types d'aides pour répondre à votre situation personnelle.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">✓</div>
                  <span>Aide alimentaire et vestimentaire</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">✓</div>
                  <span>Accompagnement pour l'hébergement</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">✓</div>
                  <span>Soutien administratif et juridique</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">✓</div>
                  <span>Accompagnement social et médical</span>
                </li>
              </ul>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" asChild>
                <Link href="/diagnostic">Découvrir mes droits</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </div>
                <h3 className="font-medium">Aide d'urgence</h3>
                <p className="text-sm text-neutral-600 mt-2">Solutions immédiates pour les situations critiques</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
                  </svg>
                </div>
                <h3 className="font-medium">Accompagnement</h3>
                <p className="text-sm text-neutral-600 mt-2">Suivi personnalisé sur le long terme</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="font-medium">Information</h3>
                <p className="text-sm text-neutral-600 mt-2">Conseils sur vos droits et démarches</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="font-medium">Lien social</h3>
                <p className="text-sm text-neutral-600 mt-2">Activités pour rompre l'isolement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Témoignages</h2>
            <p className="text-neutral-600">Découvrez comment "Le Cœur sur la Main" a aidé d'autres personnes dans des situations similaires.</p>
          </div>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="bg-neutral-50 p-6 md:p-8 rounded-lg shadow-sm">
                  <p className="italic text-neutral-600 mb-4">
                    "Grâce au diagnostic en ligne, j'ai pu obtenir une aide alimentaire rapidement. Un bénévole m'a contacté le lendemain et m'a guidé dans toutes mes démarches."
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-red-100 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-medium">Sophie L.</h4>
                      <p className="text-sm text-neutral-500">Bénéficiaire depuis mars 2025</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-neutral-50 p-6 md:p-8 rounded-lg shadow-sm">
                  <p className="italic text-neutral-600 mb-4">
                    "Je ne savais pas que j'avais droit à tant d'aides. Le système de diagnostic m'a permis de découvrir des solutions auxquelles je n'aurais jamais pensé."
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-red-100 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-medium">Michel R.</h4>
                      <p className="text-sm text-neutral-500">Bénéficiaire depuis janvier 2025</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0 md:left-2" />
            <CarouselNext className="right-0 md:right-2" />
          </Carousel>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Vous avez besoin d'aide ?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Ne restez pas seul face à vos difficultés. Faites votre diagnostic en ligne et découvrez rapidement les aides auxquelles vous avez droit.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-neutral-100" asChild>
            <Link href="/diagnostic">Faire mon diagnostic maintenant</Link>
          </Button>
          <p className="text-sm mt-6 text-white/80">
            En cas d'urgence, contactez directement la Croix-Rouge au <span className="font-medium">09 70 28 30 00</span>
          </p>
        </div>
      </section>
    </div>
  );
}
