import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, { en: string; ar: string }>;

const dict: Dict = {
  "brand.name": { en: "MUHAB", ar: "مُهاب" },
  "brand.descriptor": { en: "SAUDI WEBMAKERS", ar: "صُنّاع المواقع السعودية" },
  "brand.tagline": { en: "WEBSITES. GROWTH. REPUTATION.", ar: "مواقع. نمو. سمعة." },

  "nav.services": { en: "Services", ar: "الخدمات" },
  "nav.companies": { en: "Our Companies", ar: "شركاتنا" },
  "nav.portfolio": { en: "Our Clients", ar: "عملاؤنا" },
  "nav.features": { en: "Why Muhab", ar: "لماذا مُهاب" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا" },
  "nav.request": { en: "START YOUR PROJECT →", ar: "ابدأ مشروعك الآن ←" },

  "hero.eyebrow": { en: "MUHAB · SAUDI WEBMAKERS", ar: "مُهاب · صُنّاع المواقع السعودية" },
  "hero.title_part1": { en: "WE BUILD WEBSITES THAT ", ar: "نصنع مواقع إلكترونية " },
  "hero.title_part2": { en: "GROW BUSINESSES.", ar: "تنمّي أعمالك." },
  "hero.sub": {
    en: "Modern websites and digital solutions built to help Saudi businesses attract more customers, strengthen their online presence, and grow.",
    ar: "مواقع إلكترونية وحلول رقمية حديثة صُممت لمساعدة الشركات السعودية في جذب المزيد من العملاء وتعزيز الحضور الرقمي.",
  },
  "hero.cta_primary": { en: "START YOUR PROJECT →", ar: "ابدأ مشروعك الآن ←" },
  "hero.cta_secondary": { en: "VIEW OUR WORK", ar: "تصفح أعمالنا" },

  "companies.eyebrow": { en: "OUR COMPANIES", ar: "شركاتنا ومشاريعنا" },
  "companies.title_line1": { en: "We don't just build websites.", ar: "لا نبني المواقع وحسب." },
  "companies.title_line2": { en: "We build products.", ar: "بل نبني منتجات." },
  "companies.sub": {
    en: "Alongside bespoke client websites, Muhab builds and operates dedicated digital products designed to solve real business challenges and unlock operational growth.",
    ar: "إلى جانب بناء المواقع لعملائنا، نبتكر ونشغّل في مُهاب منتجات رقمية متخصصة لمعالجة تحديات الأعمال الحقيقية ودفع النمو المستمر.",
  },

  "companies.taqyeemi.badge": { en: "01 / PRODUCT", ar: "01 / منتج رقمي" },
  "companies.taqyeemi.name": { en: "TAQYEEMI", ar: "تقييمي" },
  "companies.taqyeemi.category": {
    en: "Customer Experience & Reputation",
    ar: "تجربة العملاء وإدارة السمعة",
  },
  "companies.taqyeemi.desc": {
    en: "Turn customer visits into valuable feedback while building your online reputation.",
    ar: "حوّل زيارات العملاء إلى تقييمات وملاحظات قيّمة مع تعزيز سمعتك الرقمية ومكانة علامتك.",
  },
  "companies.taqyeemi.cap1": {
    en: "NFC & QR feedback collection",
    ar: "جمع الملاحظات عبر NFC و QR",
  },
  "companies.taqyeemi.cap2": {
    en: "Customer feedback dashboard",
    ar: "لوحة تحكم تفاعلية للملاحظات",
  },
  "companies.taqyeemi.cap3": {
    en: "Feedback analytics and insights",
    ar: "تحليلات دقيقة وتقارير أداء فورية",
  },
  "companies.taqyeemi.cap4": { en: "Google review funnel", ar: "مسار ذكي لتوجيه تقييمات Google" },
  "companies.taqyeemi.cta": { en: "EXPLORE TAQYEEMI →", ar: "استكشف تقييمي ←" },
  "companies.taqyeemi.visit": { en: "Visit Taqyeemi", ar: "زيارة تقييمي" },

  "companies.wasel.badge": { en: "02 / PRODUCT", ar: "02 / منتج رقمي" },
  "companies.wasel.name": { en: "WASEL", ar: "واصل" },
  "companies.wasel.category": {
    en: "Restaurant CRM & Management",
    ar: "إدارة علاقات وعمليات المطاعم",
  },
  "companies.wasel.desc": {
    en: "One platform built to help restaurants manage their customers and operations.",
    ar: "منصة متكاملة وموحدة مصممة لمساعدة المطاعم في إدارة عملائها وعملياتها بكفاءة وسلاسة.",
  },
  "companies.wasel.status": { en: "COMING SOON", ar: "قريباً" },
  "companies.wasel.note": {
    en: "Currently in active development by MUHAB.",
    ar: "قيد التطوير والتحضير بواسطة فريق مُهاب.",
  },
  "companies.wasel.cta": { en: "EXPLORE WASEL →", ar: "استكشف واصل ←" },
  "companies.wasel.visit": { en: "Visit Wasel", ar: "زيارة واصل" },

  /* Taqyeemi Case Study / Product Page */
  "taqyeemi.page.title": {
    en: "Taqyeemi by MUHAB — Customer Experience & Reputation Platform",
    ar: "تقييمي من مُهاب — منصة تجربة العملاء وإدارة السمعة",
  },
  "taqyeemi.hero.badge": {
    en: "BUILT BY MUHAB · DIGITAL PRODUCT",
    ar: "تم تطويره وتصميمه بواسطة مُهاب · منتج رقمي",
  },
  "taqyeemi.hero.headline": {
    en: "Turn customer feedback into better reviews and better decisions.",
    ar: "حوّل آراء العملاء إلى تقييمات أفضل وقرارات أذكى.",
  },
  "taqyeemi.hero.sub": {
    en: "Taqyeemi bridges physical customer touchpoints with smart cloud management. Combine contactless NFC/QR feedback collection, intelligent review routing, and a real-time business dashboard.",
    ar: "يجمع نظام تقييمي بين نقاط اتصال العملاء الفيزيائية والإدارة السحابية الذكية، لدمج جمع التقييمات عبر NFC و QR وتوجيه الملاحظات ولوحة تحكم فورية للأعمال.",
  },
  "taqyeemi.hero.cta_visit": { en: "Visit Taqyeemi", ar: "زيارة تقييمي" },
  "taqyeemi.hero.cta_how": { en: "See How It Works ↓", ar: "شاهد كيف يعمل النظام ↓" },
  "taqyeemi.hero.cta_request": {
    en: "Get Taqyeemi For Your Business →",
    ar: "طلب نظام تقييمي لمنشأتك ←",
  },

  "taqyeemi.flow.eyebrow": { en: "HOW TAQYEEMI WORKS", ar: "آلية عمل تقييمي" },
  "taqyeemi.flow.title": {
    en: "From table tap to verified review in 15 seconds.",
    ar: "من لمسة الطاولة إلى التقييم الموثق خلال 15 ثانية.",
  },
  "taqyeemi.flow.sub": {
    en: "A frictionless physical-to-digital journey that converts customer sentiment into business reputation without forcing app downloads.",
    ar: "تجربة سلسة تربط الواقع الملموس بالمنصة الرقمية لتحويل انطباعات العملاء إلى نمو موثوق دون الحاجة لتطبيقات.",
  },
  "taqyeemi.flow.step1_num": { en: "01 — TAP OR SCAN", ar: "01 — تمرير أو مسح" },
  "taqyeemi.flow.step1_title": {
    en: "Contactless NFC & QR Stand",
    ar: "حوامل ذكية بتقنية NFC و QR",
  },
  "taqyeemi.flow.step1_desc": {
    en: "Customer taps their phone on the branded stand or scans the dynamic QR code. Instant launch with zero app installation.",
    ar: "يمرر العميل هاتفه فوق الحامل المطبوع أو يمسح رمز QR فوراً دون الحاجة لتنزيل أي تطبيق.",
  },
  "taqyeemi.flow.step2_num": { en: "02 — RATE EXPERIENCE", ar: "02 — تقييم التجربة" },
  "taqyeemi.flow.step2_title": {
    en: "Quick 1–5 Star Rating",
    ar: "تقييم سريع من 1 إلى 5 نجوم",
  },
  "taqyeemi.flow.step2_desc": {
    en: "A clean, dark-mode rating modal allows the customer to select their rating from 1 to 5 stars with a single tap.",
    ar: "واجهة تقييم سريعة وأنيقة تتيح للعميل تقييم زيارته من 1 إلى 5 نجوم بلمسة واحدة.",
  },
  "taqyeemi.flow.step3_num": { en: "03 — INTELLIGENT SPLIT", ar: "03 — مسار ذكي وموجّه" },
  "taqyeemi.flow.step3_pos_title": {
    en: "4–5 Stars → Google Review Path",
    ar: "4–5 نجوم → توجيه مباشر لـ Google",
  },
  "taqyeemi.flow.step3_pos_desc": {
    en: "Happy customers are routed straight to your Google Maps review page to multiply verified 5-star ratings.",
    ar: "يتم توجيه العملاء الراضين مباشرة إلى صفحة منشأتك على خرائط Google لزيادة التقييمات الإيجابية.",
  },
  "taqyeemi.flow.step3_neg_title": {
    en: "1–3 Stars → Private Feedback",
    ar: "1–3 نجوم → ملاحظات خاصة للإدارة",
  },
  "taqyeemi.flow.step3_neg_desc": {
    en: "Constructive feedback is captured in a confidential modal, alerting managers before issues hit the public web.",
    ar: "تُجمع الملاحظات في نافذة خاصة وسرية، مما يتيح للإدارة معالجة أي استياء فوراً قبل النشر العام.",
  },
  "taqyeemi.flow.step4_num": { en: "04 — LIVE DASHBOARD", ar: "04 — لوحة تحكم مركزية" },
  "taqyeemi.flow.step4_title": {
    en: "Centralized Management Dashboard",
    ar: "لوحة تحكم وإدارة مركزية",
  },
  "taqyeemi.flow.step4_desc": {
    en: "Feedback is available in the business dashboard with unread counters, rating filters, and operational triage.",
    ar: "تصل الملاحظات والتقييمات إلى لوحة تحكم المنشأة مع عداد التنبيهات وفلاتر التقييم لسهولة المتابعة.",
  },

  "taqyeemi.stand.eyebrow": { en: "PHYSICAL EXPERIENCE", ar: "التجربة الفيزيائية" },
  "taqyeemi.stand.title": { en: "One tap from the customer.", ar: "لمسة واحدة من العميل." },
  "taqyeemi.stand.desc": {
    en: "Engineered from premium high-gloss acrylic, the Taqyeemi stand sits directly at cash registers, dining tables, hotel counters, and reception areas — turning every in-person visit into an opportunity for growth.",
    ar: "صُنع حامل تقييمي من الأكريليك الفاخر ليوضع على طاولات المطاعم ومكاتب الاستقبال ونقاط الدفع، ليحوّل كل زيارة فعلية إلى فرصة لتعزيز السمعة.",
  },
  "taqyeemi.stand.feat1": {
    en: "Instant NFC contactless tap",
    ar: "تمرير لا تلامسي فوري عبر NFC",
  },
  "taqyeemi.stand.feat2": {
    en: "High-resolution dynamic QR scan",
    ar: "مسح سريع لرمز QR عالي الدقة",
  },
  "taqyeemi.stand.feat3": {
    en: "Zero apps or downloads required",
    ar: "بدون أي تطبيقات أو تسجيل دخول",
  },
  "taqyeemi.stand.feat4": {
    en: "Durable, branded acrylic construction",
    ar: "تصميم أكريليك أنيق ومتين للمنشآت",
  },

  "taqyeemi.dash.eyebrow": { en: "DASHBOARD SHOWCASE", ar: "لوحة التحكم المركزية" },
  "taqyeemi.dash.title": {
    en: "Feedback you can actually use.",
    ar: "بيانات وملاحظات تصنع الفارق.",
  },
  "taqyeemi.dash.desc": {
    en: "The Taqyeemi owner portal gives management full real-time visibility into customer satisfaction, unread feedback items, and rating distributions across branches.",
    ar: "تمنح لوحة تحكم تقييمي الإدارة رؤية شاملة وفورية لمستوى رضا العملاء والملاحظات الجديدة وتوزيع التقييمات.",
  },
  "taqyeemi.dash.feat1": {
    en: "Live customer feedback feed with timestamps",
    ar: "سجل فوري لآراء وملاحظات العملاء بالوقت والتاريخ",
  },
  "taqyeemi.dash.feat2": {
    en: "Average rating calculation & total review count",
    ar: "حساب دقيق لمتوسط التقييم وإجمالي الآراء",
  },
  "taqyeemi.dash.feat3": {
    en: "Unread notification counter & triage queue",
    ar: "عداد للملاحظات غير المقروءة لتسهيل المتابعة",
  },
  "taqyeemi.dash.feat4": {
    en: "Instant star rating filtering (1-Star, 2-Star, 3-Star)",
    ar: "فلاتر سريعة لفرز التقييمات حسب النجوم",
  },
  "taqyeemi.dash.feat5": {
    en: "One-click 'Mark as Read' workflow",
    ar: "تحديد الملاحظات كمقروءة بضغطة زر",
  },
  "taqyeemi.dash.feat6": {
    en: "Direct access to launch customer funnel",
    ar: "وصول مباشر لتشغيل وتجربة مسار العميل",
  },

  "taqyeemi.sim.eyebrow": {
    en: "INTERACTIVE SIMULATOR PREVIEW",
    ar: "معاينة المحاكي التفاعلي",
  },
  "taqyeemi.sim.title": {
    en: "Explore the customer experience.",
    ar: "اكتشف تجربة العميل.",
  },
  "taqyeemi.sim.desc": {
    en: "See how the Taqyeemi review funnel separates 4–5 star ratings from private feedback. Visit the official Taqyeemi website to try the interactive simulator.",
    ar: "تعرّف على كيفية توجيه تقييمي للتقييمات الإيجابية إلى Google واستقبال الملاحظات الخاصة بسرية. تفضل بزيارة موقع تقييمي لتجربة المحاكي التفاعلي مباشرة.",
  },
  "taqyeemi.sim.cta": {
    en: "Try Interactive Simulator on Taqyeemi ↗",
    ar: "تجربة المحاكي على موقع تقييمي ↗",
  },

  "taqyeemi.story.eyebrow": { en: "CUSTOMER JOURNEY", ar: "رحلة العميل الذكية" },
  "taqyeemi.story.title": {
    en: "Two paths. Maximum reputation protection.",
    ar: "مساران ذكيان لحماية سمعة منشأتك.",
  },
  "taqyeemi.story.pos_label": {
    en: "POSITIVE EXPERIENCE (4–5 STARS)",
    ar: "تجربة إيجابية (4–5 نجوم)",
  },
  "taqyeemi.story.pos_title": {
    en: "Public Google Review Acceleration",
    ar: "مضاعفة التقييمات على خرائط Google",
  },
  "taqyeemi.story.pos_desc": {
    en: "Customers rating 4 or 5 stars are seamlessly guided to your Google Maps listing to share their glowing review with the public.",
    ar: "العملاء الذين يختارون 4 أو 5 نجوم يُوجّهون فوراً لنشر تقييمهم الإيجابي على خرائط Google.",
  },
  "taqyeemi.story.neg_label": {
    en: "CONSTRUCTIVE EXPERIENCE (1–3 STARS)",
    ar: "ملاحظات وتطوير (1–3 نجوم)",
  },
  "taqyeemi.story.neg_title": {
    en: "Confidential Private Feedback",
    ar: "قناة تواصل خاصة وسرية للإدارة",
  },
  "taqyeemi.story.neg_desc": {
    en: "Customers rating 1 to 3 stars receive a private feedback form. Comments are delivered to your business dashboard without appearing on public search results.",
    ar: "العملاء أصحاب التقييم المنخفض يُتاح لهم نموذج سري، لتصل ملاحظاتهم إلى لوحة تحكم الإدارة دون نشرها علناً.",
  },

  "taqyeemi.benefits.eyebrow": { en: "BUSINESS BENEFITS", ar: "القيمة المضافة لمنشأتك" },
  "taqyeemi.benefits.title": {
    en: "Three focused advantages for your brand.",
    ar: "ثلاث مزايا استراتيجية لنمو علامتك.",
  },
  "taqyeemi.benefits.b1_title": {
    en: "Build your online reputation",
    ar: "عزّز سمعتك الرقمية",
  },
  "taqyeemi.benefits.b1_desc": {
    en: "Make it effortless for satisfied customers to reach the Google review flow, improving local SEO rankings and customer trust.",
    ar: "اجعل وصول العملاء السعداء لتقييم Google سهلاً وسريعاً، مما يرفع تصدرك لنتائج البحث ويزيد ثقة الزوار الجدد.",
  },
  "taqyeemi.benefits.b2_title": {
    en: "Catch problems earlier",
    ar: "تدارك الملاحظات مبكراً",
  },
  "taqyeemi.benefits.b2_desc": {
    en: "Give dissatisfied customers a direct private feedback channel before frustration turns into a damaging public review.",
    ar: "وفّر قناة مباشرة للعميل لمشاركة استيائه بسرية، لتتمكن من حل المشكلة وكسب ولائه قبل النشر العام.",
  },
  "taqyeemi.benefits.b3_title": {
    en: "Understand your customers",
    ar: "افهم عملائك بدقة",
  },
  "taqyeemi.benefits.b3_desc": {
    en: "Consolidate real-time feedback across all branches into one dashboard so your team can make confident, data-backed decisions.",
    ar: "وحّد كافة الملاحظات والآراء من جميع فروعك في لوحة تحكم واحدة لتمكين فريقك من اتخاذ قرارات مبنية على بيانات حقيقية.",
  },

  "taqyeemi.muhab.eyebrow": {
    en: "BUILT BY MUHAB",
    ar: "صُنّاع المواقع السعودية",
  },
  "taqyeemi.muhab.title": {
    en: "Taqyeemi is more than a website. It's a complete digital product.",
    ar: "تقييمي أكثر من مجرد موقع. إنه منتج رقمي متكامل.",
  },
  "taqyeemi.muhab.desc": {
    en: "Muhab engineers bespoke customer-facing web apps, NFC-powered customer experiences, and high-performance management portals. Taqyeemi demonstrates our capability to build complete digital products from scratch.",
    ar: "نبتكر في مُهاب تطبيقات ويب مخصصة، وتجارب عملاء ذكية مدعومة بتقنية NFC، ولوحات تحكم عالية الأداء. يُجسد تقييمي قدرتنا على هندسة منتجات رقمية متكاملة تنمي الأعمال.",
  },
  "taqyeemi.muhab.cta": {
    en: "START YOUR PROJECT WITH MUHAB →",
    ar: "ابدأ مشروعك الرقمي مع مُهاب ←",
  },

  "taqyeemi.final.title": {
    en: "See Taqyeemi in action.",
    ar: "شاهد تقييمي يعمل على أرض الواقع.",
  },
  "taqyeemi.final.sub": {
    en: "Visit the live Taqyeemi platform or contact the Muhab team to deploy branded stands and dashboards for your business.",
    ar: "تفضل بزيارة منصة تقييمي المباشرة أو تواصل مع فريق مُهاب لتفعيل الحوامل ولوحات التحكم لفروعك اليوم.",
  },

  "badge.responsive": { en: "Mobile Responsiveness", ar: "متجاوب مع جميع الهواتف" },
  "badge.performance": { en: "High-Speed Performance", ar: "أداء فائق السرعة" },
  "badge.saudi": { en: "Saudi Market Optimized", ar: "مُعدّ للسوق السعودي" },
  "badge.seo": { en: "SEO & Growth", ar: "تحسين محركات البحث والنمو" },

  "services.title": {
    en: "Digital Solutions Built for Business Outcomes",
    ar: "حلول رقمية مصممة للنتائج والنمو",
  },
  "services.sub": {
    en: "We don't just build websites. We craft digital experiences designed to convert attention into long-term customer relationships.",
    ar: "لا نصنع مجرد مواقع، بل نبتكر تجارب رقمية تحول اهتمام الزوار إلى علاقات عملاء مستدامة.",
  },

  "modal.title": { en: "Start Your Project with MUHAB", ar: "ابدأ مشروعك مع مُهاب" },
  "modal.desc": {
    en: "Fill in your details and select a service. Our Saudi Webmakers team will reach out via WhatsApp.",
    ar: "أدخل بياناتك واختر الخدمة المطلوبة وسيتواصل معك فريق صُنّاع المواقع عبر الواتساب.",
  },
  "modal.name": { en: "Name", ar: "الاسم" },
  "modal.name_placeholder": { en: "e.g. Abdullah Al-Otaibi", ar: "مثال: عبد الله العتيبي" },
  "modal.business_name": { en: "Business Name", ar: "اسم المنشأة" },
  "modal.business_placeholder": { en: "e.g. Al-Nakheel Cafe", ar: "مثال: كافيه النخيل" },
  "modal.whatsapp": { en: "WhatsApp Number", ar: "رقم الواتساب" },
  "modal.whatsapp_placeholder": {
    en: "e.g. +966 50 000 0000",
    ar: "مثال: 0500000000 أو +966...",
  },
  "modal.select_service": { en: "Select Service / Package", ar: "اختر الخدمة أو الباقة" },
  "modal.service_required_error": {
    en: "Please select a service or website package.",
    ar: "يرجى اختيار الخدمة أو الباقة المطلوبة.",
  },
  "modal.whatsapp_invalid_error": {
    en: "Please enter a valid WhatsApp phone number.",
    ar: "يرجى إدخال رقم واتساب صحيح.",
  },
  "modal.group.websites": { en: "WEBSITES", ar: "المواقع الإلكترونية" },
  "modal.pkg.basic.title": { en: "Basic Website", ar: "موقع أساسي" },
  "modal.pkg.basic.sub": { en: "Starter", ar: "الباقة المبتدئة" },
  "modal.pkg.custom.title": { en: "Custom Website", ar: "موقع مخصص" },
  "modal.pkg.custom.sub": { en: "Main custom option", ar: "الخيار المخصص الرئيسي" },
  "modal.pkg.crm.title": { en: "Full CRM Custom Website", ar: "موقع مخصص مع نظام CRM متكامل" },
  "modal.pkg.crm.sub": {
    en: "Coming Soon / Currently Unavailable",
    ar: "قريباً / غير متاح حالياً",
  },
  "modal.group.apps": { en: "APPS / BUSINESS SYSTEMS", ar: "التطبيقات وأنظمة الأعمال" },
  "modal.pkg.taqyeemi.title": { en: "Taqyeemi", ar: "تقييمي" },
  "modal.pkg.taqyeemi.sub": {
    en: "Customer Experience & Reputation",
    ar: "تجربة العملاء وإدارة السمعة",
  },
  "modal.coming_soon": { en: "Coming Soon", ar: "قريباً" },
  "modal.unavailable": { en: "Unavailable", ar: "غير متاح" },
  "modal.submit": { en: "SUBMIT PROJECT REQUEST →", ar: "إرسال طلب المشروع ←" },
  "modal.submitting": { en: "Submitting details...", ar: "جاري الإرسال..." },
  "modal.success_title": { en: "Project Request Received!", ar: "تم استلام طلب المشروع بنجاح!" },
  "modal.success_desc": {
    en: "Thank you for reaching out to MUHAB. Reference ID: ",
    ar: "شكراً لتواصلك مع مُهاب. رقم المرجع: ",
  },
  "modal.success_sub": {
    en: "Our Saudi Webmakers team will review your project and contact you via WhatsApp shortly.",
    ar: "سيرجع فريق صُنّاع المواقع طلبك ونتواصل معك عبر الواتساب في أقرب وقت.",
  },
  "modal.close": { en: "Close", ar: "إغلاق" },
  "modal.new_request": { en: "Submit Another Request", ar: "إرسال طلب آخر" },
  "modal.submit_error": {
    en: "Unable to submit your request at this moment. Please try again or reach out to us directly.",
    ar: "تعذر إرسال الطلب حالياً. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.",
  },
  "modal.retry": { en: "Try Again", ar: "إعادة المحاولة" },

  "footer.tag": {
    en: "MUHAB creates modern digital experiences that help Saudi businesses grow.",
    ar: "مُهاب يبتكر تجارب رقمية حديثة تهدف لتنمية الشركات السعودية.",
  },
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "footer.contact": { en: "Get In Touch", ar: "تواصل معنا" },
  "footer.quick_links": { en: "Navigation", ar: "التنقل" },
};

type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  t: (k: keyof typeof dict) => string;
  tf: (o: Record<string, any>, key: "name" | "description" | "category") => string;
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
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [lang]);

  const t = (k: keyof typeof dict) => dict[k]?.[lang] || k;
  const tf = (o: Record<string, any>, key: "name" | "description" | "category") => {
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
