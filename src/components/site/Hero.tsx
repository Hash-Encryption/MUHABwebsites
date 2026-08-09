import React, { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, Eye } from "lucide-react";
import PhoneMockupBasic from "@/components/ui/phone-mockups-1";
import { RequestWebsiteDialog } from "./RequestWebsiteDialog";

export function Hero() {
  const { t, lang } = useI18n();
  const [requestModalOpen, setRequestModalOpen] = useState(false);

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="top" className="relative isolate overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 bg-[#051A12] text-white">
      {/* Optimized Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[400px] w-[500px] sm:w-[700px] rounded-full bg-[#A6FF2E]/10 blur-2xl opacity-60 pointer-events-none transform-gpu" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Text Area */}
          <div className="lg:col-span-7 text-center lg:text-left rtl:lg:text-right space-y-6 sm:space-y-8">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#A6FF2E]/30 bg-[#0B2F23]/80 px-4 py-1.5 text-xs font-bold text-[#A6FF2E] shadow-sm tracking-wider uppercase">
              <span className="h-2 w-2 rounded-full bg-[#A6FF2E] animate-pulse" />
              <span>{t("hero.eyebrow")}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              {lang === "ar" ? (
                <span>
                  نصنع مواقع إلكترونية <span className="text-[#A6FF2E]">تنمّي أعمالك.</span>
                </span>
              ) : (
                <span>
                  WE BUILD WEBSITES THAT <span className="text-[#A6FF2E]">GROW BUSINESSES.</span>
                </span>
              )}
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-[#DADDD6] leading-relaxed">
              {t("hero.sub")}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => setRequestModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#A6FF2E] px-8 py-4 text-base font-extrabold text-[#09110D] shadow-xl shadow-[#A6FF2E]/20 hover:bg-[#b5ff4f] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <span>{t("hero.cta_primary")}</span>
              </button>

              <button
                onClick={scrollToPortfolio}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#A6FF2E]/50 px-7 py-4 text-base font-semibold text-white transition-all cursor-pointer group"
              >
                <Eye className="h-5 w-5 text-[#A6FF2E]" />
                <span>{t("hero.cta_secondary")}</span>
              </button>
            </div>

          </div>

          {/* Interactive Phone Mockup Carousel */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative">
              <PhoneMockupBasic />
            </div>
          </div>

        </div>
      </div>

      <RequestWebsiteDialog
        open={requestModalOpen}
        onOpenChange={setRequestModalOpen}
      />
    </section>
  );
}
