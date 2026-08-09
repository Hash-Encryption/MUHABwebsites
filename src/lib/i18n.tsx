import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, { en: string; ar: string }>;

const dict: Dict = {
  "brand.name": { en: "MUHAB", ar: "مُهاب" },
  "brand.descriptor": { en: "SAUDI WEBMAKERS", ar: "صُنّاع المواقع السعودية" },
  "brand.tagline": { en: "WEBSITES. GROWTH. REPUTATION.", ar: "مواقع. نمو. سمعة." },

  "nav.services": { en: "Services", ar: "الخدمات" },
  "nav.portfolio": { en: "Our Work", ar: "أعمالنا" },
  "nav.features": { en: "Why Muhab", ar: "لماذا مُهاب" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا" },
  "nav.request": { en: "START YOUR PROJECT →", ar: "ابدأ مشروعك الآن ←" },
  
  "hero.eyebrow": { en: "MUHAB · SAUDI WEBMAKERS", ar: "مُهاب · صُنّاع المواقع السعودية" },
  "hero.title_part1": { en: "WE BUILD WEBSITES THAT ", ar: "نصنع مواقع إلكترونية " },
  "hero.title_part2": { en: "GROW BUSINESSES.", ar: "تنمّي أعمالك." },
  "hero.sub": { en: "Modern websites and digital solutions built to help Saudi businesses attract more customers, strengthen their online presence, and grow.", ar: "مواقع إلكترونية وحلول رقمية حديثة صُممت لمساعدة الشركات السعودية في جذب المزيد من العملاء وتعزيز الحضور الرقمي." },
  "hero.cta_primary": { en: "START YOUR PROJECT →", ar: "ابدأ مشروعك الآن ←" },
  "hero.cta_secondary": { en: "VIEW OUR WORK", ar: "تصفح أعمالنا" },
  
  "badge.responsive": { en: "Mobile Responsiveness", ar: "متجاوب مع جميع الهواتف" },
  "badge.performance": { en: "High-Speed Performance", ar: "أداء فائق السرعة" },
  "badge.saudi": { en: "Saudi Market Optimized", ar: "مُعدّ للسوق السعودي" },
  "badge.seo": { en: "SEO & Growth", ar: "تحسين محركات البحث والنمو" },
  
  "services.title": { en: "Digital Solutions Built for Business Outcomes", ar: "حلول رقمية مصممة للنتائج والنمو" },
  "services.sub": { en: "We don't just build websites. We craft digital experiences designed to convert attention into long-term customer relationships.", ar: "لا نصنع مجرد مواقع، بل نبتكر تجارب رقمية تحول اهتمام الزوار إلى علاقات عملاء مستدامة." },
  
  "modal.title": { en: "Start Your Project with MUHAB", ar: "ابدأ مشروعك مع مُهاب" },
  "modal.desc": { en: "Tell us about your project goals and requirements. Our Saudi Webmakers team will reach out within 24 hours.", ar: "أخبرنا عن أهداف مشروعك ومتطلباته. سيتواصل معك فريق صُنّاع المواقع خلال 24 ساعة." },
  "modal.category": { en: "Select Project Type", ar: "اختر نوع المشروع" },
  "modal.cat.corporate": { en: "Corporate & Business Website", ar: "موقع شركة أو مؤسسة" },
  "modal.cat.ecommerce": { en: "E-Commerce & Online Store", ar: "متجر إلكتروني متكامل" },
  "modal.cat.saas": { en: "SaaS / Web Application", ar: "تطبيق ويب / منصة رقمية" },
  "modal.cat.portfolio": { en: "Portfolio & Brand Showcase", ar: "معرض أعمال وهوية تجارية" },
  "modal.name": { en: "Full Name / Company Name", ar: "الاسم الكامل / اسم الشركة" },
  "modal.name_placeholder": { en: "e.g. Abdullah Al-Otaibi", ar: "مثال: عبد الله العتيبي" },
  "modal.contact": { en: "Email or WhatsApp Contact", ar: "البريد الإلكتروني أو الواتساب" },
  "modal.contact_placeholder": { en: "contact@company.sa / +966...", ar: "contact@company.sa / +966..." },
  "modal.budget": { en: "Estimated Investment", ar: "الميزانية التقديرية" },
  "modal.budget_1": { en: "$1,000 - $3,000", ar: "1,000$ - 3,000$" },
  "modal.budget_2": { en: "$3,000 - $7,000", ar: "3,000$ - 7,000$" },
  "modal.budget_3": { en: "$7,000+", ar: "+7,000$" },
  "modal.requirements": { en: "Project Details & Growth Goals", ar: "تفاصيل المشروع وأهداف النمو" },
  "modal.req_placeholder": { en: "Describe your business, target audience, key features needed...", ar: "اصف نشاطك التجاري، جمهورك المستهدف، والمميزات المطلوبة..." },
  "modal.submit": { en: "SUBMIT PROJECT REQUEST →", ar: "إرسال طلب المشروع ←" },
  "modal.submitting": { en: "Sending details...", ar: "جاري الإرسال..." },
  "modal.success_title": { en: "Project Request Received!", ar: "تم استلام طلب المشروع بنجاح!" },
  "modal.success_desc": { en: "Thank you for reaching out to MUHAB. Reference ID: ", ar: "شكراً لتواصلك مع مُهاب. رقم المرجع: " },
  "modal.success_sub": { en: "Our Saudi Webmakers strategy team will review your inquiry and contact you shortly via WhatsApp or Email.", ar: "سيرجع فريق استراتيجية صُنّاع المواقع طلبك ونتواصل معك قريباً عبر الواتساب أو البريد." },
  "modal.close": { en: "Close", ar: "إغلاق" },
  "modal.new_request": { en: "Submit Another Inquiry", ar: "إرسال استفسار آخر" },
  
  "nfc.title": { en: "NFC Smart Business Pass", ar: "بطاقات NFC الذكية للأعمال" },
  "nfc.desc": { en: "Instantly transfer contact credentials, digital profiles, and business links with a single contactless tap.", ar: "تبادل بيانات الاتصال، الروابط، والملفات الشخصية بنقرة واحدة بدون تلامس." },
  "nfc.cta": { en: "Explore Smart Cards", ar: "استكشف البطاقات الذكية" },

  "footer.tag": { en: "MUHAB creates modern digital experiences that help Saudi businesses grow.", ar: "مُهاب يبتكر تجارب رقمية حديثة تهدف لتنمية الشركات السعودية." },
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "footer.contact": { en: "Get In Touch", ar: "تواصل معنا" },
  "footer.quick_links": { en: "Navigation", ar: "التنقل" },
};

type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  t: (k: keyof typeof dict) => string;
  tf: (o: any, key: "name" | "description" | "category") => string;
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) || null;
    if (saved === "ar" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);

  const t = (k: keyof typeof dict) => dict[k]?.[lang] || k;
  const tf = (o: any, key: "name" | "description" | "category") => {
    const suffix = lang === "ar" ? "_ar" : "_en";
    return o[`${key}${suffix}`];
  };

  return (
    <I18nCtx.Provider value={{ lang, dir: lang === "ar" ? "rtl" : "ltr", setLang, t, tf }}>
      {children}
    </I18nCtx.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
