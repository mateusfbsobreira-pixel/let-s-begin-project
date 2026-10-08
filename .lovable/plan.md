# Hero: subheadline, chips, CTA e box de moedas locais

Melhorias de CRO no topo da página para mulheres 45-65+. Só mudam textos e um novo box: imagem de fundo, escurecimento, cores, animações, medidas e o link de pagamento continuam exatamente como estão.

## O que muda

1. **Selo de cima:** permanece "🥖 Más de 1.480 Familias Ya Están Horneando con Este Método".
2. **Parágrafo abaixo do título:** "Aunque nunca hayas tocado una masa: tu Chef virtual te habla por voz y te guía paso a paso, incluso con las manos en la masa. Toca 1 botón en tu celular y hornea este fin de semana sin conservantes."
3. **Chips de confiança (acima do botão):** "✓ Sin batidoras costosas" · "✓ Sin experiencia previa" · "✓ En cualquier celular (0 MB de espacio)".
4. **Botão principal:** mesmo formato (verde esmeralda, altura mínima 56px, brilho animado).
   - Celular: "QUIERO MI ACCESO POR $9.90 EN MI MONEDA →"
   - Computador: "SÍ, QUIERO MI ACCESO VITALICIO POR $9.90 EN MI MONEDA →"
5. **Frase verde logo abaixo do botão:** "✅ Un Solo Pago de Por Vida · Cero Mensualidades · 7 Días de Garantía".
6. **Box de moedas locais (novo, logo abaixo das formas de pagamento):**
   - Título pequeno em caixa alta: "🌎 PAGAS EN TU MONEDA LOCAL — HOTMART CONVIERTE AL INSTANTE"
   - Chips compactas: 🇲🇽 ~$185 MXN · 🇨🇴 ~$42.000 COP · 🇨🇱 ~$9.500 CLP · 🇵🇪 ~S/38 PEN · 🇪🇸 ~€9,20 EUR
   - Micro-texto: "*Al tocar el botón serás dirigida a Hotmart (100% seguro), donde verás el valor exacto en la moneda de tu país. Acepta OXXO, PSE, Baloto, PagoEfectivo y Tarjeta."
   - O parágrafo explicativo antigo ("*Hotmart convierte $9.90 Dólares...") sai, para não repetir a mesma informação.
7. **4 selos de confiança no final:** permanecem (Pago Seguro, Acceso Inmediato, 7 Días de Garantía, Un Solo Pago).

## Detalhes técnicos

- Único arquivo alterado: `src/components/landing/Hero.tsx`. A página `/oferta/` usa o mesmo componente e herda a mudança automaticamente.
- Box com as classes pedidas (`border-gold/30 bg-oven/80 rounded-xl p-3.5 mt-4 text-center`), chips em linha que quebra no celular (`flex-wrap`, letra pequena) para não cortar texto.
- `CHECKOUT_URL` e os `href` continuam iguais; nenhum link abre em nova aba.
- `src/components/landing/FinalOffer.tsx` **não** será tocado: ele mostra valores aproximados um pouco menores (~$175 MXN, ~$39.000 COP, ~$9.200 CLP, ~S/36 PEN). Se quiser, depois eu alinho os dois.
- Validação: build sem erros e conferência no celular (390px) e no computador (1280px) de que chips, botão e box não se cortam nem se sobrepõem.
