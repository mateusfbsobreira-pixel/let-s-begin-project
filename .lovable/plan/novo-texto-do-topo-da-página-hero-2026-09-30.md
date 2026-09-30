# Novo texto do topo da página (Hero)

Só muda o texto e o tamanho das letras no topo. Celular, cartões flutuantes, formas de pagamento, fundo e escurecimento continuam iguais.

## O que muda
1. **Selo de cima:** "🥖 Más de 1.480 Familias Ya Están Horneando con Este Método"
2. **Título:** "Este Fin de Semana, Tu Casa Se Llenará del Aroma a **Pan Recién Horneado** — Aunque Nunca Hayas Hecho Uno en Tu Vida" (a parte em negrito fica em dourado)
3. **Parágrafo:** o novo texto sensorial ("Imagina cortar la primera rebanada… este mismo fin de semana."), com letra maior e mais espaço entre as linhas (text-lg leading-loose sm:text-xl)
4. **Botão:** no celular "QUIERO HACER PAN ESTE FIN DE SEMANA »", no computador "SÍ, QUIERO MI PRIMER PAN ARTESANAL POR $6.90 »"; botão mais alto (py-4 sm:py-5, text-sm sm:text-lg)
5. **Frase abaixo do botão:** a frase verde atual será trocada por "✅ Pago Único · Sin Mensualidades · 7 Días de Garantía Total" (para não ficarem duas frases parecidas)
6. **Texto sobre a moeda:** mesmo texto, letra maior (text-sm sm:text-base)
7. **Selos de confiança:** mesmos textos, letra maior (text-sm sm:text-base)

## Detalhes técnicos
- Único arquivo: `src/components/landing/Hero.tsx` (a página /oferta usa o mesmo componente e herda a mudança).
- Os links de compra já abrem na mesma aba em todos os arquivos (target="_blank" removido antes) — nada a fazer.
- As "regras visuais para todo o projeto" são aplicadas só no topo agora; as demais seções ficam para os próximos pedidos.
- Verificação no celular (390px) e computador (1280px).
