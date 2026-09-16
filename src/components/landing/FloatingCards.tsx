import { ChefHat, Timer, Trophy } from "lucide-react";

export function FloatingCards() {
  return (
    <>
      {/* Card 1 — Chef IA (floating left) */}
      <div className="glass-dark animate-float-medium hidden w-64 rounded-2xl p-4 shadow-xl lg:absolute lg:-left-8 lg:top-24 lg:block xl:-left-20">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15">
            <ChefHat className="h-4 w-4 text-gold-bright" aria-hidden="true" />
          </span>
          <p className="text-sm font-bold text-cream">Chef Panadero en Vivo</p>
          <span className="ml-auto flex h-2 w-2 rounded-full bg-emerald-cta" />
        </div>
        <p className="mt-2 text-xs italic leading-relaxed text-cream/85">
          "Tu masa madre ya alcanzó el pico de fermentación. ¡Momento de
          hornear!"
        </p>
      </div>

      {/* Card 2 — Timer (floating right top) */}
      <div className="glass-dark animate-float-slow hidden w-60 rounded-2xl p-4 shadow-xl lg:absolute lg:-right-4 lg:top-10 lg:block xl:-right-12">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15">
            <Timer className="h-4 w-4 text-gold-bright" aria-hidden="true" />
          </span>
          <p className="text-sm font-bold text-cream">Modo Horno con Vapor</p>
        </div>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="font-serif text-2xl font-bold text-gold-bright">
            25:00
          </span>
          <span className="text-xs text-muted-foreground">min restantes</span>
        </div>
        <p className="mt-1 text-xs text-cream/85">Temperatura 230°C</p>
      </div>

      {/* Card 3 — Diploma (floating right bottom) */}
      <div className="glass-dark animate-float-fast hidden w-64 rounded-2xl p-4 shadow-xl lg:absolute lg:-bottom-2 lg:right-0 lg:block xl:-right-8">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15">
            <Trophy className="h-4 w-4 text-gold-bright" aria-hidden="true" />
          </span>
          <p className="text-sm font-bold text-cream">Diploma Oficial Incluido</p>
          <span className="ml-auto rounded-full bg-gold px-2 py-0.5 text-[9px] font-bold text-oven">
            4K
          </span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-cream/85">
          Generado con tu nombre y registro único
        </p>
      </div>
    </>
  );
}
