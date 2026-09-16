import { Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND_NAME, CHECKOUT_URL } from "./config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-oven/90 shadow-xl backdrop-blur-md">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:min-h-20 sm:gap-4 sm:px-6">
        <a href="#" className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label={`${BRAND_NAME}, inicio`}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-gradient-to-br from-oven-deep to-oven-black shadow-md">
            <Wheat className="h-5 w-5 text-gold-bright" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block whitespace-nowrap font-serif text-base font-bold leading-none tracking-[0.12em] text-gold-bright drop-shadow-sm sm:text-2xl sm:tracking-[0.2em]">
              {BRAND_NAME}
            </span>
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.3em] text-gold sm:text-[10px] sm:tracking-[0.4em]">
              Artesanal
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-emerald-cta/30 bg-surface/80 px-3 py-2 lg:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping-dot rounded-full bg-emerald-cta" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-cta" />
          </span>
          <span className="text-sm font-medium text-cream/85">
            Acceso Inmediato Activo en Todo el Mundo
          </span>
        </div>

        <Button asChild className="group relative h-auto shrink-0 overflow-hidden whitespace-nowrap rounded-full bg-gradient-to-r from-gold-deep to-gold-bright px-3 py-2.5 text-[11px] font-extrabold text-oven shadow-lg transition-transform hover:scale-[1.03] sm:px-5 sm:py-3 sm:text-sm">
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
            <span className="cta-shine absolute inset-y-0 w-1/3" aria-hidden="true" />
            <span className="relative">Acceder por $6.90 »</span>
          </a>
        </Button>
      </div>
    </header>
  );
}
