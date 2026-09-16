import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHECKOUT_URL } from "./config";
import { useCountdown } from "@/hooks/use-countdown";

const benefits = [
  "Aplicación Oficial La Casa del Pan para iPhone, Android y PC (Valor $49)",
  "Asistente Maestro Panadero Chef IA 24/7 Ilimitado (Valor $59)",
  "8 Libros Maestros de Panadería y Repostería [+100 recetas] (Valor $75)",
  "Suite de Temporizadores Inteligentes & Modo Cocina (Valor $25)",
  "Certificado Oficial de Maestría en Ultra-HD 4K Personalizado (Valor $22)",
  "Todos los Archivos PDF Originales Descargables e Imprimibles (INCLUIDO)",
  "Acceso de por vida • Sin mensualidades ni cobros adicionales",
];

export function FinalOffer() {
  const { minutes, seconds } = useCountdown();

  return (
    <section className="bg-artisan-cream px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 overflow-hidden rounded-2xl border border-gold/35 bg-oven-deep p-4 shadow-2xl sm:p-7">
          <img
            src="/images/todos-productos.webp"
            alt="Aplicación y colección completa de La Casa del Pan Artesanal"
            loading="lazy"
            className="mx-auto h-auto w-full max-w-3xl object-contain drop-shadow-2xl"
          />
        </div>

        <div className="mx-auto max-w-2xl rounded-3xl border-2 border-gold/30 bg-paper p-6 text-center shadow-2xl sm:p-10">
          <span className="inline-flex rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase text-gold-mute">
            ⚡ Oferta Exclusiva de Lanzamiento
          </span>
          <h2 className="mt-4 font-serif text-2xl font-bold leading-tight text-artisan-ink sm:text-4xl">
            Todo lo Que Recibes Hoy en un Solo Acceso Vitalicio:
          </h2>

          <ul className="mx-auto mt-7 space-y-3 text-left">
            {benefits.map((benefit) => (
               <li key={benefit} className="flex gap-3 text-base leading-relaxed text-artisan-ink/85 sm:text-lg">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-cta text-paper">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-gold/35 bg-oven-deep p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-gold-bright">
              ⏳ Tu descuento del 97% expira en:
            </p>
            <div className="mt-3 flex items-center justify-center gap-2">
              <div className="flex flex-col items-center">
                <span className="rounded-xl border border-gold/45 bg-oven px-4 py-2 font-mono text-3xl font-black text-gold sm:text-4xl">
                  {minutes}
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-cream/65">
                  Minutos
                </span>
              </div>
              <span className="pb-5 font-mono text-3xl font-black text-gold/70 sm:text-4xl">:</span>
              <div className="flex flex-col items-center">
                <span className="rounded-xl border border-gold/45 bg-oven px-4 py-2 font-mono text-3xl font-black text-gold sm:text-4xl">
                  {seconds}
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-cream/65">
                  Segundos
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gold/25 pt-7">
            <p className="text-lg font-bold text-red-offer line-through">
              Valor Total Real: $230 USD
            </p>
            <p className="mt-2 text-xl font-bold text-artisan-ink">Hoy Por Solo:</p>
            <p className="my-2 text-6xl font-black leading-none text-emerald-cta sm:text-7xl">
              $6.90 USD
            </p>
            <p className="text-sm text-artisan-ink/65">
              Un solo pago • Acceso vitalicio garantizado
            </p>
          </div>

          <Button
            asChild
            className="group relative mt-6 h-auto w-full overflow-hidden whitespace-normal rounded-full bg-emerald-cta px-6 py-5 text-base font-bold text-paper shadow-2xl transition-transform hover:scale-[1.03] hover:bg-emerald-cta-hover sm:px-8 sm:text-lg"
          >
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <span className="cta-shine absolute inset-y-0 w-1/3" aria-hidden="true" />
              <span className="relative">SÍ, QUIERO MI ACCESO COMPLETO POR $6.90 »</span>
            </a>
          </Button>

          <div className="mt-5 flex items-center justify-center gap-1 text-gold-mute" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-gold" />
            ))}
          </div>
          <p className="mt-1 text-sm font-semibold text-artisan-ink/75">
            Más de 500 alumnos ya están horneando con este método
          </p>
          <p className="mt-5 rounded-lg bg-red-offer/10 px-4 py-3 text-xs font-bold text-red-offer sm:text-sm">
            ⚠️ Esta oferta especial del 97% de descuento puede finalizar en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
}