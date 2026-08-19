import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { RequestWebsiteDialog } from "@/components/site/RequestWebsiteDialog";
import {
  LayoutDashboard,
  BarChart3,
  Star,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import taqyeemiImg from "@/assets/companies/taqyeemi.jpg";

export const Route = createFileRoute("/companies/taqyeemi")({
  head: () => ({
    meta: [
      { title: "Taqyeemi by MUHAB — Customer Experience & Reputation Platform" },
      {
        name: "description",
        content:
          "Turn customer visits into valuable feedback while building your online reputation with Taqyeemi smart NFC & QR review stands and dashboard.",
      },
      { property: "og:title", content: "Taqyeemi by MUHAB" },
      {
        property: "og:description",
        content:
          "NFC & QR feedback collection, review intercept funnel, and real-time dashboard for Saudi businesses.",
      },
    ],
  }),
  component: TaqyeemiPage,
});

function TaqyeemiContent() {
  const { lang } = useI18n();
  const [dialogOpen, setDialogOpen] = useState(false);

  const features = [
    {
      icon: Smartphone,
      titleEn: "Contactless NFC & QR Stands",
      titleAr: "حوامل ذكية بتقنية NFC و QR",
      descEn:
        "Place sleek physical stands at counters and tables. Customers tap with any smartphone or scan to leave instant feedback in seconds.",
      descAr:
        "حوامل طاولة واستقبال عصرية. يمرر العميل هاتفه أو يمسح الرمز لتقديم رأيه خلال ثوانٍ معدودة.",
    },
    {
      icon: Star,
      titleEn: "Smart Review Intercept Funnel",
      titleAr: "مسار ذكي لتوجيه تقييمات Google",
      descEn:
        "Delighted customers are seamlessly guided to leave 5-star Google reviews, while private feedback is collected from unhappy guests before public complaints.",
      descAr:
        "توجيه العملاء الراضين فوراً لتقييم 5 نجوم على Google Maps، واستقبال ملاحظات العملاء غير الراضين بسرية لمعالجتها داخلياً.",
    },
    {
      icon: LayoutDashboard,
      titleEn: "Live Management Dashboard",
      titleAr: "لوحة تحكم إدارية فورية",
      descEn:
        "Monitor customer ratings, sentiment trends, unread feedback, and staff performance in real time across multiple branch locations.",
      descAr:
        "متابعة التقييمات ومؤشرات الرضا ورسائل العملاء وأداء الفروع لحظة بلحظة عبر لوحة تحكم واحدة متكاملة.",
    },
    {
      icon: BarChart3,
      titleEn: "Real-time Analytics & Insights",
      titleAr: "تقارير وتحليلات أداء تفصيلية",
      descEn:
        "Gain actionable intelligence on peak customer satisfaction periods, response rates, and recurring service improvements.",
      descAr:
        "استخراج رؤى دقيقة حول أوقات الذروة، سرعة استجابة الفريق، ونقاط التطوير لتحسين تجربة الزائر باستمرار.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#051A12] text-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb & Navigation Strip */}
        <section className="border-b border-[#A6FF2E]/15 bg-[#0B2F23]/60 py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#DADDD6]">
              <Link
                to="/"
                className="hover:text-[#A6FF2E] transition-colors flex items-center gap-1"
              >
                <span>MUHAB</span>
              </Link>
              <span>/</span>
              <span className="text-[#A6FF2E]/80">{lang === "ar" ? "شركاتنا" : "Companies"}</span>
              <span>/</span>
              <span className="text-[#A6FF2E] font-bold">
                {lang === "ar" ? "تقييمي" : "Taqyeemi"}
              </span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[450px] w-[600px] sm:w-[800px] rounded-full bg-[#A6FF2E]/10 blur-3xl opacity-70 pointer-events-none transform-gpu" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Top Back Link */}
            <div className="mb-8">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#A6FF2E] hover:text-white transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 rtl:rotate-180 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
                <span>{lang === "ar" ? "العودة إلى الصفحة الرئيسية" : "Back to MUHAB"}</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Product Value */}
              <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left rtl:lg:text-right">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#A6FF2E]/30 bg-[#0B2F23]/80 px-4 py-1.5 text-xs font-bold text-[#A6FF2E] shadow-sm tracking-wider uppercase">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>
                    {lang === "ar" ? "منتج رقمي من مُهاب" : "MUHAB VENTURE / DIGITAL PRODUCT"}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                  {lang === "ar" ? (
                    <span>
                      حوّل زيارات عملائك إلى{" "}
                      <span className="text-[#A6FF2E]">تقييمات وسمعة قوية.</span>
                    </span>
                  ) : (
                    <span>
                      Turn customer visits into{" "}
                      <span className="text-[#A6FF2E]">valuable feedback.</span>
                    </span>
                  )}
                </h1>

                <p className="text-base sm:text-lg text-[#DADDD6] leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {lang === "ar"
                    ? "تقييمي هو نظام ذكي متكامل يجمع بين حوامل NFC و QR الفيزيائية ولوحة تحكم متطورة، لجمع آراء العملاء وتوجيه التقييمات الإيجابية إلى Google وحماية سمعة منشأتك."
                    : "Taqyeemi bridges physical customer touchpoints with smart cloud management. Collect live feedback, route happy customers to Google Maps, and boost your business reputation effortlessly."}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                  <button
                    onClick={() => setDialogOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#A6FF2E] px-8 py-4 text-sm sm:text-base font-extrabold text-[#09110D] shadow-xl shadow-[#A6FF2E]/20 hover:bg-[#b5ff4f] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>
                      {lang === "ar"
                        ? "طلب نظام تقييمي لمنشأتك ←"
                        : "GET TAQYEEMI FOR YOUR BUSINESS →"}
                    </span>
                  </button>

                  <a
                    href="https://taqyeemi.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#A6FF2E]/40 bg-[#0B2F23] hover:bg-[#082218] hover:border-[#A6FF2E] px-7 py-4 text-sm sm:text-base font-bold text-[#A6FF2E] transition-all cursor-pointer group/ext"
                  >
                    <span>{t("companies.taqyeemi.visit")}</span>
                    <ArrowUpRight className="h-4 w-4 text-[#A6FF2E] group-hover/ext:translate-x-0.5 group-hover/ext:-translate-y-0.5 rtl:group-hover/ext:-translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href="#features-detail"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#A6FF2E]/50 px-6 py-4 text-sm sm:text-base font-semibold text-white transition-all cursor-pointer"
                  >
                    <span>{lang === "ar" ? "استكشف المميزات" : "Explore Features"}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Showcase */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full rounded-3xl overflow-hidden border border-[#A6FF2E]/25 bg-[#0B2F23] shadow-2xl">
                  <img
                    src={taqyeemiImg}
                    alt="Taqyeemi NFC Stand and Management Dashboard Showcase"
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Breakdown */}
        <section id="features-detail" className="scroll-mt-24 py-20 bg-[#F7F5EF] text-[#09110D]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B2F23] text-[#A6FF2E] text-xs font-extrabold uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>{lang === "ar" ? "مميزات النظام" : "CORE CAPABILITIES"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#09110D]">
                {lang === "ar"
                  ? "كل ما تحتاجه لإدارة تجربة العملاء وسمعة منشأتك"
                  : "Everything You Need to Master Customer Sentiment"}
              </h2>
              <p className="text-[#09110D]/75 text-base sm:text-lg leading-relaxed">
                {lang === "ar"
                  ? "صُمم تقييمي خصيصاً ليلائم طبيعة المطاعم، المقاهي، العيادات، والمتاجر في السوق السعودي."
                  : "Engineered specifically for restaurants, cafes, clinics, and retail stores in the Saudi market."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-3xl border border-[#0B2F23]/15 bg-white p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="h-14 w-14 rounded-2xl bg-[#0B2F23] text-[#A6FF2E] flex items-center justify-center shadow-md">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#09110D]">
                        {lang === "ar" ? item.titleAr : item.titleEn}
                      </h3>
                      <p className="text-sm sm:text-base text-[#09110D]/75 leading-relaxed">
                        {lang === "ar" ? item.descAr : item.descEn}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#0B2F23]/10 flex items-center gap-2 text-xs font-bold text-[#0B2F23]">
                      <CheckCircle2 className="h-4 w-4 text-[#34A853]" />
                      <span>{lang === "ar" ? "جاهز ومفعّل فوراً" : "Ready to Deploy"}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA Box */}
            <div className="mt-16 rounded-3xl bg-[#0B2F23] text-white p-8 sm:p-12 lg:p-16 border border-[#A6FF2E]/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
                  {lang === "ar"
                    ? "هل أنت مستعد لمضاعفة تقييماتك الإيجابية؟"
                    : "Ready to Accelerate Your 5-Star Reputation?"}
                </h3>
                <p className="text-[#DADDD6] text-sm sm:text-base leading-relaxed">
                  {lang === "ar"
                    ? "تواصل مع فريق مُهاب للحصول على حوامل تقييمي وتفعيل لوحة التحكم لفروعك اليوم."
                    : "Contact the MUHAB team to order your branded Taqyeemi stands and deploy the dashboard for your business."}
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
                  <button
                    onClick={() => setDialogOpen(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#A6FF2E] px-8 py-4 text-sm font-extrabold text-[#09110D] hover:bg-[#b5ff4f] transition-all cursor-pointer shadow-lg"
                  >
                    <span>{lang === "ar" ? "ابدأ مع تقييمي الآن" : "Deploy Taqyeemi Now"}</span>
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </button>
                  <a
                    href="https://taqyeemi.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#A6FF2E]/40 bg-white/5 hover:bg-white/10 hover:border-[#A6FF2E] px-7 py-4 text-sm font-bold text-[#A6FF2E] transition-all cursor-pointer group/ext"
                  >
                    <span>{t("companies.taqyeemi.visit")}</span>
                    <ArrowUpRight className="h-4 w-4 text-[#A6FF2E] group-hover/ext:translate-x-0.5 group-hover/ext:-translate-y-0.5 rtl:group-hover/ext:-translate-x-0.5 transition-transform" />
                  </a>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent hover:bg-white/5 px-6 py-4 text-sm font-semibold text-white transition-all cursor-pointer"
                  >
                    <span>{lang === "ar" ? "الرجوع لخدمات مُهاب" : "Back to MUHAB Services"}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <RequestWebsiteDialog open={dialogOpen} onOpenChange={setDialogOpen} defaultCategory="saas" />
    </div>
  );
}

function TaqyeemiPage() {
  return (
    <I18nProvider>
      <TaqyeemiContent />
    </I18nProvider>
  );
}
