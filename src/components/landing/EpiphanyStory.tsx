const P = "text-base sm:text-lg lg:text-xl leading-loose";

export function EpiphanyStory() {
  return (
    <section className="relative overflow-hidden border-y border-gold/20 bg-gradient-to-b from-oven-black via-oven-soft to-oven-black">
      <div className="warm-section-glow absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4 py-16 sm:py-24">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-bright">
            🌾 Una Carta Abierta Para Quien Ama a Su Familia
          </span>
          <div aria-hidden className="mt-6 font-serif text-7xl leading-none text-gold/30 sm:text-8xl">
            “
          </div>
          <h2 className="font-serif text-2xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl">
            "El Domingo Que Volví a Llenar Mi Casa con el Aroma de Mi Infancia"
          </h2>
          <p className="mt-3 font-serif text-lg italic text-gold-mute sm:text-xl">
            Una historia real sobre harina, paciencia y el abrazo más esperado de la semana.
          </p>
          <div aria-hidden className="mt-6 flex items-center justify-center gap-3 text-gold/60">
            <span className="h-px w-16 bg-gold/40" />
            <span>🌾</span>
            <span className="h-px w-16 bg-gold/40" />
          </div>
        </div>

        <div className="mt-10 space-y-6 border-l-2 border-gold/30 pl-6 text-left sm:pl-10">
          <p className={`${P} text-cream/90`}>
            Eran las 7:00 de la mañana. En la mesada de mi cocina había una bolsa de pan de molde comprado en el supermercado. Miré la fecha de vencimiento: <em>«Vence dentro de 45 días»</em>. Sentí un nudo en el pecho. Me pregunté: <strong>¿Qué le estoy dando de comer a mis hijos y a mis nietos?</strong> ¿Cómo un pedazo de pan puede durar más de un mes en una bolsa plástica sin pudrirse, si no es porque está repleto de químicos y conservantes que inflaman nuestro cuerpo?
          </p>
          <p className={`${P} text-cream/90`}>
            En ese instante recordé la cocina de mi abuela. Aquel canasto cubierto con un paño de cuadros, el aroma a trigo tostado que despertaba a todo el vecindario y la corteza crujiente que se deshacía en la boca con un poco de manteca derretida. <em>Eso era alimento real. Eso era amor.</em>
          </p>
          <p className={`${P} text-cream/90`}>
            Ese mismo sábado decidí intentarlo. Busqué un video en YouTube. Me encontré con chefs jóvenes hablando de porcentajes raros, temperaturas imposibles y masas pegajosas que se me pegaban en los dedos hasta hacerme llorar de frustración. El resultado después de 6 horas de esfuerzo: <strong>un pan pálido, plano y duro como una piedra</strong>. Me sentí incapaz, torpe y pensé: <em>«Esto no es para mí. Ya se me pasó la edad para aprender cosas nuevas».</em>
          </p>
          <p className={`${P} text-cream/95`}>
            Pero no me di por vencida. Necesitaba algo diferente: no un video rápido de internet, sino una guía amorosa y paciente que entendiera mi cocina casera, mi horno normal y mis tiempos.
          </p>
          <p className={`${P} text-cream/95`}>
            Así encontré <strong>La Casa del Pan</strong>. Por primera vez nadie me juzgó ni me habló con tecnicismos fríos. Descubrí que hacer pan artesanal no depende de fuerza en los brazos ni de hornos caros de panadería. Solo dependía de entender los secretos del agua, la harina y el tiempo correcto de reposo.
          </p>

          <div className="my-8 rounded-2xl border-2 border-gold/40 bg-oven-deep p-6 sm:p-8 shadow-xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gold-bright">
              ✨ El Domingo de la Transformación:
            </p>
            <div className="space-y-4 text-base font-normal leading-relaxed text-cream sm:text-xl">
              <p>El siguiente domingo todo cambió por completo.</p>
              <p>El horno llenó la casa de un aroma a pan caliente que no sentía desde mi niñez. El pan salió con una corteza dorada y crujiente, exactamente como el de las mejores panaderías.</p>
              <p>Al apoyar el cuchillo y cortar la primera rebanada, el crujido se escuchó en toda la cocina.</p>
              <p className="rounded-xl border border-gold/20 bg-black/40 p-4 font-medium text-gold-bright">Cuando mi familia dio el primer bocado, hubo un silencio total. Mi esposo me miró sorprendido y me dijo: <span className="font-bold text-white">"Dime la verdad... ¿compraste este pan en una panadería fina?"</span></p>
              <p className="font-semibold text-emerald-400">Sonreí con las manos en el delantal y le respondí: "No... lo hice yo misma, aquí en nuestra cocina".</p>
            </div>
          </div>

          <p className={`${P} text-cream/90`}>
            Ese orgullo no tiene precio. Saber que estás nutriendo a quienes más amas con ingredientes puros y devolviendo la magia a tu mesa es una sensación que toda mujer merece vivir.
          </p>
          <p className={`${P} font-medium text-emerald-400`}>
            Tú también puedes vivir exactamente este domingo. No importa si jamás en tu vida has tocado un gramo de masa madre o si tienes un horno a gas común. El camino está listo para ti.
          </p>
        </div>

        <div className="mt-10 text-center">
          <p className="font-serif text-sm italic text-cream/60 sm:text-base">
            — Basado en la experiencia real compartida por nuestras alumnas en la comunidad.
          </p>
        </div>
      </div>
    </section>
  );
}
