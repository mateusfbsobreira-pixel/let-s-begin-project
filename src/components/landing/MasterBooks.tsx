import { Button } from "@/components/ui/button";
import { CHECKOUT_URL } from "./config";
import chefAvatar from "@/assets/maria-avatar.jpg";

const books = [
  { n: 1, title: "El Despertar de la Masa Madre Fácil", benefit: "Tu masa madre viva en 5 días", value: "$25.00", img: "/images/livro-principal.webp" },
  { n: 2, title: "Panes Rústicos Europeos de Corteza Crujiente", benefit: "Corteza que cruje al cortar", value: "$25.00", img: "/images/bonus-1.webp" },
  { n: 3, title: "Panes Rápidos en Sartén y Sin Horno", benefit: "Listos en 30 minutos", value: "$20.00", img: "/images/bonus-2.webp" },
  { n: 4, title: "Brioches, Roscas y Panes Dulces de la Abuela", benefit: "Suaves como una nube", value: "$25.00", img: "/images/bonus-3.webp" },
  { n: 5, title: "Panes Saludables, Integrales y con Semillas", benefit: "Sin conservantes, 100% natural", value: "$20.00", img: "/images/bonus-4.webp" },
  { n: 6, title: "Focaccias y Panes Rellenos Italianos", benefit: "Solo 4 ingredientes", value: "$20.00", img: "/images/bonus-5.webp" },
  { n: 7, title: "Baguettes y Panes de Desayuno Exprés", benefit: "Sin tiempos complicados", value: "$20.00", img: "/images/bonus-6.webp" },
  { n: 8, title: "Secretos de Horneado y Conservación Prolongada", benefit: "Pan fresco toda la semana", value: "$20.00", img: "/images/todos-productos.webp" },
];

function BookCover({ title, img }: { title: string; img: string }) {
  return (
    <div className="relative mx-auto aspect-[3/4] w-full max-w-[180px] [perspective:800px]">
      <div className="relative h-full w-full overflow-hidden rounded-r-lg rounded-l-sm border border-gold/60 bg-oven shadow-[8px_10px_20px_-6px_rgba(0,0,0,0.55)] transition-transform duration-500 [transform:rotateY(-12deg)] group-hover:[transform:rotateY(0deg)]">
        <img src={img} alt={title} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-oven-black/60 to-transparent" />
      </div>
    </div>
  );
}

function ChefVisual() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2 rounded-xl bg-oven p-3">
      <div className="flex items-center gap-2">
        <img src={chefAvatar} alt="" loading="lazy" className="h-9 w-9 rounded-full border-2 border-gold object-cover" />
        <div>
          <p className="text-xs font-bold text-cream">Chef Panadera</p>
          <p className="text-[10px] text-emerald-cta">● respondiendo...</p>
        </div>
      </div>
      <div className="flex items-center gap-1 self-start rounded-2xl rounded-tl-none bg-surface px-3 py-2">
        {[3, 6, 9, 5, 8, 4, 7, 3, 6].map((h, i) => (
          <span key={i} className="w-1 rounded-full bg-gold" style={{ height: `${h * 2}px` }} />
        ))}
        <span className="ml-1 text-[10px] text-cream/70">0:02</span>
      </div>
    </div>
  );
}

function TimerVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-oven p-3">
      <div className="w-24 rounded-[1.2rem] border-2 border-gold/60 bg-oven-black p-2 text-center">
        <p className="text-[8px] font-bold uppercase text-gold">Fermentación</p>
        <p className="font-mono text-2xl font-black text-cream">45:00</p>
        <div className="mx-auto mt-1 h-1 w-full rounded-full bg-surface">
          <div className="h-1 w-2/3 rounded-full bg-emerald-cta" />
        </div>
        <p className="mt-1 text-[8px] text-cream/70">Horno 220°C</p>
      </div>
    </div>
  );
}

function DiplomaVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-oven p-3">
      <div className="relative w-full max-w-[150px] rounded-sm border-4 border-double border-gold bg-artisan-cream px-2 py-3 text-center">
        <p className="font-serif text-[8px] uppercase tracking-widest text-gold-mute">Diploma Oficial</p>
        <p className="font-serif text-[10px] font-bold text-artisan-ink">Panadera Artesanal</p>
        <p className="mt-1 font-serif text-xs italic text-artisan-ink">Tu Nombre</p>
        <span className="absolute -bottom-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-wine text-[8px] font-bold text-paper shadow-md ring-2 ring-wine/40">
          4K
        </span>
      </div>
    </div>
  );
}

const bonuses = [
  { title: "ASISTENTE CHEF 24/7 ILIMITADA", text: "Tu guía personal que te responde por voz en 2 segundos, incluso a medianoche y con harina en las manos.", value: "$59.00", Visual: ChefVisual },
  { title: "MODO COCINA + TEMPORIZADORES INTELIGENTES", text: "Pantalla siempre encendida para cocinar sin tocar el teléfono con las manos pegajosas.", value: "$25.00", Visual: TimerVisual },
  { title: "CERTIFICADO OFICIAL DE PANADERA ARTESANAL 4K", text: "Generado en alta resolución con tu nombre oficial para imprimir y enmarcar con orgullo.", value: "$22.00", Visual: DiplomaVisual },
];

export function MasterBooks() {
  return (
    <section className="scroll-mt-24 border-t border-gold/20 bg-artisan-cream px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-4xl text-center">
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

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {books.map((b) => (
            <article key={b.n} className="group flex flex-col rounded-2xl border border-gold/35 bg-paper p-4 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl">
              <BookCover title={b.title} img={b.img} />
              <h3 className="mt-4 font-serif text-base font-bold leading-snug text-artisan-ink sm:text-lg">{b.title}</h3>
              <p className="mt-1 flex-1 text-sm leading-snug text-artisan-ink/70 sm:text-base">{b.benefit}</p>
              <p className="mt-3 rounded-full bg-artisan-cream px-3 py-1 text-sm font-bold text-artisan-ink/80">
                Valor: <span className="text-red-offer line-through">{b.value}</span>{" "}
                <span className="text-emerald-cta">¡Incluido!</span>
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <span className="inline-block rounded-full bg-wine px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-paper">
            + 3 Súper Bonos Exclusivos
          </span>
        </div>
        <div className="mx-auto mt-6 max-w-4xl space-y-5">
          {bonuses.map(({ title, text, value, Visual }) => (
            <article key={title} className="flex flex-col gap-4 rounded-2xl border-2 border-gold/50 bg-paper p-4 shadow-lg sm:flex-row sm:items-center sm:p-5">
              <div className="h-32 w-full shrink-0 sm:w-48">
                <Visual />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-sans text-lg font-extrabold leading-snug text-artisan-ink sm:text-xl">{title}</h3>
                <p className="mt-1 text-base leading-relaxed text-artisan-ink/75 sm:text-lg">{text}</p>
                <p className="mt-2 text-base font-bold text-artisan-ink/80">
                  Valor: <span className="text-red-offer line-through">{value}</span>{" "}
                  <span className="text-emerald-cta">¡GRATIS HOY!</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border-2 border-gold bg-paper p-6 text-center shadow-xl sm:p-10">
          <p className="text-lg font-bold uppercase text-artisan-ink/80 sm:text-xl">
            Valor total real de todo el paquete:{" "}
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
