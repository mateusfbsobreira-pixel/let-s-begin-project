import { Check, Infinity as InfinityIcon, Lock, ShieldCheck, Zap } from "lucide-react";
const heroCinematicBakeryUrl = "/images/hero-cinematic-bakery.png";
import { CHECKOUT_URL } from "./config";
import { PhoneMockup } from "./PhoneMockup";
import { FloatingCards } from "./FloatingCards";
import { PaymentMethods } from "./PaymentMethods";
import { CurrencyBox } from "./CurrencyBox";

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
      style={{ backgroundImage: `url(${heroCinematicBakeryUrl})` }}
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
              🥖 Más de 1.480 Familias Ya Están Horneando con Este Método
            </span>

            <h1 className="text-shadow-gold mt-6 font-serif text-3xl font-bold leading-[1.18] text-cream sm:text-5xl lg:text-6xl">
              El Pan Calientito de la Abuela, Hecho por Tus Manos — Sin Culpa,{" "}
              <span className="bg-gradient-to-r from-gold via-gold-bright to-gold-deep bg-clip-text text-transparent">
                Sin Conservantes
              </span>{" "}
              y Sin Complicaciones
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-loose text-cream/90 sm:text-xl lg:mx-0">
              Aunque nunca hayas tocado una masa: tu Chef virtual te habla por
              voz y te guía paso a paso, incluso con las manos en la masa. Toca
              1 botón en tu celular y hornea este fin de semana sin
              conservantes.
            </p>

            {/* Confidence chips */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
              {[
                "Sin batidoras costosas",
                "Sin experiencia previa",
                "En cualquier celular (0 MB de espacio)",
              ].map(
                (chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs font-bold text-gold-bright sm:text-sm"
                  >
                    <Check className="h-3.5 w-3.5 text-emerald-cta" aria-hidden="true" />
                    {chip}
                  </span>
                ),
              )}
            </div>


            {/* Price block */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start">
              <p className="text-2xl font-black uppercase leading-tight text-cream sm:text-3xl">
                Solo $9.90 Dólares Americanos <span className="whitespace-nowrap">(USD)</span>
              </p>
              <span className="rounded-full bg-emerald-cta px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-paper sm:text-sm">
                96% de Descuento · Pago Único
              </span>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <a
                href={CHECKOUT_URL}
                className="group relative inline-flex min-h-[56px] w-full items-center justify-center overflow-hidden rounded-full bg-emerald-cta px-8 py-4 text-lg font-extrabold uppercase tracking-wide text-cream shadow-[0_10px_40px_-8px_rgba(22,163,74,0.6)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_14px_50px_-6px_rgba(22,163,74,0.8)] sm:w-auto sm:py-5"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 w-1/3 animate-shine bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
                <span className="relative flex min-h-[56px] flex-col items-center justify-center leading-tight">
                  <span className="text-base font-extrabold sm:text-lg">QUIERO EL PAQUETE COMPLETO</span>
                  <span className="text-[13px] font-bold text-gold-bright sm:text-sm">
                    POR SOLO $9.90 DÓLARES (USD) →
                  </span>
                </span>
              </a>

              <p className="mt-3 text-center text-[13px] font-bold leading-relaxed text-emerald-400/90 sm:text-sm">
                ✅ Pago único para siempre · Sin suscripciones mensuales · Garantía blindada de 7 días
              </p>


              <PaymentMethods />

              {/* Local-currency conversion box */}
              <CurrencyBox className="mx-auto mt-4 max-w-xl lg:mx-0" />



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
