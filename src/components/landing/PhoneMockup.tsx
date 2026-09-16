import { BookOpen, ChefHat, Flame, Search } from "lucide-react";
import panArtesanal from "@/assets/pan-artesanal.jpg";

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-gold/25 bg-oven-soft px-2 py-2.5 text-center">
      <p className="font-serif text-lg font-bold leading-tight text-gold-bright">
        {value}
      </p>
      <p className="mt-0.5 text-[9px] leading-tight text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[290px] sm:w-[320px]">
      {/* Golden ambient glow behind phone */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(201,151,42,0.28) 0%, transparent 65%)",
        }}
      />

      {/* Phone body */}
      <div className="relative rounded-[3rem] border border-gold/25 bg-oven-deep p-2 shadow-2xl shadow-gold/25">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-oven">
          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-2.5 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-oven-deep" />

          {/* Screen content */}
          <div className="space-y-3 px-4 pb-20 pt-11">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-gold to-gold-deep">
                  <ChefHat className="h-4 w-4 text-oven" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-cream">¡Hola, Alumno!</p>
                  <p className="text-[10px] text-muted-foreground">
                    Tu panadería de hoy te espera
                  </p>
                </div>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/25 bg-surface">
                <Search className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              </span>
            </div>

            {/* Hero carousel — master book */}
            <div className="relative overflow-hidden rounded-2xl border border-gold/30">
              <img
                src={panArtesanal}
                alt="Pan artesanal de corteza dorada del Método Completo"
                width={1024}
                height={768}
                loading="lazy"
                className="h-32 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oven via-oven/40 to-transparent" />
              <span className="absolute left-2.5 top-2.5 rounded-full bg-gold px-2 py-0.5 text-[9px] font-bold text-oven">
                ⭐ Guía Maestra
              </span>
              <div className="absolute inset-x-3 bottom-2.5">
                <p className="font-serif text-sm font-bold leading-snug text-cream">
                  El Método Completo del Pan Artesanal
                </p>
              </div>
            </div>

            {/* El Secreto del Maestro */}
            <div className="rounded-2xl border border-gold/25 bg-gradient-to-br from-surface to-oven-deep p-3">
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <ChefHat className="h-3.5 w-3.5 text-gold-bright" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gold">
                    El Secreto del Maestro
                  </p>
                  <p className="mt-1 text-[11px] italic leading-snug text-cream/90">
                    "La paciencia es el ingrediente invisible: deja que la
                    autólisis trabaje por ti"
                  </p>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2">
              <StatCard value="8" label="Libros Activos" />
              <StatCard value="320" label="Mins de Práctica" />
              <StatCard value="7 🔥" label="Días de Racha" />
            </div>

            {/* Continue reading */}
            <div className="rounded-2xl border border-gold/25 bg-surface p-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-gold" aria-hidden="true" />
                  <div>
                    <p className="text-[10px] font-bold text-cream">
                      Continúa Donde lo Dejaste
                    </p>
                    <p className="text-[9px] text-muted-foreground">
                      Masa Madre · Cap. 4
                    </p>
                  </div>
                </div>
                <button className="rounded-full bg-gold px-2.5 py-1 text-[9px] font-bold text-oven">
                  Reanudar
                </button>
              </div>
              <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-oven-deep">
                <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-gold-deep to-gold-bright" />
              </div>
              <p className="mt-1 text-right text-[9px] font-semibold text-gold-bright">
                84%
              </p>
            </div>
          </div>

          {/* Floating Chef AI button */}
          <div className="absolute bottom-4 right-4 z-20">
            <span className="absolute -right-0.5 -top-0.5 z-10 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping-dot rounded-full bg-emerald-cta" />
              <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-oven bg-emerald-cta" />
            </span>
            <button
              aria-label="Abrir Chef IA"
              className="flex h-13 w-13 animate-glow-pulse items-center justify-center rounded-full bg-gradient-to-br from-gold-bright to-gold-deep shadow-lg shadow-gold/40"
              style={{ height: "52px", width: "52px" }}
            >
              <ChefHat className="h-6 w-6 text-oven" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
