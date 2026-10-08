import carmenCarta from "@/assets/carmen-carta.jpg";
import { CHECKOUT_URL } from "./config";

const P = "text-lg leading-relaxed text-artisan-ink/85 sm:text-xl";

export function EpiphanyStory() {
  return (
    <section className="relative overflow-hidden border-y border-gold/20 bg-gradient-to-b from-oven-black via-oven-soft to-oven-black px-4 py-16 sm:py-24">
      <div className="warm-section-glow absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-paper p-6 shadow-xl sm:p-10">
          <div className="text-center">
            <span className="inline-block rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-artisan-ink">
              🥖 Historia Real de Una Alumna Fundadora
            </span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_3fr] lg:items-start">
            <figure className="lg:sticky lg:top-24">
              <img
                src={carmenCarta}
                alt="Marta Elena, 61 años, sosteniendo su pan rústico partido a la mitad en su cocina"
                width={896}
                height={1120}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full rounded-2xl border-2 border-gold/40 object-cover shadow-lg"
              />
            </figure>

            <div>
              <h2 className="font-serif text-3xl font-bold leading-tight text-artisan-ink sm:text-4xl">
                La Carta de Marta
              </h2>
              <div className="mt-6 space-y-5">
                <p className={`${P} font-serif text-2xl font-bold text-artisan-ink`}>
                  «Durante meses me sentí una pésima cocinera...
                </p>
                <p className={P}>
                  Compraba harinas caras, miraba videos en YouTube y seguía recetas en PDF. Pero siempre pasaba lo mismo: la pantalla del teléfono se me apagaba justo cuando tenía las manos llenas de masa, los tiempos nunca me coincidían y mis panes salían duros como un ladrillo. Mi familia los dejaba en la mesa y yo terminaba tirando los ingredientes a la basura con una frustración enorme.
                </p>
                <p className={P}>
                  Un día vi el anuncio de La Casa del Pan. Mi esposo me miró y me dijo:{" "}
                  <span className="font-semibold text-wine">"¿Otra vez vas a gastar en eso, Marta?"</span>.
                </p>
                <p className={P}>
                  Dudé un momento, pero cuando vi que eran solo nueve dólares con noventa, un solo pago para siempre y con garantía, me dije:{" "}
                  <span className="font-semibold text-artisan-ink">"¿Qué pierdo por probar?"</span>.
                </p>
                <p className={P}>
                  Ese mismo sábado preparé la masa. Cuando sentí que se me pegaba en las manos y no sabía qué hacer, abrí el chat y le pregunté al Chef virtual. ¡Me contestó a los dos segundos! Me dijo exactamente cómo corregir la humedad y cuándo encender el horno. El Modo Cocina mantuvo la pantalla encendida todo el tiempo, sin tener que tocar el celular con las manos sucias.
                </p>
                <p className={`${P} font-semibold text-artisan-ink`}>
                  El domingo por la mañana, toda mi casa olía a panadería europea.
                </p>
                <p className={P}>
                  Cuando saqué el pan del horno, la corteza crujía de verdad y por dentro estaba suavecito como una nube. Mis hijos repitieron tres veces y mi esposo, el mismo que me había dicho que no gastara, me dio un beso y me dijo:{" "}
                  <span className="font-bold text-emerald-cta">"Vieja, por favor no vuelvas a comprar pan en la panadería"</span>.
                </p>
                <p className={`${P} rounded-xl border-l-4 border-gold bg-artisan-cream p-4 font-semibold text-artisan-ink`}>
                  Si yo pude lograrlo a mis 57 años y sin saber nada de tecnología, tú también puedes. Es la mejor platita que he invertido en mi vida.»
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-gold/30 pt-5">
                <p className="font-serif text-lg font-bold text-artisan-ink">
                  Marta Elena Restrepo (61 años) — Medellín, Colombia
                </p>
                <span className="rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-xs font-bold text-artisan-ink">
                  ⭐ Alumna Fundadora · Certificada 2026
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href={CHECKOUT_URL}
              className="inline-flex min-h-[56px] w-full max-w-lg items-center justify-center rounded-full bg-emerald-cta px-6 py-4 text-base font-extrabold uppercase text-paper shadow-xl transition-all hover:scale-105 hover:bg-emerald-cta-hover sm:text-lg"
            >
              QUIERO VIVIR LA MISMA EXPERIENCIA POR $9.90 →
            </a>
            <p className="mt-3 text-sm font-semibold text-artisan-ink/70 sm:text-base">
              Acceso inmediato para siempre · Menos de lo que cuestan 2 panes de panadería
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
