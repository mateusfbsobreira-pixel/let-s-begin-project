import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/landing/AnnouncementBar";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ContrastSection } from "@/components/landing/ContrastSection";
import { AppTour } from "@/components/landing/AppTour";

const TITLE =
  "La Casa del Pan Artesanal — App Interactiva + Chef IA por $6.90";
const DESCRIPTION =
  "Convierte tu cocina en una auténtica panadería artesanal: aplicación interactiva, Chef IA en tiempo real y 8 libros maestros. Pago único de $6.90 USD.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-oven text-foreground">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <ContrastSection />
        <AppTour />
      </main>
    </div>
  );
}
