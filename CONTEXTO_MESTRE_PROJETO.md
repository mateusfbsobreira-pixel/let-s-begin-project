# 📋 CONTEXTO MESTRE DO PROJETO — LA CASA DEL PAN ARTESANAL
> **Documento de Continuidade e Handover Completo**  
> *Data de Atualização: 29 de Setembro de 2026*  
> *Instrução para a IA do novo chat:* Leia este documento na íntegra para assumir o projeto exatamente do ponto onde paramos, mantendo total fidelidade aos padrões, arquivos e decisões estratégicas.

---

## 🧭 1. VISÃO GERAL DO PROJETO & NEGÓCIO

* **Nome Comercial:** La Casa del Pan Artesanal
* **Domínio Oficial Ativo:** `https://lacasadelpanartesanal.shop`
* **Subpasta do App PWA:** `https://lacasadelpanartesanal.shop/app/`
* **Público-Alvo:** Mulheres de 45 a 65+ anos, hispanohablantes (América Latina e Espanha), interessadas em panificação artesanal com massa madre em casa.
* **Oferta Principal (Front-end Low-Ticket):**
  * **Preço:** \$6.90 USD (pago único vitalício, convertido na moeda local pelo Hotmart).
  * **Entregáveis:**
    1. **Aplicativo Web Interativo (PWA):** Funciona em celular (iPhone/Android), tablet e PC sem downloads de lojas (0 MB de armazenamento ocupado). Conta com *Modo Cocina* (tela sempre ativa, letras grandes, passo a passo).
    2. **Chef IA 24/7 em Tempo Real:** Assistente panadeiro inteligente alimentado por IA para tirar dúvidas sobre fermentação, hidratação e masa madre ao vivo.
    3. **8 Libros Maestros (+100 receitas):** Pão artesanal, masa madre, pizzas caseras, brioches, brownies, galletas, massas doces e guia de vendas.
    4. **Temporizadores Inteligentes Integrados:** Alertas de autólise, dobras (pliegues), descanso e forno a vapor.
    5. **Certificação & Diplomas 4K:** Desbloqueio de diploma em ultra resolução com nome e registro único após concluir os livros.
    6. **PDFs Originais para Impressão:** Arquivos originais em alta resolução para quem quiser imprimir em papel.
* **Checkout Hotmart Oficial:** `https://pay.hotmart.com/N106466253N?checkoutMode=10`
* **Pixel do Meta Ads Oficial:** ID `1648061046252424`
* **Infraestrutura & Hospedagem:**
  * **DNS:** Gerenciado via Cloudflare (`hattie.ns.cloudflare.com`, `zac.ns.cloudflare.com`).
  * **Servidor Web:** Hostinger (`public_html/` para a landing page estática e `public_html/app/` para a aplicação React PWA).

---

## 📁 2. ESTRUTURA DE PASTAS E REPOSITÓRIOS LOCAIS

Existem 2 projetos principais na máquina do usuário (`C:\Users\Mateus Flores\`):

### A) Repositório da Plataforma PWA e Painel Admin
* **Caminho Local:** `c:\Users\Mateus Flores\CasaDoPao\la-casa-platform`
* **Repositório GitHub:** `MateusFBS/LaCasaDelPanApp`
* **Stack:** Vite, React 19, TypeScript, Tailwind CSS, Supabase Client.
* **Subaplicação do Aluno / App:** `apps/mobile/`
* **Painel Administrativo Completo:** Localizado em `apps/mobile/src/routes/admin/` e container `apps/mobile/src/routes/AdminScreen.tsx`.
  * Possui 8 abas funcionais:
    1. `StudentsTab.tsx`: Tabela de alunos, busca, filtros de engajamento, drawer com detalhes de telemetria individual.
    2. `BooksTab.tsx`: Catálogo dos 8 livros com capas 3D reais (`apps/mobile/src/assets/covers/*.webp`).
    3. `CouponsTab.tsx`: Gerador e gestor de cupons promocionais.
    4. `PhotosTab.tsx`: Moderação de fotos da comunidade.
    5. `NoticesTab.tsx`: Notificações e avisos no app.
    6. `SeasonalTab.tsx`: Campanhas sazonais e receitas temáticas.
    7. `AnalyticsTab.tsx`: Métricas de retenção, tempo de leitura e progresso.
    8. `SettingsTab.tsx`: Configurações gerais e webhooks.
* **Banco de Dados (Supabase):**
  * Integração com funções RPC: `admin_dashboard_data` e `get_student_data`.
  * Telemetria real ativa com alunos de exemplo (ex: Elizabeth Trujillo, Keilor Campos).
* **Pacote de Produção do App:** `C:\Users\Mateus Flores\Desktop\app-la-casa-del-pan.zip` (72.68 MB).

---

### B) Repositório da Página de Vendas (Projeto Oficial Lovable)
* **Caminho Local:** `c:\Users\Mateus Flores\CasaDoPao\let-s-begin-project`
* **Stack:** TanStack Start, React 19, Nitro, Vite 8, Tailwind CSS.
* **Atenção:** NÃO confundir com a pasta antiga de julho que existia na Área de Trabalho (`SITE DE VENDAS LA CASA`). O site autêntico do Lovable é este (`let-s-begin-project`).
* **Estrutura de Componentes da Landing Page (`src/components/landing/`):**
  * `AnnouncementBar.tsx`: Barra de topo com relógio de urgência (14:59).
  * `Navbar.tsx`: Logo oficial, status online verde, botão CTA.
  * `Hero.tsx`: Dobra 1 cinematográfica com foto de forno rústico, celular interativo com cards flutuantes (Chef IA, Modo Horno, Diploma 4K), botões e formas de pagamento.
  * `ContrastSection.tsx`: **Dobra 2 Oficial Original (Restaurada sem mockup)**.
  * `BreadGallery.tsx`: Galeria de fotos reais dos pães artesanais.
  * `MasterBooks.tsx`: Carrossel dos 8 livros maîtres.
  * `Testimonials.tsx`: Depoimentos de alunas.
  * `AppTour.tsx`: Tour guiado interativo pela aplicação.
  * `FinalOffer.tsx`: Oferta completa empilhada com garantia.
  * `Guarantee.tsx`: Garantia incondicional de 7 dias.
  * `FaqSection.tsx` & `Footer`: Perguntas frequentes e rodapé com suporte.
* **Pixel Meta:** Injetado diretamente em `src/routes/__root.tsx` no `RootShell` com eventos `PageView` e `InitiateCheckout`.
* **Como Compilar e Exportar o Site do Lovable:**
  * Comando: `npm run build` (executa `vite build` e prerenderiza `index.html` em `.output/public/`).
  * Saída estática: `c:\Users\Mateus Flores\CasaDoPao\let-s-begin-project\.output\public/`.
  * Arquivo `.htaccess` já incluso com regras de compressão, cache e redirecionamento seguro para a subpasta `/app/`.
* **Pacote ZIP Atualizado para Hostinger:**
  * `C:\Users\Mateus Flores\Desktop\site-vendas-lovable-oficial.zip` (11.34 MB).

---

## 🎯 3. DECISÕES RECENTES E STATUS ATUAL DA PÁGINA

1. **Restauração da Dobra 2 (Resolvido & No Ar):**
   * O usuário havia inserido um mockup de imagem (`todos-productos.webp`) na Dobra 2, o que tornou a página mais pesada e derrubou as vendas.
   * Restauramos a Dobra 2 para a versão **100% original do Lovable**:
     * Sem nenhuma imagem de mockup.
     * Título: *"⚡ LA DIFERENCIA QUE LO CAMBIA TODO: ¿Por Qué los Libros en PDF Tradicionales y Videos de YouTube Te Hacen Fracasar en la Cocina?"*
     * Comparativo em 2 colunas:
       * ❌ **El Método Tradicional:** 5 dores destacadas com ícone vermelho (mãos na massa e tela apagando, PDFs não respondem, arquivos de 300 páginas perdidos, medidas confusas, pães como tijolos).
       * 👑 **Tecnología en Tu Cocina · ✨ Tu Aplicación Oficial:** 5 vitórias destacadas com ícone verde esmeralda (Modo Cocina, Chef IA 24/7 ao vivo, cronômetros de fermentação, PWA instantânea, PDFs originais inclusos).
   * O site foi recompilado e já está ativo e respondendo Status 200 no ar em `https://lacasadelpanartesanal.shop`.

2. **Aviso de DNS/E-mail da Hostinger (Esclarecido):**
   * A Hostinger enviou e-mail alertando que o domínio `lacasadelpanartesanal.shop` está com registros MX incorretos.
   * **Causa:** O domínio usa DNS na Cloudflare.
   * **Impacto:** Zero no site e nas vendas. Só impede o recebimento de e-mails caso use o webmail da Hostinger.
   * **Solução (se for usar o e-mail):** Inserir `mx1.hostinger.com` (prioridade 5) e `mx2.hostinger.com` (prioridade 10) no DNS da Cloudflare.

---

## 📈 4. ANÁLISE COMPLETA DO TRÁFEGO PAGO (META ADS)

Dados extraídos diretamente do Gerenciador de Anúncios da Meta em 29/09/2026:

* **Período Veiculado:** Quase 7 dias
* **Anúncio Ativo:** `CAMPANHA V1 AD 01` (Foto de baguetes/pães)
* **Total Investido:** **R$ 212,40** (~R$ 30,00/dia)
* **Alcance:** 2.360 pessoas | **Impressões:** 3.092 | **Frequência:** 1,31
* **Resultados de Vendas:** **6 compras no site**
* **Custo por Compra (CPA):** **R$ 35,40**
* **ROAS Geral:** **0,90** (Receita de ~R$ 191,00 vs Gasto de R$ 212,40 → pequeno saldo negativo de ~R$ 21,00, caracterizando **empate técnico**).

### Diagnóstico Técnico do Funil:
| Métrica | Valor Obtido | Média de Mercado | Diagnóstico |
| :--- | :--- | :--- | :--- |
| **CTR no Link** | **5,45%** | 1,5% – 2,5% | **Excepcional.** Criativo é um ímã de cliques. |
| **CPC no Link** | **R$ 1,26** | R$ 1,50 – R$ 3,00 | **Muito Barato.** Tráfego qualificado a baixo custo. |
| **CPM** | **R$ 68,85** | R$ 40 – R$ 80 | Normal para objetivo de Compra na América Latina. |
| **Taxa de Carregamento (Connect Rate)** | **88,69%** (149 views / 168 cliques) | 70% – 80% | **Ultra-Rápida.** Quase zero desistência por lentidão. |
| **Checkouts Iniciados (Initiate Checkout)** | **59 pessoas** (39,6% dos visitantes) | 15% – 25% | **Monstruoso.** 4 de cada 10 pessoas querem comprar! |
| **Conversão do Checkout** | **10,1%** (6 compras / 59 checkouts) | 25% – 40% | ⚠️ **O GARGALO REAL ESTÁ AQUI.** |

### A Verdade Matemática:
* O anúncio é bom, a página de vendas é boa.
* **O gargalo é o Checkout da Hotmart:** De 59 pessoas com intenção real de compra, **53 abandonaram o carrinho** (89,8% de abandono).
* Além disso, vender um produto de \$6.90 seco (sem Order Bump) faz o CPA do Facebook (~R$ 35) empatar com o ticket recebido. O lucro só aparece aumentando o ticket médio e recuperando os abandonos.

---

## 🚀 5. PLANO DE AÇÃO IMEDIATO (PRÓXIMOS PASSOS)

Para transformar essa campanha de ROAS 0,90 (empate) em **ROAS 1.5 a 2.0+ (Lucro Líquido)**:

### Passo 1: Otimizar o Checkout Builder da Hotmart (Máxima Prioridade)
1. **Vídeo Rápido de Demonstração (30-45s) na Lateral do Checkout:**
   * Mostrar o app no celular funcionando ao vivo: o dedo navegando, o Chef IA respondendo em 2s, o cronômetro do Modo Cocina, os livros em alta definição e o diploma 4K.
   * Texto de apoio: *"Todo esto se desbloquea en tu celular inmediatamente tras el pago."*
2. **Order Bump Irresistível (\$3.90 ou \$4.90):**
   * Adicionar no checkout uma caixinha com 1 clique: *"🔥 Oferta Única: Agrega el Recetario Secreto de Pizzas & Focaccias por solo \$3.90"*.
   * Se 30% a 40% comprarem, o ticket médio sobe para \$10–\$11 USD sem gastar 1 centavo a mais no Facebook.
3. **Formulário em 1 Etapa com Campos Mínimos:**
   * Pedir apenas: **Nome Completo e E-mail**. Remover campos de endereço, CPF/documento ou dados desnecessários para reduzir a fricção no celular.
4. **Selo de Garantia & Prova Social no Checkout:**
   * Badge de 7 dias de garantia incondicional e classificação ⭐⭐⭐⭐⭐ 4.9/5 (+1.480 alunas).
5. **Pop-up de Abandono (Exit Intent):**
   * Configurar na Hotmart a janela de saída oferecendo cupom ou bônus para recuperar quem ia fechar a aba.

### Passo 2: Recuperação de Carrinho e Meios Locais (Hotmart)
* Ativar a recuperação automática de vendas por e-mail na Hotmart para quem gerou cupom em dinheiro (OXXO no México, Efecty na Colômbia, PagoEfectivo no Peru) e não pagou.

### Passo 3: Segmentação por País no Meta Ads
* Verificar no Gerenciador da Meta (botão *Desmembramento ➔ Por País*) de onde vieram as 6 compras e pausar países que geraram muitos checkouts mas zero pagamentos compensados.

---

## 🔑 6. ATALHOS E IDENTIFICADORES IMPORTANTES

* **ID do Pixel Meta:** `1648061046252424`
* **Checkout Hotmart:** `https://pay.hotmart.com/N106466253N?checkoutMode=10`
* **Domínio Hostinger:** `https://lacasadelpanartesanal.shop`
* **Pasta da Landing Page (Lovable):** `c:\Users\Mateus Flores\CasaDoPao\let-s-begin-project`
* **Pasta da Plataforma App PWA:** `c:\Users\Mateus Flores\CasaDoPao\la-casa-platform`
* **Arquivo ZIP compilado recente:** `C:\Users\Mateus Flores\Desktop\site-vendas-lovable-oficial.zip`
