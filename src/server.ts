import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <!-- Homepage / MUHAB Web & App Development Studio -->
  <url>
    <loc>https://muhab.org/</loc>
    <lastmod>2026-08-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="https://muhab.org/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://muhab.org/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://muhab.org/" />
  </url>

  <!-- Taqyeemi / Google Reviews Management & Smart NFC Stands -->
  <url>
    <loc>https://muhab.org/companies/taqyeemi</loc>
    <lastmod>2026-08-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="https://muhab.org/companies/taqyeemi" />
    <xhtml:link rel="alternate" hreflang="en" href="https://muhab.org/companies/taqyeemi" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://muhab.org/companies/taqyeemi" />
  </url>

  <!-- PointPass / Apple & Google Wallet Digital Loyalty Passes -->
  <url>
    <loc>https://muhab.org/companies/pointpass</loc>
    <lastmod>2026-08-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="https://muhab.org/companies/pointpass" />
    <xhtml:link rel="alternate" hreflang="en" href="https://muhab.org/companies/pointpass" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://muhab.org/companies/pointpass" />
  </url>

</urlset>`.trim();

const ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: https://muhab.org/sitemap.xml`.trim();

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/sitemap.xml") {
        return new Response(SITEMAP_XML, {
          status: 200,
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=86400",
          },
        });
      }
      if (url.pathname === "/robots.txt") {
        return new Response(ROBOTS_TXT, {
          status: 200,
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "cache-control": "public, max-age=86400",
          },
        });
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
