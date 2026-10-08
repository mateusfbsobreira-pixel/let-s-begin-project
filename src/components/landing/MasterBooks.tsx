import { Button } from "@/components/ui/button";
import { CHECKOUT_URL } from "./config";

const stack = [
  { icon: "📖", title: "Libro 1: El Despertar de la Masa Madre Fácil", value: "$25.00" },
  { icon: "📖", title: "Libro 2: Panes Rústicos Europeos de Corteza Crujiente", value: "$25.00" },
  { icon: "📖", title: "Libro 3: Panes Rápidos en Sartén y Sin Horno", value: "$20.00" },
  { icon: "📖", title: "Libro 4: Brioches, Roscas y Panes Dulces de la Abuela", value: "$25.00" },
  { icon: "📖", title: "Libro 5: Panes Saludables, Integrales y con Semillas", value: "$20.00" },
  { icon: "📖", title: "Libro 6: Focaccias y Panes Rellenos Italianos", value: "$20.00" },
  { icon: "📖", title: "Libro 7: Baguettes y Panes de Desayuno Exprés", value: "$20.00" },
  { icon: "📖", title: "Libro 8: Secretos de Horneado y Conservación Prolongada", value: "$20.00" },
  {
    icon: "🤖",
    title: "ASISTENTE CHEF 24/7 ILIMITADA",
    desc: "Responde tus dudas por voz incluso a las 11pm",
    value: "$59.00",
    highlight: true,
  },
  {
    icon: "⏱️",
    title: "MODO COCINA + TEMPORIZADORES INTELIGENTES",
    desc: "Pantalla siempre encendida sin ensuciar tu celular",
    value: "$25.00",
    highlight: true,
  },
  {
    icon: "🎓",
    title: "DIPLOMA OFICIAL DE PANADERA ARTESANAL",
    desc: "En 4K con tu nombre",
    value: "$22.00",
    highlight: true,
  },
];

export function MasterBooks() {
  return (
    <section className="scroll-mt-24 border-t border-gold/20 bg-artisan-cream px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <header className="text-center">
          <span className="mb-3 inline-block rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase text-artisan-ink">
            📚 Biblioteca Completa de Recetas Maestras
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-artisan-ink sm:text-5xl">
            Todo Lo Que Necesitas Para No Comprar Pan Nunca Más
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-artisan-ink/80">
            No son PDFs aburridos ni teoría difícil. Son 187 recetas explicadas
            en 4 pasos simples, guiadas paso a paso por tu Chef virtual.
          </p>
        </header>

        <ul className="mt-10 space-y-3">
          {stack.map((item) => (
            <li
              key={item.title}
              className={`flex items-center gap-4 rounded-2xl border bg-paper p-4 shadow-sm sm:p-5 ${
                item.highlight ? "border-2 border-gold" : "border-gold/35"
              }`}
            >
              <span className="text-3xl" aria-hidden="true">{item.icon}</span>
              <div className="min-w-0 flex-1">
                <p className="text-base font-bold leading-snug text-artisan-ink sm:text-lg">
                  {item.title}
                </p>
                {item.desc && (
                  <p className="mt-0.5 text-base leading-snug text-artisan-ink/70">{item.desc}</p>
                )}
              </div>
              <div className="shrink-0 text-right">
                <p className="text-xs font-semibold uppercase text-artisan-ink/60">Valor real</p>
                <p className="text-lg font-extrabold text-red-offer line-through">{item.value}</p>
                <p className="text-sm font-extrabold text-emerald-cta">¡INCLUIDO!</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border-2 border-gold bg-paper p-6 text-center shadow-xl sm:p-10">
          <p className="text-lg font-bold uppercase text-artisan-ink/80 sm:text-xl">
            Valor total de todo el paquete:{" "}
            <span className="text-red-offer line-through decoration-gold decoration-2">$281.00 USD</span>
          </p>
          <p className="mt-4 text-4xl font-black leading-tight text-emerald-cta sm:text-5xl">
            HOY EN ACCESO FUNDADORAS: SOLO $9.90 USD
          </p>
          <span className="mt-4 inline-block rounded-full bg-red-offer px-4 py-2 text-sm font-extrabold uppercase text-paper sm:text-base">
            🔥 96% de Descuento — Pago Único Para Siempre
          </span>
          <p className="mt-4 text-base italic leading-relaxed text-artisan-ink/75 sm:text-lg">
            *(Menos de lo que gastas en 2 barras de pan en la panadería, y te
            sirve para toda la vida)*
          </p>
          <Button
            asChild
            className="mt-6 h-auto min-h-[56px] w-full max-w-md whitespace-normal rounded-full bg-emerald-cta px-6 py-4 text-base font-extrabold text-paper shadow-xl transition-all hover:scale-105 hover:bg-emerald-cta-hover sm:text-lg"
          >
            <a href={CHECKOUT_URL}>QUIERO MI BIBLIOTECA COMPLETA POR $9.90 →</a>
          </Button>
          <p className="mt-3 text-sm font-semibold text-artisan-ink/70">
            Acceso vitalicio instantáneo · Sin pagos mensuales · Garantía de 7 días
          </p>
        </div>
      </div>
    </section>
  );
}
