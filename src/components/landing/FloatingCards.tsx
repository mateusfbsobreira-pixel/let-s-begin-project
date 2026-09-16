import { ChefHat, Timer, Trophy } from "lucide-react";

function CardChef() {
  return (
    <div className="glass-dark w-full rounded-2xl p-4 shadow-xl">
      <div className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15">
          <ChefHat className="h-4 w-4 text-gold-bright" aria-hidden="true" />
        </span>
        <p className="text-sm font-bold text-cream">Chef Panadero en Vivo</p>
        <span className="ml-auto flex h-2 w-2 rounded-full bg-emerald-cta" />
      </div>
      <p className="mt-2 text-xs italic leading-relaxed text-cream/85">
        "Tu masa madre ya alcanzó el pico de fermentación. ¡Momento de hornear!"
      </p>
    </div>
  );
}

function CardTimer() {
  return (
    <div className="glass-dark w-full rounded-2xl p-4 shadow-xl">
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
  );
}

function CardDiploma() {
  return (
    <div className="glass-dark w-full rounded-2xl p-4 shadow-xl">
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
  );
}

export function FloatingCards() {
  return (
    <>
      {/* Desktop: floating around the phone */}
      <div className="animate-float-medium absolute -left-6 top-28 hidden w-64 lg:block xl:-left-14">
        <CardChef />
      </div>
      <div className="animate-float-slow absolute right-0 top-6 hidden w-60 lg:block">
        <CardTimer />
      </div>
      <div className="animate-float-fast absolute bottom-0 right-0 hidden w-64 lg:block">
        <CardDiploma />
      </div>

      {/* Mobile/tablet: stacked below the phone */}
      <div className="mx-auto mt-8 grid w-full max-w-sm gap-3 sm:max-w-md sm:grid-cols-2 lg:hidden">
        <CardChef />
        <CardTimer />
        <div className="sm:col-span-2">
          <CardDiploma />
        </div>
      </div>
    </>
  );
}
