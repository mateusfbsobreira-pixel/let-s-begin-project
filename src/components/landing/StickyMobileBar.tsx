import { useEffect, useState } from "react";
import { CHECKOUT_URL } from "./config";

export function StickyMobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearEnd = window.innerHeight + y >= document.body.offsetHeight - 700;
      const final = document.getElementById("oferta-final");
      const finalInView = final ? final.getBoundingClientRect().top < window.innerHeight : false;
      setVisible(y >= 550 && !nearEnd && !finalInView);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-0 left-0 right-0 z-40 max-h-[65px] border-t border-[#D4AF37]/30 bg-[#1A0F08]/85 px-4 py-2.5 shadow-2xl backdrop-blur-md transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-3">
        <div className="min-w-0 leading-tight">
          <p className="font-serif text-base font-bold text-[#F5E6BE]">$9.90 USD</p>
          <p className="text-[11px] font-semibold text-emerald-300">Pago Único · 96% OFF</p>
        </div>
        <a
          href={CHECKOUT_URL}
          tabIndex={visible ? 0 : -1}
          className="whitespace-nowrap rounded-full bg-[#107C41] px-4 py-2.5 text-xs font-bold text-white shadow-lg transition-transform hover:bg-[#0E6837] active:scale-95 sm:px-6 sm:text-sm"
        >
          QUIERO EL PAQUETE →
        </a>
      </div>
    </div>
  );
}
