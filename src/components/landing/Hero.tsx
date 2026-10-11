import { Check, Infinity as InfinityIcon, Lock, ShieldCheck, Zap } from "lucide-react";
const heroCinematicBakeryUrl = "/images/hero-cinematic-bakery.png";
import { CHECKOUT_URL } from "./config";
import heroPan from "@/assets/hero-pan-partido.jpg";
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
              El Secreto del Pan Artesanal{" "}
              <span className="bg-gradient-to-r from-gold via-gold-bright to-gold-deep bg-clip-text text-transparent">
                Dorado y Crujiente
              </span>{" "}
              en tu Horno Normal
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-loose text-cream/90 sm:text-xl lg:mx-0">
              Sin masas madre complicadas, sin ingredientes costosos y con un Chef virtual que te acompaña paso a paso en tu celular.
            </p>

            {/* Confidence chips */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
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


            {/* Price block */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start">
              <p className="text-2xl font-black uppercase leading-tight text-cream sm:text-3xl">
                Solo $9.90 Dólares Americanos <span className="whitespace-nowrap">(USD)</span>
              </p>
              <span className="rounded-full bg-emerald-cta px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-paper sm:text-sm">
                96% OFF · Pago Único
              </span>
            </div>

            {/* Local-currency conversion box */}
            <CurrencyBox className="mx-auto mt-6 max-w-xl lg:mx-0" />

            {/* CTA */}
            <div className="mt-6">
              <a
                id="hero-cta"
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

              <p className="mt-3 text-center text-[13px] font-bold leading-relaxed text-emerald-400/90 sm:text-sm lg:text-left">
                🔒 Acceso inmediato a tu correo · 7 días de garantía total
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

          {/* Realistic phone with the app in Modo Cocina */}
          <div className="relative">
            <div className="relative mx-auto w-[290px] sm:w-[340px]">
              <div aria-hidden="true" className="absolute -inset-10 rounded-full bg-gold/20 blur-3xl" />
              <div className="relative rounded-[3rem] border border-gold/30 bg-oven-deep p-2.5 shadow-2xl">
                <div className="relative overflow-hidden rounded-[2.4rem] bg-oven">
                  <div className="absolute left-1/2 top-2.5 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-oven-deep" />
                  <div className="px-4 pb-5 pt-10">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gold">🔥 Modo Cocina</p>
                    <p className="mt-1 font-serif text-lg font-bold leading-tight text-cream">Pan Campesino Rústico</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">⏱ 45 min · Dificultad Fácil</p>
                    <img
                      src={heroPan}
                      alt="Pan rústico dorado partido a la mitad, con corteza crujiente y miga suave"
                      width={1024}
                      height={1024}
                      fetchPriority="high"
                      decoding="async"
                      className="mt-3 aspect-square w-full rounded-2xl border border-gold/30 object-cover"
                    />
                    <div className="mt-4 rounded-2xl border border-gold/25 bg-surface p-3">
                      <div className="flex items-center justify-between text-[11px] font-bold">
                        <span className="text-cream">Paso 1: Mezcla y Autólisis</span>
                        <span className="text-emerald-cta">35%</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-oven-deep">
                        <div className="h-full w-[35%] rounded-full bg-emerald-cta" />
                      </div>
                      <ul className="mt-2.5 space-y-1 text-[11px] text-cream/85">
                        <li>✅ 500 g de harina común</li>
                        <li>✅ 350 ml de agua tibia</li>
                        <li className="text-muted-foreground">⬜ Reposar 30 minutos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
