import {
  BatteryMedium,
  Camera,
  ChevronLeft,
  Mic,
  MoreVertical,
  Paperclip,
  Phone,
  Signal,
  Smile,
  Star,
  Video,
  Wifi,
} from "lucide-react";
import { useEffect, useState } from "react";
import mariaAvatar from "@/assets/maria-gonzalez-avatar.jpg";
import carlosAvatar from "@/assets/carlos-rodriguez-avatar.jpg";
import anaAvatar from "@/assets/ana-silva-avatar.jpg";

const chats = [
  {
    name: "María González 🇲🇽",
    photo: "/images/depoimento-maria.jpg",
    fallbackPhoto: "/images/pao-1.webp",
    fallbackAvatar: mariaAvatar,
    photoAlt: "María González mostrando su hogaza artesanal recién horneada",
    incoming:
      "¡Hola Chef! No puedo creer lo que logré este domingo... ¡mira esta hogaza! Mi esposo pensó que lo compré en una panadería gourmet francesa 😭🥖❤️",
    incomingTime: "10:42 a. m.",
    reply:
      "¡Qué belleza de hogaza rústica, María! Ese alveolado abierto y el greñado están de campeonato mundial. ¡Felicidades, Maestra! 👨‍🍳✨",
    replyTime: "10:44 a. m.",
  },
  {
    name: "Carlos Rodríguez 🇦🇷",
    photo: "/images/depoimento-carlos.jpg",
    fallbackPhoto: "/images/pao-2.webp",
    fallbackAvatar: carlosAvatar,
    photoAlt: "Carlos Rodríguez mostrando baguettes artesanales recién horneadas",
    incoming:
      "Buenas tardes equipo, les comparto que con la guía de ventas y la calculadora del Chef IA vendí mis primeras 8 baguettes hoy a los vecinos del edificio. ¡Recuperé los $6.90 y ya tengo 14 pedidos para el sábado! 🚀💰",
    incomingTime: "4:15 p. m.",
    reply:
      "¡Brutal resultado Carlos! Ese es exactamente el poder de calcular bien los costos y la fermentación. ¡Mucho éxito con esos pedidos! 👏🔥",
    replyTime: "4:18 p. m.",
  },
  {
    name: "Ana Patricia Silva 🇵🇪",
    photo: "/images/depoimento-ana.jpg",
    fallbackPhoto: "/images/pao-4.webp",
    fallbackAvatar: anaAvatar,
    photoAlt: "Ana Patricia Silva mostrando una focaccia recién horneada",
    incoming:
      "Llevaba meses intentando con videos de YouTube y siempre se me moría la masa madre. Le pregunté al Chef IA, me dijo qué harina usar y hoy dobló su tamaño. ¡Miren esta focaccia que acabo de sacar del horno! 🙏✨",
    incomingTime: "7:22 p. m.",
    reply:
      "¡Esa masa madre está súper activa y llena de vida, Ana! La focaccia se ve dorada y crujiente. ¡A disfrutarla con la familia! 💪🥖",
    replyTime: "7:25 p. m.",
  },
];

function SyncedPhoto({
  preferredSrc,
  fallbackSrc,
  alt,
  className,
  width,
  height,
}: {
  preferredSrc: string;
  fallbackSrc: string;
  alt: string;
  className: string;
  width: number;
  height: number;
}) {
  const [src, setSrc] = useState(fallbackSrc);

  useEffect(() => {
    let active = true;
    fetch(preferredSrc, { method: "HEAD" })
      .then((response) => {
        if (active && response.ok) setSrc(preferredSrc);
      })
      .catch(() => undefined);
    return () => {
      active = false;
    };
  }, [preferredSrc]);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      width={width}
      height={height}
      className={className}
    />
  );
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#120804] px-4 py-20">
      <div className="warm-section-glow absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full border border-[#C9972A]/40 bg-[#C9972A]/15 px-4 py-1.5 text-xs font-bold uppercase text-[#FCD34D]">
            💬 Comunidad de alumnos en vivo
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-stone-100 sm:text-5xl">
            Resultados Reales de Quienes Ya Están Horneando
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-stone-300 sm:text-lg">
            Capturas reales de nuestra comunidad compartiendo sus primeros panes
            y ventas desde sus cocinas.
          </p>
        </header>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
          {chats.map((chat) => (
            <article
              key={chat.name}
              className="relative mx-auto w-full max-w-[23rem] overflow-hidden rounded-[2.5rem] border-[3px] border-[#C9972A]/40 bg-[#0B141A] p-2 shadow-2xl shadow-black/80 transition-all duration-300 hover:border-[#C9972A] hover:shadow-[0_0_30px_rgba(201,151,42,0.4)] sm:p-2.5"
            >
              <div className="relative flex h-7 items-center justify-between px-3 pt-1 text-[11px] font-semibold text-stone-300">
                <span>09:41</span>
                <span className="absolute left-1/2 top-1.5 h-4 w-20 -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
                <span className="flex items-center gap-1" aria-label="Señal, wifi y batería al 87 por ciento">
                  <Signal className="h-3.5 w-3.5" aria-hidden="true" />
                  <Wifi className="h-3.5 w-3.5" aria-hidden="true" />
                  <BatteryMedium className="h-4 w-4" aria-hidden="true" />
                  <span className="text-[9px]">87%</span>
                </span>
              </div>

              <div className="mt-1 flex items-center justify-between rounded-t-xl bg-[#1F2C34] px-3 py-2.5 text-stone-200">
                <div className="flex min-w-0 items-center gap-2">
                  <ChevronLeft className="h-4 w-4 shrink-0 text-stone-300" aria-hidden="true" />
                  <SyncedPhoto
                    preferredSrc={chat.photo}
                    fallbackSrc={chat.fallbackAvatar}
                    alt=""
                    width={512}
                    height={512}
                    className="h-9 w-9 shrink-0 rounded-full border border-stone-600 object-cover"
                  />
                  <div className="min-w-0">
                    <h3 className="truncate font-sans text-[13px] font-bold text-stone-100">
                      {chat.name}
                    </h3>
                    <p className="flex items-center gap-1 text-[11px] text-[#25D366]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" aria-hidden="true" />
                      en línea
                    </p>
                  </div>
                </div>
                <div className="ml-2 flex shrink-0 items-center gap-3 text-stone-300">
                  <Video className="h-4 w-4" aria-hidden="true" />
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <MoreVertical className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>

              <div className="flex min-h-[460px] flex-col bg-[#0B141A] p-3 text-xs">
                <div className="mx-auto mb-3 rounded-lg bg-[#182229] px-3 py-1 text-[10px] font-semibold uppercase text-stone-400 shadow-sm">
                  Hoy
                </div>

                <div className="relative max-w-[92%] rounded-2xl rounded-tl-none bg-[#202C33] p-2.5 text-stone-100 shadow-md">
                  <span className="absolute -left-1.5 top-0 h-3 w-3 bg-[#202C33] [clip-path:polygon(100%_0,100%_100%,0_0)]" aria-hidden="true" />
                  <SyncedPhoto
                    preferredSrc={chat.photo}
                    fallbackSrc={chat.fallbackPhoto}
                    alt={chat.photoAlt}
                    width={800}
                    height={600}
                    className="mb-2 aspect-[4/3] w-full rounded-xl object-cover shadow-sm"
                  />
                  <p className="text-[13px] leading-[1.45]">{chat.incoming}</p>
                  <p className="mt-1 text-right text-[10px] text-stone-400">
                    {chat.incomingTime}
                  </p>
                </div>

                <div className="relative ml-auto mt-2.5 max-w-[92%] rounded-2xl rounded-tr-none bg-[#005C4B] p-2.5 text-stone-100 shadow-md">
                  <span className="absolute -right-1.5 top-0 h-3 w-3 bg-[#005C4B] [clip-path:polygon(0_0,100%_0,0_100%)]" aria-hidden="true" />
                  <p className="text-[13px] leading-[1.45]">{chat.reply}</p>
                  <p className="mt-1 text-right text-[10px] text-stone-200">
                    {chat.replyTime}{" "}
                    <span className="font-bold text-[#53BDEB]" aria-label="Mensaje leído">
                      ✓✓
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-b-xl border-t border-stone-800 bg-[#1F2C34] px-3 py-2 text-stone-400">
                <Smile className="h-5 w-5 shrink-0" aria-hidden="true" />
                <div className="flex flex-1 items-center justify-between rounded-full bg-[#2A3942] px-3 py-2 text-xs">
                  <span>Mensaje</span>
                  <span className="flex gap-2">
                    <Paperclip className="h-4 w-4" aria-hidden="true" />
                    <Camera className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00A884] text-stone-100">
                  <Mic className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
              <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-stone-500/70" aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center justify-center gap-2 border-t border-[#C9972A]/25 pt-8 text-center">
          <div className="flex gap-0.5 text-[#FCD34D]" aria-label="5 de 5 estrellas">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-current" aria-hidden="true" />
            ))}
          </div>
          <p className="max-w-3xl text-sm font-semibold leading-relaxed text-stone-100 sm:text-base">
            Calificación promedio de 4.9/5 basada en más de 500 alumnos en
            Latinoamérica y España.
          </p>
        </div>
      </div>
    </section>
  );
}