import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider } from "../lib/i18n";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#051A12] text-white px-4">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-7xl font-extrabold text-[#A6FF2E]">404</h1>
        <h2 className="text-2xl font-bold">الصفحة غير موجودة</h2>
        <p className="text-sm text-[#DADDD6]">
          الصفحة التي تبحث عنها غير متوفرة أو تم نقلها.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-[#A6FF2E] px-6 py-3 text-sm font-bold text-[#09110D] transition-transform hover:scale-105"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#051A12] text-white px-4">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold tracking-tight text-white">
          حدث خطأ غير متوقع
        </h1>
        <p className="text-sm text-[#DADDD6]">
          يرجى تحديث الصفحة أو العودة إلى الصفحة الرئيسية.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-xl bg-[#A6FF2E] px-5 py-2.5 text-sm font-bold text-[#09110D] transition-transform hover:scale-105"
          >
            إعادة المحاولة
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            الصفحة الرئيسية
          </a>
        </div>
      </div>
    </div>
  );
}

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "موهاب",
  "alternateName": ["Muhab", "Muhabweb", "منصة موهاب"],
  "url": "https://muhab.org",
  "logo": "https://muhab.org/logo.png",
  "description":
    "شركة تقنية واستوديو تطوير برمجيات متخصص في بناء المواقع المخصصة، بطاقات تقييم قوقل الذكية (تقييمي)، وكروت الولاء الرقمية (بوينت باس) في جدة والمملكة العربية السعودية.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jeddah",
    "addressRegion": "Makkah Province",
    "addressCountry": "SA",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 21.5433,
    "longitude": 39.1728,
  },
  "areaServed": [
    { "@type": "City", "name": "Jeddah" },
    { "@type": "Country", "name": "Saudi Arabia" },
  ],
  "brand": [
    {
      "@type": "Brand",
      "name": "تقييمي",
      "alternateName": "Taqyeemi",
      "description":
        "نظام وبطاقات تقييم قوقل الذكية NFC لفرز آراء العملاء وتوجيه التقييمات الإيجابية إلى خرائط Google.",
      "url": "https://muhab.org/companies/taqyeemi",
    },
    {
      "@type": "Brand",
      "name": "بوينت باس",
      "alternateName": "PointPass",
      "description":
        "كروت ولاء وأختام رقمية في Apple Wallet و Google Wallet مع نظام إشعارات جغرافية ومجدولة لشاشة قفل العميل.",
      "url": "https://muhab.org/companies/pointpass",
    },
    {
      "@type": "Brand",
      "name": "فودس",
      "alternateName": "Foodus",
      "description":
        "منصة موحدة لإدارة طلبات المطاعم وعلاقات العملاء ومتابعة العمليات اليومية من شاشة واحدة.",
    },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "خدمات ومنتجات موهاب الرقمية",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "تطوير وبرمجة المواقع المخصصة (Custom Web Development)",
          "description":
            "تصميم وبرمجة مواقع وتطبيقات ويب فائقة السرعة ومتوافقة مع الـ SEO للشركات والمتاجر.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "نظام تقييمي لإدارة تقييمات Google (Taqyeemi)",
          "url": "https://muhab.org/companies/taqyeemi",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "نظام بوينت باس لكروت الولاء الرقمية (PointPass)",
          "url": "https://muhab.org/companies/pointpass",
        },
      },
    ],
  },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "موهاب | تصميم مواقع وبطاقات تقييمي وبوينت باس الذكية في جدة | Muhab" },
      { name: "title", content: "موهاب | تصميم مواقع وبطاقات تقييمي وبوينت باس الذكية في جدة | Muhab" },
      {
        name: "description",
        content:
          "منصة موهاب (Muhab) في جدة — استوديو تطوير مواقع وتطبيقات مخصصة، ومنظومة منتجات ذكية تشمل تقييمي (Taqyeemi) لتقييمات قوقل، وبوينت باس (PointPass) لكروت الولاء في محفظة آبل وجوجل.",
      },
      {
        name: "keywords",
        content:
          "موهاب, Muhab, تصميم مواقع جدة, برمجة مواقع السعودية, تقييمي, Taqyeemi, بوينت باس, PointPass, بطاقات تقييم قوقل, كروت ولاء Apple Wallet, فودس, Foodus, Muhabweb",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "author", content: "MUHAB SAUDI WEBMAKERS" },
      { name: "geo.region", content: "SA-02" },
      { name: "geo.placename", content: "Jeddah" },
      { name: "geo.position", content: "21.543333;39.172778" },
      { name: "ICBM", content: "21.543333, 39.172778" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://muhab.org" },
      { property: "og:site_name", content: "موهاب | Muhab" },
      {
        property: "og:title",
        content: "موهاب — نصمم أفضل المواقع المخصصة والحلول الرقمية في السعودية",
      },
      {
        property: "og:description",
        content:
          "استوديو تطوير برمجيات ومنظومة منتجات ذكية: تقييمي لتقييمات قوقل، وبوينت باس لكروت الولاء الرقمية.",
      },
      { property: "og:image", content: "https://muhab.org/og-image.png" },
      { property: "og:locale", content: "ar_SA" },
      { property: "og:locale:alternate", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "موهاب | Muhab — حلول برمجية ومنتجات رقمية ذكية",
      },
      {
        name: "twitter:description",
        content:
          "تصميم وتطوير المواقع المخصصة، بطاقات تقييم قوقل NFC، وكروت الولاء الرقمية في جدة.",
      },
      { name: "twitter:image", content: "https://muhab.org/og-image.png" },
      { name: "theme-color", content: "#051A12" },
    ],
    links: [
      { rel: "canonical", href: "https://muhab.org" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/favicon.jpg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=Tajawal:wght@400;500;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <Outlet />
      </I18nProvider>
    </QueryClientProvider>
  );
}
