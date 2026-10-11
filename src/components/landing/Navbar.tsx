import { Button } from "@/components/ui/button";
const logoUrl = "/images/logo-la-casa-del-pan.png";
import { BRAND_NAME, CHECKOUT_URL } from "./config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-oven/90 shadow-xl backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label={BRAND_NAME}>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gold/60 bg-oven-black shadow-[0_0_20px_color-mix(in_oklab,var(--color-gold)_25%,transparent)] sm:h-10 sm:w-10 sm:rounded-xl">
            <img
              src={logoUrl}
              alt=""
              aria-hidden="true"
               loading="eager"
               decoding="async"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-sm font-bold leading-none tracking-[0.08em] text-gold-bright drop-shadow-sm sm:text-2xl sm:tracking-[0.2em]">
              {BRAND_NAME}
            </span>
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.3em] text-gold sm:text-[10px] sm:tracking-[0.4em]">
              Artesanal
            </span>
          </span>
        </div>

        <Button asChild className="group relative h-auto shrink-0 overflow-hidden whitespace-nowrap rounded-full bg-gradient-to-r from-gold-deep to-gold-bright px-3 py-1.5 text-xs font-extrabold text-oven shadow-lg transition-transform hover:scale-[1.03] sm:px-5 sm:py-3 sm:text-sm">
          <a href={CHECKOUT_URL}>
            <span className="cta-shine absolute inset-y-0 w-1/3" aria-hidden="true" />
            <span className="relative sm:hidden">Empezar $9.90</span>
            <span className="relative hidden sm:inline">Empezar por $9.90 USD »</span>
          </a>
        </Button>
      </div>
    </header>
  );
}
