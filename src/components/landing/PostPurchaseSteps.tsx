const STEPS = [
  { n: "1", tone: "gold", title: "Completa Tu Pago", desc: "Elige tarjeta, PayPal o efectivo (OXXO, Efecty). El proceso es rápido y 100% seguro por Hotmart." },
  { n: "2", tone: "emerald", title: "Revisa Tu Correo", desc: "Hotmart te envía automáticamente un email con tu enlace de acceso directo. Sin esperas, sin envíos postales." },
  { n: "3", tone: "gold", title: "¡Abre y Hornea!", desc: "Entra a la app desde tu celular, tablet o computadora. Pregúntale al Chef IA tu primera duda y empieza a hornear hoy mismo." },
];

export function PostPurchaseSteps() {
  return (
    <section className="border-t border-gold/20 bg-artisan-cream px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-block rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-artisan-ink sm:text-sm">
          📲 ¿Qué Pasa Después de Pagar?
        </span>
        <h2 className="mt-4 font-serif text-2xl font-bold text-artisan-ink sm:text-4xl">
          Recibes Todo en Menos de 60 Segundos
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl border border-gold/30 bg-paper p-8 text-center shadow-md transition-shadow hover:shadow-lg">
              <div
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 font-serif text-3xl font-bold ${
                  s.tone === "emerald"
                    ? "border-emerald-cta bg-emerald-cta/15 text-emerald-cta"
                    : "border-gold bg-gold/15 text-gold"
                }`}
              >
                {s.n}
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-artisan-ink">{s.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-artisan-ink/75">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-lg italic leading-relaxed text-artisan-ink/60">
          "Si tienes cualquier duda durante el proceso, nuestro equipo está disponible por correo o WhatsApp para ayudarte."
        </p>
      </div>
    </section>
  );
}
