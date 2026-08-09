import React, { useState } from "react";
import { Languages, Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import logoImg from "@/assets/muhab-logo.jpg";
import { RequestWebsiteDialog } from "./RequestWebsiteDialog";

export function Header() {
  const { lang, setLang, t } = useI18n();
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
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
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#051A12]/90 border-b border-[#A6FF2E]/15 transition-all">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Official Full MUHAB Logo Placement */}
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); scrollToSection("top"); }}
            className="flex items-center gap-3 shrink-0 group"
          >
            <img
              src={logoImg}
              alt="MUHAB SAUDI WEBMAKERS"
              className="h-10 sm:h-12 w-auto object-contain rounded-md transition-transform group-hover:scale-105"
            />
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium tracking-wide text-[#DADDD6]">
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-[#A6FF2E] transition-colors cursor-pointer"
            >
              {t("nav.features")}
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="hover:text-[#A6FF2E] transition-colors cursor-pointer"
            >
              {t("nav.portfolio")}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-[#A6FF2E] transition-colors cursor-pointer"
            >
              {t("nav.services")}
            </button>
            <button
              onClick={() => scrollToSection("digital-cards")}
              className="hover:text-[#A6FF2E] transition-colors cursor-pointer"
            >
              {t("nfc.title")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#A6FF2E] transition-colors cursor-pointer"
            >
              {t("nav.contact")}
            </button>
          </nav>

          {/* Right Actions: Lang Switcher & Primary Lime CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="group inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white hover:border-[#A6FF2E]/60 transition-colors cursor-pointer"
              aria-label="Toggle language"
            >
              <Languages className="h-3.5 w-3.5 text-[#A6FF2E]" />
              <span className={lang === "en" ? "text-[#A6FF2E] font-bold" : "text-white/80"}>EN</span>
              <span className="opacity-40 text-white">/</span>
              <span className={lang === "ar" ? "text-[#A6FF2E] font-bold" : "text-white/80"} style={{ fontFamily: "var(--font-arabic)" }}>ع</span>
            </button>

            {/* Primary CTA (Lime Background, Dark Text) */}
            <button
              onClick={() => setRequestModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#A6FF2E] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#09110D] shadow-lg shadow-[#A6FF2E]/20 hover:bg-[#b5ff4f] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
            >
              <span>{t("hero.cta_primary")}</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#A6FF2E]/15 bg-[#051A12] px-6 py-6 space-y-4 animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-3 text-sm font-medium text-[#DADDD6]">
              <button onClick={() => scrollToSection("features")} className="text-left rtl:text-right hover:text-[#A6FF2E] cursor-pointer">{t("nav.features")}</button>
              <button onClick={() => scrollToSection("portfolio")} className="text-left rtl:text-right hover:text-[#A6FF2E] cursor-pointer">{t("nav.portfolio")}</button>
              <button onClick={() => scrollToSection("services")} className="text-left rtl:text-right hover:text-[#A6FF2E] cursor-pointer">{t("nav.services")}</button>
              <button onClick={() => scrollToSection("digital-cards")} className="text-left rtl:text-right hover:text-[#A6FF2E] cursor-pointer">{t("nfc.title")}</button>
              <button onClick={() => scrollToSection("contact")} className="text-left rtl:text-right hover:text-[#A6FF2E] cursor-pointer">{t("nav.contact")}</button>
            </nav>
            <div className="pt-2">
              <button
                onClick={() => { setMobileMenuOpen(false); setRequestModalOpen(true); }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#A6FF2E] px-5 py-3 text-sm font-bold text-[#09110D] shadow-md cursor-pointer"
              >
                <span>{t("hero.cta_primary")}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      <RequestWebsiteDialog
        open={requestModalOpen}
        onOpenChange={setRequestModalOpen}
      />
    </>
  );
}
