import {
  BatteryMedium,
  Camera,
  ChevronLeft,
  Mic,
  MoreVertical,
  Paperclip,
  Phone,
  Play,
  Signal,
  Smile,
  Star,
  Video,
  Wifi,
} from "lucide-react";
import mariaPhoto from "@/assets/maria-sourdough.jpg";
import carlosPhoto from "@/assets/carlos-baguettes.jpg";
import sofiaPhoto from "@/assets/sofia-focaccia.jpg";
import mariaAvatar from "@/assets/maria-avatar.jpg";
import carlosAvatar from "@/assets/carlos-avatar.jpg";
import sofiaAvatar from "@/assets/sofia-avatar.jpg";
import carmenVideo from "@/assets/depoimento-carmen.mp4.asset.json";
import sofiaVideo from "@/assets/depoimento-sofia.mp4.asset.json";

import { CHECKOUT_URL } from "./config";

const mainVideo = {
  src: sofiaVideo.url,
  tag: "⭐ Testimonio en Video · Carmen Ortiz (61 años) — Guadalajara, México",
  quote: "«Mi esposo me dijo para qué gastar... hoy no compra pan en la panadería, solo quiere el mío.»",
};
void carmenVideo;
import ugcCarmen from "@/assets/ugc-carmen-bread.jpg";
import ugcRosa from "@/assets/ugc-rosa-bread.jpg";

const chats = [
  {
    name: "Teresa M.",
    photo: mariaPhoto,
    avatar: mariaAvatar,
    photoAlt: "Teresa M. mostrando su hogaza de masa madre recién horneada",
    incoming:
      "¡Hola Chef! No puedo creer lo que logré este domingo... ¡mira esta hogaza! Mi esposo pensó que la compré en una panadería francesa 😭🥖❤️",
    incomingTime: "10:42 a. m.",
    reply:
      "¡Qué belleza de hogaza, Teresa! Ese alveolado y el greñado están de campeonato mundial. ¡Felicidades, Maestra Panadera! 👨‍🍳✨",
    replyTime: "10:44 a. m.",
    statusTime: "10:47",
    battery: 87,
  },
  {
    name: "María del Pilar S.",
    photo: carlosPhoto,
    avatar: carlosAvatar,
    photoAlt: "María del Pilar S. sosteniendo baguettes artesanales en papel kraft",
    incoming:
      "Con la calculadora del Chef IA vendí mis primeras 8 baguettes hoy a los vecinos. ¡Recuperé los $9.90 y ya tengo 14 pedidos! 🚀💰",
    incomingTime: "4:15 p. m.",
    reply:
      "¡Brutal resultado, María del Pilar! Ese es exactamente el poder de calcular bien los costos y la fermentación. 👏🔥",
    replyTime: "4:18 p. m.",
    statusTime: "4:23",
    battery: 63,
  },
  {
    name: "Graciela F.",
    photo: sofiaPhoto,
    avatar: sofiaAvatar,
    photoAlt: "Graciela F. mostrando una focaccia con romero recién horneada",
    incoming:
      "Llevaba meses intentando con YouTube y la masa se me moría al 4to día. Le pregunté al Chef IA y hoy dobló su tamaño. ¡Miren esta focaccia! 🙏✨",
    incomingTime: "7:22 p. m.",
    reply:
      "¡Esa masa madre está súper activa, Graciela! La focaccia se ve dorada y crujiente. ¡A disfrutarla en familia! 💪🥖",
    replyTime: "7:25 p. m.",
    statusTime: "7:31",
    battery: 94,
  },
];

const ugcPhotos = [
  {
    src: ugcCarmen,
    alt: "Pan redondo con corteza dorada de Silvia Valenzuela",
    name: "Silvia Valenzuela",
    age: "49 años",
    city: "Santiago, Chile",
    quote: "Me ahorré una fortuna y cuidé la salud de mi familia: dejé el pan lleno de conservantes. Ahora lo hago con 4 ingredientes comunes de la alacena y sé exactamente lo que comen mis hijos.",
  },
  {
    src: ugcRosa,
    alt: "Pan casero rústico fatiado de Rosa María Benavides",
    name: "Rosa María Benavides",
    age: "64 años",
    city: "Lima, Perú",
    quote: "Nunca pensé que entendería el celular, pero el Modo Cocina deja la pantalla encendida mientras amaso. El orgullo de ver mi pan dorado crecer en el horno no tiene precio.",
  },
];

function TestimonialPhoto({
  src,
  alt,
  className,
  width,
  height,
}: {
  src: string;
  alt: string;
  className: string;
  width: number;
  height: number;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      width={width}
      height={height}
      className={className}
    />
  );
}

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <div className="flex gap-0.5 text-[#FCD34D]" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className={`${className} fill-current`} aria-hidden="true" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#120804] px-4 py-20">
      <div className="warm-section-glow absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full border border-[#C9972A]/40 bg-[#C9972A]/15 px-4 py-1.5 text-xs font-bold uppercase text-[#FCD34D]">
            🥖 EXPERIENCIAS REALES
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-stone-100 sm:text-5xl">
            Lo Que Dicen Nuestras Alumnas Cuando Sacan Su Primer Pan del Horno
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-stone-300 sm:text-lg">
            Más de 1.480 mujeres comunes, de 45 a 68 años, que pensaban que
            hornear era difícil o que la tecnología no era para ellas.
          </p>
        </header>

        {/* 1. VÍDEO PRINCIPAL */}
        <figure className="mx-auto mt-12 max-w-md">
          <div className="relative overflow-hidden rounded-2xl border-2 border-gold/40 bg-black shadow-2xl">
            <span className="pointer-events-none absolute left-3 right-3 top-3 z-10 mx-auto w-fit rounded-full border border-gold/50 bg-black/70 px-3 py-1.5 text-center text-xs font-bold text-[#FCD34D] backdrop-blur-sm sm:text-sm">
              {mainVideo.tag}
            </span>
            <video
              src={mainVideo.src}
              controls
              playsInline
              preload="metadata"
              controlsList="nodownload noplaybackrate noremoteplayback"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
              className="aspect-[9/16] w-full bg-black object-contain"
            />
          </div>
          <figcaption className="mt-4 text-center text-lg font-semibold leading-relaxed text-stone-100">
            {mainVideo.quote}
          </figcaption>
        </figure>

        {/* 2. FOTOS UGC */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {ugcPhotos.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col overflow-hidden rounded-3xl border border-[#C9972A]/30 bg-[#1F1008]/80 shadow-xl shadow-black/50 transition-all duration-300 hover:border-[#C9972A]/70"
            >
              <TestimonialPhoto
                src={item.src}
                alt={item.alt}
                width={1024}
                height={768}
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="flex flex-1 flex-col gap-2 p-5 text-center">
                <Stars />
                <blockquote className="text-base font-semibold leading-relaxed text-stone-100 sm:text-lg">
                  “{item.quote}”
                </blockquote>
                <p className="mt-auto pt-1 text-sm text-stone-300">
                  <span className="font-bold text-[#FCD34D]">{item.name}</span>
                  {" · "}
                  {item.age} · {item.city}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-sm font-semibold text-stone-300 sm:text-base">
          📸 Fotos enviadas por nuestras alumnas — Sin edición
        </p>

        {/* 3. WHATSAPP — CARROSSEL */}
        <div className="mt-14">
          <h3 className="text-center text-xl font-bold text-stone-100 sm:text-2xl">
            💬 Conversaciones reales de nuestras alumnas
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm leading-relaxed text-stone-400 sm:text-base">
            💬 Mensajes y fotos compartidos espontáneamente en nuestra comunidad de alumnas. Desliza →
          </p>

          <div className="-mx-4 mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:thin]">
            {chats.map((chat) => (
              <article
                key={chat.name}
                className="relative w-[268px] shrink-0 snap-center overflow-hidden rounded-[2rem] border-[3px] border-[#C9972A]/40 bg-[#0B141A] p-2 shadow-2xl shadow-black/80 transition-all duration-300 hover:border-[#C9972A] hover:shadow-[0_0_30px_rgba(201,151,42,0.4)] sm:w-[290px]"
              >
                <div className="relative flex h-6 items-center justify-between px-3 pt-0.5 text-[10px] font-semibold text-stone-300">
                  <span>{chat.statusTime}</span>
                  <span className="absolute left-1/2 top-1 h-3.5 w-16 -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
                  <span className="flex items-center gap-1" aria-label={`Señal, wifi y batería al ${chat.battery} por ciento`}>
                    <Signal className="h-3 w-3" aria-hidden="true" />
                    <Wifi className="h-3 w-3" aria-hidden="true" />
                    <BatteryMedium className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="text-[9px]">{chat.battery}%</span>
                  </span>
                </div>

                <div className="mt-1 flex items-center justify-between rounded-t-xl bg-[#1F2C34] px-2.5 py-2 text-stone-200">
                  <div className="flex min-w-0 items-center gap-2">
                    <ChevronLeft className="h-3.5 w-3.5 shrink-0 text-stone-300" aria-hidden="true" />
                    <TestimonialPhoto
                      src={chat.avatar}
                      alt=""
                      width={512}
                      height={512}
                      className="h-7 w-7 shrink-0 rounded-full border border-stone-600 object-cover"
                    />
                    <div className="min-w-0">
                      <h4 className="truncate font-sans text-[12px] font-bold text-stone-100">
                        {chat.name}
                      </h4>
                      <p className="flex items-center gap-1 text-[10px] text-[#25D366]">
                        <span className="h-1 w-1 rounded-full bg-[#25D366]" aria-hidden="true" />
                        en línea
                      </p>
                    </div>
                  </div>
                  <div className="ml-1.5 flex shrink-0 items-center gap-2 text-stone-300">
                    <Video className="h-3.5 w-3.5" aria-hidden="true" />
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    <MoreVertical className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                </div>

                <div className="flex min-h-[300px] flex-col bg-[#0B141A] p-2.5 text-xs">
                  <div className="mx-auto mb-2 rounded-lg bg-[#182229] px-2.5 py-0.5 text-[9px] font-semibold uppercase text-stone-400 shadow-sm">
                    Hoy
                  </div>

                  <div className="relative max-w-[94%] rounded-2xl rounded-tl-none bg-[#202C33] p-2 text-stone-100 shadow-md">
                    <span className="absolute -left-1.5 top-0 h-3 w-3 bg-[#202C33] [clip-path:polygon(100%_0,100%_100%,0_0)]" aria-hidden="true" />
                    <TestimonialPhoto
                      src={chat.photo}
                      alt={chat.photoAlt}
                      width={800}
                      height={600}
                      className="mb-1.5 aspect-[4/3] w-full rounded-lg object-cover shadow-sm"
                    />
                    <p className="text-[11.5px] leading-[1.4]">{chat.incoming}</p>
                    <p className="mt-0.5 text-right text-[9px] text-stone-400">
                      {chat.incomingTime}
                    </p>
                  </div>

                  <div className="relative ml-auto mt-2 max-w-[94%] rounded-2xl rounded-tr-none bg-[#005C4B] p-2 text-stone-100 shadow-md">
                    <span className="absolute -right-1.5 top-0 h-3 w-3 bg-[#005C4B] [clip-path:polygon(0_0,100%_0,0_100%)]" aria-hidden="true" />
                    <p className="text-[11.5px] leading-[1.4]">{chat.reply}</p>
                    <p className="mt-0.5 text-right text-[9px] text-stone-200">
                      {chat.replyTime}{" "}
                      <span className="font-bold text-[#53BDEB]" aria-label="Mensaje leído">
                        ✓✓
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 rounded-b-xl border-t border-stone-800 bg-[#1F2C34] px-2.5 py-1.5 text-stone-400">
                  <Smile className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <div className="flex flex-1 items-center justify-between rounded-full bg-[#2A3942] px-2.5 py-1.5 text-[11px]">
                    <span>Mensaje</span>
                    <span className="flex gap-1.5">
                      <Paperclip className="h-3.5 w-3.5" aria-hidden="true" />
                      <Camera className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00A884] text-stone-100">
                    <Mic className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
                <div className="mx-auto mt-1.5 h-1 w-20 rounded-full bg-stone-500/70" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-center gap-2 border-t border-[#C9972A]/25 pt-8 text-center">
          <Stars className="h-5 w-5" />
          <p className="max-w-3xl text-sm font-semibold leading-relaxed text-stone-100 sm:text-base">
            Calificación promedio de 4.9/5 basada en más de 500 alumnas en
            Latinoamérica y España.
          </p>
          <a
            href={CHECKOUT_URL}
            className="mt-6 inline-flex min-h-[56px] items-center justify-center rounded-full bg-emerald-cta px-8 py-4 text-center text-base font-extrabold uppercase text-paper shadow-lg transition-colors hover:bg-emerald-cta-hover sm:text-lg"
          >
            QUIERO HORNEAR COMO ELLAS POR $9.90 →
          </a>
          <p className="text-sm text-stone-300">
            Acceso inmediato para siempre · Garantía de 7 días
          </p>
        </div>
      </div>
    </section>
  );
}
