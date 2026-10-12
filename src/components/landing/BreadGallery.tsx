import pao1 from "@/assets/pao-1.webp";
import pao2 from "@/assets/pao-2.webp";
import pao3 from "@/assets/pao-3.webp";
import pao4 from "@/assets/pao-4.webp";
import pao5 from "@/assets/pao-5.webp";
import pao6 from "@/assets/pao-6.webp";

const breads = [
  {
    image: pao1,
    title: "Hogaza Rústica de Masa Madre",
    subtitle: "Alveolatura abierta y corteza caramelizada",
  },
  {
    image: pao2,
    title: "Hogaza Multisemillas de Campo",
    subtitle: "Miga alveolada con semillas tostadas y fermentación lenta",
  },
  {
    image: pao3,
    title: "Pan de Brioche Gourmet con Sésamo",
    subtitle: "Masa enriquecida ultra-suave, dorada y esponjosa",
  },
  {
    image: pao4,
    title: "Pan Rústico Integral Multicereal",
    subtitle: "Corteza de avena crocante y alto valor nutritivo",
  },
  {
    image: pao5,
    title: "Baguette Tradicional Francesa",
    subtitle: "Alveolado tipo panal y crocancia inigualable",
  },
  {
    image: pao6,
    title: "Rollos de Canela & Masas Dulces",
    subtitle: "Espirales caramelizadas con glaseado artesanal de vainilla",
  },
];

export function BreadGallery() {
  return (
    <section className="artisan-linen relative overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-artisan-cream/88" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase text-gold-mute">
            🌾 Sabor, Aroma y Textura Real
          </span>
          <h2 className="font-serif text-2xl font-bold leading-tight text-artisan-ink sm:text-4xl">
            Todo lo Que Aprenderás a Hornear con Tus Propias Manos
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-artisan-ink/80 sm:text-lg">
            Panes crujientes por fuera, suaves y alveolados por dentro. Sin
            aditivos industriales, sin químicos y con el auténtico sabor de
            antaño.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {breads.map((bread) => (
            <article
              key={bread.title}
              className="group overflow-hidden rounded-2xl border border-gold/30 bg-paper/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-artisan-cream">
                <img
                  src={bread.image}
                  alt={bread.title}
                  loading="lazy"
                   decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3 sm:p-5">
                <h3 className="font-serif text-base font-bold leading-snug text-artisan-ink sm:text-xl">
                  {bread.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-artisan-ink/65 sm:text-sm">
                  {bread.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>

        <blockquote className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#E8DFC8] bg-[#FDFBF7] p-6 text-center font-serif text-base font-medium not-italic leading-relaxed text-[#2C1810] shadow-md sm:px-10 sm:text-lg">
          “No necesitas experiencia previa ni hornos industriales. Con las
          recetas interactivas y las alertas del Chef IA, tu primer pan saldrá
          perfecto este fin de semana.”
        </blockquote>
      </div>
    </section>
  );
}