const seals = [
  "🔒 Compra 100% Protegida por Hotmart",
  "⚡ Devolución Inmediata en 1 Clic",
  "📱 Acceso Directo a tu Correo",
];

export function Guarantee() {
  return (
    <section className="border-t border-gold-mute/10 bg-warm-white px-4 py-16">
      <div className="mx-auto max-w-3xl rounded-3xl border border-[#E8DFC8] bg-[#FDFBF7] p-6 text-center shadow-lg sm:p-10">
        <img
          src="/images/selo-garantia-7dias-transparente.webp"
          alt="Sello de garantía de satisfacción por 7 días"
          loading="lazy"
          decoding="async"
          className="mx-auto mb-6 w-36 drop-shadow-md sm:w-44"
        />
        <h2 className="font-serif text-2xl font-bold leading-tight text-artisan-ink sm:text-4xl">
          Pruébalo Durante 7 Días: El Riesgo es Todo Nuestro
        </h2>
        <p className="mx-auto mt-5 text-lg leading-relaxed text-artisan-ink/85 sm:text-xl">
          Queremos que entres tranquila. Descarga los libros, pregúntale lo que quieras al Chef
          virtual y hornea tu primer pan este mismo fin de semana con tu familia.
        </p>
        <p className="mx-auto mt-4 text-lg leading-relaxed text-artisan-ink/85 sm:text-xl">
          Si por cualquier razón sientes que esto no es para ti, o simplemente no te gustó el
          resultado de tus panes, solo nos mandas un mensajito o solicitas la devolución con un solo
          clic en Hotmart. Te devolvemos cada centavo de tus $9.90 Dólares sin hacerte preguntas ni
          pedirte explicaciones. <strong className="text-artisan-ink">Sin rencores y seguimos siendo amigos.</strong>
        </p>
        <ul className="mt-7 grid gap-3 sm:grid-cols-3">
          {seals.map((s) => (
            <li
              key={s}
              className="rounded-xl border border-[#E8DFC8] bg-paper px-3 py-3 text-base font-bold leading-snug text-artisan-ink"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
