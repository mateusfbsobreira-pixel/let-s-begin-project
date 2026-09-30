const STEPS = [
  { n: "1", tone: "gold", title: "Ingresa tu Correo y Paga", desc: "Elige tu forma de pago favorita: tarjeta, PayPal o efectivo. El proceso tarda menos de 2 minutos." },
  { n: "2", tone: "emerald", title: "Recibe tu Acceso al Instante", desc: "En menos de 60 segundos recibirás un correo automático de Hotmart con tu enlace directo de acceso." },
  { n: "3", tone: "gold", title: "¡Abre la App y Hornea!", desc: "Entra a tu aplicación, pregúntale al Chef IA tu primera duda y empieza a hornear este fin de semana." },
];

export function PostPurchaseSteps() {
  return (
    <section className="border-t border-gold/30 bg-artisan-cream px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-artisan-ink">
          📲 ¿Qué Pasa Después del Pago?
        </span>
        <h2 className="mt-4 font-serif text-2xl font-bold text-artisan-ink sm:text-4xl">
          Recibes Todo en 3 Simples Pasos
        </h2>
        <p className="mt-4 text-base text-artisan-ink/80 sm:text-lg">
          Tu acceso es 100% inmediato y automático. No necesitas esperar envíos ni descargar programas complicados.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl border border-gold/30 bg-paper p-6 text-center shadow-md">
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold ${
                  s.tone === "emerald" ? "bg-emerald-cta/15 text-emerald-cta" : "bg-gold/20 text-gold-mute"
                }`}
              >
                {s.n}
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-artisan-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-artisan-ink/75">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm italic text-artisan-ink/65">
          "Más de 500 alumnas de México, Colombia, Chile, Perú y España ya están horneando con este método. Si tienes cualquier duda, nuestro equipo de soporte te ayuda por correo o WhatsApp."
        </p>
      </div>
    </section>
  );
}
