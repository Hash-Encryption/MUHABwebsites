import React from "react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import {
  QrCode,
  LayoutDashboard,
  BarChart3,
  Star,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  Clock,
  Smartphone,
  Bell,
  Coins,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import taqyeemiImg from "@/assets/companies/taqyeemi.jpg";

export function OurCompanies() {
  const { t, lang } = useI18n();

  const taqyeemiCapabilities = [
    {
      icon: QrCode,
      text: t("companies.taqyeemi.cap1"),
    },
    {
      icon: LayoutDashboard,
      text: t("companies.taqyeemi.cap2"),
    },
    {
      icon: BarChart3,
      text: t("companies.taqyeemi.cap3"),
    },
    {
      icon: Star,
      text: t("companies.taqyeemi.cap4"),
    },
  ];

  return (
    <section
      id="companies"
      className="scroll-mt-20 py-20 sm:py-28 lg:py-32 bg-white text-[#09110D] relative overflow-hidden"
    >
      {/* Background Subtle Accent Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0B2F23_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Intro */}
        <div className="max-w-3xl mb-14 sm:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2F23] text-[#A6FF2E] text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t("companies.eyebrow")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#09110D] leading-[1.15]">
            <span className="block">{t("companies.title_line1")}</span>
            <span className="block text-[#0B2F23]">{t("companies.title_line2")}</span>
          </h2>

          <p className="text-[#09110D]/75 text-base sm:text-lg leading-relaxed max-w-2xl">
            {t("companies.sub")}
          </p>
        </div>

        <div className="space-y-10 sm:space-y-12">
          {/* ─────────────────────────────────────────
              01 / TAQYEEMI — PRIMARY SHOWCASE
          ───────────────────────────────────────── */}
          <div className="group relative rounded-3xl sm:rounded-[32px] border border-[#0B2F23]/10 bg-[#FAF9F5] p-6 sm:p-10 lg:p-12 shadow-sm hover:shadow-2xl hover:border-[#0B2F23]/25 transition-all duration-300 overflow-hidden">
            {/* Subtle glow accent on hover */}
            <div className="absolute -end-20 -top-20 h-64 w-64 rounded-full bg-[#A6FF2E]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Copy / Capabilities / CTA (Desktop Left 42% / Mobile Top) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-7 order-1">
                {/* Product Eyebrow & Category */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-extrabold tracking-widest text-[#0B2F23]/60 uppercase">
                      {t("companies.taqyeemi.badge")}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[#0B2F23]/30" />
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2F23] bg-[#0B2F23]/5 px-2.5 py-0.5 rounded-full">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#34A853]" />
                      <span>{lang === "ar" ? "منتج مباشر" : "Live Product"}</span>
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#09110D]">
                    {t("companies.taqyeemi.name")}
                  </h3>

                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B2F23]">
                    {t("companies.taqyeemi.category")}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#09110D]/75 leading-relaxed">
                  {t("companies.taqyeemi.desc")}
                </p>

                {/* Capabilities Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {taqyeemiCapabilities.map((cap, idx) => {
                    const Icon = cap.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#0B2F23]/10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                      >
                        <div className="h-7 w-7 rounded-lg bg-[#0B2F23]/5 text-[#0B2F23] flex items-center justify-center shrink-0">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-xs font-semibold text-[#09110D]/90 leading-tight">
                          {cap.text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Links (Primary Internal + Secondary External) */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/companies/taqyeemi"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#0B2F23] px-6 py-3.5 text-xs sm:text-sm font-extrabold text-[#A6FF2E] shadow-md hover:bg-[#051A12] hover:shadow-lg transition-all duration-200 group/btn"
                  >
                    <span>{t("companies.taqyeemi.cta")}</span>
                    <ArrowRight className="h-4 w-4 rtl:rotate-180 transition-transform duration-200 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
                  </Link>

                  <a
                    href="https://taqyeemi.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#0B2F23]/25 bg-white hover:bg-[#0B2F23]/5 px-5 py-3.5 text-xs sm:text-sm font-bold text-[#0B2F23] transition-all duration-200 group/ext"
                  >
                    <span>{t("companies.taqyeemi.visit")}</span>
                    <ArrowUpRight className="h-4 w-4 text-[#0B2F23]/80 group-hover/ext:translate-x-0.5 group-hover/ext:-translate-y-0.5 rtl:group-hover/ext:-translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Taqyeemi Product Visual (Desktop Right 58% / Mobile Middle) */}
              <div className="lg:col-span-7 order-2">
                <Link
                  to="/companies/taqyeemi"
                  className="block relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#0B2F23]/15 bg-[#051A12] shadow-lg shadow-black/10 group-hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={taqyeemiImg}
                    alt="Taqyeemi by Muhab — NFC & QR Feedback Stand and Management Dashboard"
                    className="w-full h-auto object-cover sm:object-contain transition-transform duration-500 ease-out group-hover:scale-[1.025] motion-reduce:transform-none"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Edge Overlay */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl sm:rounded-3xl pointer-events-none" />
                </Link>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────
              02 / POINTPASS — ALMOST READY SHOWCASE
          ───────────────────────────────────────── */}
          <div className="group relative rounded-3xl sm:rounded-[32px] border border-[#0B2F23]/10 bg-[#FAF9F5] p-6 sm:p-10 lg:p-12 shadow-sm hover:shadow-2xl hover:border-[#0B2F23]/25 transition-all duration-300 overflow-hidden">
            {/* Subtle glow accent on hover */}
            <div className="absolute -end-20 -top-20 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Copy Area (Left) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-7 order-1 text-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-extrabold tracking-widest text-[#0B2F23]/60 uppercase">
                      02 / PRODUCT
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[#0B2F23]/30" />
                    <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-700 bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                      <span>{t("companies.status_almost_ready")}</span>
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#09110D]">
                    {t("companies.pointpass.title")}
                  </h3>

                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B2F23]">
                    {t("companies.pointpass.badge")}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#09110D]/75 leading-relaxed">
                  {t("companies.pointpass.desc")}
                </p>

                {/* Capabilities Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#0B2F23]/10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                    <div className="h-7 w-7 rounded-lg bg-[#0B2F23]/5 text-[#0B2F23] flex items-center justify-center shrink-0">
                      <Smartphone className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs font-semibold text-[#09110D]/90 leading-tight">
                      {t("companies.pointpass.tag1")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#0B2F23]/10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                    <div className="h-7 w-7 rounded-lg bg-[#0B2F23]/5 text-[#0B2F23] flex items-center justify-center shrink-0">
                      <Layers className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs font-semibold text-[#09110D]/90 leading-tight">
                      {t("companies.pointpass.tag2")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#0B2F23]/10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                    <div className="h-7 w-7 rounded-lg bg-[#0B2F23]/5 text-[#0B2F23] flex items-center justify-center shrink-0">
                      <Bell className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs font-semibold text-[#09110D]/90 leading-tight">
                      {t("companies.pointpass.tag3")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#0B2F23]/10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                    <div className="h-7 w-7 rounded-lg bg-[#0B2F23]/5 text-[#0B2F23] flex items-center justify-center shrink-0">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs font-semibold text-[#09110D]/90 leading-tight">
                      {lang === "ar" ? "بدون تحميل تطبيق" : "No App Required"}
                    </span>
                  </div>
                </div>

                {/* CTA Links */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/companies/pointpass"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#0B2F23] px-6 py-3.5 text-xs sm:text-sm font-extrabold text-[#A6FF2E] shadow-md hover:bg-[#051A12] hover:shadow-lg transition-all duration-200 group/btn"
                  >
                    <span>{t("companies.pointpass.cta")}</span>
                    <ArrowRight className="h-4 w-4 rtl:rotate-180 transition-transform duration-200 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Visual Card (Right) */}
              <div className="lg:col-span-7 order-2">
                <Link
                  to="/companies/pointpass"
                  className="block relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#0B2F23]/15 bg-[#051A12] p-6 sm:p-8 shadow-lg shadow-black/10 group-hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative z-10 space-y-4">
                    {/* Header in pass */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <div className="text-[11px] font-extrabold tracking-widest text-[#A6FF2E] uppercase">
                          APPLE & GOOGLE WALLET PASS
                        </div>
                        <div className="text-xl sm:text-2xl font-black text-white">
                          PointPass Loyalty Pass
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#A6FF2E]/10 border border-[#A6FF2E]/30 px-3 py-1 rounded-full text-xs font-extrabold text-[#A6FF2E]">
                        <Coins className="h-3.5 w-3.5" />
                        <span>VIP REWARDS</span>
                      </div>
                    </div>

                    {/* Interactive 6-stamp mini preview */}
                    <div className="grid grid-cols-6 gap-2 pt-2">
                      {[1, 2, 3, 4, 5, 6].map((st) => (
                        <div
                          key={st}
                          className={`h-12 rounded-xl flex flex-col items-center justify-center border text-xs font-extrabold ${
                            st <= 5
                              ? "bg-[#A6FF2E] text-[#09110D] border-[#A6FF2E]"
                              : "bg-white/5 text-[#A6FF2E] border-[#A6FF2E]/40 border-dashed animate-pulse"
                          }`}
                        >
                          {st <= 5 ? (
                            <CheckCircle2 className="h-5 w-5 stroke-[2.5]" />
                          ) : (
                            <Star className="h-5 w-5 fill-current" />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Geofence Alert footer */}
                    <div className="flex items-center justify-between pt-2 text-xs text-[#DADDD6]">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#A6FF2E]" />
                        <span>{lang === "ar" ? "إشعار جغرافي تلقائي عند الوصول للفرع" : "Auto geofence push on arrival"}</span>
                      </div>
                      <span className="font-mono text-[#A6FF2E] font-bold">5/6 STAMPS</span>
                    </div>
                  </div>

                  {/* Gradient Glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#051A12] via-[#0B2F23] to-[#051A12] opacity-90 -z-0" />
                </Link>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────
              03 / FOODUS — COMING SOON SHOWCASE
          ───────────────────────────────────────── */}
          <div className="relative rounded-3xl sm:rounded-[32px] border border-[#0B2F23]/10 bg-[#FAF9F5] p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Copy Area (Left) */}
              <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-start">
                {/* Header & Badges */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-extrabold tracking-widest text-[#0B2F23]/60 uppercase">
                      03 / PRODUCT
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[#0B2F23]/30" />
                    <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-wide uppercase text-[#0B2F23] bg-[#A6FF2E]/30 border border-[#0B2F23]/15 px-3 py-1 rounded-full">
                      <Clock className="h-3 w-3 text-[#0B2F23]" />
                      <span>{t("companies.status_coming_soon")}</span>
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#09110D]">
                    {t("companies.wasel.title")}
                  </h3>

                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B2F23]">
                    {t("companies.wasel.badge")}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#09110D]/75 leading-relaxed">
                  {t("companies.wasel.desc")}
                </p>

                {/* Minimal status note */}
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#0B2F23]/70 pt-2">
                  <div className="h-2 w-2 rounded-full bg-[#0B2F23]/50 animate-pulse" />
                  <span>{t("companies.wasel.note")}</span>
                </div>
              </div>

              {/* Abstract Minimal Visual Canvas (Right) */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div className="w-full h-48 sm:h-64 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0B2F23] to-[#051A12] border border-[#0B2F23]/20 p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-inner select-none">
                  {/* Subtle Grid Lines Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(166,255,46,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(166,255,46,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />

                  {/* Oversized Ambient Watermark */}
                  <div className="absolute font-extrabold text-7xl sm:text-9xl text-white/[0.04] tracking-tighter uppercase pointer-events-none select-none">
                    FOODUS
                  </div>

                  {/* Central Elegant Monogram / Abstract Emblem */}
                  <div className="relative z-10 text-center space-y-3">
                    <div className="mx-auto h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-gradient-to-tr from-[#051A12] to-[#0B2F23] border border-[#A6FF2E]/30 flex items-center justify-center shadow-xl shadow-black/40">
                      <Layers className="h-8 w-8 sm:h-10 sm:w-10 text-[#A6FF2E] stroke-[1.5]" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#A6FF2E]">
                        FOODUS · {t("companies.status_coming_soon")}
                      </div>
                      <div className="text-[11px] text-white/50 tracking-wider">
                        RESTAURANT OPERATING SUITE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
