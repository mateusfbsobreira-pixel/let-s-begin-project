# Como exportar e publicar no seu domínio

Este projeto é uma página de vendas 100% estática (sem login, sem banco de dados).
Você pode hospedar em qualquer serviço de sites estáticos.

## 1. Baixar o código

No Lovable: conecte o projeto ao GitHub (botão "GitHub" no topo do editor) e
faça `git clone` no seu computador — ou baixe o ZIP do repositório no GitHub.

## 2. Gerar o pacote do site

No computador, dentro da pasta do projeto:

```bash
npm install
npm run build:static
```

Isso gera a pasta **`dist/client/`** com tudo pronto:
`index.html`, CSS, JavaScript e todas as imagens (`dist/client/images/...`).

## 3. Publicar

Envie **o conteúdo da pasta `dist/client/`** para o seu serviço de hospedagem:

- **Cloudflare Pages** — arraste a pasta em pages.cloudflare.com (grátis)
- **Netlify** — arraste a pasta em app.netlify.com/drop (grátis)
- **Vercel** — `npx vercel deploy dist/client --prod`
- **Hospedagem com cPanel** — suba os arquivos para `public_html/` via FTP

Depois, aponte o seu domínio no painel do serviço escolhido (cada um tem um
guia de "domínio personalizado").

## Observações

- O checkout continua sendo o link da Hotmart — funciona em qualquer hospedagem.
- O contador de 14:59 funciona sozinho no navegador do visitante.
- Não há nada de servidor para configurar: é só subir os arquivos.
- A prévia e a publicação na Lovable continuam funcionando normalmente;
  este modo de exportação é um extra e não interfere em nada.
