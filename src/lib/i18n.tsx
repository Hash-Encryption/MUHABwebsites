import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, { en: string; ar: string }>;

const dict: Dict = {
  "brand.name": { en: "MUHAB", ar: "مُهاب" },
  "brand.descriptor": { en: "SAUDI WEBMAKERS", ar: "صُنّاع المواقع السعودية" },
  "brand.tagline": { en: "WEBSITES. GROWTH. REPUTATION.", ar: "مواقع. نمو. سمعة." },

  "nav.services": { en: "Services", ar: "الخدمات" },
  "nav.companies": { en: "Our Projects", ar: "مشاريعنا" },
  "nav.portfolio": { en: "Client Work", ar: "أعمالنا" },
  "nav.features": { en: "Why Muhab", ar: "لماذا مُهاب" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا" },
  "nav.request": { en: "START YOUR PROJECT →", ar: "ابدأ مشروعك الآن ←" },

  "hero.badge": { en: "Jeddah • Kingdom of Saudi Arabia", ar: "جدة • المملكة العربية السعودية" },
  "hero.title_part1": { en: "WE BUILD THE BEST CUSTOM WEBSITES", ar: "نصمم أفضل المواقع المخصصة" },
  "hero.title_part2": { en: "IN SAUDI ARABIA", ar: "في السعودية" },
  "hero.subtitle_pre": {
    en: "Web & app development studio in Jeddah — we engineer high-performance websites and build ",
    ar: "استوديو تطوير مواقع وتطبيقات في جدة — نبني مواقع فائقة الأداء ونطور ",
  },
  "hero.companies_link": { en: "our companies & smart solutions ↓", ar: "شركاتنا وحلولنا الذكية ↓" },
  "hero.subtitle_post": { en: " to grow your business.", ar: " لتنمية أعمالك." },
  "hero.cta_primary": { en: "START YOUR PROJECT NOW →", ar: "ابدأ مشروعك الآن" },
  "hero.cta_secondary": { en: "EXPLORE OUR COMPANIES", ar: "استكشف شركاتنا" },

  "companies.eyebrow": { en: "OUR PROJECTS & PRODUCTS", ar: "منظومة موهاب" },
  "companies.section_badge": { en: "MUHAB Ecosystem", ar: "منظومة موهاب" },
  "companies.section_title": { en: "Our Companies & Products", ar: "شركاتنا ومنتجاتنا" },
  "companies.section_subtitle": {
    en: "Smart solutions and platforms we built to accelerate your business growth.",
    ar: "حلول ومنصات ذكية طورناها لتسريع نمو أعمالك ومبيعاتك.",
  },
  "companies.title_line1": { en: "We build websites.", ar: "لا نبني مجرد مواقع." },
  "companies.title_line2": { en: "We engineer products.", ar: "بل نبتكر منتجات متكاملة." },
  "companies.sub": {
    en: "Alongside custom client platforms, Muhab builds and operates dedicated digital products that solve real operational problems and drive measurable growth.",
    ar: "إلى جانب بناء المواقع المخصصة لعملائنا، نبتكر ونشغّل أنظمة ومنتجات رقمية لمعالجة تحديات تشغيلية حقيقية وزيادة كفاءة الأعمال.",
  },
  "companies.status_live": { en: "Live Now", ar: "متاح الآن" },
  "companies.status_almost_ready": { en: "Almost Ready", ar: "شبه جاهز" },
  "companies.status_coming_soon": { en: "Coming Soon", ar: "قريباً" },
  "companies.view_details": { en: "View Details", ar: "عرض التفاصيل" },

  // Product 1: Taqyeemi
  "companies.taqyeemi.title": { en: "Taqyeemi", ar: "تقييمي | Taqyeemi" },
  "companies.taqyeemi.badge": { en: "Google Reviews Management", ar: "إدارة تقييمات Google" },
  "companies.taqyeemi.name": { en: "TAQYEEMI", ar: "تقييمي" },
  "companies.taqyeemi.category": {
    en: "Customer Experience & Reputation",
    ar: "إدارة تجربة العملاء والتقييمات",
  },
  "companies.taqyeemi.desc": {
    en: "Smart NFC & QR stands to filter customer feedback and route 5-star reviews to Google Maps with an internal dashboard.",
    ar: "حوامل وبطاقات ذكية بتقنية NFC و QR لفرز آراء العملاء وتوجيه التقييمات الإيجابية لخرائط Google مع لوحة تحكم خاصة.",
  },
  "companies.taqyeemi.tag1": { en: "NFC & QR Cards", ar: "بطاقات NFC & QR" },
  "companies.taqyeemi.tag2": { en: "Review Filter", ar: "فلترة التقييمات" },
  "companies.taqyeemi.tag3": { en: "Google Maps", ar: "خرائط Google" },
  "companies.taqyeemi.cap1": {
    en: "NFC & QR feedback collection",
    ar: "جمع التقييمات عبر NFC و QR",
  },
  "companies.taqyeemi.cap2": {
    en: "Real-time branch dashboard",
    ar: "لوحة تحكم مباشرة لجميع الفروع",
  },
  "companies.taqyeemi.cap3": {
    en: "Live satisfaction analytics",
    ar: "تحليلات فورية لمستوى الرضا",
  },
  "companies.taqyeemi.cap4": { en: "Smart Google review routing", ar: "توجيه ذكي لتقييمات Google" },
  "companies.taqyeemi.cta": { en: "EXPLORE TAQYEEMI →", ar: "تفاصيل نظام تقييمي ←" },
  "companies.taqyeemi.visit": { en: "Visit Taqyeemi", ar: "زيارة تقييمي" },
  "companies.taqyeemi.link": { en: "/companies/taqyeemi", ar: "/companies/taqyeemi" },

  // Product 2: PointPass
  "companies.pointpass.title": { en: "PointPass", ar: "بوينت باس | PointPass" },
  "companies.pointpass.badge": { en: "Apple & Google Wallet Loyalty Passes", ar: "كروت ولاء Apple & Google Wallet" },
  "companies.pointpass.name": { en: "POINTPASS", ar: "بوينت باس" },
  "companies.pointpass.category": {
    en: "Apple & Google Wallet Loyalty",
    ar: "كروت الولاء والأختام الرقمية",
  },
  "companies.pointpass.status": { en: "Almost Ready", ar: "شبه جاهز" },
  "companies.pointpass.desc": {
    en: "Digital loyalty cards and stamp passes stored directly in Apple Wallet & Google Wallet with geolocation and scheduled push notifications.",
    ar: "بطاقات ولاء وأختام رقمية تُحفظ مباشرة في محفظة آبل وجوجل بدون تطبيق، مع ميزة إرسال إشعارات جغرافية ومجدولة لشاشة قفل العميل.",
  },
  "companies.pointpass.tag1": { en: "Apple & Google Wallet", ar: "Apple & Google Wallet" },
  "companies.pointpass.tag2": { en: "3 Loyalty Designs", ar: "3 تصاميم للولاء" },
  "companies.pointpass.tag3": { en: "Geo & Scheduled Push", ar: "إشعارات جغرافية ومجدولة" },
  "companies.pointpass.cta": { en: "EXPLORE POINTPASS →", ar: "تفاصيل بوينت باس ←" },
  "companies.pointpass.link": { en: "/companies/pointpass", ar: "/companies/pointpass" },

  // Product 3: Foodus
  "companies.wasel.title": { en: "Foodus", ar: "فودس | Foodus" },
  "companies.wasel.badge": { en: "Restaurant Operating Suite", ar: "نظام تشغيل وإدارة المطاعم" },
  "companies.wasel.name": { en: "FOODUS", ar: "فودس" },
  "companies.wasel.category": {
    en: "Restaurant Operating Suite",
    ar: "نظام تشغيل وإدارة المطاعم",
  },
  "companies.wasel.desc": {
    en: "A unified platform for restaurants to manage orders, customer relationships, and day-to-day operations from a single dashboard.",
    ar: "منصة موحدة لإدارة طلبات المطاعم وعلاقات العملاء ومتابعة العمليات اليومية من شاشة واحدة.",
  },
  "companies.wasel.status": { en: "COMING SOON", ar: "قريباً" },
  "companies.wasel.tag1": { en: "POS & Orders", ar: "إدارة الطلبات ونقاط البيع" },
  "companies.wasel.tag2": { en: "Kitchen Display", ar: "شاشات المطبخ الذكية" },
  "companies.wasel.tag3": { en: "Operations Suite", ar: "تشغيل متكامل للمطاعم" },
  "companies.wasel.note": {
    en: "Currently in active development by MUHAB.",
    ar: "قيد التطوير والتجهيز بواسطة فريق مُهاب.",
  },
  "companies.wasel.cta": { en: "EXPLORE FOODUS →", ar: "استكشف فودس ←" },
  "companies.wasel.visit": { en: "Visit Foodus", ar: "زيارة فودس" },
  "companies.wasel.link": { en: "#", ar: "#" },

  // PointPass Dedicated Landing Page Strings
  "pointpass_page.badge": {
    en: "Almost Ready • Apple & Google Wallet",
    ar: "شبه جاهز • Apple & Google Wallet",
  },
  "pointpass_page.hero_title": {
    en: "PointPass — Digital Loyalty & Stamp Passes in Your Mobile Wallet",
    ar: "بوينت باس — كروت الولاء والأختام الرقمية في محفظة جوالك",
  },
  "pointpass_page.hero_subtitle": {
    en: "Replace lost paper punch cards with interactive digital cards inside Apple Wallet & Google Wallet without app downloads. Send automated lock-screen notifications based on location and schedule.",
    ar: "استبدل الكروت الورقية الضائعة ببطاقات تفاعلية داخل Apple Wallet و Google Wallet بدون تحميل أي تطبيق. أرسل إشعارات جغرافية ومجدولة لشاشة قفل العميل لتذكيره بزيارة فرعك.",
  },
  "pointpass_page.cta_join_waitlist": {
    en: "Join Early Access (WhatsApp)",
    ar: "حجز انضمام مبكر (واتساب)",
  },
  "pointpass_page.cta_back_home": {
    en: "Back to Home",
    ar: "العودة للرئيسية",
  },
  "pointpass_page.designs_badge": {
    en: "3 Digital Formats",
    ar: "3 نماذج رقمية",
  },
  "pointpass_page.designs_title": {
    en: "Choose the Perfect Loyalty Model for Your Business",
    ar: "اختر نظام الولاء المناسب لطبيعة نشاطك",
  },
  "pointpass_page.designs_subtitle": {
    en: "Tailored for cafes, restaurants, barbershops, car washes, and retail stores.",
    ar: "تصاميم مدمجة جاهزة للمطاعم، الكافيهات، صالونات التجميل، المغاسل والمتاجر.",
  },
  "pointpass_page.card1_title": {
    en: "Digital Stamp Card (Punch Card)",
    ar: "كرت الأختام الرقمي (Digital Stamp Card)",
  },
  "pointpass_page.card1_desc": {
    en: "Interactive stamp pass (e.g., Buy 5 coffees, get the 6th free). Cashiers stamp securely via screen tap or QR scan.",
    ar: "نظام أختام تفاعلي (مثال: اشترِ 5 مرات واحصل على السادسة مجاناً). يختم الكاشير بلمسة شاشة أو مسح QR كود لمنع التلاعب.",
  },
  "pointpass_page.card2_title": {
    en: "Accumulative Loyalty Points",
    ar: "نقاط الولاء التراكمية (Loyalty Points)",
  },
  "pointpass_page.card2_desc": {
    en: "Earn points per SAR spent and redeem for credit or rewards to boost customer lifetime value.",
    ar: "جمع نقاط مع كل ريال يتم إنفاقه واستبدالها برصيد مشتريات أو هدايا مباشرة لرفع متوسط قيمة سلة الشراء.",
  },
  "pointpass_page.card3_title": {
    en: "Digital Coupons & Tiered Vouchers",
    ar: "كوبونات وقسائم الخصم (Tiered Vouchers)",
  },
  "pointpass_page.card3_desc": {
    en: "Promotional vouchers and member discounts with expiration dates to drive quick repeat visits.",
    ar: "قسائم ترويجية وبطاقات عضوية بخصومات حصرية وتواريخ صلاحية محددة تشجع العميل على تكرار الزيارة سريعاً.",
  },
  "pointpass_page.notifications_badge": {
    en: "Smart Notification Engine",
    ar: "نظام الإشعارات والتذكير الذكي",
  },
  "pointpass_page.notifications_title": {
    en: "Direct Lock-Screen Engagement Without SMS Costs",
    ar: "تواصل مباشر مع شاشة قفل العميل بدون تكلفة رسائل SMS",
  },
  "pointpass_page.notif1_title": {
    en: "Geolocation Triggers",
    ar: "إشعارات الموقع الجغرافي (Geolocation Triggers)",
  },
  "pointpass_page.notif1_desc": {
    en: "When customers get within 100-300m of your branch, your pass lights up on their lock screen with a welcome offer.",
    ar: "بمجرد اقتراب العميل من محيط فرعك (على بُعد 100 - 300 متر)، يظهر كرتك تلقائياً على شاشة القفل مع رسالة ترحيب تدعوه للدخول.",
  },
  "pointpass_page.notif2_title": {
    en: "Scheduled Re-Engagement",
    ar: "إشعارات إعادة التفاعل المجدولة (Scheduled Push)",
  },
  "pointpass_page.notif2_desc": {
    en: "Send automated push notifications every 14 or 30 days to dormant customers to bring them back.",
    ar: "أرسل تنبيهات تلقائية للعملاء المنقطعين كل 14 يوماً أو شهرياً مع عروض حصرية لتحفيزهم على العودة.",
  },
  "pointpass_page.matrix_title": {
    en: "Why Switch to PointPass?",
    ar: "لماذا تختار بوينت باس لنشاطك التجاري؟",
  },
  "pointpass_page.for_customer_title": {
    en: "For Customers:",
    ar: "مزايا العميل:",
  },
  "pointpass_page.for_customer_1": {
    en: "Never lose a card; safely stored in native Apple/Google Wallet.",
    ar: "الكرت محفوظ داخل Apple Wallet أو Google Wallet ولا يضيع أبداً.",
  },
  "pointpass_page.for_customer_2": {
    en: "Zero app downloads or complicated sign-ups required.",
    ar: "بدون تحميل تطبيقات جديدة أو تسجيل حسابات معقدة.",
  },
  "pointpass_page.for_customer_3": {
    en: "Instant live balance updates directly on the phone screen.",
    ar: "تحديث فوري للأختام والنقاط أمام العميل مباشرة.",
  },
  "pointpass_page.for_business_title": {
    en: "For Business Owners:",
    ar: "مزايا التاجر:",
  },
  "pointpass_page.for_business_1": {
    en: "Eliminate recurring paper printing costs and waste.",
    ar: "توفير تكاليف طباعة الكروت الورقية والتخلص من هدرها.",
  },
  "pointpass_page.for_business_2": {
    en: "Fraud-proof digital verification prevents unauthorized stamps.",
    ar: "منع التلاعب وتكرار الأختام بدون شراء حقيقي.",
  },
  "pointpass_page.for_business_3": {
    en: "Free marketing channel with automated lock-screen push alerts.",
    ar: "قناة تسويقية مجانية لإرسال إشعارات مباشرة لشاشة قفل العميل.",
  },
  "pointpass_page.bottom_cta_title": {
    en: "Be First to Launch Digital Passes in Your Branch",
    ar: "كن أول من يطلق كروت الولاء الرقمية في فرعك",
  },
  "pointpass_page.bottom_cta_subtitle": {
    en: "Reserve your pilot spot and collaborate with the MUHAB team to design your cards.",
    ar: "احجز نسختك التجريبية وتواصل مع فريق موهاب لتجهيز بطاقات نشاطك التجاري.",
  },
  "pointpass_page.bottom_cta_btn": {
    en: "Chat on WhatsApp",
    ar: "تواصل معنا عبر واتساب",
  },

  /* Taqyeemi Case Study / Product Page */
  "taqyeemi.page.title": {
    en: "Taqyeemi by MUHAB — Customer Experience & Reputation Platform",
    ar: "تقييمي من مُهاب — منصة تجربة العملاء وإدارة التقييمات",
  },
  "taqyeemi.hero.badge": {
    en: "BUILT BY MUHAB · DIGITAL PRODUCT",
    ar: "تم تطويره وتصميمه بواسطة مُهاب · منتج رقمي",
  },
  "taqyeemi.hero.headline": {
    en: "Turn in-person visits into verified Google reviews and actionable insights.",
    ar: "حوّل تقييمات العملاء إلى نقاط قوة وقرارات واضحة.",
  },
  "taqyeemi.hero.sub": {
    en: "Taqyeemi bridges physical customer touchpoints with smart cloud management. Combine contactless NFC/QR feedback collection, intelligent review routing, and a real-time business dashboard.",
    ar: "يجمع نظام تقييمي بين حوامل الطاولات الذكية ولوحة تحكم سحابية مباشرة، لتوجيه التقييمات الممتازة لخرائط Google واستلام الملاحظات الخاصة فوراً لمعالجتها.",
  },
  "taqyeemi.hero.cta_visit": { en: "Visit Taqyeemi", ar: "زيارة تقييمي" },
  "taqyeemi.hero.cta_how": { en: "See How It Works ↓", ar: "شاهد كيف يعمل النظام ↓" },
  "taqyeemi.hero.cta_request": {
    en: "Get Taqyeemi For Your Business →",
    ar: "طلب نظام تقييمي لفروعك ←",
  },

  "taqyeemi.flow.eyebrow": { en: "HOW TAQYEEMI WORKS", ar: "آلية عمل تقييمي" },
  "taqyeemi.flow.title": {
    en: "From table tap to verified review in 15 seconds.",
    ar: "من لمسة الطاولة إلى التقييم على Google خلال 15 ثانية.",
  },
  "taqyeemi.flow.sub": {
    en: "A fast, direct customer flow that collects verified feedback on the spot without requiring any app installations.",
    ar: "طريقة مباشرة وسريعة تشجع الزبائن على التقييم في المكان نفسه دون الحاجة لتنزيل أي تطبيق.",
  },
  "taqyeemi.flow.step1_num": { en: "01 — TAP OR SCAN", ar: "01 — تمرير أو مسح" },
  "taqyeemi.flow.step1_title": {
    en: "Contactless NFC & QR Stand",
    ar: "حوامل ذكية بتقنية NFC و QR",
  },
  "taqyeemi.flow.step1_desc": {
    en: "Customer taps their phone on the branded stand or scans the dynamic QR code to open the rating flow instantly.",
    ar: "يمرر العميل هاتفه فوق الحامل المطبوع أو يمسح الرمز لتفتح صفحة التقييم فوراً.",
  },
  "taqyeemi.flow.step2_num": { en: "02 — RATE EXPERIENCE", ar: "02 — تقييم التجربة" },
  "taqyeemi.flow.step2_title": {
    en: "Quick 1–5 Star Rating",
    ar: "تقييم من 1 إلى 5 نجوم",
  },
  "taqyeemi.flow.step2_desc": {
    en: "A clean, fast rating interface allowing the customer to select their experience level with a single tap.",
    ar: "واجهة سريعة وخفيفة تسمح للعميل باختيار تقييمه بضغطة واحدة.",
  },
  "taqyeemi.flow.step3_num": { en: "03 — INTELLIGENT SPLIT", ar: "03 — مسار ذكي وموجّه" },
  "taqyeemi.flow.step3_pos_title": {
    en: "4–5 Stars → Direct Google Review",
    ar: "4–5 نجوم ← خرائط Google مباشرة",
  },
  "taqyeemi.flow.step3_pos_desc": {
    en: "Satisfied customers are routed straight to your Google Maps review page to publish verified 5-star ratings.",
    ar: "يتم توجيه العميل الراضي مباشرة لصفحة منشأتك على Google Maps لتوثيق تقييمه الإيجابي.",
  },
  "taqyeemi.flow.step3_neg_title": {
    en: "1–3 Stars → Private Management Feedback",
    ar: "1–3 نجوم ← نموذج ملاحظات خاص",
  },
  "taqyeemi.flow.step3_neg_desc": {
    en: "Constructive feedback is captured privately in your dashboard, alerting managers to resolve issues before public posting.",
    ar: "تُرسل الملاحظات مباشرة للوحة تحكم الإدارة لحل أي مشكلة ومعالجتها فوراً قبل نشرها علناً.",
  },
  "taqyeemi.flow.step4_num": { en: "04 — LIVE DASHBOARD", ar: "04 — لوحة تحكم فورية" },
  "taqyeemi.flow.step4_title": {
    en: "Centralized Management Dashboard",
    ar: "لوحة تحكم فورية للإدارة",
  },
  "taqyeemi.flow.step4_desc": {
    en: "Track feedback across all branches with unread alerts, rating filters, and operational metrics.",
    ar: "متابعة الملاحظات، فرز التقييمات، ومراقبة أداء كل الفروع لحظة بلحظة.",
  },

  "taqyeemi.stand.eyebrow": { en: "PHYSICAL STANDS", ar: "الحوامل الميدانية" },
  "taqyeemi.stand.title": { en: "Custom acrylic stands for tables and checkouts.", ar: "حامل أكريليك مخصص لنقاط البيع والطاولات." },
  "taqyeemi.stand.desc": {
    en: "Engineered from durable high-gloss acrylic, the Taqyeemi stand sits directly at cash registers, dining tables, and reception desks to capture customer sentiment on the spot.",
    ar: "مصنوع من أكريليك فاخر ومتين، يوضع على طاولات المطاعم ومكاتب الاستقبال ونقاط الدفع ليحول كل زيارة إلى فرصة لبناء السمعة.",
  },
  "taqyeemi.stand.feat1": {
    en: "Instant NFC contactless tap",
    ar: "تمرير لا تلامسي فوري (NFC)",
  },
  "taqyeemi.stand.feat2": {
    en: "High-resolution dynamic QR code",
    ar: "رمز QR عالي الوضوح",
  },
  "taqyeemi.stand.feat3": {
    en: "Zero app downloads required",
    ar: "بدون تحميل أي تطبيق",
  },
  "taqyeemi.stand.feat4": {
    en: "Custom branded acrylic design",
    ar: "تصميم أنيق بطباعة اسم وهوية منشأتك",
  },

  "taqyeemi.dash.eyebrow": { en: "DASHBOARD SHOWCASE", ar: "لوحة التحكم المركزية" },
  "taqyeemi.dash.title": {
    en: "Clear data that drives real operational improvements.",
    ar: "بيانات حقيقية تساعدك على تحسين الخدمة.",
  },
  "taqyeemi.dash.desc": {
    en: "The Taqyeemi portal gives management full visibility into customer satisfaction, new feedback alerts, and branch rating distributions in real time.",
    ar: "شاشة متابعة واضحة لمديري الفروع والإدارة تعرض التقييمات الجديدة ومتوسط الرضا وتنبيهات الملاحظات غير المقروءة.",
  },
  "taqyeemi.dash.feat1": {
    en: "Real-time feedback feed with branch and time stamps",
    ar: "سجل فوري بالملاحظات مع التوقيت والفرع",
  },
  "taqyeemi.dash.feat2": {
    en: "Precise average rating and review volume metrics",
    ar: "حساب دقيق لمتوسط التقييم العام",
  },
  "taqyeemi.dash.feat3": {
    en: "Unread feedback notification counters",
    ar: "تنبيهات فورية للملاحظات الواردة",
  },
  "taqyeemi.dash.feat4": {
    en: "Star rating filters (1-Star, 2-Star, 3-Star)",
    ar: "فرز التقييمات حسب النجوم (1-3 نجوم)",
  },
  "taqyeemi.dash.feat5": {
    en: "One-click 'Mark as Handled' workflow",
    ar: "تحديد الملاحظات كمقروءة ومتابعة معالجتها",
  },
  "taqyeemi.dash.feat6": {
    en: "Direct preview of customer review flow",
    ar: "معاينة مباشرة لمسار العميل",
  },

  "taqyeemi.sim.eyebrow": {
    en: "INTERACTIVE SIMULATOR PREVIEW",
    ar: "معاينة المحاكي التفاعلي",
  },
  "taqyeemi.sim.title": {
    en: "Test the customer experience directly.",
    ar: "جرّب مسار العميل بنفسك.",
  },
  "taqyeemi.sim.desc": {
    en: "See how the Taqyeemi review funnel routes 4–5 star ratings to Google Maps while capturing 1–3 star feedback privately for management.",
    ar: "تعرّف كيف يفرّق النظام بين التقييم الإيجابي الموجه لـ Google والملاحظات الخاصة التي تصل للإدارة مباشرة.",
  },
  "taqyeemi.sim.cta": {
    en: "Try Interactive Simulator on Taqyeemi ↗",
    ar: "تجربة المحاكي على موقع تقييمي ↗",
  },

  "taqyeemi.story.eyebrow": { en: "CUSTOMER ROUTING", ar: "مسار التقييم الذكي" },
  "taqyeemi.story.title": {
    en: "Two clear paths: Review growth & reputation defense.",
    ar: "مساران واضحان: زيادة التقييمات وحماية السمعة.",
  },
  "taqyeemi.story.pos_label": {
    en: "POSITIVE EXPERIENCE (4–5 STARS)",
    ar: "تقييم إيجابي (4–5 نجوم)",
  },
  "taqyeemi.story.pos_title": {
    en: "Direct Google Maps Review Flow",
    ar: "توجيه مباشر لخرائط Google",
  },
  "taqyeemi.story.pos_desc": {
    en: "Customers who select 4 or 5 stars are guided straight to your Google Maps profile to submit their public review.",
    ar: "العملاء الذين يختارون 4 أو 5 نجوم يتم تحويلهم فوراً لصفحتك على Google Maps لكتابة تقييمهم ونشره.",
  },
  "taqyeemi.story.neg_label": {
    en: "CONSTRUCTIVE FEEDBACK (1–3 STARS)",
    ar: "ملاحظات وتطوير (1–3 نجوم)",
  },
  "taqyeemi.story.neg_title": {
    en: "Private Management Communication Channel",
    ar: "نموذج مباشر وسري للإدارة",
  },
  "taqyeemi.story.neg_desc": {
    en: "Customers rating 1 to 3 stars receive a private form so issues reach your management dashboard rather than public review feeds.",
    ar: "العملاء الذين واجهوا ملاحظة يُتاح لهم نموذج خاص لتصل رسالتهم للإدارة مباشرة دون نشرها علناً.",
  },

  "taqyeemi.benefits.eyebrow": { en: "BUSINESS RESULTS", ar: "النتائج المباشرة" },
  "taqyeemi.benefits.title": {
    en: "Three direct advantages for your business.",
    ar: "ثلاث نتائج مباشرة لنشاطك التجاري.",
  },
  "taqyeemi.benefits.b1_title": {
    en: "Grow your Google Maps rating",
    ar: "رفع تقييمك على Google Maps",
  },
  "taqyeemi.benefits.b1_desc": {
    en: "Make it effortless for satisfied customers to review you, improving your local Google ranking and winning more foot traffic.",
    ar: "تسهيل وصول العملاء الراضين لصفحة التقييم، مما يحسن ترتيبك في نتائج البحث ويزيد الزيارات لفروعك.",
  },
  "taqyeemi.benefits.b2_title": {
    en: "Catch complaints before they go public",
    ar: "استدراك الملاحظات قبل النشر",
  },
  "taqyeemi.benefits.b2_desc": {
    en: "Give unhappy customers a private direct channel to share frustration, allowing your team to resolve issues immediately.",
    ar: "استقبال شكاوى وملاحظات العملاء مباشرة وبسرية لمعالجة المشكلة قبل أن تتحول لتقييم سلبي عام.",
  },
  "taqyeemi.benefits.b3_title": {
    en: "Data-driven operational decisions",
    ar: "قرارات تشغيلية مبنية على الواقع",
  },
  "taqyeemi.benefits.b3_desc": {
    en: "Consolidate real-time customer ratings across all branches into one dashboard to spot trends and staff performance.",
    ar: "جمع آراء الزوار من كل الفروع في مكان واحد لمعرفة نقاط القوة والخلل بدقة واتخاذ قرارات تحسين مستمرة.",
  },

  "taqyeemi.muhab.eyebrow": {
    en: "ENGINEERED BY MUHAB",
    ar: "مطور بالكامل بواسطة مُهاب",
  },
  "taqyeemi.muhab.title": {
    en: "Taqyeemi is a complete digital product engineered by MUHAB.",
    ar: "تقييمي هو أحد المنتجات الرقمية المطورة بالكامل في مُهاب.",
  },
  "taqyeemi.muhab.desc": {
    en: "Muhab designs and develops custom web platforms, NFC customer tools, and high-performance management systems for Saudi retail and hospitality businesses.",
    ar: "نصمم ونبرمج في مُهاب تطبيقات ويب مخصصة وأنظمة تشغيل وأدوات تقنية تخدم قطاعات الضيافة والتجزئة والخدمات في السوق السعودي.",
  },
  "taqyeemi.muhab.cta": {
    en: "START YOUR PROJECT WITH MUHAB →",
    ar: "ابدأ مشروعك الرقمي مع مُهاب ←",
  },

  "taqyeemi.final.title": {
    en: "Deploy Taqyeemi in your branches today.",
    ar: "اطلب نظام تقييمي لفروعك اليوم.",
  },
  "taqyeemi.final.sub": {
    en: "Get branded physical stands delivered and dashboard access configured for your business locations.",
    ar: "نوفر الحوامل المطبوعة بهوية منشأتك مع تفعيل لوحة التحكم والربط المباشر مع خرائط Google.",
  },

  "badge.responsive": { en: "100% Mobile Optimized", ar: "توافق تام مع الجوال" },
  "badge.performance": { en: "Fast Loading Speed", ar: "سرعة تحميل فائقة" },
  "badge.saudi": { en: "Saudi Market Compliance", ar: "مخصص للسوق السعودي" },
  "badge.seo": { en: "Google Search Ready", ar: "مهيأ لنتائج Google" },

  "services.title": {
    en: "Digital Services Built for Measurable Outcomes",
    ar: "خدمات رقمية واضحة تحقق نتائج ملموسة",
  },
  "services.sub": {
    en: "We design and develop custom websites and web systems focused on high conversion, speed, and direct customer engagement.",
    ar: "نصمم ونبني مواقع وتطبيقات تركز على وضوح العرض وسرعة التحميل وزيادة طلبات واستفسارات العملاء.",
  },

  "modal.title": { en: "Start Your Project with MUHAB", ar: "ابدأ مشروعك مع مُهاب" },
  "modal.desc": {
    en: "Enter your contact details and choose your required service. Our Saudi Webmakers team will reach out via WhatsApp.",
    ar: "أدخل بياناتك واختر الخدمة المطلوبة وسيتواصل معك فريق صُنّاع المواقع عبر الواتساب لتحديد تفاصيل مشروعك.",
  },
  "modal.name": { en: "Full Name", ar: "الاسم الكريم" },
  "modal.name_placeholder": { en: "e.g. Abdullah Al-Otaibi", ar: "مثال: عبد الله العتيبي" },
  "modal.business_name": { en: "Business / Project Name", ar: "اسم المنشأة أو المشروع" },
  "modal.business_placeholder": { en: "e.g. Al-Nakheel Cafe", ar: "مثال: كافيه النخيل" },
  "modal.whatsapp": { en: "WhatsApp Number", ar: "رقم الواتساب" },
  "modal.whatsapp_placeholder": {
    en: "e.g. 0500000000",
    ar: "05XXXXXXXX",
  },
  "modal.select_service": { en: "Select Service / Package", ar: "اختر الخدمة أو الباقة المطلوبة" },
  "modal.service_required_error": {
    en: "Please select a service or package.",
    ar: "يرجى اختيار الخدمة أو الباقة المطلوبة.",
  },
  "modal.whatsapp_invalid_error": {
    en: "Please enter a valid phone number.",
    ar: "يرجى إدخال رقم هاتف صحيح.",
  },
  "modal.group.websites": { en: "CUSTOM WEBSITES", ar: "المواقع الإلكترونية المخصصة" },
  "modal.pkg.basic.title": { en: "Basic Business Website", ar: "موقع تعريفي أساسي" },
  "modal.pkg.basic.sub": { en: "Starter showcase site", ar: "عرض الخدمات والهوية والواتساب" },
  "modal.pkg.custom.title": { en: "Custom Web Platform", ar: "موقع تجاري مخصص" },
  "modal.pkg.custom.sub": { en: "Full interactive experience", ar: "قوائم تفاعلية وطلبات مخصصة" },
  "modal.pkg.crm.title": { en: "CRM Web System", ar: "موقع مع نظام إدارة متكامل" },
  "modal.pkg.crm.sub": {
    en: "Coming Soon",
    ar: "قريباً",
  },
  "modal.group.apps": { en: "BUSINESS SYSTEMS & PRODUCTS", ar: "أنظمة ومنتجات الأعمال" },
  "modal.pkg.taqyeemi.title": { en: "Taqyeemi System", ar: "نظام تقييمي" },
  "modal.pkg.taqyeemi.sub": {
    en: "NFC/QR stands & review dashboard",
    ar: "حوامل ذكية ولوحة متابعة التقييمات",
  },
  "modal.pkg.pointpass.title": { en: "PointPass Loyalty Cards", ar: "بوينت باس (كروت الولاء)" },
  "modal.pkg.pointpass.sub": {
    en: "Apple & Google Wallet digital passes",
    ar: "كروت وأختام رقمية في محفظة الجوال",
  },
  "modal.coming_soon": { en: "Coming Soon", ar: "قريباً" },
  "modal.unavailable": { en: "Unavailable", ar: "غير متاح" },
  "modal.submit": { en: "SUBMIT PROJECT REQUEST →", ar: "إرسال طلب المشروع ←" },
  "modal.submitting": { en: "Submitting request...", ar: "جاري إرسال الطلب..." },
  "modal.success_title": { en: "Request Received Successfully!", ar: "تم استلام طلبك بنجاح!" },
  "modal.success_desc": {
    en: "Thank you for contacting MUHAB. Reference number: ",
    ar: "شكراً لتواصلك مع مُهاب. رقم المرجع الخاص بطلبك: ",
  },
  "modal.success_sub": {
    en: "Our team will review your project requirements and message you directly on WhatsApp shortly.",
    ar: "سيراجع فريقنا متطلبات مشروعك وسنتواصل معك عبر الواتساب في أقرب وقت.",
  },
  "modal.close": { en: "Close", ar: "إغلاق" },
  "modal.new_request": { en: "Submit Another Request", ar: "إرسال طلب جديد" },
  "modal.submit_error": {
    en: "Unable to submit your request right now. Please try again or message us directly.",
    ar: "تعذر إرسال الطلب حالياً. يرجى المحاولة مرة أخرى أو التواصل معنا عبر الواتساب مباشرة.",
  },
  "modal.retry": { en: "Try Again", ar: "إعادة المحاولة" },

  "footer.tag": {
    en: "MUHAB creates fast custom websites and digital systems that increase sales for Saudi businesses.",
    ar: "مُهاب — نصنع مواقع إلكترونية مخصصة وسريعة تزيد مبيعاتك وتعزز سمعتك في السوق السعودي.",
  },
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "footer.contact": { en: "Contact Us", ar: "تواصل معنا" },
  "footer.quick_links": { en: "Navigation", ar: "روابط سريعة" },
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
  const [lang, setLang] = useState<Lang>("ar");

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
    return o[`${key}${suffix}`] || o[`${key}_ar`] || o[key];
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
