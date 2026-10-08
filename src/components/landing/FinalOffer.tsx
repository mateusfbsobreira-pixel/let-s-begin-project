import { Check, ShieldCheck, Smartphone, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHECKOUT_URL } from "./config";
import { CurrencyBox } from "./CurrencyBox";

const benefits = [
  ["Acceso de por vida a los 8 Libros Maestros en PDF", "Descárgalos en celular, tablet o computadora"],
  ["Chef Panadero con Inteligencia Artificial 24/7", "Respuestas ilimitadas al instante"],
  ["Modo Cocina con pantalla siempre activa y letras grandes", ""],
  ["Temporizadores inteligentes integrados", "Para cada fermentación y horneado"],
  ["Certificado Oficial de Maestro Panadero en Ultra-HD", "4K para imprimir"],
  ["Actualizaciones futuras y nuevas recetas incluidas para siempre", ""],
];


const seals = [
  { Icon: ShieldCheck, title: "Garantía Incondicional de 7 Días", text: "Si no te encanta, te devolvemos el 100% de tu dinero con un solo clic, sin preguntas." },
  { Icon: Smartphone, title: "Funciona en Cualquier Dispositivo", text: "No ocupa memoria en tu celular, fácil de usar incluso si no sabes de tecnología." },
  { Icon: Lock, title: "Compra Protegida", text: "Tus datos están completamente seguros y protegidos por Hotmart." },
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

        <div className="mx-auto max-w-2xl rounded-3xl border border-[#E8DFC8] bg-[#FDFBF7] p-6 text-center shadow-[0_20px_60px_-20px_rgba(120,90,30,0.35)] sm:p-10">
          <span className="inline-flex rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-gold-mute sm:text-sm">
            🔥 Oferta Especial de Lanzamiento · Acceso Ilimitado
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-artisan-ink sm:text-4xl">
            Empieza Hoy Mismo a Hornear Panes Perfectos en Casa
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-artisan-ink/75">
            Todo lo que necesitas en un solo lugar. Sin mensualidades, sin complicaciones técnicas y con garantía total.
          </p>

          <ul className="mx-auto mt-8 space-y-4 text-left">
            {benefits.map(([title, detail]) => (
              <li key={title} className="flex gap-3 text-lg leading-relaxed text-artisan-ink">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-cta text-paper">
                  <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                </span>
                <span>
                  <span className="font-semibold">{title}</span>
                  {detail && <span className="text-artisan-ink/65"> ({detail})</span>}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9 border-t border-[#E8DFC8] pt-8">
            <p className="text-lg text-artisan-ink/50">
              Valor real de todo el paquete: <span className="line-through">$230.00 USD</span>
            </p>
            <p className="mt-3 text-lg font-bold uppercase text-artisan-ink">Precio de lanzamiento:</p>
            <div className="mt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">

              <span className="text-4xl font-black leading-tight text-emerald-cta sm:text-5xl">
                SOLO $9.90 DÓLARES AMERICANOS <span className="whitespace-nowrap">(USD)</span>
              </span>
              <span className="rounded-full bg-emerald-cta px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-paper sm:text-sm">
                96% DE DESCUENTO · PAGO ÚNICO
              </span>
            </div>
            <p className="mt-4 text-base font-extrabold uppercase tracking-wide text-artisan-ink">
              Pago único para siempre · Sin suscripciones ni mensualidades · Acceso vitalicio
            </p>

          </div>

          <CurrencyBox className="mt-7" />

          <Button
            asChild
            className="group relative mt-7 h-auto w-full animate-pulse overflow-hidden whitespace-normal rounded-full bg-emerald-cta px-6 py-5 text-paper shadow-2xl transition-transform [animation-duration:2.5s] hover:scale-[1.03] hover:animate-none hover:bg-emerald-cta-hover sm:px-8"
          >
            <a href={CHECKOUT_URL}>
              <span className="cta-shine absolute inset-y-0 w-1/3" aria-hidden="true" />
              <span className="relative flex flex-col items-center justify-center leading-tight">
                <span className="text-base font-extrabold uppercase sm:text-lg">QUIERO EL PAQUETE COMPLETO</span>
                <span className="text-[13px] font-bold text-gold-bright sm:text-sm">
                  POR SOLO $9.90 DÓLARES (USD) →
                </span>
              </span>
            </a>
          </Button>
          <p className="mt-3 text-[13px] font-bold leading-relaxed text-artisan-ink sm:text-sm">
            ✅ Pago único para siempre · Sin suscripciones mensuales · Garantía blindada de 7 días
          </p>
          <p className="mt-3 text-sm leading-relaxed text-artisan-ink/70">
            🔒 Pago 100% encriptado y seguro procesado por Hotmart · Recibes acceso inmediato a tu correo en menos de 2 minutos
          </p>


          <div className="mt-8 grid gap-4 border-t border-[#E8DFC8] pt-7 text-left sm:grid-cols-3">
            {seals.map(({ Icon, title, text }) => (
              <div key={title} className="flex gap-3 sm:flex-col sm:items-center sm:text-center">
                <Icon className="h-9 w-9 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="text-base font-bold text-artisan-ink">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-artisan-ink/65">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
