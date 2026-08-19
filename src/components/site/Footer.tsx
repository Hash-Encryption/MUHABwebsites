import React from "react";
import { useI18n } from "@/lib/i18n";
import logoImg from "@/assets/muhab-logo.jpg";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export function Footer() {
  const { t, lang } = useI18n();

  return (
    <footer id="contact" className="relative bg-[#051A12] text-white border-t border-[#A6FF2E]/15">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        {/* Full Brand Lockup Placement */}
        <div className="md:col-span-1 space-y-4">
          <a href="#top" className="inline-block group">
            <img
              src={logoImg}
              alt="MUHAB SAUDI WEBMAKERS"
              className="h-14 w-auto object-contain rounded-md"
            />
          </a>
          <p className="text-xs text-[#DADDD6] leading-relaxed">{t("footer.tag")}</p>
          <div className="text-[11px] font-extrabold tracking-[0.2em] text-[#A6FF2E] uppercase">
            WEBSITES. GROWTH. REPUTATION.
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wider text-[#A6FF2E]">
            {t("footer.quick_links")}
          </div>
          <ul className="space-y-2 text-xs text-[#DADDD6]">
            <li>
              <a href="/#companies" className="hover:text-[#A6FF2E] transition-colors">
                {t("nav.companies")}
              </a>
            </li>
            <li>
              <a href="/#portfolio" className="hover:text-[#A6FF2E] transition-colors">
                {t("nav.portfolio")}
              </a>
            </li>
            <li>
              <a href="/#services" className="hover:text-[#A6FF2E] transition-colors">
                {t("nav.services")}
              </a>
            </li>
            <li>
              <a href="/#digital-cards" className="hover:text-[#A6FF2E] transition-colors">
                {t("nfc.title")}
              </a>
            </li>
            <li>
              <a
                href="/companies/taqyeemi"
                className="text-[#A6FF2E] font-semibold hover:underline"
              >
                Taqyeemi Platform →
              </a>
            </li>
          </ul>
        </div>

        {/* Services Outcome */}
        <div className="space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wider text-[#A6FF2E]">
            {t("nav.services")}
          </div>
          <ul className="space-y-2 text-xs text-[#DADDD6]">
            <li>Web Design & Development</li>
            <li>Business Digital Growth</li>
            <li>Online Reputation Management</li>
            <li>SEO & Performance Tuning</li>
            <li>NFC Smart Digital Cards</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wider text-[#A6FF2E]">
            {t("footer.contact")}
          </div>
          <div className="space-y-2.5 text-xs text-[#DADDD6]">
            <p className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-[#A6FF2E]" />
              <span>hello@muhab.sa</span>
            </p>
            <p className="flex items-center gap-2" dir="ltr">
              <Phone className="h-3.5 w-3.5 text-[#A6FF2E]" />
              <span>+966 50 000 0000</span>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[#A6FF2E]" />
              <span>Riyadh · Kingdom of Saudi Arabia</span>
            </p>
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href="#"
              aria-label="Twitter"
              className="h-8 w-8 rounded-full border border-white/20 hover:border-[#A6FF2E] hover:text-[#A6FF2E] flex items-center justify-center transition-colors"
            >
              <Twitter className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="h-8 w-8 rounded-full border border-white/20 hover:border-[#A6FF2E] hover:text-[#A6FF2E] flex items-center justify-center transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="h-8 w-8 rounded-full border border-white/20 hover:border-[#A6FF2E] hover:text-[#A6FF2E] flex items-center justify-center transition-colors"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-[#DADDD6]/60">
        © {new Date().getFullYear()} MUHAB · SAUDI WEBMAKERS. {t("footer.rights")}
      </div>
    </footer>
  );
}
