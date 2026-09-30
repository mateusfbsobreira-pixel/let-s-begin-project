import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/landing/AnnouncementBar";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ContrastSection } from "@/components/landing/ContrastSection";
import { BreadGallery } from "@/components/landing/BreadGallery";
import { MasterBooks } from "@/components/landing/MasterBooks";
import { AppTour } from "@/components/landing/AppTour";
import { Testimonials } from "@/components/landing/Testimonials";
import { FinalOffer } from "@/components/landing/FinalOffer";
import { Guarantee } from "@/components/landing/Guarantee";
import { PostPurchaseSteps } from "@/components/landing/PostPurchaseSteps";
import { FaqSection, Footer } from "@/components/landing/FaqFooter";
import { StickyMobileBar } from "@/components/landing/StickyMobileBar";

const TITLE =
  "Oferta Especial — La Casa del Pan Artesanal · App + Chef IA + 8 Libros por $6.90";
const DESCRIPTION =
  "Convierte tu cocina en una auténtica panadería artesanal: aplicación interactiva, Chef IA en tiempo real y 8 libros maestros. Pago único de $6.90 Dólares.";

export const Route = createFileRoute("/oferta/")({
  head: () => ({
    links: [
      {
        rel: "preload",
        as: "image",
        href: "/images/hero-cinematic-bakery.png",
        fetchPriority: "high",
      },
    ],
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Oferta,
});

function Oferta() {
  return (
    <div className="min-h-screen bg-oven text-foreground">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <ContrastSection />
        <BreadGallery />
        <MasterBooks />
        <Testimonials />
        <AppTour />
        <FinalOffer />
        <Guarantee />
        <PostPurchaseSteps />
        <FaqSection />
      </main>
      <StickyMobileBar />
      <Footer />
    </div>
  );
}
