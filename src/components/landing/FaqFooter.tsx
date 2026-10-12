import { Button } from "@/components/ui/button";
import { CHECKOUT_URL } from "./config";
const logoUrl = "/images/logo-la-casa-del-pan.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿No sé casi nada de celulares ni computadoras, voy a poder usar esto?",
    answer:
      "¡Claro que sí! Está hecho justamente pensando en ti. Las letras son grandes para leer sin esfuerzo y la pantalla nunca se apaga mientras cocinas para que no manches tu teléfono con harina. Y si te trabas en algo, el Chef te contesta en segundos por escrito o por voz.",
  },
  {
    question: "¿Me van a cobrar todos los meses o es un solo pago?",
    answer:
      "Es un solo pago para toda la vida. Pagas una única vez los $9.90 Dólares hoy y nunca más vuelves a pagar nada. Sin suscripciones escondidas, sin mensualidades y con todas las recetas que agreguemos en el futuro ya incluidas.",
  },
  {
    question: "¿Cómo y cuándo recibo mi acceso?",
    answer:
      "El acceso es inmediato. Apenas se confirma tu pago seguro en Hotmart, te llega todo a tu correo electrónico en menos de 1 minuto, listo para empezar a hornear.",
  },
];

export function FaqSection() {
  return (
    <section className="border-t border-gold-mute/30 bg-oven px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center font-serif text-2xl font-bold leading-tight text-gold-bright sm:text-4xl">
          Preguntas Frecuentes
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index + 1}`}
              className="rounded-xl border border-gold-mute/35 bg-oven-soft px-5 data-[state=open]:border-gold/60"
            >
              <AccordionTrigger className="py-5 text-left text-base font-bold leading-snug text-cream hover:text-gold hover:no-underline sm:text-xl [&>svg]:text-gold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-cream/85 sm:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-10 text-center">
          <Button
            asChild
            className="h-auto w-full rounded-full bg-emerald-cta px-6 py-4 text-paper shadow-xl hover:bg-emerald-cta-hover sm:w-auto sm:px-10"
          >
            <a href={CHECKOUT_URL}>
              <span className="whitespace-normal text-base font-extrabold uppercase leading-tight sm:text-lg">
                QUIERO EMPEZAR HOY POR SOLO $9.90 DÓLARES (USD) →
              </span>
            </a>
          </Button>
          <p className="mt-3 text-[13px] font-bold text-emerald-400/90 sm:text-sm">
            Acceso inmediato para siempre · 7 días de prueba sin riesgo
          </p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gold-mute/20 bg-oven-black px-4 py-10 text-center text-xs text-cream/55">
      <div className="mx-auto max-w-4xl">
        <div className="inline-flex items-center gap-3 font-serif font-bold tracking-widest text-gold">
          <img
            src={logoUrl}
            alt="Logo de La Casa del Pan Artesanal"
            width={48}
            height={48}
            loading="lazy"
            decoding="async"
            className="h-12 w-12 rounded-xl border border-gold/40 shadow-[0_0_22px_color-mix(in_oklab,var(--color-gold)_22%,transparent)] sm:h-14 sm:w-14"
          />
          LA CASA DEL PAN
        </div>
        <p className="mt-4">© 2026 La Casa del Pan Artesanal. Todos los derechos reservados.</p>
        <p className="mt-2 leading-relaxed">
          Plataforma de Educación Culinaria Interactiva • Soporte:{" "}
          <a
            href="mailto:soporte@lacasadelpanartesanal.shop"
            className="text-gold transition-colors hover:text-gold-bright"
          >
            soporte@lacasadelpanartesanal.shop
          </a>
        </p>
      </div>
    </footer>
  );
}