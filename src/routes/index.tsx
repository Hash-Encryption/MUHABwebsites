import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { OurCompanies } from "@/components/site/OurCompanies";
import { Footer } from "@/components/site/Footer";
import { RequestWebsiteDialog } from "@/components/site/RequestWebsiteDialog";
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  Globe,
  Star,
  Smartphone,
  Shield,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  Search,
  Headphones,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MUHAB · SAUDI WEBMAKERS — WEBSITES. GROWTH. REPUTATION." },
      {
        name: "description",
        content: "Muhab creates modern digital experiences that help Saudi businesses grow.",
      },
      { property: "og:title", content: "MUHAB · SAUDI WEBMAKERS" },
      {
        property: "og:description",
        content:
          "Websites. Growth. Reputation. High-performance digital solutions for Saudi businesses.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function HomeContent() {
  const { t, lang } = useI18n();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("corporate");
  const [activeFilter, setActiveFilter] = useState("all");

  const openCategoryDialog = (catId: string) => {
    setSelectedCategory(catId);
    setDialogOpen(true);
  };

  const featureBadges = [
    { icon: Smartphone, key: "badge.responsive" as const },
    { icon: Zap, key: "badge.performance" as const },
    { icon: Shield, key: "badge.saudi" as const },
    { icon: TrendingUp, key: "badge.seo" as const },
  ];

  const portfolioProjects = [
    {
      id: "gotcha-fresh-tea",
      titleEn: "Gotcha Fresh Tea — Jeddah",
      titleAr: "جوتشا فريش تي — جدة",
      categoryEn: "Fresh Tea & Beverage",
      categoryAr: "متجر مشروبات وتجزئة",
      filter: "ecommerce",
      liveUrl: "https://gotcha-fresh-tea-jeddah-jwmw.vercel.app",
      image:
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      outcomeEn: "Live Website · Interactive Menu & Orders",
      outcomeAr: "موقع مباشر · قائمة تفاعلية وطلبات",
      descEn:
        "Vibrant, mobile-optimized online store & interactive menu for Gotcha Fresh Tea in Jeddah.",
      descAr: "متجر إلكتروني وقائمة تفاعلية حديثة لعلامة جوتشا فريش تي بجدة.",
    },
    {
      id: "damascene-syrian",
      titleEn: "Damascene Heritage Restaurant",
      titleAr: "مطعم الدمشقي للأطعمة العريقة",
      categoryEn: "Heritage Dining & Menu",
      categoryAr: "مطعم مأكولات عريقة",
      filter: "corporate",
      liveUrl: "https://damascene.vercel.app/#cat-chicken-shawarma",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      outcomeEn: "Live Website · Bilingual Syrian Menu",
      outcomeAr: "موقع مباشر · قائمة طعام ثنائية اللغة",
      descEn:
        "Traditional Damascene restaurant platform featuring authentic heritage recipes, shawarma catalog, and WhatsApp ordering.",
      descAr: "منصة مطعم دمشقي عريق تعرض أشهر الأطباق والقوائم المباشرة مع الربط بالواتساب.",
    },
    {
      id: "ueno-saryo",
      titleEn: "Ueno Saryo Japanese Teahouse",
      titleAr: "مقهى أويانو ساريو الياباني",
      categoryEn: "Japanese Culinary & Teahouse",
      categoryAr: "مقهى وتجربة يابانية",
      filter: "saas",
      liveUrl: "https://ueno-saryo.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80",
      outcomeEn: "Live Website · Zen Japanese Design",
      outcomeAr: "موقع مباشر · تصميم ورقي ياباني",
      descEn:
        "Sophisticated Japanese teahouse web experience crafted with minimalistic aesthetic and smooth navigation.",
      descAr: "تجربة ويب يابانية فاخرة للمقهى مصممة بطابع مينيماليست وأداء سلس.",
    },
    {
      id: "lavoa-boutique",
      titleEn: "Lavoa Luxury E-Commerce",
      titleAr: "متجر لافوا الفاخر للتجزئة",
      categoryEn: "Luxury E-Commerce",
      categoryAr: "متجر إلكتروني فاخر",
      filter: "ecommerce",
      liveUrl: "https://lavoa.hgendi3.workers.dev/",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      outcomeEn: "Live Store · Cloudflare Workers Speed",
      outcomeAr: "متجر مباشر · سرعة استجابة فائقة",
      descEn:
        "High-end retail & boutique store engineered on edge infrastructure for ultra-fast load times and seamless checkout.",
      descAr:
        "متجر إلكتروني فاخر مبني على البنية السحابية لسرعة استجابة استثنائية وتجربة تسوق راقية.",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.filter === activeFilter);

  const servicesOutcome = [
    {
      id: "web-design",
      title: "WEB DESIGN",
      titleAr: "تصميم المواقع",
      descEn:
        "Modern websites designed around the business and its customers to maximize conversion.",
      descAr: "مواقع حديثة مصممة حول هوية عملك وعملائك لتحقيق أعلى معدل تحويل.",
      icon: Globe,
    },
    {
      id: "web-dev",
      title: "WEB DEVELOPMENT",
      titleAr: "تطوير المواقع",
      descEn: "Fast, scalable, responsive websites built with state-of-the-art web technology.",
      descAr: "مواقع فائقة السرعة، قابلة للتوسع، ومتجاوبة تماماً مبنية بأحدث التقنيات.",
      icon: Zap,
    },
    {
      id: "growth",
      title: "BUSINESS GROWTH",
      titleAr: "نمو الأعمال الرقمية",
      descEn: "Digital experiences designed to convert visitor attention into long-term customers.",
      descAr: "تجارب رقمية مصممة لتحويل اهتمام الزوار إلى عملاء دائمين.",
      icon: TrendingUp,
    },
    {
      id: "reputation",
      title: "ONLINE REPUTATION",
      titleAr: "سمعة العلامة التجارية",
      descEn:
        "Solutions that make it easy for happy customers to strengthen your brand's online presence.",
      descAr: "حلول تتيح لعملائك تعزيز سمعة موقعك وحضورك الرقمي بكل سهولة.",
      icon: Star,
    },
    {
      id: "seo",
      title: "SEO & PERFORMANCE",
      titleAr: "تحسين المحركات والأداء",
      descEn: "Fast, discoverable websites optimized for Google search and seamless usability.",
      descAr: "مواقع سريعة ومكتشفة بسهولة ومحسنة تماماً لمحركات البحث وتجربة المستخدم.",
      icon: Search,
    },
    {
      id: "maintenance",
      title: "SUPPORT & MAINTENANCE",
      titleAr: "الدعم والتطوير المستمر",
      descEn: "Ongoing technical care, security updates, and performance monitoring after launch.",
      descAr: "دعم فني مستمر، تحديثات أمان، ومراقبة أداء دورية بعد الإطلاق.",
      icon: Headphones,
    },
  ];

  const resultsValue = [
    {
      stat: "3.2x",
      labelEn: "Average Increase in Customer Inquiries",
      labelAr: "متوسط الزيادة في استفسارات العملاء",
    },
    {
      stat: "99.9%",
      labelEn: "Uptime & High-Speed Performance",
      labelAr: "نسبة استقرار وأداء فائق السرعة",
    },
    {
      stat: "100%",
      labelEn: "Saudi Market Compliance & Localization",
      labelAr: "تطابق وتكيف تام مع السوق السعودي",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#051A12] text-white">
      <Header />

      <main className="flex-1">
        {/* Dark Hero Section (#051A12) */}
        <Hero />

        {/* FEATURE HIGHLIGHT STRIP (Deep Emerald #0B2F23) */}
        <section className="bg-[#0B2F23] border-y border-[#A6FF2E]/20 py-8 relative z-20 shadow-lg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {featureBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-[#051A12]/80 border border-[#A6FF2E]/15 shadow-sm"
                  >
                    <div className="p-2.5 rounded-xl bg-[#A6FF2E]/10 text-[#A6FF2E] shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {t(badge.key)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION: OUR COMPANIES (White / Off-White #FFFFFF) */}
        <OurCompanies />

        {/* SECTION: OUR CLIENTS & LIVE WEBSITES (#portfolio - Subtle Green-Tinted Neutral #EEF3EC) */}
        <section
          id="portfolio"
          className="scroll-mt-24 py-20 sm:py-28 bg-[#EEF3EC] text-[#09110D] border-t border-[#0B2F23]/10"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B2F23] text-[#A6FF2E] text-xs font-extrabold uppercase tracking-wider shadow-sm">
                <Sparkles className="h-4 w-4" />
                <span>
                  {lang === "ar" ? "عملاؤنا ومشاريعنا الحية" : "OUR CLIENTS · LIVE SHOWCASE"}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#09110D]">
                {lang === "ar" ? "أعمالنا والمواقع الحية التي صمّمنا" : "Our Live Client Websites"}
              </h2>
              <p className="text-[#09110D]/75 text-base sm:text-lg leading-relaxed">
                {lang === "ar"
                  ? "تصفّح نماذج حية ومباشرة من المواقع والتجارب الرقمية التي قمنا ببنائها لعملائنا."
                  : "Explore live websites and custom digital platforms engineered by MUHAB Saudi Webmakers."}
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {[
                { id: "all", labelEn: "All Websites", labelAr: "جميع المواقع" },
                { id: "ecommerce", labelEn: "E-Commerce & Retail", labelAr: "المتاجر والتجزئة" },
                {
                  id: "corporate",
                  labelEn: "Restaurants & Corporate",
                  labelAr: "المطاعم والشركات",
                },
                {
                  id: "saas",
                  labelEn: "Specialty & Culinary",
                  labelAr: "المقاهي والتجارب الفاخرة",
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                    activeFilter === tab.id
                      ? "bg-[#0B2F23] text-[#A6FF2E] shadow-md"
                      : "bg-white border border-[#0B2F23]/15 text-[#09110D]/70 hover:bg-[#0B2F23]/10"
                  }`}
                >
                  {lang === "ar" ? tab.labelAr : tab.labelEn}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-3xl border border-[#0B2F23]/15 bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.titleEn}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                      <span className="inline-block rounded-full bg-[#0B2F23] px-3.5 py-1 text-xs font-bold text-[#A6FF2E] shadow-md">
                        {lang === "ar" ? project.categoryAr : project.categoryEn}
                      </span>
                    </div>

                    {/* Outcome Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="rounded-xl bg-black/75 backdrop-blur-md border border-white/20 p-3 text-white">
                        <div className="text-xs font-bold text-[#A6FF2E] flex items-center gap-1.5">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>{lang === "ar" ? project.outcomeAr : project.outcomeEn}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#09110D]">
                      {lang === "ar" ? project.titleAr : project.titleEn}
                    </h3>
                    <p className="text-sm text-[#09110D]/70 leading-relaxed">
                      {lang === "ar" ? project.descAr : project.descEn}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      {/* Live Website Link */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#0B2F23] px-4 py-2 text-xs font-bold text-[#0B2F23] hover:bg-[#0B2F23] hover:text-[#A6FF2E] transition-all"
                      >
                        <span>{lang === "ar" ? "زيارة الموقع المباشر" : "Visit Live Site"}</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>

                      {/* Request Dialog Button */}
                      <button
                        onClick={() => openCategoryDialog(project.filter)}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#0B2F23] px-5 py-2 text-xs font-extrabold text-[#A6FF2E] hover:bg-[#082218] transition-colors cursor-pointer"
                      >
                        <span>
                          {lang === "ar" ? "طلب موقع مماثل ←" : "BUILD SIMILAR PROJECT →"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: SERVICES (#services) */}
        <section
          id="services"
          className="scroll-mt-24 py-20 sm:py-28 bg-[#051A12] text-white border-t border-[#A6FF2E]/15"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B2F23] text-[#A6FF2E] text-xs font-extrabold uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>MUHAB SERVICES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                {t("services.title")}
              </h2>
              <p className="text-[#DADDD6] text-base sm:text-lg leading-relaxed">
                {t("services.sub")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {servicesOutcome.map((srv) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={srv.id}
                    className="group relative rounded-3xl border border-white/10 bg-[#0B2F23] p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#A6FF2E]/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="h-12 w-12 rounded-2xl bg-[#051A12] text-[#A6FF2E] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-extrabold tracking-tight text-white">
                        {lang === "ar" ? srv.titleAr : srv.title}
                      </h3>
                      <p className="text-sm text-[#DADDD6] leading-relaxed">
                        {lang === "ar" ? srv.descAr : srv.descEn}
                      </p>
                    </div>

                    <button
                      onClick={() => openCategoryDialog(srv.id)}
                      className="mt-6 pt-4 border-t border-white/10 inline-flex items-center gap-2 text-xs font-extrabold text-[#A6FF2E] hover:text-white transition-colors cursor-pointer"
                    >
                      <span>START THIS SERVICE</span>
                      <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION: RESULTS / VALUE PROPS (Deep Emerald Dark Surface #0B2F23) */}
        <section
          id="features"
          className="scroll-mt-24 py-20 sm:py-24 bg-[#0B2F23] text-white border-y border-[#A6FF2E]/15"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A6FF2E]/10 border border-[#A6FF2E]/30 text-[#A6FF2E] text-xs font-extrabold uppercase">
                  <span>WEBSITES. GROWTH. REPUTATION.</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Engineered to Deliver Real Business Impact in the Saudi Market
                </h2>
                <p className="text-[#DADDD6] text-base leading-relaxed">
                  Muhab combines modern web development standards with deep knowledge of local
                  market preferences to build websites that look premium and convert reliably.
                </p>

                <div className="pt-2 space-y-3">
                  <div className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-[#A6FF2E] shrink-0" />
                    <span>High-converting architecture & clear call-to-actions</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-[#A6FF2E] shrink-0" />
                    <span>Seamless Arabic & English bilingual support</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-[#A6FF2E] shrink-0" />
                    <span>Ultra-fast load times & mobile perfection</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {resultsValue.map((res, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-[#051A12] border border-[#A6FF2E]/20 p-6 text-center space-y-2"
                  >
                    <div className="text-4xl font-extrabold text-[#A6FF2E]">{res.stat}</div>
                    <p className="text-xs font-semibold text-[#DADDD6]">
                      {lang === "ar" ? res.labelAr : res.labelEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: NFC DIGITAL CARDS (Dark #051A12) */}
        <section
          id="digital-cards"
          className="scroll-mt-24 py-20 sm:py-28 bg-[#051A12] relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#0B2F23] p-8 sm:p-12 lg:p-16 border border-[#A6FF2E]/25 text-white shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A6FF2E] text-[#09110D] text-xs font-extrabold">
                    <CreditCard className="h-4 w-4" />
                    <span>SMART NFC TECHNOLOGY</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                    {t("nfc.title")}
                  </h2>

                  <p className="text-[#DADDD6] text-base sm:text-lg max-w-2xl leading-relaxed">
                    {t("nfc.desc")}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => setDialogOpen(true)}
                      className="inline-flex items-center gap-2 rounded-full bg-[#A6FF2E] px-7 py-3.5 text-sm font-extrabold text-[#09110D] shadow-lg hover:bg-[#b5ff4f] transition-all cursor-pointer"
                    >
                      <span>{t("nfc.cta")}</span>
                      <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center">
                  <div className="relative w-64 h-40 sm:w-72 sm:h-44 rounded-2xl bg-gradient-to-tr from-[#051A12] to-[#0B2F23] border border-[#A6FF2E]/40 shadow-2xl p-5 flex flex-col justify-between transform hover:rotate-2 transition-transform select-none">
                    <div className="flex justify-between items-start">
                      <div className="h-7 w-9 rounded-md bg-[#A6FF2E]" />
                      <CreditCard className="h-6 w-6 text-[#A6FF2E]" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#A6FF2E] uppercase tracking-widest font-extrabold">
                        MUHAB SMART PASS
                      </div>
                      <div className="text-sm font-bold tracking-wide text-white">
                        SAUDI WEBMAKERS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <RequestWebsiteDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        defaultCategory={selectedCategory}
      />
    </div>
  );
}

function Home() {
  return (
    <I18nProvider>
      <HomeContent />
    </I18nProvider>
  );
}
