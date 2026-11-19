import type { Category, Post } from "@/types/content";

export const categories: Category[] = [
  { slug: "food-safety", label: { en: "Food safety", ar: "سلامة الغذاء" } },
  { slug: "environment", label: { en: "Environment", ar: "البيئة" } },
  { slug: "community", label: { en: "Company life", ar: "من أخبار الشركة" } },
];

const images = {
  ghg: [
    { src: "/images/posts/post1/1.jpg", alt: { en: "DIST team at a client meeting", ar: "فريق ديست خلال اجتماع عمل" } },
    { src: "/images/posts/post1/2.jpg", alt: { en: "Participants in a project review meeting", ar: "المشاركون في اجتماع لمراجعة المشروع" } },
    { src: "/images/posts/post1/3.jpg", alt: { en: "A project discussion around the meeting table", ar: "نقاش حول المشروع على طاولة الاجتماع" } },
  ],
  community: [
    { src: "/images/posts/post2/1.jpg", alt: { en: "A team gathering at Swefish", ar: "لقاء لفريق العمل في مطعم سوي فيش" } },
  ],
  marengo: [
    { src: "/images/posts/post3/1.jpg", alt: { en: "Food production staff in a processing area", ar: "العاملون في منطقة تجهيز الأغذية" } },
    { src: "/images/posts/post3/2.jpg", alt: { en: "A team inside the Marengo production facility", ar: "فريق داخل منشأة مارنجو للإنتاج" } },
    { src: "/images/posts/post3/3.jpg", alt: { en: "Colleagues at a food production line", ar: "زملاء بجوار خط إنتاج غذائي" } },
  ],
  brcgs: [
    { src: "/images/posts/post4/1.jpg", alt: { en: "A project team meeting", ar: "اجتماع لفريق المشروع" } },
    { src: "/images/posts/post4/2.jpg", alt: { en: "Team members gathered around a meeting table", ar: "أعضاء الفريق حول طاولة الاجتماع" } },
  ],
} as const;

export const posts: Post[] = [
  {
    id: "post-3",
    slug: "marengo-fssc-22000-qualification",
    title: {
      en: "A food safety milestone at Marengo",
      ar: "خطوة مهمة في سلامة الغذاء بمصنع مارنجو",
    },
    excerpt: {
      en: "A note of thanks to the Marengo team after a factory qualification project against FSSC 22000 Version 6.0.",
      ar: "رسالة شكر لفريق مارنجو بعد نجاح مشروع تأهيل المصنع وفق متطلبات FSSC 22000 الإصدار السادس.",
    },
    content: {
      en: [
        { type: "paragraph", text: "By God's grace, the work is complete and its goals are achieved." },
        { type: "paragraph", text: "My sincere thanks and appreciation to the outstanding team at the Egyptian confectionery and snack food company (Marengo) for their fruitful cooperation and dedicated efforts over the past months. Their work led to a successful factory qualification project against international food safety standards." },
        { type: "paragraph", text: "FSSC 22000 Version 6.0 — Food Safety System Certification." },
      ],
      ar: [
        { type: "paragraph", text: "الحمد لله الذي بنعمته يكتمل العمل وتتحقق المقاصد." },
        { type: "paragraph", text: "أتقدم بخالص الشكر والتقدير لفريق العمل المتميز بمصنع الشركة المصرية لصناعة الحلوى والأغذية الخفيفة (مارنجو) على روح التعاون المثمرة والجهود المخلصة التي بذلت خلال الأشهر الماضية والتي أثمرت – بفضل الله – عن نجاح تنفيذ مشروع تأهيل المصنع وفق متطلبات المواصفات العالمية لسلامة الغذاء" },
        { type: "paragraph", text: "FSSC 22000 Version 6.0 – Food Safety System Certification" },
      ],
    },
    coverImage: images.marengo[0],
    images: [...images.marengo],
    category: categories[0],
    tags: { en: ["FSSC 22000", "Factory qualification"], ar: ["FSSC 22000", "تأهيل المصانع"] },
    author: { en: "DIST", ar: "ديست" },
    sourceLocale: "ar",
    publishedAt: null,
    status: "published",
    featured: true,
    seo: {
      en: { title: "Marengo factory qualification | DIST", description: "A project note about Marengo and FSSC 22000 Version 6.0." },
      ar: { title: "تأهيل مصنع مارنجو | ديست", description: "رسالة عن مشروع مارنجو ومتطلبات FSSC 22000 الإصدار السادس." },
    },
    readingMinutes: { en: 1, ar: 1 },
  },
  {
    id: "post-1",
    slug: "ghg-inventory-verification-al-oula",
    title: {
      en: "GHG Inventory verification for Al Oula",
      ar: "التحقق من تقرير البصمة الكربونية لشركة الأولى",
    },
    excerpt: {
      en: "A project milestone for the GHG Inventory report and carbon management.",
      ar: "خطوة مهمة في تقرير البصمة الكربونية وإدارة الكربون.",
    },
    content: {
      en: [
        { type: "paragraph", text: "Praise be to God, by whose grace good work is completed." },
        { type: "paragraph", text: "Successful verification work for the GHG Inventory report — the carbon footprint of Al Oula Real Estate Finance Company." },
        { type: "paragraph", text: "An important step toward sustainability and carbon management, following established scientific methodologies." },
      ],
      ar: [
        { type: "paragraph", text: "الحمد لله الذي بنعمته تتم الصالحات" },
        { type: "paragraph", text: "نجاح أعمال Verification لتقرير الـ GHG Inventory البصمة الكربونية لشركة التعمير للتمويل العقاري – الأولى (Al Oula)" },
        { type: "paragraph", text: "خطوة مهمة نحو Sustainability & Carbon Management وفق منهجيات علمية معتمدة" },
      ],
    },
    coverImage: images.ghg[0],
    images: [...images.ghg],
    category: { slug: "environment", label: { en: "Environment", ar: "البيئة" } },
    tags: { en: ["GHG Inventory", "Carbon management"], ar: ["GHG Inventory", "إدارة الكربون"] },
    author: { en: "DIST", ar: "ديست" },
    sourceLocale: "ar",
    publishedAt: null,
    status: "published",
    featured: false,
    seo: {
      en: { title: "GHG Inventory verification | DIST", description: "DIST project note on the GHG Inventory report for Al Oula." },
      ar: { title: "التحقق من تقرير البصمة الكربونية | ديست", description: "رسالة من ديست حول تقرير GHG Inventory لشركة الأولى." },
    },
    readingMinutes: { en: 1, ar: 1 },
  },
  {
    id: "post-4",
    slug: "brcgs-global-standard-food-safety-issue-9",
    title: {
      en: "BRCGS Global Standard Food Safety (Issue 9)",
      ar: "المعيار العالمي لسلامة الغذاء BRCGS (الإصدار التاسع)",
    },
    excerpt: {
      en: "A short reference to BRCGS Global Standard Food Safety, Issue 9, from the supplied post.",
      ar: "إشارة موجزة إلى المعيار العالمي لسلامة الغذاء BRCGS، الإصدار التاسع، كما وردت في المنشور المرفق.",
    },
    content: {
      en: [{ type: "paragraph", text: "BRCGS Global Standard Food Safety (Issue 9)" }],
      ar: [{ type: "paragraph", text: "المعيار العالمي لسلامة الغذاء BRCGS (الإصدار التاسع)" }],
    },
    coverImage: images.brcgs[0],
    images: [...images.brcgs],
    category: categories[0],
    tags: { en: ["BRCGS", "Food safety standards"], ar: ["BRCGS", "معايير سلامة الغذاء"] },
    author: { en: "DIST", ar: "ديست" },
    sourceLocale: "en",
    publishedAt: null,
    status: "published",
    featured: false,
    seo: {
      en: { title: "BRCGS Issue 9 | DIST", description: "A supplied post referencing the BRCGS Global Standard Food Safety, Issue 9." },
      ar: { title: "BRCGS الإصدار التاسع | ديست", description: "منشور يشير إلى المعيار العالمي لسلامة الغذاء BRCGS، الإصدار التاسع." },
    },
    readingMinutes: { en: 1, ar: 1 },
  },
  {
    id: "post-2",
    slug: "a-moment-to-remember",
    title: {
      en: "A moment to remember",
      ar: "لحظات جميلة تبقى في الذاكرة دائمًا…",
    },
    excerpt: {
      en: "A personal note of thanks to the people who made a celebration memorable.",
      ar: "رسالة شكر شخصية لكل من جعل الاحتفال ذكرى جميلة.",
    },
    content: {
      en: [
        { type: "paragraph", text: "Beautiful moments that will always remain in memory…" },
        { type: "paragraph", text: "My heartfelt thanks and appreciation for this wonderful celebration, which made me very happy and reflected a spirit of appreciation and graciousness." },
        { type: "paragraph", text: "Special thanks to Ms. Yasmine El Sweify, manager of the wonderful seafood restaurant Swefish, for the thoughtful organization and attention to detail." },
        { type: "paragraph", text: "I also extend my sincere gratitude and appreciation to my respected teacher, Professor Dr. Amir El-Sewefi, consultant in orthopedic surgery and executive director of the Nautilus Academy for Fishing and Marine Sciences, for his continued support and care." },
        { type: "paragraph", text: "Thanks to the whole team for this thoughtful gesture, which I value deeply. Wishing you lasting success." },
      ],
      ar: [
        { type: "paragraph", text: "لحظات جميلة تبقى في الذاكرة دائمًا…" },
        { type: "paragraph", text: "أتقدم بخالص الشكر والتقدير على هذا الاحتفال الرائع الذي أسعدني كثيرًا، والذي يعكس روح التقدير والذوق الراقي." },
        { type: "paragraph", text: "شكر خاص للأستاذة Yasmine El Sweify ، مديرة مطعم الاسماك الرائع Swefish ، على هذا التنظيم المميز والاهتمام بالتفاصيل." },
        { type: "paragraph", text: "كما أتقدم بخالص الامتنان والتقدير لأستاذي الفاضل الأستاذ الدكتور Amir El-Sewefi ، استشارى جراحة العظام والمدير التنفيذي لأكاديمية Nautilus لصيد الأسماك والعلوم البحرية، على دعمه واهتمامه الدائم." },
        { type: "paragraph", text: "كل الشكر لفريق العمل على هذه اللفتة الطيبة التي أعتز بها كثيرًا، وأتمنى لكم دوام النجاح والتوفيق" },
      ],
    },
    coverImage: images.community[0],
    images: [...images.community],
    category: categories[2],
    tags: { en: ["Community", "Company life"], ar: ["مجتمع", "من أخبار الشركة"] },
    author: { en: "DIST", ar: "ديست" },
    sourceLocale: "ar",
    publishedAt: null,
    status: "published",
    featured: false,
    seo: {
      en: { title: "A moment to remember | DIST", description: "A personal thank-you note shared with the DIST community." },
      ar: { title: "لحظات جميلة | ديست", description: "رسالة شكر شخصية إلى فريق العمل ومجتمع ديست." },
    },
    readingMinutes: { en: 2, ar: 1 },
  },
];
