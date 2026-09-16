import {
  ArrowLeft,
  BadgeCheck,
  MoreVertical,
  Phone,
  ShieldCheck,
  Star,
  Video,
} from "lucide-react";
import mariaAvatar from "@/assets/maria-gonzalez-avatar.jpg";
import carlosAvatar from "@/assets/carlos-rodriguez-avatar.jpg";
import anaAvatar from "@/assets/ana-silva-avatar.jpg";

const chats = [
  {
    name: "María González 🇲🇽",
    avatar: mariaAvatar,
    avatarAlt: "Retrato de María González",
    badge: "Compra Verificada • Alumna 2026",
    photo: "/images/pao-1.webp",
    photoAlt: "Hogaza rústica horneada por María",
    incoming:
      "¡Hola Chef! No puedo creer lo que logré este domingo... ¡mira esta miga! Mi familia pensó que lo compré en una panadería gourmet francesa 😭🥖❤️",
    incomingTime: "10:42 a. m.",
    reply:
      "¡Qué belleza de hogaza rústica, María! Ese alveolado abierto y el color de la corteza están de campeonato mundial. ¡Felicidades, Maestra! 👨‍🍳✨",
    replyTime: "10:44 a. m.",
  },
  {
    name: "Carlos Rodríguez 🇦🇷",
    avatar: carlosAvatar,
    avatarAlt: "Retrato de Carlos Rodríguez",
    badge: "Emprendedor • Alumno 2026",
    photo: "/images/pao-2.webp",
    photoAlt: "Panes dorados horneados por Carlos",
    incoming:
      "Buenas tardes equipo, les comparto que con la guía de ventas y la calculadora del Chef IA vendí mis primeras 8 baguettes hoy en el condominio. ¡Recuperé los $6.90 y ya tengo 12 pedidos para el sábado! 🚀💰",
    incomingTime: "4:15 p. m.",
    reply:
      "¡Brutal resultado Carlos! Ese es exactamente el poder de calcular bien los costos y la fermentación. ¡Mucho éxito con esos pedidos! 👏🔥",
    replyTime: "4:18 p. m.",
  },
  {
    name: "Ana Patricia Silva 🇵🇪",
    avatar: anaAvatar,
    avatarAlt: "Retrato de Ana Patricia Silva",
    badge: "Compra Verificada • Alumna 2026",
    photo: "/images/pao-4.webp",
    photoAlt: "Pan de masa madre horneado por Ana",
    incoming:
      "Llevaba meses intentando con videos de YouTube y siempre se me moría la masa madre. Le pregunté al Chef IA a las 11 de la noche, me dijo qué harina usar y hoy dobló su tamaño. ¡Esta focaccia quedó espectacular! 🙏✨",
    incomingTime: "11:08 p. m.",
    reply:
      "¡Esa masa madre está súper activa y llena de vida, Ana! Ya estás lista para todas las recetas de la biblioteca. ¡A disfrutarla! 💪🥖",
    replyTime: "11:11 p. m.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#120804] px-4 py-20 sm:py-24">
      <div className="warm-section-glow absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full border border-[#C9972A]/40 bg-[#C9972A]/15 px-4 py-1.5 text-xs font-bold uppercase text-[#FCD34D]">
            💬 Comunidad de alumnos en vivo
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-stone-100 sm:text-5xl">
            Historias y Resultados Reales de Quienes Ya Están Horneando
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg">
            Mensajes reales de alumnos compartiendo sus primeros panes, sus
            ventas y sus consultas con el Chef IA desde sus cocinas.
          </p>
        </header>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
          {chats.map((chat) => (
            <article
              key={chat.name}
              className="relative mx-auto flex w-full max-w-[24rem] flex-col overflow-hidden rounded-[2.2rem] border-2 border-[#C9972A]/35 bg-[#0F171E] p-3 shadow-2xl shadow-black/60 transition-all duration-300 hover:border-[#C9972A] hover:shadow-[0_0_25px_rgba(201,151,42,0.35)]"
            >
              <div className="flex items-center justify-center gap-1.5 bg-[#0F171E] px-2 pb-2 pt-0.5 text-[11px] font-semibold text-[#FCD34D]">
                <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                {chat.badge}
              </div>

              <div className="flex items-center justify-between rounded-t-2xl bg-[#1F2C34] px-3 py-2.5 text-xs text-stone-200">
                <div className="flex min-w-0 items-center gap-2">
                  <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <img
                    src={chat.avatar}
                    alt={chat.avatarAlt}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-stone-100/20"
                  />
                  <div className="min-w-0">
                    <h3 className="truncate font-sans text-[13px] font-bold text-stone-100">
                      {chat.name}
                    </h3>
                    <p className="mt-0.5 flex items-center gap-1 text-[10px] text-stone-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-cta" />
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

              <div className="flex flex-1 flex-col bg-[#0B141B] px-3 py-4">
                <div className="mb-3 self-center rounded-md bg-[#182229] px-3 py-1 text-[9px] font-semibold text-stone-300 shadow-sm">
                  HOY
                </div>

                <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-[#202C33] p-2.5 text-stone-100 shadow-md">
                  <img
                    src={chat.photo}
                    alt={chat.photoAlt}
                    loading="lazy"
                    width={735}
                    height={786}
                    className="mb-2 aspect-video w-full rounded-xl object-cover"
                  />
                  <p className="text-[13px] leading-[1.45]">{chat.incoming}</p>
                  <p className="mt-1 text-right text-[9px] text-stone-400">
                    {chat.incomingTime}
                  </p>
                </div>

                <div className="ml-auto mt-2.5 max-w-[92%] rounded-2xl rounded-tr-sm bg-[#005C4B] p-3 text-stone-100 shadow-md">
                  <p className="text-[13px] leading-[1.45]">{chat.reply}</p>
                  <p className="mt-1 text-right text-[9px] text-stone-200">
                    {chat.replyTime}{" "}
                    <span className="font-bold text-sky-300" aria-label="Mensaje leído">
                      ✓✓
                    </span>
                  </p>
                </div>
              </div>

              <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-stone-500/70" aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center justify-center gap-4 border-t border-[#C9972A]/25 pt-8 text-center sm:flex-row sm:gap-8">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <div className="flex gap-0.5 text-[#FCD34D]" aria-label="5 de 5 estrellas">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
            </div>
            <p className="max-w-2xl text-sm font-semibold leading-relaxed text-stone-100 sm:text-base">
              Más de 500 alumnos en 18 países horneando panes de calidad
              profesional desde casa.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#C9972A]/35 bg-[#C9972A]/10 px-4 py-2 text-xs font-bold text-stone-200">
            <ShieldCheck className="h-5 w-5 shrink-0 text-[#FCD34D]" aria-hidden="true" />
            Garantía de Satisfacción Total • Compra 100% Protegida
          </div>
        </div>
      </div>
    </section>
  );
}