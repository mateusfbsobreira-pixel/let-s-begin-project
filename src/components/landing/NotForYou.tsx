import { Check, X } from "lucide-react";

const no = [
  "Prefieres el pan del supermercado con 14 conservantes",
  "Quieres resultados sin tocar un solo botón",
  "Buscas una app complicada llena de menús difíciles",
  "No tienes 10 minutos este fin de semana",
];

const yes = [
  "Quieres servir pan calientito hecho por tus manos este domingo",
  "Sueñas con el aroma de pan recién horneado llenando tu cocina",
  'Quieres que tu familia diga "¡Abuela, esto es increíble!"',
  "Estás lista para decir NO al pan con conservantes — para siempre",
];

export function NotForYou() {
  return (
    <section className="bg-oven-soft px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-2xl font-bold leading-relaxed text-cream sm:text-3xl">
          🚫 Esto NO Es Para Todas
        </h2>
        <div className="mt-8 grid gap-5 text-left md:grid-cols-2">
          <div className="rounded-2xl border border-red-offer/30 bg-red-offer/5 p-6">
            <p className="mb-4 text-lg font-bold text-red-offer">NO es para ti si...</p>
            <ul className="space-y-3">
              {no.map((r) => (
                <li key={r} className="flex items-start gap-3 text-base leading-relaxed text-cream/80 sm:text-lg">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-red-offer/40 bg-red-offer/20">
                    <X className="h-3 w-3 text-red-offer" aria-hidden="true" />
                  </span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-cta/40 bg-emerald-cta/10 p-6">
            <p className="mb-4 text-lg font-bold text-emerald-400">SÍ es para ti si...</p>
            <ul className="space-y-3">
              {yes.map((r) => (
                <li key={r} className="flex items-start gap-3 text-base leading-relaxed text-cream/90 sm:text-lg">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-cta/50 bg-emerald-cta/20">
                    <Check className="h-3 w-3 text-emerald-400" aria-hidden="true" />
                  </span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
