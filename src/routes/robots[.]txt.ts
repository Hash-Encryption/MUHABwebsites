import { createFileRoute } from "@tanstack/react-router";

const ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: https://muhab.org/sitemap.xml`.trim();

export const Route = createFileRoute("/robots.txt")({
  loader: () => {
    return new Response(ROBOTS_TXT, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=86400",
      },
    });
  },
  component: () => null,
});
