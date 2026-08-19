import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Auto-detect deployment preset for Cloudflare Pages, Cloudflare Workers, and Vercel
const getPreset = () => {
  if (process.env.VERCEL) return "vercel";
  if (process.env.CF_PAGES || process.env.CLOUDFLARE_PAGES) return "cloudflare-pages";
  return process.env.NITRO_PRESET || "cloudflare-module";
};

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    nitro: {
      preset: getPreset(),
    },
  },
});
