import { BadgeCheck, Star } from "lucide-react";

const testimonials = [
  {
    initials: "MG",
    name: "María González",
    location: "Ciudad de México",
    verification: "Compra Verificada • Alumna 2026",
    quote:
      "Nunca había horneado pan en mi vida. Con la ayuda del Chef IA en el celular y los cronómetros, logré mi primera hogaza de masa madre con corteza crujiente. ¡Mi esposo no podía creer que lo hice yo en nuestro horno casero!",
  },
  {
    initials: "CR",
    name: "Carlos Rodríguez",
    location: "Buenos Aires",
    verification: "Emprendedor • Alumno 2026",
    quote:
      "La guía de recetas para vender y la calculadora de precios fueron clave. Empecé ofreciendo baguettes y ciabattas en mi edificio y recuperé la inversión de $6.90 USD el primer fin de semana. ¡Ya tengo clientes fijos!",
  },
  {
    initials: "AS",
    name: "Ana Patricia Silva",
    location: "Lima",
    verification: "Compra Verificada • Alumna 2026",
    quote:
      "Había intentado hacer masa madre con videos de YouTube y siempre se me moría. Con el paso a paso del app entendí la fermentación exacta. Y los brownies gourmet... ¡desaparecieron en 5 minutos en el cumpleaños de mis hijos!",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-oven px-4 py-20 sm:py-24">
      <div className="warm-section-glow absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase text-gold-bright">
            ⭐ Comunidad de Maestros Panaderos
          </span>
          <h2 className="mt-5 font-serif text-2xl font-bold leading-tight text-cream sm:text-4xl">
            Historias Reales de Alumnos Que Ya Transformaron Su Cocina
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-cream/85 sm:text-lg">
            Desde principiantes que nunca habían tocado una masa hasta
            emprendedores vendiendo en su vecindario.
          </p>
        </header>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-2xl border border-gold-mute/40 bg-oven-soft p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold font-bold text-artisan-ink shadow-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <h3 className="font-sans text-base font-bold text-cream">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs text-cream/60">{testimonial.location}</p>
                </div>
              </div>

              <div className="mt-5 flex gap-1" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-gold-bright text-gold-bright"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-base leading-7 text-cream/85">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-5 flex items-center gap-2 border-t border-gold-mute/25 pt-4 text-xs font-semibold text-gold">
                <BadgeCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                {testimonial.verification}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}