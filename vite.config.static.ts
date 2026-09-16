// Configuração usada APENAS para exportar o site como arquivos estáticos
// (HTML + CSS + JS + imagens) prontos para qualquer hospedagem.
// Uso: npm run build:static  →  saída em dist/ (pasta "client" + index.html pré-renderizado)
// NÃO é usada pela prévia nem pela publicação na Lovable.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
    },
    pages: [{ path: "/" }],
  },
  nitro: {
    preset: "static",
  },
});
