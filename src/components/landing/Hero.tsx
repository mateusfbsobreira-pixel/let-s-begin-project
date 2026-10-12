import { Check, Infinity as InfinityIcon, Lock, ShieldCheck, Zap } from "lucide-react";
const heroCinematicBakeryUrl = "/images/hero-cinematic-bakery.png";
import { CHECKOUT_URL } from "./config";
import heroPhoneApp from "@/assets/hero-phone-app.png";
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

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Copy + CTA */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-surface/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-bright shadow-[0_0_24px_rgba(201,151,42,0.2)]">
              🥖 Más de 1.480 Familias Ya Están Horneando con Este Método
            </span>

            <h1 className="text-shadow-gold mt-4 font-serif text-[26px] font-bold leading-[1.18] text-cream sm:mt-6 sm:text-5xl lg:text-6xl">
              El Secreto del Pan Artesanal{" "}
              <span className="bg-gradient-to-r from-gold via-gold-bright to-gold-deep bg-clip-text text-transparent">
                Dorado y Crujiente
              </span>{" "}
              en tu Horno Normal
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-relaxed text-cream/90 sm:mt-6 sm:text-lg lg:mx-0">
              Sin masas madre complicadas, sin ingredientes costosos y con un Chef virtual que te acompaña paso a paso en tu celular.
            </p>

            {/* Confidence chips */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-7 sm:gap-2.5 lg:justify-start">
              {[
                "Sin batidoras costosas",
                "Sin experiencia previa",
                "En cualquier celular",
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

            {/* Phone mockup above the price block (mobile only; desktop keeps it in the right column) */}
            <div className="relative mt-6 sm:mt-9 lg:hidden">
              <div className="relative mx-auto w-[min(84vw,330px)]">
                <div aria-hidden="true" className="absolute -inset-8 rounded-full bg-gold/20 blur-3xl" />
                <img
                  src={heroPhoneApp}
                  alt="Celular mostrando la app La Casa del Pan en Modo Cocina con el Pan Campesino Rústico, su barra de progreso y el botón Paso 1: Mezcla y Autólisis"
                  width={1024}
                  height={1536}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="relative w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
                />
              </div>
            </div>

            {/* Price block — strictly vertical flow on mobile, nothing overlapping */}
            <div className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-9 lg:items-start">
              <p className="text-lg font-bold text-cream/60 line-through sm:text-xl">$230 USD</p>
              <p className="text-2xl font-black uppercase leading-tight text-cream sm:text-3xl">
                Solo $9.90 Dólares Americanos <span className="whitespace-nowrap">(USD)</span>
              </p>
              <span className="rounded-full bg-emerald-cta px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-paper sm:text-sm">
                96% OFF · Pago Único
              </span>
            </div>

            {/* Local-currency conversion box */}
            <CurrencyBox className="mx-auto mt-6 w-full max-w-xl lg:mx-0" />

            <p className="mt-5 text-center text-sm font-bold text-emerald-400/90 lg:text-left">
              ✓ Un solo pago · Sin mensualidades · 7 días de garantía
            </p>

            {/* CTA — always after everything above, full width on mobile */}
            <div className="mt-5 w-full">
              <a
                id="hero-cta"
                href={CHECKOUT_URL}
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl bg-[#107C41] px-8 py-4 text-lg font-extrabold uppercase tracking-wide text-cream shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_14px_50px_-6px_rgba(22,163,74,0.8)] sm:w-auto sm:rounded-full sm:py-5"
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

              <p className="mt-3 text-center text-[13px] font-bold leading-relaxed text-emerald-400/90 sm:text-sm lg:text-left">
                🔒 Acceso inmediato en tu correo
              </p>

              <PaymentMethods />

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

          {/* Photorealistic phone mockup with the real app UI (desktop; mobile shows it above the price block) */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto w-[330px] sm:w-[390px] xl:w-[430px]">
              <div aria-hidden="true" className="absolute -inset-10 rounded-full bg-gold/20 blur-3xl" />
              <img
                src={heroPhoneApp}
                alt="Celular mostrando la app La Casa del Pan en Modo Cocina con el Pan Campesino Rústico, su barra de progreso y el botón Paso 1: Mezcla y Autólisis"
                width={1024}
                height={1536}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="relative w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
