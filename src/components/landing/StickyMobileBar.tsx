import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHECKOUT_URL } from "./config";
import { useCountdown } from "@/hooks/use-countdown";

export function StickyMobileBar() {
  const [visible, setVisible] = useState(false);
  const { label } = useCountdown();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="glass-dark border-t border-gold/45 px-3 py-2.5 shadow-2xl sm:px-6 sm:py-3">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="flex items-baseline gap-2 leading-none">
              <span className="text-xs text-cream/50 line-through">$230</span>
              <span className="text-lg font-black text-gold sm:text-xl">
                $6.90 USD
              </span>
            </p>
            <p className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-cream/75 sm:text-xs">
              <Clock className="h-3 w-3 text-gold-bright" aria-hidden="true" />
              Oferta expira en{" "}
              <span className="font-mono font-bold text-gold-bright">{label}</span>
            </p>
          </div>

          <Button
            asChild
            className="h-auto shrink-0 rounded-full bg-emerald-cta px-4 py-3 text-sm font-bold text-paper shadow-xl transition-transform hover:scale-[1.03] hover:bg-emerald-cta-hover sm:px-7 sm:text-base"
          >
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              Acceder Ahora »
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
