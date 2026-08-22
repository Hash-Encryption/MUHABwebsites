import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { RequestWebsiteDialog } from "@/components/site/RequestWebsiteDialog";
import {
  CreditCard,
  Smartphone,
  MapPin,
  Bell,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  QrCode,
  Coins,
  MessageCircle,
  Clock,
  Layers,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/companies/pointpass")({
  head: () => ({
    meta: [
      { title: "بوينت باس من مُهاب — كروت الولاء والأختام الرقمية في Apple & Google Wallet" },
      {
        name: "description",
        content:
          "كروت ولاء وأختام رقمية تُحفظ مباشرة في محفظة آبل وجوجل بدون تطبيق، مع ميزة إرسال إشعارات جغرافية ومجدولة لشاشة قفل العميل.",
      },
      { property: "og:title", content: "PointPass by MUHAB — بوينت باس" },
      {
        property: "og:description",
        content: "كروت ولاء وأختام رقمية في Apple Wallet و Google Wallet.",
      },
    ],
  }),
  component: PointPassPage,
});

function PointPassPage() {
  const { t, lang, dir } = useI18n();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeStampCount, setActiveStampCount] = useState(5);

  const isRTL = dir === "rtl" || lang === "ar";
  const BackArrow = isRTL ? ArrowRight : ArrowLeft;
  const ForwardArrow = isRTL ? ArrowLeft : ArrowRight;

  const whatsappUrl =
    "https://wa.me/966500000000?text=" +
    encodeURIComponent(
      lang === "ar"
        ? "مرحباً، أود الاستفسار عن خدمة بوينت باس (PointPass) لكروت الولاء الرقمية في محفظة الجوال."
        : "Hello, I'm interested in PointPass digital loyalty cards for my business."
    );

  return (
    <div className="min-h-screen bg-[#051A12] text-white flex flex-col font-sans selection:bg-[#A6FF2E]/30 selection:text-white">
      <Header />

      <main className="flex-1">
        {/* Top Breadcrumb Header */}
        <div className="border-b border-[#A6FF2E]/15 bg-[#051A12]/90 backdrop-blur-md sticky top-16 sm:top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4 text-xs font-semibold">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#DADDD6] hover:text-[#A6FF2E] transition-colors group"
            >
              <BackArrow className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" />
              <span>{t("pointpass_page.cta_back_home")}</span>
            </Link>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>{t("companies.status_almost_ready")}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#051A12] via-[#0B2F23] to-[#051A12]">
          {/* Ambient Glows */}
          <div className="absolute top-1/4 inset-x-0 mx-auto -translate-y-1/2 w-[700px] h-[450px] bg-[#A6FF2E]/10 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute top-10 end-10 w-[300px] h-[300px] bg-amber-400/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#A6FF2E_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Text Column */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2F23] border border-[#A6FF2E]/30 text-[#A6FF2E] text-xs font-extrabold uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t("pointpass_page.badge")}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                  {t("pointpass_page.hero_title")}
                </h1>

                <p className="text-base sm:text-lg text-[#DADDD6] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {t("pointpass_page.hero_subtitle")}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#A6FF2E] hover:bg-[#b5ff4f] px-8 py-4 text-base font-extrabold text-[#09110D] shadow-xl shadow-[#A6FF2E]/20 transition-all cursor-pointer group/wa"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{t("pointpass_page.cta_join_waitlist")}</span>
                    <ForwardArrow className="w-4 h-4 transition-transform group-hover/wa:translate-x-0.5 rtl:group-hover/wa:-translate-x-0.5" />
                  </a>

                  <button
                    onClick={() => setDialogOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-7 py-4 text-base font-bold text-white transition-all cursor-pointer"
                  >
                    <span>{isRTL ? "حجز نسختك التجريبية" : "Book Pilot Setup"}</span>
                  </button>
                </div>
              </div>

              {/* Right Visual: Interactive Digital Wallet Pass Mockup */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm">
                  {/* Push Notification Floating Card */}
                  <div className="mb-4 rounded-2xl bg-black/80 backdrop-blur-md border border-[#A6FF2E]/30 p-3.5 shadow-2xl animate-in slide-in-from-top-4 duration-500">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-lg bg-[#A6FF2E] flex items-center justify-center text-[#09110D] font-black text-xs">
                          P
                        </div>
                        <span className="text-xs font-bold text-white">PointPass Wallet</span>
                      </div>
                      <span className="text-[10px] text-white/50">{isRTL ? "الآن • بالقرب من الفرع" : "Now • Near Branch"}</span>
                    </div>
                    <p className="text-xs font-medium text-[#DADDD6] leading-snug">
                      {isRTL
                        ? "📍 أهلاً بك! أنت على بُعد 100م من المقهى — استخدم كرتك اليوم واحصل على ختمك السادس مجاناً ☕"
                        : "📍 Welcome! You are 100m away — use your pass today to claim your 6th free coffee ☕"}
                    </p>
                  </div>

                  {/* Apple Wallet Pass Chassis */}
                  <div className="rounded-[28px] overflow-hidden bg-gradient-to-b from-[#121B17] via-[#0B2F23] to-[#051A12] border-2 border-[#A6FF2E]/40 p-5 shadow-2xl shadow-black/80 space-y-4 select-none">
                    {/* Pass Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#A6FF2E]">
                          POINT PASS LOYALTY
                        </div>
                        <div className="text-lg font-black text-white tracking-tight">
                          {isRTL ? "مقهى ومخبز النخبة" : "Elite Specialty Cafe"}
                        </div>
                      </div>
                      <div className="h-9 w-9 rounded-xl bg-[#A6FF2E]/15 border border-[#A6FF2E]/30 flex items-center justify-center text-[#A6FF2E]">
                        <Award className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="flex items-center justify-between text-xs pt-1">
                      <div>
                        <div className="text-[10px] text-white/50 uppercase">{isRTL ? "حامل البطاقة" : "PASS HOLDER"}</div>
                        <div className="font-bold text-white">{isRTL ? "سعود العتيبي" : "Saud Al-Otaibi"}</div>
                      </div>
                      <div className="text-end">
                        <div className="text-[10px] text-white/50 uppercase">{isRTL ? "المستوى" : "TIER"}</div>
                        <div className="font-bold text-[#A6FF2E]">{isRTL ? "عضو ذهبي ★" : "Gold VIP ★"}</div>
                      </div>
                    </div>

                    {/* Interactive 6-Stamp Grid */}
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white">{isRTL ? "بطاقة الأختام (اشترِ 5 والسادسة مجاناً)" : "Stamp Card (5+1 Free)"}</span>
                        <span className="font-mono text-[#A6FF2E] text-xs font-bold">{activeStampCount}/6</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6].map((num) => {
                          const isStamped = num <= activeStampCount;
                          const isReward = num === 6;
                          return (
                            <button
                              key={num}
                              type="button"
                              onClick={() => setActiveStampCount(num === activeStampCount ? num - 1 : num)}
                              className={`h-14 rounded-xl flex flex-col items-center justify-center border transition-all cursor-pointer ${
                                isStamped
                                  ? "bg-[#A6FF2E] border-[#A6FF2E] text-[#09110D] shadow-md shadow-[#A6FF2E]/30 scale-[1.02]"
                                  : isReward
                                  ? "bg-white/5 border-[#A6FF2E]/40 text-[#A6FF2E] border-dashed"
                                  : "bg-white/5 border-white/10 text-white/40"
                              }`}
                              title={`Stamp ${num}`}
                            >
                              {isStamped ? (
                                <CheckCircle2 className="h-6 w-6 stroke-[2.5]" />
                              ) : isReward ? (
                                <Award className="h-6 w-6 animate-pulse" />
                              ) : (
                                <span className="font-mono font-bold text-sm">{num}</span>
                              )}
                              <span className="text-[9px] font-bold uppercase mt-0.5">
                                {isReward ? (isRTL ? "هدية مجانية" : "FREE") : `${isRTL ? "ختم" : "STAMP"} ${num}`}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* QR Code Scan Bar */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <QrCode className="h-8 w-8 text-white/80 p-1 bg-white/10 rounded-lg" />
                        <div>
                          <div className="text-[10px] font-mono text-white/60">ID: PP-784920</div>
                          <div className="text-[9px] text-[#A6FF2E]">{isRTL ? "امسح عند الكاشير" : "Scan at checkout"}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold bg-white/10 px-2 py-1 rounded-md text-white/80">
                        Apple Wallet
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Pass Formats Section */}
        <section className="py-20 sm:py-28 bg-[#0B2F23] border-t border-[#A6FF2E]/15 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#051A12] text-[#A6FF2E] border border-[#A6FF2E]/25 text-xs font-extrabold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>{t("pointpass_page.designs_badge")}</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {t("pointpass_page.designs_title")}
              </h2>
              <p className="text-base text-[#DADDD6] leading-relaxed">
                {t("pointpass_page.designs_subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Stamp Card */}
              <div className="p-8 rounded-3xl border border-white/15 bg-[#051A12] hover:border-[#A6FF2E]/50 transition-all space-y-5 text-start shadow-xl group">
                <div className="w-14 h-14 rounded-2xl bg-[#A6FF2E]/15 text-[#A6FF2E] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <QrCode className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  {t("pointpass_page.card1_title")}
                </h3>
                <p className="text-sm text-[#DADDD6] leading-relaxed">
                  {t("pointpass_page.card1_desc")}
                </p>
              </div>

              {/* Loyalty Points */}
              <div className="p-8 rounded-3xl border border-white/15 bg-[#051A12] hover:border-[#A6FF2E]/50 transition-all space-y-5 text-start shadow-xl group">
                <div className="w-14 h-14 rounded-2xl bg-[#A6FF2E]/15 text-[#A6FF2E] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Coins className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  {t("pointpass_page.card2_title")}
                </h3>
                <p className="text-sm text-[#DADDD6] leading-relaxed">
                  {t("pointpass_page.card2_desc")}
                </p>
              </div>

              {/* Coupons / Vouchers */}
              <div className="p-8 rounded-3xl border border-white/15 bg-[#051A12] hover:border-[#A6FF2E]/50 transition-all space-y-5 text-start shadow-xl group">
                <div className="w-14 h-14 rounded-2xl bg-[#A6FF2E]/15 text-[#A6FF2E] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CreditCard className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  {t("pointpass_page.card3_title")}
                </h3>
                <p className="text-sm text-[#DADDD6] leading-relaxed">
                  {t("pointpass_page.card3_desc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notifications Engine */}
        <section className="py-20 sm:py-28 bg-[#051A12] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B2F23] text-[#A6FF2E] border border-[#A6FF2E]/25 text-xs font-extrabold uppercase tracking-wider">
                <Bell className="w-3.5 h-3.5" />
                <span>{t("pointpass_page.notifications_badge")}</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {t("pointpass_page.notifications_title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 sm:p-10 rounded-3xl border border-white/15 bg-[#0B2F23] space-y-4 text-start shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-[#051A12] text-[#A6FF2E] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">{t("pointpass_page.notif1_title")}</h3>
                <p className="text-sm sm:text-base text-[#DADDD6] leading-relaxed">
                  {t("pointpass_page.notif1_desc")}
                </p>
              </div>

              <div className="p-8 sm:p-10 rounded-3xl border border-white/15 bg-[#0B2F23] space-y-4 text-start shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-[#051A12] text-[#A6FF2E] flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">{t("pointpass_page.notif2_title")}</h3>
                <p className="text-sm sm:text-base text-[#DADDD6] leading-relaxed">
                  {t("pointpass_page.notif2_desc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer vs Business Matrix */}
        <section className="py-20 sm:py-28 bg-[#0B2F23] border-t border-white/10 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {t("pointpass_page.matrix_title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Customer Box */}
              <div className="p-8 sm:p-10 rounded-3xl border border-white/15 bg-[#051A12] space-y-6 text-start shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#A6FF2E]/15 text-[#A6FF2E]">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">{t("pointpass_page.for_customer_title")}</h3>
                </div>
                <ul className="space-y-4 text-sm text-[#DADDD6]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#A6FF2E] shrink-0 mt-0.5" />
                    <span>{t("pointpass_page.for_customer_1")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#A6FF2E] shrink-0 mt-0.5" />
                    <span>{t("pointpass_page.for_customer_2")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#A6FF2E] shrink-0 mt-0.5" />
                    <span>{t("pointpass_page.for_customer_3")}</span>
                  </li>
                </ul>
              </div>

              {/* Business Box */}
              <div className="p-8 sm:p-10 rounded-3xl border border-white/15 bg-[#051A12] space-y-6 text-start shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#A6FF2E]/15 text-[#A6FF2E]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">{t("pointpass_page.for_business_title")}</h3>
                </div>
                <ul className="space-y-4 text-sm text-[#DADDD6]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#A6FF2E] shrink-0 mt-0.5" />
                    <span>{t("pointpass_page.for_business_1")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#A6FF2E] shrink-0 mt-0.5" />
                    <span>{t("pointpass_page.for_business_2")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#A6FF2E] shrink-0 mt-0.5" />
                    <span>{t("pointpass_page.for_business_3")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 sm:py-28 bg-[#051A12] border-t border-[#A6FF2E]/15 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              {t("pointpass_page.bottom_cta_title")}
            </h2>
            <p className="text-base sm:text-lg text-[#DADDD6] leading-relaxed">
              {t("pointpass_page.bottom_cta_subtitle")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#A6FF2E] text-[#09110D] font-extrabold text-base shadow-xl shadow-[#A6FF2E]/20 hover:bg-[#b5ff4f] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t("pointpass_page.bottom_cta_btn")}</span>
                <ForwardArrow className="w-4 h-4" />
              </a>

              <button
                onClick={() => setDialogOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-base transition-all cursor-pointer"
              >
                <span>{isRTL ? "طلب النظام لمنشأتك" : "Request Setup"}</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <RequestWebsiteDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        defaultService="pointpass"
      />
    </div>
  );
}
