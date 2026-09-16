import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bot,
  ChefHat,
  Download,
  Play,
  Send,
  ShieldCheck,
  Timer,
  Wheat,
} from "lucide-react";
import { CHECKOUT_URL } from "./config";

const tabTriggerClass =
  "rounded-full border border-amber-900/40 bg-oven-soft px-4 py-2 text-xs sm:text-sm font-semibold text-stone-300 transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-gold data-[state=active]:to-gold-bright data-[state=active]:text-[#1A0E08] data-[state=active]:border-gold data-[state=active]:shadow-lg hover:text-amber-300";

function ChefAiDemo() {
  return (
    <div className="rounded-2xl bg-oven-soft border border-amber-900/40 overflow-hidden">
      {/* chat header */}
      <div className="flex items-center gap-3 border-b border-amber-900/30 bg-surface px-5 py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-deep text-[#1A0E08]">
          <ChefHat className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-bold text-stone-100">Chef Panadero IA</p>
          <p className="text-xs text-emerald-400 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping-dot" />
            En línea · Responde en 2 segundos
          </p>
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* user msg */}
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-amber-900/30 border border-amber-800/40 px-4 py-3">
            <p className="text-sm text-stone-200">
              Chef, mi masa lleva 3 horas y se siente pegajosa y sin fuerza.
              ¿Qué hago?
            </p>
          </div>
        </div>

        {/* AI msg */}
        <div className="flex gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-deep text-[#1A0E08]">
            <Bot className="h-4 w-4" aria-hidden="true" />
          </div>
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-surface border border-amber-900/40 px-4 py-3 space-y-3">
            <p className="text-sm text-stone-200 leading-relaxed">
              ¡No te preocupes! Tu masa está sobrehidratada para esa temperatura
              ambiente. Haz esto de inmediato: realiza{" "}
              <strong className="text-amber-300">
                2 pliegues de bobina cada 20 minutos
              </strong>{" "}
              con las manos húmedas y llévala al refrigerador a 4°C para frenar
              la fermentación.
            </p>
            <div className="rounded-xl border border-gold/40 bg-gradient-to-br from-[#2A0F08] to-[#1F1008] p-3.5 flex gap-3">
              <Wheat className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gold">
                  El Secreto del Maestro
                </p>
                <p className="text-sm text-stone-300 mt-1">
                  El frío reafirma la mantequilla y tensa la red de gluten sin
                  desgarrar la masa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* quick prompts */}
        <div className="flex flex-wrap gap-2 pt-1">
          {[
            "¿Cómo revivir mi masa madre?",
            "Temperatura del horno para pizza",
            "Cálculo de costos",
          ].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-amber-800/40 bg-oven px-3 py-1.5 text-xs text-amber-200/80"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* input */}
        <div className="flex items-center gap-2 rounded-full border border-amber-900/40 bg-oven px-4 py-2.5">
          <span className="flex-1 text-sm text-stone-500">
            Pregúntale lo que sea al Chef…
          </span>
          <Send className="h-4 w-4 text-gold" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

function TimersDemo() {
  const presets = [
    { name: "Autólisis & Reposo", time: "30 min", active: false },
    { name: "Fermentación en Bloque", time: "45 min", active: false },
    { name: "Horneado con Vapor en Olla de Hierro", time: "25 min", active: true },
  ];
  return (
    <div className="rounded-2xl bg-oven-soft border border-amber-900/40 p-5 sm:p-6 space-y-4">
      {presets.map((p) => (
        <div
          key={p.name}
          className={`flex items-center justify-between gap-4 rounded-xl border px-4 py-4 ${
            p.active
              ? "border-gold/60 bg-surface"
              : "border-amber-900/30 bg-surface/50"
          }`}
          style={
            p.active
              ? { boxShadow: "0 0 30px -8px rgba(201,151,42,0.4)" }
              : undefined
          }
        >
          <div className="flex items-center gap-3">
            {/* progress ring */}
            <div className="relative flex h-12 w-12 items-center justify-center">
              <svg viewBox="0 0 48 48" className="h-12 w-12 -rotate-90">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  strokeWidth="4"
                  className="stroke-amber-900/40"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="125.6"
                  strokeDashoffset={p.active ? "31.4" : "125.6"}
                  className={p.active ? "stroke-gold" : "stroke-amber-800"}
                  style={
                    p.active
                      ? { filter: "drop-shadow(0 0 6px rgba(201,151,42,0.8))" }
                      : undefined
                  }
                />
              </svg>
              <Timer
                className={`absolute h-4 w-4 ${p.active ? "text-gold" : "text-stone-500"}`}
                aria-hidden="true"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-stone-100">{p.name}</p>
              <p className="text-xs text-stone-400">{p.time}</p>
            </div>
          </div>
          {p.active ? (
            <span className="rounded-full bg-gold/15 border border-gold/40 px-3 py-1 text-xs font-bold text-gold animate-pulse">
              EN CURSO
            </span>
          ) : (
            <span className="rounded-full border border-amber-900/40 px-3 py-1 text-xs text-stone-400">
              Listo
            </span>
          )}
        </div>
      ))}

      <button
        type="button"
        className="w-full rounded-xl bg-gradient-to-r from-gold to-gold-bright py-3.5 text-sm font-bold uppercase tracking-wider text-[#1A0E08] shadow-lg transition-transform hover:scale-[1.01]"
      >
        ▶ Iniciar Temporizador con Alerta Sonora
      </button>
    </div>
  );
}

function CookingModeDemo() {
  const steps = [
    { label: "Mezclar harina y agua (autólisis)", done: true },
    { label: "Incorporar la masa madre y la sal", done: true },
    { label: "Serie de 4 pliegues cada 30 minutos", done: true },
    { label: "Formado y reposo en banetón", done: false },
    { label: "Horneado con vapor a 230°C", done: false },
  ];
  return (
    <div className="rounded-2xl bg-oven-soft border border-amber-900/40 overflow-hidden">
      <div className="border-b border-amber-900/30 bg-surface px-5 py-4">
        <p className="text-xs uppercase tracking-wider text-gold font-bold">
          Modo Cocina · Pantalla Siempre Activa
        </p>
        <h4 className="font-serif text-xl text-stone-100 mt-1">
          Pan de Campo Rústico
        </h4>
        <p className="text-sm text-stone-400 mt-0.5">
          Porciones: 2 Panes (800g c/u)
        </p>
      </div>
      <div className="p-5 space-y-3">
        {steps.map((s) => (
          <label
            key={s.label}
            className="flex items-center gap-3 rounded-xl border border-amber-900/30 bg-surface/60 px-4 py-3 cursor-pointer"
          >
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-md border ${
                s.done
                  ? "bg-emerald-cta border-emerald-cta"
                  : "border-stone-600"
              }`}
            >
              {s.done && (
                <svg viewBox="0 0 12 12" className="h-3 w-3 text-white">
                  <path
                    d="M2 6l3 3 5-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </span>
            <span
              className={`text-sm ${s.done ? "text-stone-500 line-through" : "text-stone-200"}`}
            >
              {s.label}
            </span>
          </label>
        ))}

        <div className="pt-3">
          <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
            <span>Tu progreso de lectura</span>
            <span className="font-bold text-gold">84%</span>
          </div>
          <div className="h-2 rounded-full bg-amber-950/60 overflow-hidden">
            <div
              className="h-full w-[84%] rounded-full bg-gradient-to-r from-gold to-gold-bright"
              style={{ boxShadow: "0 0 10px rgba(201,151,42,0.6)" }}
            />
          </div>
          <button
            type="button"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-5 py-2.5 text-sm font-bold text-gold transition-colors hover:bg-gold/20"
          >
            <Play className="h-4 w-4" aria-hidden="true" />
            Continuar donde lo dejaste
          </button>
        </div>
      </div>
    </div>
  );
}

function CertificateDemo() {
  return (
    <div className="rounded-2xl bg-oven-soft border border-amber-900/40 p-5 sm:p-8 flex flex-col items-center">
      {/* diploma */}
      <div
        className="relative w-full max-w-md rounded-xl border-2 border-gold/70 bg-gradient-to-br from-[#241206] to-[#160B04] p-6 sm:p-8 text-center"
        style={{ boxShadow: "0 0 50px -10px rgba(201,151,42,0.45)" }}
      >
        <div className="absolute inset-2 rounded-lg border border-gold/30 pointer-events-none" />
        <div className="relative">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-deep">
            <Wheat className="h-7 w-7 text-[#1A0E08]" aria-hidden="true" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80">
            La Casa del Pan Artesanal
          </p>
          <h4 className="font-serif text-lg sm:text-2xl text-amber-200 mt-2">
            Certificado de Maestro Panadero Artesanal
          </h4>
          <p className="text-xs text-stone-400 mt-2">
            Se otorga el presente reconocimiento a
          </p>
          <p className="font-serif text-xl sm:text-2xl text-cream border-b border-gold/40 inline-block px-6 pb-1 mt-2">
            [Tu Nombre Completo Aquí]
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-cta/50 bg-emerald-cta/10 px-3 py-1">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
            <span className="text-xs font-bold text-emerald-400 tracking-wider">
              REG-2026-PAN-OFICIAL
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-bright px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#1A0E08] shadow-lg transition-transform hover:scale-[1.02]"
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        Descargar en Ultra-HD 4K para Imprimir
      </button>
    </div>
  );
}

export function AppTour() {
  return (
    <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 50% 100%, rgba(201,151,42,0.08), transparent 70%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center rounded-full border border-amber-500/30 text-amber-300 bg-amber-950/40 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider">
            📱 Explora Tu Plataforma por Dentro
          </span>
          <h2 className="mt-5 font-serif text-2xl font-bold leading-tight text-cream sm:text-4xl">
            Una Experiencia Diseñada Exclusivamente para Que Tus Panes Queden
            Perfectos
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-cream/85 sm:text-lg">
            Haz clic en cada herramienta y descubre por qué más de 500 alumnos
            ya no hornean sin ella.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="chef" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
            <TabsTrigger value="chef" className={tabTriggerClass}>
              👨‍🍳 Chef IA 24/7
            </TabsTrigger>
            <TabsTrigger value="timers" className={tabTriggerClass}>
              ⏱️ Temporizadores
            </TabsTrigger>
            <TabsTrigger value="cooking" className={tabTriggerClass}>
              📖 Modo Cocina
            </TabsTrigger>
            <TabsTrigger value="cert" className={tabTriggerClass}>
              🏆 Certificación 4K
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chef" className="animate-in fade-in-50 duration-300">
            <ChefAiDemo />
          </TabsContent>
          <TabsContent value="timers" className="animate-in fade-in-50 duration-300">
            <TimersDemo />
          </TabsContent>
          <TabsContent value="cooking" className="animate-in fade-in-50 duration-300">
            <CookingModeDemo />
          </TabsContent>
          <TabsContent value="cert" className="animate-in fade-in-50 duration-300">
            <CertificateDemo />
          </TabsContent>
        </Tabs>

        {/* Intermediate CTA */}
        <div
          className="mt-12 rounded-2xl border border-amber-600/30 p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-xl"
          style={{ background: "linear-gradient(135deg, #1C0E07, #2A140B)" }}
        >
          <p className="font-serif text-xl sm:text-2xl text-stone-100">
            Todo esto disponible en tu celular hoy por solo{" "}
            <span className="text-emerald-400 font-bold">$6.90 USD</span>{" "}
            <span className="text-stone-300 text-base">
              (Pago único para siempre).
            </span>
          </p>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-5 inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-emerald-cta px-8 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white shadow-[0_10px_40px_-10px_rgba(22,163,74,0.6)] transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            SÍ, Quiero Mi Aplicación Interactiva »
          </a>
          <p className="mt-4 text-xs sm:text-sm text-stone-400">
            ⚡ Acceso inmediato • 7 Días de Garantía Total
          </p>
        </div>
      </div>
    </section>
  );
}
