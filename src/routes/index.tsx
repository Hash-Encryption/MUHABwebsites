import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { OurCompanies } from "@/components/site/OurCompanies";
import { Footer } from "@/components/site/Footer";
import gotchaImg from "@/assets/gotcha-fresh-tea.png";
import alkhalImg from "@/assets/alkhal-aldimashki.png";
import uenoImg from "@/assets/ueno-saryo.png";
import lavoaImg from "@/assets/lavoa.png";
import { RequestWebsiteDialog, type ServicePackageId } from "@/components/site/RequestWebsiteDialog";
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  Globe,
  Star,
  Smartphone,
  Shield,
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
      { title: "مُهاب · صُنّاع المواقع السعودية — مواقع. نمو. سمعة." },
      {
        name: "description",
        content: "نصمم أفضل المواقع المخصصة في السعودية. مواقع وتطبيقات إلكترونية سريعة ومباشرة تزيد مبيعاتك وتعزز سمعتك.",
      },
      { property: "og:title", content: "مُهاب · صُنّاع المواقع السعودية" },
      {
        property: "og:description",
        content:
          "نصمم أفضل المواقع المخصصة في السعودية. مواقع وتطبيقات إلكترونية سريعة ومباشرة تزيد مبيعاتك.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function HomeContent() {
  const { t, lang } = useI18n();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServicePackageId | "">("");
  const [activeFilter, setActiveFilter] = useState("all");

  const openServiceDialog = (srvId?: ServicePackageId | "") => {
    setSelectedService(srvId || "");
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
      image: gotchaImg,
      outcomeEn: "Live Website · Interactive Menu & Orders",
      outcomeAr: "موقع مباشر · قائمة تفاعلية وطلبات واتساب",
      descEn:
        "Vibrant, mobile-optimized online store & interactive menu for Gotcha Fresh Tea in Jeddah.",
      descAr: "متجر إلكتروني وقائمة تفاعلية سريعة لعلامة جوتشا فريش تي بجدة تتيح تصفح المشروبات والطلب مباشرة.",
    },
    {
      id: "damascene-syrian",
      titleEn: "Alkhal Aldimashki",
      titleAr: "مطعم الخال الدمشقي",
      categoryEn: "Heritage Dining & Menu",
      categoryAr: "مطعم مأكولات عريقة",
      filter: "corporate",
      liveUrl: "https://damascene.vercel.app/#cat-chicken-shawarma",
      image: alkhalImg,
      outcomeEn: "Live Website · Fast Menu & Ordering",
      outcomeAr: "موقع مباشر · قائمة طعام سريعة وطلب عبر الواتساب",
      descEn:
        "Alkhal aldimashki restaurant platform featuring authentic heritage recipes, shawarma catalog, and WhatsApp ordering.",
      descAr: "منصة طعام متجاوبة تعرض أشهر الأطباق وقوائم الأسعار مع إمكانية توجيه الطلبات للفرع فوراً عبر الواتساب.",
    },
    {
      id: "ueno-saryo",
      titleEn: "Ueno Saryo Teahouse",
      titleAr: "مقهى أوينو ساريو",
      categoryEn: "Specialty Culinary & Teahouse",
      categoryAr: "مقهى وتجربة شاي مختص",
      filter: "saas",
      liveUrl: "https://ueno-saryo.vercel.app/",
      image: uenoImg,
      outcomeEn: "Live Website · Clean Interface",
      outcomeAr: "موقع مباشر · واجهة راقية وسريعة للمقهى",
      descEn:
        "Sophisticated teahouse web experience crafted with minimalistic aesthetic and smooth navigation.",
      descAr: "موقع تعريفي هادئ وسريع لمقهى الشاي المختص يعرض الأصناف والموقع وأوقات العمل بوضوح.",
    },
    {
      id: "lavoa-lounge",
      titleEn: "Lavoa Night Lounge & Café",
      titleAr: "لاونج ومقهى لافوا",
      categoryEn: "Night Lounge & Café",
      categoryAr: "لاونج ومقهى ومشروبات",
      filter: "saas",
      liveUrl: "https://lavoa.hgendi3.workers.dev/",
      image: lavoaImg,
      outcomeEn: "Live Lounge Platform · Edge Speed",
      outcomeAr: "منصة لاونج مباشرة · سرعة استجابة فائقة",
      descEn:
        "Refined night lounge & café experience crafted with dark ambiance, specialty menu, and fast online ordering.",
      descAr:
        "منصة رقمية للاونج والمقهى تعرض قائمة المشروبات والمأكولات مع سرعة تصفح عالية وربط مباشر بالطلب.",
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
      titleAr: "تصميم المواقع المخصصة",
      descEn:
        "Modern websites designed around your brand to maximize conversion and sales.",
      descAr: "تصميم واجهات احترافية ومريحة تعكس هوية علامتك وتسهل على العميل الوصول لما يريد والطلب فوراً.",
      icon: Globe,
    },
    {
      id: "web-dev",
      title: "WEB DEVELOPMENT",
      titleAr: "برمجة وتطوير المواقع",
      descEn: "Fast, scalable, responsive websites built with state-of-the-art web technology.",
      descAr: "برمجة سريعة ومتوافقة 100% مع أجهزة الجوال لضمان تحميل فوري وتجربة استخدام خالية من التعليق.",
      icon: Zap,
    },
    {
      id: "growth",
      title: "BUSINESS GROWTH",
      titleAr: "ربط المبيعات والطلبات",
      descEn: "Digital solutions designed to convert visitor attention into direct sales and inquiries.",
      descAr: "ربط مباشر مع الواتساب ونماذج الطلب الذكية لرفع معدل التحويل وتحويل الزوار لعملاء فعليين.",
      icon: TrendingUp,
    },
    {
      id: "reputation",
      title: "ONLINE REPUTATION",
      titleAr: "إدارة التقييمات والسمعة",
      descEn:
        "Solutions that make it easy for satisfied customers to review your business on Google Maps.",
      descAr: "تسهيل تقييم الزوار لمنشأتك على Google Maps لرفع ترتيبك في نتائج البحث وكسب ثقة العملاء الجدد.",
      icon: Star,
    },
    {
      id: "seo",
      title: "SEO & PERFORMANCE",
      titleAr: "تهيئة محركات البحث (SEO)",
      descEn: "Fast, discoverable websites optimized for Google search rankings and local visibility.",
      descAr: "بنية برمجية مهيأة لمحركات البحث وأرشفة Google لمساعدة منشأتك على تصدر نتائج البحث في مدينتك.",
      icon: Search,
    },
    {
      id: "maintenance",
      title: "SUPPORT & MAINTENANCE",
      titleAr: "الصيانة والدعم المستمر",
      descEn: "Ongoing technical care, security updates, and performance monitoring after launch.",
      descAr: "تحديثات دورية وضمان استقرار الموقع وأمان البيانات مع دعم فني مستمر لمعالجة أي متطلبات جديدة.",
      icon: Headphones,
    },
  ];

  const resultsValue = [
    {
      stat: "100%",
      labelEn: "Mobile Optimization & Responsiveness",
      labelAr: "توافق تام مع الجوال والأجهزة الذكية",
    },
    {
      stat: "< 1s",
      labelEn: "Ultra-Fast Page Response Speed",
      labelAr: "سرعة تحميل واستجابة فورية للواجهات",
    },
    {
      stat: "24/7",
      labelEn: "Continuous Technical Reliability",
      labelAr: "استقرار دائم ودعم فني مستمر لأعمالك",
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
                  {lang === "ar" ? "أعمالنا ومشاريعنا المباشرة" : "OUR CLIENTS · LIVE SHOWCASE"}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#09110D]">
                {lang === "ar" ? "نماذج حية من المواقع التي نفّذناها" : "Our Live Client Websites"}
              </h2>
              <p className="text-[#09110D]/75 text-base sm:text-lg leading-relaxed">
                {lang === "ar"
                  ? "تصفّح نماذج حية ومباشرة من المواقع والتجارب الرقمية التي قمنا ببنائها وتطويرها لعملائنا في السعودية."
                  : "Explore live websites and custom digital platforms engineered by MUHAB Saudi Webmakers."}
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {[
                { id: "all", labelEn: "All Websites", labelAr: "جميع النماذج" },
                { id: "ecommerce", labelEn: "E-Commerce & Retail", labelAr: "المتاجر والتجزئة" },
                {
                  id: "corporate",
                  labelEn: "Restaurants & Dining",
                  labelAr: "المطاعم والضيافة",
                },
                {
                  id: "saas",
                  labelEn: "Specialty Cafes & Lounges",
                  labelAr: "المقاهي واللاونجات",
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
                    <div className="absolute top-4 start-4">
                      <span className="inline-block rounded-full bg-[#0B2F23] px-3.5 py-1 text-xs font-bold text-[#A6FF2E] shadow-md">
                        {lang === "ar" ? project.categoryAr : project.categoryEn}
                      </span>
                    </div>

                    {/* Outcome Badge */}
                    <div className="absolute bottom-4 inset-x-4">
                      <div className="rounded-xl bg-black/75 backdrop-blur-md border border-white/20 p-3 text-white">
                        <div className="text-xs font-bold text-[#A6FF2E] flex items-center gap-1.5">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>{lang === "ar" ? project.outcomeAr : project.outcomeEn}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4 text-start">
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
                        <span>{lang === "ar" ? "معاينة الموقع مباشرة" : "Visit Live Site"}</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>

                      {/* Request Dialog Button */}
                      <button
                        onClick={() => openServiceDialog("")}
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
                <span>{lang === "ar" ? "خدمات مُهاب" : "MUHAB SERVICES"}</span>
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
                    className="group relative rounded-3xl border border-white/10 bg-[#0B2F23] p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#A6FF2E]/40 transition-all duration-300 flex flex-col justify-between text-start"
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
                      onClick={() => openServiceDialog("")}
                      className="mt-6 pt-4 border-t border-white/10 inline-flex items-center gap-2 text-xs font-extrabold text-[#A6FF2E] hover:text-white transition-colors cursor-pointer"
                    >
                      <span>{lang === "ar" ? "طلب هذه الخدمة" : "START THIS SERVICE"}</span>
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
              <div className="lg:col-span-6 space-y-6 text-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A6FF2E]/10 border border-[#A6FF2E]/30 text-[#A6FF2E] text-xs font-extrabold uppercase">
                  <span>{lang === "ar" ? "مواقع. نمو. سمعة." : "WEBSITES. GROWTH. REPUTATION."}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  {lang === "ar"
                    ? "مواقع مصممة لتحقيق نتائج تجارية حقيقية في السوق السعودي"
                    : "Engineered to Deliver Real Business Impact in the Saudi Market"}
                </h2>
                <p className="text-[#DADDD6] text-base leading-relaxed">
                  {lang === "ar"
                    ? "نجمع بين المعايير التقنية الحديثة وفهم سلوك المستهلك المحلي لنبني مواقع تزيد من حجم مبيعاتك وتسهل تواصل العملاء معك مباشرة."
                    : "Muhab combines modern web development standards with deep knowledge of local market preferences to build websites that look premium and convert reliably."}
                </p>

                <div className="pt-2 space-y-3">
                  <div className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-[#A6FF2E] shrink-0" />
                    <span>{lang === "ar" ? "مسارات طلب واضحة ومباشرة عبر الواتساب" : "Direct WhatsApp ordering and lead funnels"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-[#A6FF2E] shrink-0" />
                    <span>{lang === "ar" ? "دعم وتوافق لغوي كامل مع تجربة RTL طبيعية" : "Natural Arabic RTL-first user experience"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-[#A6FF2E] shrink-0" />
                    <span>{lang === "ar" ? "سرعة تحميل فائقة وتوافق 100% مع الجوال" : "Ultra-fast load times and mobile perfection"}</span>
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
      </main>

      <Footer />

      <RequestWebsiteDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        defaultService={selectedService}
      />
    </div>
  );
}

function Home() {
  return <HomeContent />;
}
