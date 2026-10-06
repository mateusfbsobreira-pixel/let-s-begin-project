import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHECKOUT_URL } from "./config";
import { PaymentMethods } from "./PaymentMethods";

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
  return (
    <section className="bg-artisan-cream px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 overflow-hidden rounded-2xl border border-gold/35 bg-oven-deep p-4 shadow-2xl sm:p-7">
          <img
            src="/images/todos-productos.webp"
            alt="Aplicación y colección completa de La Casa del Pan Artesanal"
            loading="lazy"
             decoding="async"
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
               <li key={benefit} className="flex gap-3 text-lg leading-relaxed text-artisan-ink/85 sm:text-xl">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-cta text-paper">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-gold/35 bg-oven-deep p-5 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-gold-bright sm:text-base">
              🎁 Precio Especial de Lanzamiento
            </p>
            <p className="mt-2 text-sm leading-relaxed text-cream/75 sm:text-base">
              Estamos en fase de lanzamiento y este precio de <span className="font-bold text-gold">$9.90</span> es temporal. Cuando alcancemos nuestra meta de alumnas, el precio subirá a su valor real sin aviso previo.
            </p>
          </div>

          <div className="mt-8 border-t border-gold/25 pt-7">
            <p className="text-lg font-bold text-red-offer line-through">
              Valor Total Real: $230 USD
            </p>
            <p className="mx-auto mt-3 max-w-md rounded-lg border border-red-offer/30 bg-red-offer/5 px-3 py-2 text-sm font-bold text-red-offer sm:text-base">
              Precio Fundadoras: 1.480 de 2.000 plazas ocupadas. Cuando se agoten, el precio sube a $19.90.
            </p>
            <p className="mt-2 text-xl font-bold text-artisan-ink">Hoy Por Solo:</p>
            <p className="my-2 text-6xl font-black leading-none text-emerald-cta sm:text-7xl">
              $9.90 Dólares
            </p>
            <p className="text-sm text-artisan-ink/65">
              *Pago único de $9.90 Dólares al pagar, sin mensualidades ni cargos sorpresa.
            </p>
          </div>

          {/* Local-currency clarity: Hotmart auto-converts at checkout */}
          <div className="mt-6 rounded-2xl border-2 border-gold/35 bg-oven-deep p-5 text-left shadow-xl sm:p-7">
            <p className="text-center text-sm font-extrabold uppercase tracking-wide text-gold-bright sm:text-lg">
              🌎 Pagas en Tu Moneda Local — Hotmart Convierte al Instante
            </p>

            {/* Payment method icons */}
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "💳 VISA / Mastercard",
                "🟢 PIX (Brasil)",
                "🏪 OXXO (México)",
                "💵 Efecty/PSE (Colombia)",
                "🏦 PagoEfectivo (Perú)",
              ].map((method) => (
                <li
                  key={method}
                  className="flex items-center justify-center rounded-xl border border-gold/30 bg-oven px-3 py-2.5 text-center text-sm font-bold text-cream/90 sm:text-base"
                >
                  {method}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-center text-sm leading-relaxed text-cream/80 sm:text-base">
              Hotmart detecta tu país y cobra <span className="font-bold text-gold-bright">$9.90 Dólares</span> en tu
              moneda local automáticamente. Sin dólares en tu tarjeta.
            </p>

            <div className="mt-4 border-t border-gold/20 pt-4">
              <p className="text-center text-xs font-bold uppercase tracking-wider text-gold-mute sm:text-sm">
                Así queda aproximadamente en tu país:
              </p>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  "🇲🇽 México — ~$175 MXN",
                  "🇨🇴 Colombia — ~$39.000 COP",
                  "🇨🇱 Chile — ~$9.200 CLP",
                  "🇵🇪 Perú — ~S/36 PEN",
                  "🇪🇸 España — ~€9,20 EUR",
                  "🇦🇷 Argentina — ~$9.500 ARS",
                ].map((conversion) => (
                  <li
                    key={conversion}
                    className="flex items-center justify-center rounded-xl border border-gold/25 bg-oven/80 px-3 py-2.5 text-sm font-bold text-cream/90 sm:text-base"
                  >
                    {conversion}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-5 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-center text-sm font-semibold leading-relaxed text-emerald-200 sm:text-base">
              🔒 Serás redirigida a la plataforma Hotmart, 100% segura y verificada. Tu información está protegida.
            </p>
          </div>

          <div className="mt-6 space-y-4 rounded-xl border border-gold/20 bg-oven-deep/50 p-5 text-left">
            <p className="text-base leading-relaxed text-artisan-ink/80 sm:text-lg">
              <span className="font-bold text-red-offer">Opción 1:</span> Cerrar esta página, seguir comprando pan industrial lleno de químicos y olvidar que esta oportunidad existió.
            </p>
            <p className="text-base leading-relaxed text-artisan-ink/95 sm:text-lg">
              <span className="font-bold text-emerald-cta">Opción 2:</span> Invertir <span className="font-bold text-gold-mute">$9.90 Dólares</span> hoy, recibir acceso inmediato a la app, los 8 libros y el Chef IA, y hornear tu primer pan artesanal este mismo fin de semana — con 7 días de garantía total para probarlo sin riesgo.
            </p>
          </div>

          <Button
            asChild
            className="group relative mt-6 h-auto w-full overflow-hidden whitespace-normal rounded-full bg-emerald-cta px-6 py-5 text-base font-bold text-paper shadow-2xl transition-transform hover:scale-[1.03] hover:bg-emerald-cta-hover sm:px-8 sm:text-lg"
          >
            <a href={CHECKOUT_URL}>
              <span className="cta-shine absolute inset-y-0 w-1/3" aria-hidden="true" />
              <span className="relative">SÍ, QUIERO MI ACCESO COMPLETO POR $9.90 DÓLARES »</span>
            </a>
          </Button>

          <p className="mt-2 text-center text-[11px] font-bold uppercase tracking-wider text-emerald-600 sm:text-xs">
            ✅ Pago Único de Por Vida · Sin Mensualidades · Sin Suscripciones
          </p>

          <PaymentMethods variant="light" />

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