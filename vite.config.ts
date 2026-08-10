import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Adapt Nitro preset based on deployment target (Vercel vs Cloudflare)
const preset = process.env.VERCEL ? "vercel" : (process.env.NITRO_PRESET || "cloudflare-module");

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    nitro: {
      preset,
    },
  },
});
