const breads = [
  {
    image: "/images/pao-1.webp",
    title: "Hogaza Rústica de Masa Madre",
    subtitle: "Alveolatura abierta y corteza caramelizada",
  },
  {
    image: "/images/pao-2.webp",
    title: "Baguette Tradicional Francesa",
    subtitle: "Crocancia perfecta y greñado dorado",
  },
  {
    image: "/images/pao-3.webp",
    title: "Ciabatta de Alta Hidratación",
    subtitle: "Miga ligera como una nube",
  },
  {
    image: "/images/pao-4.webp",
    title: "Focaccia al Romero y Oliva",
    subtitle: "Burbujas aireadas y aroma mediterráneo",
  },
  {
    image: "/images/pao-5.webp",
    title: "Pan de Campo Multigrano",
    subtitle: "Semillas tostadas y fermentación lenta",
  },
  {
    image: "/images/pao-6.webp",
    title: "Pan Relleno Gourmet",
    subtitle: "Combinaciones dulces y saladas irresistibles",
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

        <blockquote className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gold/30 bg-paper/85 p-6 text-center font-serif text-lg italic leading-relaxed text-artisan-ink shadow-md backdrop-blur-md sm:px-10 sm:text-xl">
          “No necesitas experiencia previa ni hornos industriales. Con las
          recetas interactivas y las alertas del Chef IA, tu primer pan saldrá
          perfecto este fin de semana.”
        </blockquote>
      </div>
    </section>
  );
}