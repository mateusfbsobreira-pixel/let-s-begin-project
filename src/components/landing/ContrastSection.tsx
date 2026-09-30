import { Check, X, Crown, ShieldAlert } from "lucide-react";

const COMPARISONS = [
  {
    painTitle: "Pan de Supermercado:",
    painDesc: "Lleno de bromato y 20 químicos que inflaman el estómago de tu familia.",
    winTitle: "Nutrición 100% Pura:",
    winDesc: "Solo harina, agua y sal. El alimento más sano para tus hijos y nietos.",
  },
  {
    painTitle: "Videos y PDFs Confusos:",
    painDesc: "Recetas caóticas que terminan en masas duras como piedras y dinero tirado.",
    winTitle: "Paso a Paso Infalible:",
    winDesc: "Adaptado a tu horno casero normal, pensado para que tu primer pan salga perfecto.",
  },
  {
    painTitle: "Pantalla Que Se Apaga:",
    painDesc: "Manos con harina y masa mientras el celular se bloquea a cada 30 segundos.",
    winTitle: "Modo Cocina Siempre Activo:",
    winDesc: "Pantalla encendida con letras grandes y temporizadores que te avisan cada fase.",
  },
  {
    painTitle: "Sola Ante las Dudas:",
    painDesc: "Si la masa no sube, nadie te responde y terminas frustrada.",
    winTitle: "Chef Panadero 24/7 en Vivo:",
    winDesc: "Le preguntas cualquier duda y te responde en 2 segundos con paciencia infinita.",
  },
];

export function ContrastSection() {
  return (
    <section className="relative py-12 sm:py-16 px-4 overflow-hidden border-b border-gold/15">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,151,42,0.06), transparent 70%)",
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        {/* Header Compacto */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 text-amber-300 bg-amber-950/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
            ⚡ Comparativa Rápida
          </span>
          <h2 className="mt-3 font-serif text-2xl font-bold leading-snug text-cream sm:text-3xl lg:text-4xl">
            La Diferencia Entre Frustrarte o Triunfar en Tu Cocina
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base leading-relaxed text-cream/75">
            Por qué los métodos viejos te hacen perder tiempo y cómo nuestra plataforma lo cambia todo en minutos:
          </p>
        </div>

        {/* Grid 2 Colunas Compactas */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {/* Coluna 1: Problemas */}
          <div className="rounded-2xl bg-oven-black border border-red-950/60 p-5 sm:p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-red-950/50">
              <ShieldAlert className="h-5 w-5 text-red-400 shrink-0" />
              <h3 className="font-serif text-lg sm:text-xl font-bold text-red-200">
                El Método Tradicional
              </h3>
            </div>
            <ul className="space-y-3.5">
              {COMPARISONS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-cream/75">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-950/80 border border-red-900/60">
                    <X className="h-2.5 w-2.5 text-red-400" aria-hidden="true" />
                  </span>
                  <span>
                    <strong className="text-cream font-semibold">{item.painTitle}</strong>{" "}
                    {item.painDesc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 2: Soluções */}
          <div
            className="relative rounded-2xl bg-surface border-2 border-gold/45 p-5 sm:p-6 shadow-xl"
            style={{
              boxShadow: "0 0 40px -15px rgba(201,151,42,0.25)",
            }}
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gold/25">
              <div className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-gold-bright shrink-0" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-gold-bright">
                  Con La Casa del Pan
                </h3>
              </div>
              <span className="hidden sm:inline-block rounded-full bg-emerald-cta/15 border border-emerald-cta/40 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                Recomendado
              </span>
            </div>
            <ul className="space-y-3.5">
              {COMPARISONS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-cream/90">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-cta/20 border border-emerald-cta/50">
                    <Check className="h-2.5 w-2.5 text-emerald-400" aria-hidden="true" />
                  </span>
                  <span>
                    <strong className="text-gold-bright font-semibold">{item.winTitle}</strong>{" "}
                    {item.winDesc}
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