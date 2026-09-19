import { LockKeyhole } from "lucide-react";

const PAYMENT_METHODS = [
  { name: "VISA", className: "font-black italic text-oven-deep" },
  { name: "mastercard", className: "font-extrabold text-oven-deep" },
  { name: "PayPal", className: "font-black italic text-oven-deep" },
  { name: "OXXO", className: "font-black text-red-offer" },
  { name: "Efecty", className: "font-extrabold italic text-gold-mute" },
  { name: "PagoEfectivo", className: "font-extrabold text-oven-deep" },
];

type PaymentMethodsProps = {
  variant?: "dark" | "light";
};

export function PaymentMethods({ variant = "dark" }: PaymentMethodsProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`mx-auto mt-5 max-w-2xl ${isDark ? "lg:mx-0" : ""}`}
      aria-label="Formas de pago aceptadas"
    >
      <ul className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 lg:justify-start">
        {PAYMENT_METHODS.map((method) => (
          <li
            key={method.name}
            className={`flex h-8 min-w-16 items-center justify-center rounded-md border px-2.5 text-[10px] shadow-sm sm:min-w-20 sm:text-xs ${
              isDark
                ? "border-gold/35 bg-cream/95"
                : "border-gold/30 bg-paper"
            } ${method.className}`}
          >
            {method.name}
          </li>
        ))}
      </ul>
      <p
        className={`mt-3 flex items-start justify-center gap-1.5 text-center text-[11px] font-medium leading-relaxed sm:text-xs lg:justify-start ${
          isDark ? "text-cream/75" : "text-artisan-ink/70"
        }`}
      >
        <LockKeyhole className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
        <span>
          Pago 100% seguro en tu moneda local con tarjeta, PayPal o en efectivo
          (OXXO, Efecty)
        </span>
      </p>
    </div>
  );
}