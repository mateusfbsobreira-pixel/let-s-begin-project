export function AnnouncementBar() {
  return (
    <div className="border-b border-gold/40 bg-oven-black px-3 py-1.5 text-center shadow-md sm:px-4 sm:py-2.5">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-semibold leading-snug text-cream/90 sm:text-xs sm:leading-relaxed sm:sm:text-sm">
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-cta opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-cta" />
          </span>
          <span className="sm:hidden">1.480+ alumnas ya hornean con este método · De $230 por $9.90 USD</span>
          <span className="hidden sm:inline">🔥 1.480+ alumnas ya están horneando con este método</span>
          <span className="mx-1.5 hidden text-gold/40 sm:inline">·</span>
          <span className="hidden font-bold text-gold-bright sm:inline">👑 OFERTA FUNDADORAS 2026 — De $230 por SOLO $9.90 Dólares (Pago Único Para Siempre)</span>
        </p>
        <span className="hidden rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-bold text-gold-bright sm:inline-flex">
          🎁 Precio Especial de Lanzamiento
        </span>
      </div>
    </div>
  );
}
