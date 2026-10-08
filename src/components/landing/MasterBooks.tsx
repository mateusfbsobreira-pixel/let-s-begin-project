import { Button } from "@/components/ui/button";
import { CHECKOUT_URL } from "./config";
import toolChef from "@/assets/tool-chef-ia.jpg";
import toolCocina from "@/assets/tool-modo-cocina.jpg";
import toolTimer from "@/assets/tool-temporizadores.jpg";
import toolCert from "@/assets/tool-certificado.jpg";

const books = [
  { n: 1, title: "El Método Completo del Pan Artesanal", benefit: "Masa madre, fermentación lenta y técnicas de horneado perfecto", value: "$20.00", img: "/images/livro-principal.webp", tag: "Libro Principal" },
  { n: 2, title: "30 Recetas de Pan Artesanal Gourmet", benefit: "Recetas consagradas explicadas paso a paso", value: "$15.00", img: "/images/bonus-1-paes-gourmet.webp", tag: "Bono 1" },
  { n: 3, title: "Pizzas Artesanales Caseras", benefit: "Masa crocante profesional + las 3 salsas maestras", value: "$12.00", img: "/images/bonus-2-pizzas.webp", tag: "Bono 2" },
  { n: 4, title: "Brownies Gourmet Fudgy", benefit: "Corteza brillante y centro húmedo intenso", value: "$10.00", img: "/images/bonus-3-brownies.webp", tag: "Bono 3" },
  { n: 5, title: "Masas Dulces y Panes Rellenos", benefit: "Brioches suaves, roscas y trenzas gourmet", value: "$15.00", img: "/images/bonus-4-masas-dulces.webp", tag: "Bono 4" },
  { n: 6, title: "Recetas Premium para Vender Desde Casa", benefit: "Costos, empaques y estrategias de ingreso extra", value: "$15.00", img: "/images/bonus-5-vender.webp", tag: "Bono 5" },
  { n: 7, title: "Pequeñas Obras de Arte", benefit: "40 recetas de galletas y confitería fina artesanal", value: "$12.00", img: "/images/bonus-6-galletas.webp", tag: "Bono 6" },
  { n: 8, title: "Las Recetas Secretas de La Casa del Pan", benefit: "Prefermentos y fórmulas de autor · Solo lanzamiento", value: "$20.00", img: "/images/todos-productos.webp", tag: "Bono Exclusivo" },
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

const bonuses = [
  { title: "Chef Panadero IA 24/7 Ilimitado", text: "Tu mentor privado disponible día y noche. Le hablas con las manos llenas de masa y te responde por voz en segundos, con la paciencia de una amiga.", value: "$59.00", img: toolChef, alt: "Señora en su cocina recibiendo un consejo del Chef IA en el celular" },
  { title: "Modo Cocina con Pantalla Siempre Activa", text: "La pantalla nunca se apaga mientras cocinas. Letras grandes, checklist paso a paso y retomas exactamente donde lo dejaste.", value: "$25.00", img: toolCocina, alt: "Celular en la bancada mostrando una receta con checklist junto a la masa" },
  { title: "Temporizadores Inteligentes Integrados", text: "Avisos sonoros precisos para cada etapa de tu pan. Nunca más se te pasará un levado ni se te quemará la corteza.", value: "$15.00", img: toolTimer, alt: "Celular con temporizador de fermentación y pan rústico recién horneado" },
  { title: "Certificado Oficial de Maestro Panadero 4K", text: "Documento nominal en Ultra-HD para enmarcar con orgullo o presentar si decides vender tus creaciones.", value: "$22.00", img: toolCert, alt: "Diploma de Maestro Panadero Artesanal enmarcado en madera" },
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

        <h3 className="mt-12 text-center font-serif text-2xl font-bold text-artisan-ink sm:text-3xl">Todo Lo Que Recibes</h3>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {books.map((b) => (
            <article key={b.n} className="group flex flex-col rounded-2xl border border-gold/35 bg-paper p-4 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl">
              <span className="mx-auto mb-3 inline-block rounded-full bg-wine px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-paper">{b.tag}</span>
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

        <p className="mt-6 text-center text-lg font-bold text-artisan-ink/80">
          *Total solo en libros y recetarios: <span className="text-red-offer line-through">$119.00 USD</span>*
        </p>
        <div className="mt-14 text-center">
          <span className="inline-block rounded-full bg-wine px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-paper">
            + Las 4 Herramientas de Tu App
          </span>
        </div>
        <div className="mx-auto mt-6 grid max-w-6xl gap-6 md:grid-cols-2">
          {bonuses.map(({ title, text, value, img, alt }) => (
            <article key={title} className="flex flex-col overflow-hidden rounded-2xl border border-gold/30 bg-paper shadow-md transition-all hover:shadow-xl">
              <img src={img} alt={alt} width={1200} height={896} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <span className="self-start rounded-full border border-gold/50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-gold-mute">Herramienta Exclusiva</span>
                <h3 className="mt-3 font-serif text-2xl font-bold leading-snug text-artisan-ink">{title}</h3>
                <p className="mt-2 flex-1 text-lg leading-relaxed text-artisan-ink/75">{text}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="text-base font-bold text-red-offer line-through">Valor: {value}</span>
                  <span className="rounded-full bg-emerald-cta px-3 py-1 text-sm font-extrabold uppercase text-paper">¡Incluido $0 Hoy!</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border-2 border-gold bg-paper p-6 text-center shadow-xl sm:p-10">
          <p className="text-lg font-bold uppercase text-artisan-ink/80 sm:text-xl">
            Valor total real de todo el paquete:{" "}
            <span className="text-red-offer line-through decoration-gold decoration-2">$230.00 USD</span>
          </p>
          <p className="mt-4 text-4xl font-black leading-tight text-emerald-cta sm:text-5xl">
            HOY EN ACCESO FUNDADORAS: SOLO $9.90 USD
          </p>
          <span className="mt-4 inline-block rounded-full bg-red-offer px-4 py-2 text-sm font-extrabold uppercase text-paper sm:text-base">
            🔥 96% de Descuento · Pago Único Para Siempre · Cero Mensualidades
          </span>
          <p className="mt-4 text-base italic leading-relaxed text-artisan-ink/75 sm:text-lg">
            Acceso vitalicio a los 8 libros en PDF para descargar + Acceso ilimitado al App PWA (0 MB de espacio, funciona en cualquier celular).
          </p>
          <Button
            asChild
            className="mt-6 h-auto min-h-[56px] w-full max-w-md whitespace-normal rounded-full bg-emerald-cta px-6 py-4 text-base font-extrabold text-paper shadow-xl transition-all hover:scale-105 hover:bg-emerald-cta-hover sm:text-lg"
          >
            <a href={CHECKOUT_URL}>QUIERO TODO EL PAQUETE POR $9.90 EN MI MONEDA →</a>
          </Button>
          <p className="mt-3 text-sm font-semibold text-artisan-ink/70">
            ✅ Garantía Blindada de 7 Días · Pago 100% Seguro por Hotmart
          </p>
        </div>
      </div>
    </section>
  );
}
