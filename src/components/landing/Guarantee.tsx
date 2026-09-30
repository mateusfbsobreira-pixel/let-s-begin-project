import { CheckCircle2 } from "lucide-react";

const conditions = [
  "Si la app no te parece la herramienta de cocina más útil que has tenido...",
  "Si el Chef IA no responde tu duda en menos de 5 segundos...",
  "Si tu pan no arranca al menos un 'wow' de alguien en tu casa...",
];

export function Guarantee() {
  return (
    <section className="border-t border-gold-mute/10 bg-warm-white px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <img
          src="/images/selo-garantia-7dias-transparente.webp"
          alt="Sello de garantía de satisfacción por 7 días"
          loading="lazy"
          decoding="async"
          className="mx-auto mb-6 w-36 drop-shadow-md sm:w-44"
        />
        <h2 className="font-serif text-2xl font-bold leading-tight text-artisan-ink sm:text-4xl">
          Si Tu Primer Pan No Sale Perfecto, Te Devolvemos Cada Centavo
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-artisan-ink/85 sm:text-xl">
          No te pedimos que confíes ciegamente. Te pedimos que pruebes. Accede
          hoy, habla con el Chef IA, pon en marcha los temporizadores y hornea
          tu primer pan este fin de semana.
        </p>
        <ul className="mx-auto mt-6 max-w-2xl space-y-3 text-left">
          {conditions.map((c) => (
            <li key={c} className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-emerald-cta" aria-hidden="true" />
              <span className="text-lg leading-relaxed text-artisan-ink/85 sm:text-xl">{c}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-3xl text-lg font-bold leading-relaxed text-artisan-ink sm:text-xl">
          Solo escríbenos a soporte@lacasadelpanartesanal.shop y te devolvemos
          el 100% de tu dinero al instante. Sin formularios largos, sin
          preguntas incómodas y sin demoras. Tienes 7 días completos para
          decidir con total tranquilidad.
        </p>
      </div>
    </section>
  );
}
