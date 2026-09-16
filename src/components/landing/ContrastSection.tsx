import { Check, X, Crown } from "lucide-react";

const pains = [
  "Tienes las manos con masa y harina, y la pantalla de tu celular se apaga cada 30 segundos.",
  "Si tu masa queda gomosa o no fermenta, el PDF no te responde ni te dice qué hiciste mal.",
  "Archivos gigantes de 300 páginas que se pierden en tu carpeta de descargas y jamás vuelves a abrir.",
  "Recetas con medidas ambiguas que no consideran la temperatura real de tu cocina ni de tu horno.",
  "Frustración y desperdicio de ingredientes logrando 'panes pesados como ladrillos'.",
];

const wins = [
  "Modo Cocina Interactivo: Diseñado para usarse con manos en la masa, con tipografía grande y pantalla activa.",
  "Chef IA 24/7 en Vivo: Resuelve cualquier duda de tu fermentación en 2 segundos con soluciones exactas.",
  "Temporizadores Inteligentes: Te avisan el momento preciso de autólisis, pliegues, reposo y horneado.",
  "Acceso Instantáneo PWA: 1 toque en la pantalla de inicio de tu iPhone o Android, sin ocupar memoria (0 MB).",
  "Lo Mejor de Ambos Mundos: ¡También incluye todos los PDFs originales descargables para imprimir cuando quieras!",
];

export function ContrastSection() {
  return (
    <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,151,42,0.08), transparent 70%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full border border-amber-500/30 text-amber-300 bg-amber-950/40 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider">
            ⚡ La Diferencia que lo Cambia Todo
          </span>
          <h2 className="mt-5 font-serif text-2xl font-bold leading-tight text-cream sm:text-4xl">
            ¿Por Qué los Libros en PDF Tradicionales y Videos de YouTube Te
            Hacen Fracasar en la Cocina?
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-cream/85 sm:text-lg">
            Hornear pan artesanal es un proceso vivo de tiempo, hidratación y
            temperatura. Los métodos estáticos de hace 15 años ya no funcionan.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Old way */}
          <div className="rounded-2xl bg-[#1A0D08] border border-stone-700/40 p-6 sm:p-8 opacity-90">
            <h3 className="font-serif text-xl sm:text-2xl text-stone-300 mb-6">
              ❌ El Método Tradicional: PDFs y Videos Sueltos
            </h3>
            <ul className="space-y-4">
              {pains.map((pain) => (
                <li key={pain} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-950/60 border border-red-900/50">
                    <X className="h-3.5 w-3.5 text-red-400" aria-hidden="true" />
                  </span>
                   <span className="text-base leading-relaxed text-cream/75 sm:text-lg">
                    {pain}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* New way */}
          <div
            className="relative rounded-2xl bg-[#22120A] border border-amber-500/50 p-6 sm:p-8"
            style={{
              boxShadow:
                "0 0 60px -12px rgba(201,151,42,0.35), 0 20px 50px -20px rgba(0,0,0,0.8)",
            }}
          >
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A0E08] shadow-lg">
              <Crown className="h-3.5 w-3.5" aria-hidden="true" />
              Tecnología en Tu Cocina
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-amber-300 mt-2 mb-6">
              ✨ Tu Aplicación Oficial: La Casa del Pan
            </h3>
            <ul className="space-y-4">
              {wins.map((win) => (
                <li key={win} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-cta/20 border border-emerald-cta/50"
                    style={{ boxShadow: "0 0 12px rgba(22,163,74,0.45)" }}
                  >
                    <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                  </span>
                   <span className="text-base leading-relaxed text-cream/90 sm:text-lg">
                    {win}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
