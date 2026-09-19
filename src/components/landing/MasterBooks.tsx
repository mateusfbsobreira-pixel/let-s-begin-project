import { Button } from "@/components/ui/button";
import { CHECKOUT_URL } from "./config";

const books = [
  {
    tag: "📘 GUÍA FUNDACIONAL",
    title: "El Método Completo del Pan Artesanal",
    subtitle: "Masa madre, fermentación y horneado perfecto paso a paso.",
    image: "/images/livro-principal.webp",
    value: "$20",
    included: "¡INCLUIDO!",
    main: true,
  },
  {
    tag: "🎁 BONO #1",
    title: "30 Recetas de Pan Artesanal Gourmet",
    subtitle: "30 recetas completas probadas paso a paso.",
    image: "/images/bonus-1-paes-gourmet.webp",
    value: "$15",
  },
  {
    tag: "🎁 BONO #2",
    title: "Pizzas Artesanales Caseras",
    subtitle: "Masa crujiente profesional y las 3 salsas maestras.",
    image: "/images/bonus-2-pizzas.webp",
    value: "$12",
  },
  {
    tag: "🎁 BONO #3",
    title: "Brownies Gourmet Fudgy",
    subtitle: "Costra brillante craquelada y centro húmedo intenso.",
    image: "/images/bonus-3-brownies.webp",
    value: "$10",
  },
  {
    tag: "🎁 BONO #4",
    title: "Masas Dulces y Panes Rellenos",
    subtitle: "Brioches suaves como nubes y trenzas gourmet.",
    image: "/images/bonus-4-masas-dulces.webp",
    value: "$15",
  },
  {
    tag: "🎁 BONO #5",
    title: "Recetas Premium para Vender Desde Casa",
    subtitle: "Estrategias de costos, empaque y ventas para generar ingresos.",
    image: "/images/bonus-5-vender.webp",
    value: "$15",
  },
  {
    tag: "🎁 BONO #6",
    title: "Pequeñas Obras de Arte",
    subtitle: "40 galletas artesanales y bocados finos de vitrina.",
    image: "/images/bonus-6-galletas.webp",
    value: "$12",
  },
  {
    tag: "🔐 BONO EXCLUSIVO DE LANZAMIENTO",
    title: "Las Recetas Secretas de La Casa del Pan",
    subtitle: "Técnicas ocultas de prefermentos y fórmulas de autor.",
    image: "/images/bonus-exclusivo.webp",
    value: "$20",
    included: "¡EXCLUSIVO!",
    exclusive: true,
  },
];

export function MasterBooks() {
  return (
    <section className="scroll-mt-24 border-t border-gold/20 bg-artisan-cream px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-4xl text-center">
          <span className="mb-3 inline-block rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase text-artisan-ink">
            🎁 Colección Completa de 8 Volúmenes
          </span>
          <h2 className="font-serif text-2xl font-bold leading-tight text-artisan-ink sm:text-4xl">
            Además de la Aplicación Interactiva, Recibes la Biblioteca Completa:
          </h2>
          <p className="mt-2 font-serif text-2xl italic text-gold-mute sm:text-3xl">
            1 Libro Principal + 7 Bonos Premium y 1 Bono Exclusivo
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-artisan-ink/80 sm:text-lg">
            Disfrútalos de forma interactiva dentro de tu aplicación o descarga
            los PDFs originales en alta resolución para imprimir en papel.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {books.map((book) => (
            <article
              key={book.title}
              className={`relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl bg-paper p-3 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-[0_0_30px_color-mix(in_oklab,var(--color-gold)_55%,transparent)] active:border-gold active:shadow-[0_0_25px_color-mix(in_oklab,var(--color-gold)_55%,transparent)] sm:rounded-3xl sm:p-5 ${book.main ? "border-2 border-gold" : "border border-gold/35"}`}
            >
              <p
                className={`min-h-8 text-[10px] font-extrabold uppercase leading-snug sm:text-xs ${
                  book.exclusive ? "text-wine" : "text-gold"
                }`}
              >
                {book.tag}
              </p>
              <div className="mt-3 aspect-[3/4] w-full">
                <img
                  src={book.image}
                  alt={`Portada de ${book.title}`}
                  loading="lazy"
                   decoding="async"
                  className="h-full w-full object-contain drop-shadow-xl"
                />
              </div>
              <div className="flex flex-1 flex-col pt-4">
                <h3 className="line-clamp-2 font-serif text-sm font-bold leading-tight text-artisan-ink sm:text-base">
                  {book.title}
                </h3>
                <p className="mt-1 line-clamp-2 flex-1 text-[11px] leading-snug text-artisan-ink/70 sm:text-xs">
                  {book.subtitle}
                </p>
                <div className="mt-4 flex flex-col items-center justify-center gap-1.5 sm:flex-row sm:flex-wrap sm:gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold text-paper ${
                      book.exclusive ? "bg-wine" : book.main ? "bg-gold" : "bg-emerald-cta"
                    }`}
                  >
                    VALOR {book.value}
                  </span>
                  <span
                    className={`text-sm font-extrabold ${
                      book.exclusive
                        ? "text-wine"
                        : book.main
                          ? "text-gold"
                          : "text-emerald-cta"
                    }`}
                  >
                    {book.included ?? "¡Hoy GRATIS!"}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gold/40 bg-paper p-6 text-center shadow-xl sm:p-8">
          <p className="text-xs font-bold uppercase text-artisan-ink/70 sm:text-sm">
            Valor Total de la Colección (8 Libros + Aplicación + Chef IA)
          </p>
          <p className="mt-3 text-2xl font-extrabold text-red-offer line-through sm:text-3xl">
            $230 USD
          </p>
          <p className="mt-1 text-4xl font-black leading-tight text-emerald-cta sm:text-5xl">
            HOY POR SOLO $6.90 DÓLARES
          </p>
          <p className="mt-3 text-sm text-artisan-ink/70">
            97% de descuento especial • Pago único de por vida • Sin mensualidades
          </p>
          <Button
            asChild
            className="mt-5 h-auto w-full max-w-md whitespace-normal rounded-full bg-emerald-cta px-6 py-4 text-base font-bold text-paper shadow-xl transition-all hover:scale-105 hover:bg-emerald-cta-hover sm:text-lg"
          >
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              QUIERO MI ACCESO COMPLETO POR $6.90 DÓLARES »
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}