import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { RequestWebsiteDialog } from "@/components/site/RequestWebsiteDialog";
import {
  Smartphone,
  QrCode,
  Star,
  ShieldCheck,
  CheckCircle2,
  LayoutDashboard,
  BarChart3,
  Filter,
  Bell,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  ArrowDown,
  Sparkles,
  ExternalLink,
  Layers,
  Send,
  Eye,
} from "lucide-react";

import taqyeemiImg from "@/assets/companies/taqyeemi.jpg";
import standRealImg from "@/assets/companies/taqyeemi-stand-real.jpg";
import rateScreenImg from "@/assets/companies/taqyeemi-rate-screen.jpg";
import feedbackScreenImg from "@/assets/companies/taqyeemi-feedback-screen.jpg";
import dashboardRealImg from "@/assets/companies/taqyeemi-dashboard-real.png";
import simulatorPreviewImg from "@/assets/companies/taqyeemi-simulator-preview.png";

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

function TaqyeemiPage() {
  const { t, lang } = useI18n();
  const [dialogOpen, setDialogOpen] = useState(false);

  const isRTL = lang === "ar";
  const BackArrow = isRTL ? ArrowRight : ArrowLeft;
  const ForwardArrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-[#070D18] text-white flex flex-col font-sans selection:bg-[#2563EB]/40 selection:text-white">
      <Header />

      <main className="flex-1">
        {/* ─────────────────────────────────────────────────────────────
            TOP BREADCRUMB & CONTEXT STRIP
        ───────────────────────────────────────────────────────────── */}
        <div className="border-b border-white/10 bg-[#050A14]/80 backdrop-blur-sm sticky top-16 sm:top-20 z-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4 text-xs font-semibold">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#A6FF2E] transition-colors group"
            >
              <BackArrow className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" />
              <span>{isRTL ? "العودة إلى مُهاب" : "Back to MUHAB"}</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-extrabold tracking-wider uppercase text-[#A6FF2E] bg-[#A6FF2E]/10 px-2.5 py-0.5 rounded-full border border-[#A6FF2E]/20">
                <Sparkles className="h-3 w-3" />
                <span>{t("taqyeemi.hero.badge")}</span>
              </span>

              <a
                href="https://taqyeemi.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#60A5FA] hover:text-white transition-colors"
              >
                <span>taqyeemi.pages.dev</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            01 / HERO SECTION
        ───────────────────────────────────────────────────────────── */}
        <section className="relative pt-12 sm:pt-20 pb-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#070D18] via-[#0B1528] to-[#070D18]">
          {/* Subtle Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#2563EB]/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-[#A6FF2E]/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Column: Product Positioning & Action CTAs */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-start">
                {/* Brand Tagline & Google 4-Color Accent Line */}
                <div className="inline-flex flex-col items-center lg:items-start gap-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-white/15 text-xs font-extrabold tracking-wider uppercase text-white shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-[#34A853] animate-pulse" />
                    <span>TAQYEEMI · تقييمي</span>
                  </div>
                  {/* Google 4-Color Gradient Bar */}
                  <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]" />
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                  {t("taqyeemi.hero.headline")}
                </h1>

                <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {t("taqyeemi.hero.sub")}
                </p>

                {/* Primary Action Button Cluster */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                  {/* Primary External CTA to Live Taqyeemi */}
                  <a
                    href="https://taqyeemi.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] px-7 py-4 text-sm sm:text-base font-extrabold text-white shadow-lg shadow-[#2563EB]/25 hover:shadow-xl hover:shadow-[#2563EB]/40 transition-all cursor-pointer group/ext"
                  >
                    <span>{t("taqyeemi.hero.cta_visit")}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/ext:translate-x-0.5 group-hover/ext:-translate-y-0.5 rtl:group-hover/ext:-translate-x-0.5" />
                  </a>

                  {/* Secondary Scroll CTA */}
                  <a
                    href="#how-it-works"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 px-6 py-4 text-sm sm:text-base font-semibold text-[#E2E8F0] transition-all cursor-pointer"
                  >
                    <span>{t("taqyeemi.hero.cta_how")}</span>
                  </a>

                  {/* Inquiry Dialog CTA */}
                  <button
                    onClick={() => setDialogOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#A6FF2E]/30 bg-[#A6FF2E]/10 hover:bg-[#A6FF2E]/20 px-6 py-4 text-sm sm:text-base font-bold text-[#A6FF2E] transition-all cursor-pointer"
                  >
                    <span>{isRTL ? "طلب النظام لمنشأتك" : "Request Access"}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Hero Showcase Visual */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full rounded-3xl overflow-hidden border border-white/15 bg-[#0B1528] shadow-2xl shadow-black/60 group">
                  <img
                    src={taqyeemiImg}
                    alt="Taqyeemi Physical Stand and Dashboard Overview"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-3xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            02 / HOW TAQYEEMI WORKS (Step-by-Step Architecture)
        ───────────────────────────────────────────────────────────── */}
        <section
          id="how-it-works"
          className="scroll-mt-20 py-20 sm:py-28 bg-[#0B1220] border-t border-white/10 relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] text-[#60A5FA] text-xs font-extrabold uppercase tracking-wider border border-white/10">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{t("taqyeemi.flow.eyebrow")}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {t("taqyeemi.flow.title")}
              </h2>

              <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">
                {t("taqyeemi.flow.sub")}
              </p>
            </div>

            {/* 4-Step Architecture Flow Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1: Tap or Scan */}
              <div className="rounded-2xl bg-[#0F172A] border border-white/10 p-6 flex flex-col justify-between space-y-5 hover:border-[#3B82F6]/50 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-widest text-[#38BDF8] uppercase">
                      {t("taqyeemi.flow.step1_num")}
                    </span>
                    <div className="h-9 w-9 rounded-xl bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center">
                      <QrCode className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {t("taqyeemi.flow.step1_title")}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {t("taqyeemi.flow.step1_desc")}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-[#64748B]">
                  <CheckCircle2 className="h-4 w-4 text-[#34A853]" />
                  <span>{isRTL ? "بدون تحميل تطبيقات" : "Zero App Downloads"}</span>
                </div>
              </div>

              {/* Step 2: Rate Experience */}
              <div className="rounded-2xl bg-[#0F172A] border border-white/10 p-6 flex flex-col justify-between space-y-5 hover:border-[#3B82F6]/50 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-widest text-[#FBBF24] uppercase">
                      {t("taqyeemi.flow.step2_num")}
                    </span>
                    <div className="h-9 w-9 rounded-xl bg-[#FBBF24]/10 text-[#FBBF24] flex items-center justify-center">
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {t("taqyeemi.flow.step2_title")}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {t("taqyeemi.flow.step2_desc")}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-[#64748B]">
                  <CheckCircle2 className="h-4 w-4 text-[#34A853]" />
                  <span>{isRTL ? "تقييم سريع بلمسة واحدة" : "Quick 1–5 Star Rating"}</span>
                </div>
              </div>

              {/* Step 3: Intelligent Split */}
              <div className="rounded-2xl bg-[#0F172A] border border-[#2563EB]/30 p-6 flex flex-col justify-between space-y-5 shadow-lg shadow-[#2563EB]/10 hover:border-[#2563EB] transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-widest text-[#60A5FA] uppercase">
                      {t("taqyeemi.flow.step3_num")}
                    </span>
                    <div className="h-9 w-9 rounded-xl bg-[#2563EB]/20 text-[#60A5FA] flex items-center justify-center">
                      <Layers className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {isRTL ? "توجيه ذكي ومخصص" : "Smart Routing Split"}
                  </h3>
                  <div className="space-y-2 text-xs text-[#94A3B8] leading-tight">
                    <div className="p-2 rounded-lg bg-[#34A853]/10 border border-[#34A853]/25 text-[#4ADE80]">
                      <span className="font-bold">4–5 ★: </span>
                      {isRTL ? "خرائط Google مباشرة" : "Google Maps profile"}
                    </div>
                    <div className="p-2 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/25 text-[#F87171]">
                      <span className="font-bold">1–3 ★: </span>
                      {isRTL ? "نموذج ملاحظات سري" : "Confidential feedback form"}
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-[#60A5FA]">
                  <ShieldCheck className="h-4 w-4 text-[#60A5FA]" />
                  <span>{isRTL ? "حماية السمعة الرقمية" : "Reputation Intercept"}</span>
                </div>
              </div>

              {/* Step 4: Live Dashboard */}
              <div className="rounded-2xl bg-[#0F172A] border border-white/10 p-6 flex flex-col justify-between space-y-5 hover:border-[#3B82F6]/50 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-widest text-[#A6FF2E] uppercase">
                      {t("taqyeemi.flow.step4_num")}
                    </span>
                    <div className="h-9 w-9 rounded-xl bg-[#A6FF2E]/10 text-[#A6FF2E] flex items-center justify-center">
                      <LayoutDashboard className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {t("taqyeemi.flow.step4_title")}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {t("taqyeemi.flow.step4_desc")}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-[#64748B]">
                  <CheckCircle2 className="h-4 w-4 text-[#34A853]" />
                  <span>{isRTL ? "لوحة متابعة مركزية" : "Centralized Dashboard"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            03 / PHYSICAL EXPERIENCE (Real NFC Stand Photo Showcase)
        ───────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 bg-[#070D18] border-t border-white/10 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Stand Photograph in Studio Lighting Frame */}
              <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
                <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-white/15 bg-[#0F172A] shadow-2xl shadow-black/80 group">
                  <img
                    src={standRealImg}
                    alt="Physical Google Review NFC and QR Acrylic Stand"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* Subtle Card Glow */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
                </div>
              </div>

              {/* Stand Explanatory Copy & Key Physical Specs */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] text-[#60A5FA] text-xs font-extrabold uppercase tracking-wider border border-white/10">
                  <Smartphone className="h-3.5 w-3.5" />
                  <span>{t("taqyeemi.stand.eyebrow")}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {t("taqyeemi.stand.title")}
                </h2>

                <p className="text-[#94A3B8] text-base leading-relaxed">
                  {t("taqyeemi.stand.desc")}
                </p>

                {/* 4 Feature Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {[
                    { text: t("taqyeemi.stand.feat1"), icon: Smartphone },
                    { text: t("taqyeemi.stand.feat2"), icon: QrCode },
                    { text: t("taqyeemi.stand.feat3"), icon: ShieldCheck },
                    { text: t("taqyeemi.stand.feat4"), icon: Sparkles },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0F172A] border border-white/10 shadow-sm"
                      >
                        <div className="h-8 w-8 rounded-lg bg-[#2563EB]/15 text-[#60A5FA] flex items-center justify-center shrink-0">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-white">
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            04 / DASHBOARD SHOWCASE (Real app-taqyeemi.pages.dev UI)
        ───────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 bg-[#0A101D] border-t border-white/10 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Dashboard Copy & Confirmed Features */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] text-[#A6FF2E] text-xs font-extrabold uppercase tracking-wider border border-white/10">
                  <LayoutDashboard className="h-3.5 w-3.5" />
                  <span>{t("taqyeemi.dash.eyebrow")}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {t("taqyeemi.dash.title")}
                </h2>

                <p className="text-[#94A3B8] text-base leading-relaxed">
                  {t("taqyeemi.dash.desc")}
                </p>

                {/* 6 Confirmed Dashboard Features */}
                <div className="space-y-3 pt-2">
                  {[
                    { text: t("taqyeemi.dash.feat1"), icon: MessageSquare },
                    { text: t("taqyeemi.dash.feat2"), icon: Star },
                    { text: t("taqyeemi.dash.feat3"), icon: Bell },
                    { text: t("taqyeemi.dash.feat4"), icon: Filter },
                    { text: t("taqyeemi.dash.feat5"), icon: CheckCircle2 },
                    { text: t("taqyeemi.dash.feat6"), icon: ExternalLink },
                  ].map((feat, idx) => {
                    const Icon = feat.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#E2E8F0]"
                      >
                        <div className="h-6 w-6 rounded-md bg-[#2563EB]/15 text-[#60A5FA] flex items-center justify-center shrink-0">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <span>{feat.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Real Dashboard Screenshot in Dark Tablet / Device Mockup */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-md rounded-[32px] overflow-hidden border-2 border-white/20 bg-[#0F172A] shadow-2xl shadow-black/80 p-2 sm:p-3 group">
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#070D18]">
                    {/* Device Header Bar */}
                    <div className="h-6 bg-[#0F172A] flex items-center justify-center gap-1.5 border-b border-white/5">
                      <div className="h-2 w-12 rounded-full bg-white/20" />
                    </div>
                    <div className="max-h-[380px] overflow-hidden relative">
                      <img
                        src={dashboardRealImg}
                        alt="Real Taqyeemi Management Dashboard UI"
                        className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      {/* Subtle bottom fade to keep focus on top stats & filters */}
                      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070D18] via-[#070D18]/80 to-transparent pointer-events-none" />
                    </div>
                  </div>
                  {/* Subtle Badge */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-[#050A14]/90 backdrop-blur-md px-4 py-1.5 text-[11px] font-bold text-[#60A5FA] border border-white/15 shadow-md flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#34A853]" />
                    <span>app-taqyeemi.pages.dev</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            05 / REAL LIVE SIMULATOR (Try The Customer Experience)
        ───────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 bg-[#070D18] border-t border-white/10 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="rounded-3xl bg-gradient-to-br from-[#0B1528] via-[#0F172A] to-[#0B1528] border border-[#2563EB]/30 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
              {/* Background Accent Glow */}
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#2563EB]/20 blur-3xl rounded-full pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] text-[#FBBF24] text-xs font-extrabold uppercase tracking-wider border border-white/10">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <span>{t("taqyeemi.sim.eyebrow")}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                    {t("taqyeemi.sim.title")}
                  </h2>

                  <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">
                    {t("taqyeemi.sim.desc")}
                  </p>

                  {/* Simulator External CTA */}
                  <div className="pt-2">
                    <a
                      href="https://taqyeemi.pages.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] px-8 py-4 text-sm sm:text-base font-extrabold text-white shadow-xl shadow-[#2563EB]/30 transition-all cursor-pointer group/sim"
                    >
                      <span>{t("taqyeemi.sim.cta")}</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/sim:translate-x-0.5 group-hover/sim:-translate-y-0.5 rtl:group-hover/sim:-translate-x-0.5" />
                    </a>
                  </div>
                </div>

                {/* Simulator Live Visual Preview */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full rounded-2xl overflow-hidden border border-white/20 bg-[#070D18] shadow-xl group">
                    <img
                      src={simulatorPreviewImg}
                      alt="Taqyeemi Interactive Funnel Simulator Section Preview"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            06 / CUSTOMER JOURNEY (Side-by-Side Product Story)
        ───────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 bg-[#0B1220] border-t border-white/10 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] text-[#60A5FA] text-xs font-extrabold uppercase tracking-wider border border-white/10">
                <Layers className="h-3.5 w-3.5" />
                <span>{t("taqyeemi.story.eyebrow")}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {t("taqyeemi.story.title")}
              </h2>
            </div>

            {/* Side-by-Side Product Story Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Path 1: 4-5 Stars Public Review Acceleration */}
              <div className="rounded-3xl bg-[#0F172A] border border-[#34A853]/30 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl shadow-black/40">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold tracking-wider text-[#34A853] bg-[#34A853]/10 px-3 py-1 rounded-full border border-[#34A853]/20">
                      {t("taqyeemi.story.pos_label")}
                    </span>
                    <div className="flex text-[#FBBF24]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {t("taqyeemi.story.pos_title")}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {t("taqyeemi.story.pos_desc")}
                  </p>
                </div>

                {/* Real Rating Screen Screenshot */}
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-black p-1 shadow-lg max-w-xs mx-auto">
                  <img
                    src={rateScreenImg}
                    alt="Real Customer Rating Screen Modal"
                    className="w-full h-auto object-contain rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Path 2: 1-3 Stars Confidential Private Feedback */}
              <div className="rounded-3xl bg-[#0F172A] border border-[#EF4444]/30 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl shadow-black/40">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold tracking-wider text-[#EF4444] bg-[#EF4444]/10 px-3 py-1 rounded-full border border-[#EF4444]/20">
                      {t("taqyeemi.story.neg_label")}
                    </span>
                    <div className="flex text-[#EF4444]">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {t("taqyeemi.story.neg_title")}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {t("taqyeemi.story.neg_desc")}
                  </p>
                </div>

                {/* Real Private Feedback Screenshot */}
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-black p-1 shadow-lg max-w-xs mx-auto">
                  <img
                    src={feedbackScreenImg}
                    alt="Real Private Feedback Interface Modal"
                    className="w-full h-auto object-contain rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            07 / BUSINESS BENEFITS (3 Focused Value Blocks)
        ───────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 bg-[#070D18] border-t border-white/10 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] text-[#A6FF2E] text-xs font-extrabold uppercase tracking-wider border border-white/10">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>{t("taqyeemi.benefits.eyebrow")}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {t("taqyeemi.benefits.title")}
              </h2>
            </div>

            {/* 3 Value Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="rounded-3xl bg-[#0F172A] border border-white/10 p-8 space-y-4 hover:border-[#2563EB] transition-all duration-300">
                <div className="h-12 w-12 rounded-2xl bg-[#2563EB]/15 text-[#60A5FA] flex items-center justify-center">
                  <Star className="h-6 w-6 fill-current" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t("taqyeemi.benefits.b1_title")}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {t("taqyeemi.benefits.b1_desc")}
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="rounded-3xl bg-[#0F172A] border border-white/10 p-8 space-y-4 hover:border-[#EF4444] transition-all duration-300">
                <div className="h-12 w-12 rounded-2xl bg-[#EF4444]/15 text-[#F87171] flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t("taqyeemi.benefits.b2_title")}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {t("taqyeemi.benefits.b2_desc")}
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="rounded-3xl bg-[#0F172A] border border-white/10 p-8 space-y-4 hover:border-[#A6FF2E] transition-all duration-300">
                <div className="h-12 w-12 rounded-2xl bg-[#A6FF2E]/15 text-[#A6FF2E] flex items-center justify-center">
                  <LayoutDashboard className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t("taqyeemi.benefits.b3_title")}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {t("taqyeemi.benefits.b3_desc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            08 / BUILT BY MUHAB (Agency Capabilities Section)
        ───────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 bg-[#051A12] text-white border-t border-[#A6FF2E]/20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2F23] text-[#A6FF2E] text-xs font-extrabold uppercase tracking-wider border border-[#A6FF2E]/30 shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{t("taqyeemi.muhab.eyebrow")}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {t("taqyeemi.muhab.title")}
              </h2>

              <p className="text-base sm:text-lg text-[#DADDD6] leading-relaxed">
                {t("taqyeemi.muhab.desc")}
              </p>

              <div className="pt-4">
                <button
                  onClick={() => setDialogOpen(true)}
                  className="inline-flex items-center gap-3 rounded-full bg-[#A6FF2E] px-8 py-4 text-sm sm:text-base font-extrabold text-[#09110D] shadow-xl shadow-[#A6FF2E]/20 hover:bg-[#b5ff4f] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>{t("taqyeemi.muhab.cta")}</span>
                  <ForwardArrow className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            09 / FINAL TAQYEEMI CTA & CONVERSION STRIP
        ───────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 bg-[#070D18] border-t border-white/10 relative overflow-hidden text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                {t("taqyeemi.final.title")}
              </h2>
              <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
                {t("taqyeemi.final.sub")}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              {/* Visit Taqyeemi External Button */}
              <a
                href="https://taqyeemi.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] px-8 py-4 text-sm sm:text-base font-extrabold text-white shadow-xl shadow-[#2563EB]/25 transition-all cursor-pointer group/cta"
              >
                <span>{t("companies.taqyeemi.visit")}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 rtl:group-hover/cta:-translate-x-0.5" />
              </a>

              {/* Deploy / Request Dialog */}
              <button
                onClick={() => setDialogOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 hover:bg-white/10 px-7 py-4 text-sm sm:text-base font-bold text-white transition-all cursor-pointer"
              >
                <span>{isRTL ? "طلب النظام لمنشأتك" : "Deploy for Your Business"}</span>
              </button>

              {/* Back to Muhab Home */}
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent hover:bg-white/5 px-6 py-4 text-sm sm:text-base font-medium text-[#94A3B8] hover:text-white transition-all"
              >
                <BackArrow className="h-4 w-4" />
                <span>{isRTL ? "الرجوع لخدمات مُهاب" : "Back to MUHAB Services"}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <RequestWebsiteDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        defaultService="taqyeemi"
      />
    </div>
  );
}
