import { Check, X, Crown } from "lucide-react";

const pains = [
  "El pan industrial del supermercado dura 30 días en la alacena porque está lleno de químicos que inflaman tu estómago y el de tu familia.",
  "Intentaste hacer pan en casa con un video de YouTube, pero la masa no creció, quedó cruda por dentro o dura como un ladrillo.",
  "Compraste un e-book o un curso largo en video, pero las recetas eran confusas, con medidas raras, y nunca volviste a abrirlo.",
  "Tu celular se apaga cada 30 segundos mientras tienes las manos llenas de masa y harina. El PDF no te sirve en la cocina real.",
  "Gastaste dinero en ingredientes y horas de tu tiempo, solo para terminar frustrada y tirando todo a la basura.",
];

const wins = [
  "Modo Cocina con Pantalla Siempre Activa: Letras grandes y claras que puedes leer con las manos en la masa, sin que la pantalla se apague jamás.",
  "Tu Maestro Panadero Personal (Chef IA): Le preguntas cualquier duda a cualquier hora y te responde en 2 segundos con paciencia infinita. Como tener un chef de cabecera en tu bolsillo.",
  "Temporizadores que Te Avisan el Momento Exacto: Autólisis, pliegues, reposo y horneado. No tienes que adivinar ni calcular nada — la app hace el trabajo por ti.",
  "Sin Descargas, Sin Complicaciones: Un solo toque en la pantalla de tu celular y listo. No necesitas instalar nada de las tiendas de apps. Ocupa 0 MB de memoria y funciona en cualquier teléfono.",
  "Nutrición Pura Para Tu Familia: Tus hijos y nietos van a comer pan hecho solo con harina, agua y sal — el alimento más saludable del mundo, horneado con amor por tus propias manos. Sin químicos, sin conservantes.",
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
            ⚡ Lo Que Nadie Te Dice Sobre el Pan Que Comes
          </span>
          <h2 className="mt-5 font-serif text-2xl font-bold leading-tight text-cream sm:text-4xl">
            ¿Sabías Que el Pan de Molde del Supermercado Tiene Más de 20 Ingredientes Químicos?
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-lg leading-relaxed text-cream/85 sm:text-xl">
            Bromato de potasio, emulsificantes, conservantes y aromas artificiales. Eso es lo que tu familia come cada mañana. Pero hay una solución al alcance de tus manos.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Old way */}
          <div className="rounded-2xl bg-[#1A0D08] border border-stone-700/40 p-6 sm:p-8 opacity-90">
            <h3 className="font-serif text-xl sm:text-2xl text-stone-300 mb-6">
              ❌ Lo Que Te Tiene Atrapada Hoy
            </h3>
            <ul className="space-y-4">
              {pains.map((pain) => (
                <li key={pain} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-950/60 border border-red-900/50">
                    <X className="h-3.5 w-3.5 text-red-400" aria-hidden="true" />
                  </span>
                   <span className="text-lg leading-relaxed text-cream/75 sm:text-xl">
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
              ✨ Tu Escape: La Casa del Pan Artesanal
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
                   <span className="text-lg leading-relaxed text-cream/90 sm:text-xl">
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
