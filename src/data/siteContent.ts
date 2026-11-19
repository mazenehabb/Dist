import type { Localized } from "@/types/content";

export interface ServiceItem {
  id: string;
  number: string;
  icon: "shield" | "clipboard" | "microscope" | "factory" | "graduation" | "megaphone";
  title: Localized<string>;
  description: Localized<string>;
  items: Localized<string[]>;
}

export const services: ServiceItem[] = [
  {
    id: "systems",
    number: "01",
    icon: "shield",
    title: { en: "Systems & standards", ar: "الأنظمة والمعايير" },
    description: {
      en: "Document, implement, review, and improve food safety and quality systems around the needs of the operation.",
      ar: "توثيق أنظمة سلامة الغذاء والجودة وتطبيقها ومراجعتها وتحسينها بما يلائم احتياجات التشغيل.",
    },
    items: {
      en: ["HACCP, TACCP & VACCP", "ISO and management systems", "FSSC 22000, BRCGS, IFS & SQF", "Halal, Kosher & organic systems"],
      ar: ["HACCP وTACCP وVACCP", "ISO وأنظمة الإدارة", "FSSC 22000 وBRCGS وIFS وSQF", "أنظمة الحلال والكوشير والمنتجات العضوية"],
    },
  },
  {
    id: "risk",
    number: "02",
    icon: "microscope",
    title: { en: "Risk, validation & verification", ar: "المخاطر والتحقق والتصديق" },
    description: {
      en: "Support for hazard and business risk assessment, shelf-life validation, verification, and product compliance.",
      ar: "دعم تقييم مخاطر الأخطار والأعمال والتحقق من مدة الصلاحية والتصديق على مطابقة المنتجات.",
    },
    items: {
      en: ["Physical, chemical, biological, allergen & quality risks", "Shelf-life validation", "Product compliance programs", "Business risk audits"],
      ar: ["المخاطر الفيزيائية والكيميائية والبيولوجية ومسببات الحساسية والجودة", "التحقق من مدة الصلاحية", "برامج مطابقة المنتجات", "تدقيق مخاطر الأعمال"],
    },
  },
  {
    id: "auditing",
    number: "03",
    icon: "clipboard",
    title: { en: "Food safety auditing", ar: "تدقيق سلامة الغذاء" },
    description: {
      en: "Third-party audit procedures and practical review of controls across processing, retail, and supply environments.",
      ar: "إجراءات التدقيق من طرف ثالث ومراجعة عملية للضوابط في بيئات التصنيع والتجزئة والتوريد.",
    },
    items: {
      en: ["Third-party audits", "HACCP system review", "Supplier and site assessments", "Food safety and quality systems"],
      ar: ["التدقيق من طرف ثالث", "مراجعة أنظمة HACCP", "تقييم الموردين والمنشآت", "أنظمة سلامة الغذاء والجودة"],
    },
  },
  {
    id: "improvement",
    number: "04",
    icon: "factory",
    title: { en: "Product & process improvement", ar: "تحسين المنتجات والعمليات" },
    description: {
      en: "Troubleshooting and practical support for product, process, line, and facility design challenges.",
      ar: "حل المشكلات ودعم عملي لتحديات المنتجات والعمليات وخطوط الإنتاج وتصميم المنشآت.",
    },
    items: {
      en: ["Process troubleshooting", "Product and shelf-life improvement", "New line and plant support", "Hygienic facility layout"],
      ar: ["حل مشكلات التشغيل", "تحسين المنتج ومدة صلاحيته", "دعم خطوط ومصانع جديدة", "التخطيط الصحي للمنشآت"],
    },
  },
  {
    id: "training",
    number: "05",
    icon: "graduation",
    title: { en: "Training & workforce development", ar: "التدريب وتطوير العاملين" },
    description: {
      en: "Course development and delivery aligned with customer needs, industry standards, and practical work skills.",
      ar: "إعداد الدورات وتقديمها بما يتوافق مع احتياجات العملاء ومعايير الصناعة والمهارات العملية.",
    },
    items: {
      en: ["Food safety culture", "GMP and prerequisite programs", "Internal auditor training", "Allergen and pathogen control"],
      ar: ["ثقافة سلامة الغذاء", "ممارسات التصنيع الجيد والبرامج التمهيدية", "تدريب المدققين الداخليين", "إدارة مسببات الحساسية والميكروبات"],
    },
  },
  {
    id: "hygiene-posters",
    number: "06",
    icon: "megaphone",
    title: { en: "Hygiene communication", ar: "التوعية بالنظافة" },
    description: {
      en: "The company profile describes 40 visual posters for hygiene and food safety awareness in food facilities.",
      ar: "يذكر ملف الشركة 40 ملصقًا بصريًا للتوعية بالنظافة وسلامة الغذاء في منشآت الأغذية.",
    },
    items: {
      en: ["Food safety awareness", "Employee hygiene", "Visual learning aids", "Culture and continuity"],
      ar: ["التوعية بسلامة الغذاء", "نظافة العاملين", "وسائل تعليم بصري", "الثقافة والاستمرارية"],
    },
  },
  {
    id: "specialist-support",
    number: "07",
    icon: "clipboard",
    title: { en: "Regulatory & specialist support", ar: "الدعم التنظيمي والتخصصي" },
    description: {
      en: "Targeted guidance on national and international requirements, product information, and specialist food safety programs listed in DIST’s company profile.",
      ar: "دعم متخصص للمتطلبات المحلية والدولية ومعلومات المنتجات وبرامج سلامة الغذاء الواردة في ملف ديست.",
    },
    items: {
      en: ["Egyptian food authority, EU & Codex requirements", "Nutrition labelling", "Pathogen environmental monitoring", "Foodborne outbreak investigation", "SEDEX & Yum! Brands consultancy"],
      ar: ["المتطلبات المصرية والأوروبية ودستور الغذاء", "بطاقات البيانات الغذائية", "الرصد البيئي لمسببات الأمراض", "التحقيق في تفشي الأمراض المنقولة بالغذاء", "استشارات SEDEX وYum! Brands"],
    },
  },
];

export const standards: Localized<string[]> = {
  en: ["HACCP", "TACCP", "VACCP", "ISO 9001", "ISO 14001", "ISO 17025", "ISO 22000", "ISO 45001", "FSSC 22000", "BRCGS", "IFS", "SQF", "GLOBALG.A.P.", "Halal", "Kosher", "Organic", "EFQM"],
  ar: ["HACCP", "TACCP", "VACCP", "ISO 9001", "ISO 14001", "ISO 17025", "ISO 22000", "ISO 45001", "FSSC 22000", "BRCGS", "IFS", "SQF", "GLOBALG.A.P.", "حلال", "كوشير", "عضوي", "EFQM"],
};

export const trainingTopics: Localized<string[]> = {
  en: ["Basic food safety (Levels 1–4)", "ISO 9001, ISO 14001 & ISO 45001", "ISO 17025 & ISO 22000", "HACCP, TACCP & VACCP", "FSSC 22000", "BRCGS Global Food Safety", "BRCGS Packaging & HARA", "Foreign material management", "Allergen management", "Pathogen control", "Good Manufacturing Practices", "Food safety culture & employee behavior", "Internal auditing (ISO 19011)", "Prerequisite programs", "Foodborne disease control", "CCP monitoring"],
  ar: ["أساسيات سلامة الغذاء (المستويات 1–4)", "ISO 9001 وISO 14001 وISO 45001", "ISO 17025 وISO 22000", "HACCP وTACCP وVACCP", "FSSC 22000", "BRCGS لسلامة الغذاء", "BRCGS للتعبئة وHARA", "إدارة الأجسام الغريبة", "إدارة مسببات الحساسية", "مكافحة مسببات الأمراض", "ممارسات التصنيع الجيد", "ثقافة سلامة الغذاء وسلوك العاملين", "التدقيق الداخلي (ISO 19011)", "البرامج التمهيدية", "مكافحة الأمراض المنقولة بالغذاء", "مراقبة نقاط التحكم الحرجة"],
};

export const sectors: Localized<string[]> = {
  en: ["Food processing", "Retail", "Meat, fish & poultry", "Produce suppliers", "Packaging materials"],
  ar: ["تصنيع الأغذية", "التجزئة", "اللحوم والأسماك والدواجن", "مورّدو المنتجات الزراعية", "مواد التعبئة والتغليف"],
};

export const contactDetails = {
  email: "dist.egyptoffice@gmail.com",
  phones: ["+20 155 566 7581", "+20 128 418 3313"],
  address: {
    en: "Plot No. 6, Block 36, 6th of October Association, km 23 Ismailia Desert Road, Cairo, Egypt",
    ar: "قطعة 6، بلوك 36، جمعية 6 أكتوبر، الكيلو 23 طريق الإسماعيلية الصحراوي، القاهرة، مصر",
  },
};

export const companyFacts: Localized<{ established: string; focus: string; reach: string }> = {
  en: {
    established: "Egypt · 2019",
    focus: "Food safety & quality",
    reach: "Middle East · India · Malaysia · more",
  },
  ar: {
    established: "مصر · 2019",
    focus: "سلامة الغذاء والجودة",
    reach: "الشرق الأوسط · الهند · ماليزيا · وغيرها",
  },
};
