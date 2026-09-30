export function AnnouncementBar() {
  return (
    <div className="border-b border-gold/40 bg-oven-black px-4 py-2.5 text-center shadow-md">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-semibold leading-relaxed text-cream/90 sm:text-sm">
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-cta opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-cta" />
          </span>
          <span><span className="hidden sm:inline">🔥 </span>1.480+ alumnas ya están horneando con este método</span>
          <span className="mx-1.5 text-gold/40">·</span>
          <span className="font-bold text-gold-bright">Acceso por $6.90</span>
        </p>
        <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] font-bold text-gold-bright sm:text-xs">
          🎁 Precio Especial de Lanzamiento
        </span>
      </div>
    </div>
  );
}
