import { Button } from "@/components/ui/button";
import { CHECKOUT_URL } from "./config";
import chefAvatar from "@/assets/maria-avatar.jpg";

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

function ChefVisual() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2 rounded-xl bg-oven p-3">
      <div className="flex items-center gap-2">
        <img src={chefAvatar} alt="" loading="lazy" className="h-9 w-9 rounded-full border-2 border-gold object-cover" />
        <div>
          <p className="text-xs font-bold text-cream">Chef Panadera</p>
          <p className="text-[10px] text-emerald-cta">● responde en menos de 2 s</p>
        </div>
      </div>
      <div className="flex items-center gap-1 self-start rounded-2xl rounded-tl-none bg-surface px-3 py-2">
        {[3, 6, 9, 5, 8, 4, 7, 3, 6].map((h, i) => (
          <span key={i} className="w-1 rounded-full bg-gold" style={{ height: `${h * 2}px` }} />
        ))}
        <span className="ml-1 text-[10px] text-cream/70">0:02</span>
      </div>
      <span className="self-start rounded-full bg-gold/20 px-2 py-0.5 text-[9px] font-bold uppercase text-gold">⭐ El Secreto del Maestro</span>
    </div>
  );
}

function CookModeVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-oven p-3">
      <div className="w-28 rounded-[1.2rem] border-2 border-gold/60 bg-oven-black p-2">
        <p className="text-center text-[8px] font-bold uppercase text-gold">☀ Pantalla activa</p>
        {["Mezcla la harina", "Amasa 10 min", "Deja reposar"].map((t, i) => (
          <p key={t} className="mt-1 flex items-center gap-1 text-[10px] font-bold text-cream">
            <span className={i < 2 ? "text-emerald-cta" : "text-cream/40"}>{i < 2 ? "✔" : "○"}</span>{t}
          </p>
        ))}
        <div className="mt-1.5 h-1 w-full rounded-full bg-surface"><div className="h-1 w-2/3 rounded-full bg-emerald-cta" /></div>
      </div>
    </div>
  );
}

function TimerVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-2 rounded-xl bg-oven p-3">
      {[["Autólisis", "30"], ["Fermentación", "45"], ["Horno vapor", "25"]].map(([l, m], i) => (
        <div key={l} className="text-center">
          <div className={`flex h-12 w-12 items-center justify-center rounded-full border-4 ${i === 1 ? "border-emerald-cta" : "border-gold/60"} bg-oven-black`}>
            <span className="font-mono text-sm font-black text-cream">{m}:00</span>
          </div>
          <p className="mt-1 text-[8px] font-bold uppercase text-gold">{l}</p>
        </div>
      ))}
    </div>
  );
}

function DiplomaVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-oven p-3">
      <div className="relative w-full max-w-[150px] rounded-sm border-4 border-double border-gold bg-artisan-cream px-2 py-3 text-center">
        <p className="font-serif text-[8px] uppercase tracking-widest text-gold-mute">Diploma Oficial</p>
        <p className="font-serif text-[10px] font-bold text-artisan-ink">🌾 Maestro Panadero Artesanal</p>
        <p className="mt-1 font-serif text-xs italic text-artisan-ink">Tu Nombre</p>
        <p className="mt-1 font-mono text-[7px] text-gold-mute">REG-2026-PAN-OFICIAL</p>
        <span className="absolute -bottom-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-wine text-[8px] font-bold text-paper shadow-md ring-2 ring-wine/40">
          4K
        </span>
      </div>
    </div>
  );
}

const bonuses = [
  { title: "CHEF PANADERO IA 24/7 ILIMITADO", text: "Tu mentor privado disponible día y noche. Responde por voz o texto incluso con las manos llenas de masa.", value: "$59.00", Visual: ChefVisual },
  { title: "MODO COCINA CON PANTALLA SIEMPRE ACTIVA", text: "La pantalla nunca se apaga mientras cocinas. Letras grandes, checklist paso a paso y retoma exactamente donde lo dejaste.", value: "$25.00", Visual: CookModeVisual },
  { title: "TEMPORIZADORES INTELIGENTES INTEGRADOS", text: "Avisos sonoros precisos para cada etapa de tu pan. Nunca más se te pasará un levado ni se te quemará la corteza.", value: null, Visual: TimerVisual },
  { title: "CERTIFICADO OFICIAL DE MAESTRO PANADERO ARTESANAL 4K", text: "Documento oficial nominal en Ultra-HD para enmarcar con orgullo o presentar si decides vender tus creaciones.", value: "$22.00", Visual: DiplomaVisual },
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
        <div className="mx-auto mt-6 max-w-4xl space-y-5">
          {bonuses.map(({ title, text, value, Visual }) => (
            <article key={title} className="flex flex-col gap-4 rounded-2xl border-2 border-gold/50 bg-paper p-4 shadow-lg sm:flex-row sm:items-center sm:p-5">
              <div className="h-32 w-full shrink-0 sm:w-48">
                <Visual />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-sans text-lg font-extrabold leading-snug text-artisan-ink sm:text-xl">{title}</h3>
                <p className="mt-1 text-base leading-relaxed text-artisan-ink/75 sm:text-lg">{text}</p>
                {value ? <p className="mt-2 text-base font-bold text-artisan-ink/80">
                  Valor: <span className="text-red-offer line-through">{value}</span>{" "}
                  <span className="text-emerald-cta">¡GRATIS HOY!</span>
                </p> : <p className="mt-2 text-base font-bold text-emerald-cta">¡Incluido en tu app!</p>}
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
