import { Wheat } from "lucide-react";
import { BRAND_NAME, CHECKOUT_URL } from "./config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-oven/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 bg-surface">
            <Wheat className="h-4 w-4 text-gold-bright" aria-hidden="true" />
          </span>
          <span className="font-serif text-sm font-bold tracking-widest text-gold-bright sm:text-base">
            {BRAND_NAME}
          </span>
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-emerald-cta/30 bg-surface/80 px-3 py-1.5 md:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping-dot rounded-full bg-emerald-cta" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-cta" />
          </span>
          <span className="text-xs font-medium text-muted-foreground">
            Acceso Inmediato Activo en Todo el Mundo
          </span>
        </div>

        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gradient-to-r from-gold-deep to-gold-bright px-4 py-2 text-xs font-bold text-oven transition-transform duration-200 hover:scale-105 sm:text-sm"
        >
          Acceder por $6.90 »
        </a>
      </div>
    </header>
  );
}
