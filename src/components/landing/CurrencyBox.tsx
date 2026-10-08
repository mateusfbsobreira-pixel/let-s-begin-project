const currencies = [
  { country: "🇲🇽 México", price: "aprox. $185 MXN", methods: "OXXO o Tarjeta" },
  { country: "🇨🇴 Colombia", price: "aprox. $42.000 COP", methods: "PSE o Baloto" },
  { country: "🇨🇱 Chile", price: "aprox. $9.500 CLP", methods: "Webpay o Tarjeta" },
  { country: "🇵🇪 Perú", price: "aprox. S/ 38 PEN", methods: "PagoEfectivo" },
  { country: "🇪🇸 España", price: "aprox. 9,20 €", methods: "+IVA" },
  { country: "🇺🇸 Otros países", price: "$9.90 USD", methods: "" },
];

export function CurrencyBox({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl border border-[#D8CEB8] bg-[#F7F4EC] p-4 text-left sm:p-5 ${className}`}>
      <p className="text-sm font-bold leading-snug text-artisan-ink sm:text-base">
        🌎 ¿Cómo pagarás en la moneda de tu país?
      </p>
      <p className="mt-1.5 text-[13px] leading-relaxed text-artisan-ink/80 sm:text-sm">
        El precio de referencia es de $9.90 Dólares. Al hacer clic, el sistema oficial de Hotmart convertirá
        automáticamente el valor exacto a tu moneda local para que puedas pagar fácil con tus métodos favoritos:
      </p>
      <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2.5 sm:gap-x-5">
        {currencies.map(({ country, price, methods }) => (
          <li key={country} className="text-[13px] leading-snug sm:text-sm">
            <span className="font-bold text-artisan-ink">{country}:</span>{" "}
            <span className="font-extrabold text-emerald-cta">{price}</span>
            {methods && <span className="text-artisan-ink/60"> ({methods})</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
