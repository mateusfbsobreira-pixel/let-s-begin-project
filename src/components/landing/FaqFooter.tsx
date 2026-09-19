import { Wheat } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cómo funciona la aplicación en mi teléfono? ¿Ocupa memoria?",
    answer:
      "Es sumamente fácil: no necesitas descargar archivos pesados de las tiendas de apps. Nuestra plataforma utiliza tecnología PWA de última generación. Puedes agregar el ícono oficial a la pantalla de inicio de tu iPhone o Android con 1 solo toque y usarla cómodamente en tu cocina sin ocupar espacio (0 MB).",
  },
  {
    question: "¿Tengo que pagar alguna mensualidad por el Chef IA o el App?",
    answer:
      "¡Jamás! Tu pago de hoy de $6.90 USD es un pago ÚNICO y para toda la vida. No existen mensualidades, ni suscripciones, ni cargos sorpresa en tu tarjeta.",
  },
  {
    question: "¿Puedo pagar en la moneda de mi país si no tengo dólares (USD)?",
    answer:
      "El valor de la oferta es de $6.90 Dólares americanos. Al hacer clic en comprar, Hotmart detectará automáticamente tu país y te mostrará el valor exacto convertido a tu moneda local (pesos mexicanos, colombianos, chilenos, soles peruanos, euros, etc.). Puedes pagar con tarjetas locales de débito/crédito o en efectivo en los puntos autorizados de tu país (OXXO en México, Efecty en Colombia, PagoEfectivo en Perú, etc.).",
  },
  {
    question: "¿También recibiré los libros en formato PDF para descargar e imprimir?",
    answer:
      "¡Sí! Tienes lo mejor de los dos mundos: la experiencia interactiva dentro del aplicativo con cronómetros integrados y, además, todos los libros en formato PDF original en alta resolución para descargar a tu computadora o imprimir en papel cuando quieras.",
  },
  {
    question: "¿Qué pasa si nunca he hecho pan y no tengo experiencia?",
    answer:
      "El método fue creado pensando exactamente en principiantes. Cada paso está explicado de forma visual y simple, y ante cualquier duda que tengas, tu Chef IA estará disponible en vivo para guiarte.",
  },
  {
    question: "¿Necesito hornos especiales o utensilios profesionales costosos?",
    answer:
      "No. Todas las recetas están adaptadas para hornos caseros convencionales y utensilios que ya tienes en tu cocina (bandejas, bowls comunes y ollas de hierro si tienes).",
  },
  {
    question: "¿Cómo y cuándo recibo mi acceso?",
    answer:
      "El acceso es 100% inmediato. Tras confirmar tu pago seguro en Hotmart, el sistema te redirige a la activación y te envía tus credenciales seguras al correo electrónico en menos de 1 minuto.",
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
              <AccordionTrigger className="py-5 text-left text-base font-bold leading-snug text-cream hover:text-gold hover:no-underline sm:text-lg [&>svg]:text-gold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-7 text-cream/85 sm:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gold-mute/20 bg-oven-black px-4 py-10 text-center text-xs text-cream/55">
      <div className="mx-auto max-w-4xl">
        <div className="inline-flex items-center gap-2 font-serif font-bold tracking-widest text-gold">
          <Wheat className="h-5 w-5" aria-hidden="true" />
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