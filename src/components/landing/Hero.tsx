import { Check, Infinity as InfinityIcon, Lock, ShieldCheck, Zap } from "lucide-react";
import heroCinematicBakery from "@/assets/hero-cinematic-bakery.png.asset.json";
import { CHECKOUT_URL } from "./config";
import { PhoneMockup } from "./PhoneMockup";
import { FloatingCards } from "./FloatingCards";

const TRUST_SIGNALS = [
  { icon: Lock, text: "Pago 100% Seguro por Hotmart" },
  { icon: Zap, text: "Acceso Inmediato en iPhone, Android y PC" },
  { icon: ShieldCheck, text: "7 Días de Garantía Total" },
  { icon: InfinityIcon, text: "Un Solo Pago • Sin Mensualidades" },
];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center sm:bg-right"
      style={{ backgroundImage: `url(${heroCinematicBakery.url})` }}
    >
      {/* Cinematic horizontal vignette: dark, crisp side for typography; glowing oven stays vibrant on the right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-hero-ink/90 via-hero-ink/55 to-transparent"
      />
      {/* Extra flat scrim on small screens, where the copy is centered over the whole frame */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-hero-ink/70 lg:hidden" />
      {/* Bottom fade into the dark contrast of Section 2 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-oven to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Copy + CTA */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-surface/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-bright shadow-[0_0_24px_rgba(201,151,42,0.2)]">
              ✨ La Nueva Era de la Panadería · Edición 2026
            </span>

            <h1 className="text-shadow-gold mt-6 font-serif text-3xl font-bold leading-[1.18] text-cream sm:text-5xl lg:text-6xl">
              Convierte Tu Cocina en una Auténtica{" "}
              <span className="bg-gradient-to-r from-gold via-gold-bright to-gold-deep bg-clip-text text-transparent">
                Panadería Artesanal
              </span>{" "}
              — Con Tu Propia Aplicación Interactiva y un Chef IA en Tiempo Real
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-relaxed text-cream/90 sm:text-lg lg:mx-0">
              Logra panes con corteza dorada y crujiente, alvéolos abiertos y
              aroma de panadería europea desde el primer intento. Sin equipos
              costosos, sin recetas confusas en PDF y con asistencia inteligente
              paso a paso en tu celular.
            </p>

            {/* CTA */}
            <div className="mt-9">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-emerald-cta px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-cream shadow-[0_10px_40px_-8px_rgba(22,163,74,0.6)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_14px_50px_-6px_rgba(22,163,74,0.8)] sm:w-auto sm:text-base"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 w-1/3 animate-shine bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
                SÍ, QUIERO MI APLICACIÓN + 8 LIBROS POR $6.90 USD »
              </a>

              <p className="mx-auto mt-4 max-w-xl text-xs font-medium leading-relaxed text-cream/75 sm:text-sm lg:mx-0">
                🌎 Pagas en tu moneda local: Hotmart convierte automáticamente
                los $6.90 USD al valor de tu país al pagar.
              </p>

              {/* Trust signals */}
              <ul className="mt-6 grid grid-cols-1 gap-2.5 text-left sm:grid-cols-2">
                {TRUST_SIGNALS.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-cta/15">
                      <Check className="h-3 w-3 text-emerald-cta" aria-hidden="true" />
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Phone showcase + floating cards */}
          <div className="relative lg:pb-24">
            <PhoneMockup />
            <FloatingCards />
          </div>
        </div>
      </div>
    </section>
  );
}
