import { useCountdown } from "@/hooks/use-countdown";

export function AnnouncementBar() {
  const { label } = useCountdown();

  return (
    <div className="border-b border-gold/40 bg-oven-black px-4 py-2.5 text-center shadow-md">
      <p className="text-xs font-medium leading-relaxed text-cream sm:text-sm">
        <span className="mr-2 inline-block rounded-full bg-gradient-to-r from-gold to-gold-deep px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-oven shadow-sm">
          👑 Edición 2026
        </span>
        Tu Aplicación Interactiva + Chef IA 24/7 + 8 Libros Maestros por solo
        $6.90 USD (Pago Único Vitalicio)
        <span className="ml-2 inline-flex items-center gap-1 rounded-full border border-gold/45 px-2.5 py-0.5 text-[11px] font-bold text-gold-bright">
          ⏳ Expira en <span className="font-mono">{label}</span>
        </span>
      </p>
    </div>
  );
}
