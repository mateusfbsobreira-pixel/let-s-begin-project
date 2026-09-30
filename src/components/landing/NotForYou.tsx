import { X } from "lucide-react";

const reasons = [
  "No compres La Casa del Pan si buscas resultados mágicos sin seguir los pasos. Las recetas funcionan, pero necesitan tus manos y tu cariño.",
  "No es para ti si no tienes 2 horas libres un fin de semana para hornear tu primer pan. Este método requiere paciencia — como todo lo bueno en la cocina.",
  "No es para ti si prefieres seguir comprando pan industrial en el supermercado y no te importa lo que contiene.",
];

export function NotForYou() {
  return (
    <section className="bg-oven-soft px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-xl font-bold leading-relaxed text-cream sm:text-2xl">
          ⚠️ Esto No Es Para Todas
        </h2>
        <p className="mt-3 text-base leading-relaxed text-cream/70 sm:text-lg">
          Antes de continuar, queremos ser honestos contigo:
        </p>
        <ul className="mx-auto mt-6 max-w-xl space-y-3 text-left">
          {reasons.map((reason) => (
            <li key={reason} className="flex items-start gap-3 text-base leading-relaxed text-cream/80 sm:text-lg">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-red-offer/40 bg-red-offer/20">
                <X className="h-3 w-3 text-red-offer" aria-hidden="true" />
              </span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-base font-medium leading-relaxed text-emerald-cta sm:text-lg">
          Pero si eres una mujer que quiere alimentar a su familia con pan de verdad, hecho por sus propias manos con ingredientes puros y naturales — entonces este método fue creado exactamente para ti. 🥖
        </p>
      </div>
    </section>
  );
}