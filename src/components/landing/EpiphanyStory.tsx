import carmenHistoria from "@/assets/carmen-historia.jpg";

const P = "text-base sm:text-lg lg:text-xl leading-loose font-normal not-italic";

export function EpiphanyStory() {
  return (
    <section className="relative overflow-hidden border-y border-gold/20 bg-gradient-to-b from-oven-black via-oven-soft to-oven-black">
      <div className="warm-section-glow absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4 py-16 sm:py-24">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-bright">
            🌾 Una Historia Real
          </span>
          <h2 className="mt-6 font-serif text-2xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl">
            La Historia de Carmen — O Cómo Un Pan Cambió Todo
          </h2>
          <div aria-hidden className="mt-6 flex items-center justify-center gap-3 text-gold/60">
            <span className="h-px w-16 bg-gold/40" />
            <span>🌾</span>
            <span className="h-px w-16 bg-gold/40" />
          </div>
        </div>

        <figure className="mx-auto mt-10 max-w-sm">
          <img
            src={carmenHistoria}
            alt="Carmen, 58 años, sosteniendo su primer pan artesanal en su cocina en Bogotá"
            width={1024}
            height={1024}
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl border-2 border-gold/30 object-cover shadow-xl"
          />
          <figcaption className="mt-3 text-center text-sm text-cream/60">
            📸 Carmen, 58 años — Bogotá, Colombia. Su primer pan dorado, un domingo en familia.
          </figcaption>
        </figure>

        <div className="mt-10 space-y-5 rounded-2xl border-2 border-gold/30 bg-oven-deep/80 p-6 text-left shadow-xl sm:p-10">
          <p className={`${P} text-cream/90`}>
            Carmen tenía 58 años y vivía en Bogotá. Intentó por años aprender a hacer pan artesanal. Compró libros de recetas y vio un montón de videos en YouTube, y cada vez que abría el horno… otro ladrillo. Su familia se reía con cariño, pero ella sentía vergüenza.{" "}
            <span className="font-semibold text-gold-bright">"¿Para qué gasto en harina si siempre me sale mal?"</span>
          </p>
          <p className={`${P} text-cream/90`}>
            Un día su hija le mostró una app en el celular. Carmen desconfió.{" "}
            <span className="font-semibold text-gold-bright">"¿Una app? Yo no sé de tecnología."</span>{" "}
            Pero tocó 1 botón y habló: <span className="font-semibold text-cream">"Mi masa está pegajosa, ¿qué hago?"</span> En 2 segundos, el Chef IA le respondió con voz, como una amiga paciente.
          </p>
          <p className={`${P} text-cream/95`}>
            Ese domingo, por primera vez en años, Carmen abrió el horno y encontró… un pan dorado, crujiente por fuera, esponjosito por dentro. Su nieta de 8 años le dijo:{" "}
            <span className="font-bold text-gold-bright">"Abuela, ¡huele como la casa de la bisabuela!"</span>
          </p>
          <p className={`${P} font-semibold text-emerald-400`}>
            Carmen no compró tecnología. Carmen compró el orgullo de un domingo en familia.
          </p>
        </div>
      </div>
    </section>
  );
}
