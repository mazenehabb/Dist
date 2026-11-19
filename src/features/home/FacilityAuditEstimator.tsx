import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { useLocale } from "@/hooks/useLocale";
import { Button } from "@/components/ui/button";

interface StandardOption {
  id: string;
  enName: string;
  arName: string;
  scope: { en: string; ar: string };
  duration: { en: string; ar: string };
  deliverables: { en: string[]; ar: string[] };
}

const STANDARDS_LIST: StandardOption[] = [
  {
    id: "fssc",
    enName: "FSSC 22000 Version 6.0",
    arName: "تأهيل واعتماد FSSC 22000 (الإصدار السادس)",
    scope: { en: "Global GFSI Benchmark for food processors", ar: "الاعتماد الدولي الأبرز لمصانع الأغذية وسلاسل التصدير" },
    duration: { en: "3 to 5 months preparation", ar: "3 إلى 5 أشهر للتأهيل والتدقيق الميداني" },
    deliverables: {
      en: ["Full PRP & OPRP validation", "Pathogen monitoring program", "Food defense & fraud plans", "Pre-certification mock audit"],
      ar: ["توثيق ومطابقة البرامج التمهيدية PRPs", "برنامج الرصد البيئي للميكروبات", "خطط الدفاع الغذائي والاحتيال", "محاكاة تفتيش الطرف الثالث الاستباقية"],
    },
  },
  {
    id: "nfsa",
    enName: "NFSA Egyptian Food Authority",
    arName: "اشتراطات الهيئة القومية لسلامة الغذاء (القائمة البيضاء)",
    scope: { en: "Statutory legal qualification for Egyptian food plants", ar: "التأهيل الإلزامي للمصانع ومحطات التعبئة للانضمام للقائمة البيضاء" },
    duration: { en: "4 to 8 weeks accelerated", ar: "4 إلى 8 أسابيع للمطابقة السريعة" },
    deliverables: {
      en: ["Statutory checklist compliance", "Water & air testing verification", "Pest control & waste protocols", "Handling official inspection"],
      ar: ["مطابقة قائمة الفحص الرسمية للهيئة", "التحقق من تحاليل المياه والتهوية", "بروتوكولات مكافحة الآفات والنفايات", "مرافقة فريق التفتيش الرسمي حتى الاعتماد"],
    },
  },
  {
    id: "brcgs",
    enName: "BRCGS Global Food Safety (Issue 9)",
    arName: "معيار BRCGS العالمي لسلامة الغذاء (الإصدار 9)",
    scope: { en: "Prerequisite for European & UK retail exports", ar: "المعيار الأساسي لتصدير الأغذية لأسواق بريطانيا وأوروبا" },
    duration: { en: "3 to 6 months comprehensive", ar: "3 إلى 6 أشهر للتجهيز والتوثيق" },
    deliverables: {
      en: ["HARA / HACCP risk alignment", "Senior management commitment", "Traceability & recall exercises", "Supplier verification systems"],
      ar: ["مواءمة خطط تحليل المخاطر HARA", "التزام الإدارة العليا وتدريبها", "اختبارات التتبع والاسترجاع الحية", "منظومة تقييم واعتماد الموردين"],
    },
  },
  {
    id: "training-hygiene",
    enName: "Floor Team Training & 40 Posters",
    arName: "تدريب المشغلين والملصقات التوعوية الـ 40",
    scope: { en: "Operational workforce qualification & behavioral change", ar: "تأهيل متداولي الأغذية وبناء ثقافة سلامة الغذاء في الصالة" },
    duration: { en: "Intensive 2 to 4 weeks workshops", ar: "ورش عمل مكثفة على مدار 2 إلى 4 أسابيع" },
    deliverables: {
      en: ["40 visual hygiene posters deployment", "GMP & allergen handler training", "Personal hygiene verification", "Certificate of completion"],
      ar: ["تثبيت الملصقات الـ 40 التوعوية بالمصنع", "تدريب المشغلين على ممارسات GMP", "فحص دورات النظافة والسلوك اليومي", "شهادات تدريب موثقة لكل عامل"],
    },
  },
];

export function FacilityAuditEstimator() {
  const { locale } = useLocale();
  const isRtl = locale === "ar";
  const [selectedId, setSelectedId] = useState<string>("fssc");

  const currentOption = STANDARDS_LIST.find((s) => s.id === selectedId) || STANDARDS_LIST[0];

  return (
    <section className="audit-estimator section-pad">
      <div className="section-shell mx-auto w-full max-w-7xl px-6">
        <div className="audit-estimator__card">
          <div className="audit-estimator__header">
            <span className="eyebrow eyebrow--gold">
              {isRtl ? "محدد نطاق التأهيل الميداني · SCOPE CALCULATOR" : "FIELD QUALIFICATION & AUDIT SCOPE"}
            </span>
            <h2>
              {isRtl
                ? "اختر المعيار المطلوب لمنشأتك واطلع على خارطة العمل"
                : "Select Your Facility Standard & Review The Roadmap"}
            </h2>
            <p>
              {isRtl
                ? "حدد متطلباتك وسيقوم خبراؤنا بتزويدك بخطة تنفيذية تتناسب مع طبيعة خطوط الإنتاج والجدول الزمني المستهدف."
                : "Pick your target benchmark to explore the exact milestone phases, deliverables, and inspection readiness plan."}
            </p>
          </div>

          {/* Standard Selectors Pills */}
          <div className="audit-estimator__pills">
            {STANDARDS_LIST.map((opt) => (
              <button
                className={`audit-pill ${selectedId === opt.id ? "is-selected" : ""}`}
                key={opt.id}
                onClick={() => setSelectedId(opt.id)}
                type="button"
              >
                <ShieldCheck size={16} />
                <span>{isRtl ? opt.arName.split(" ")[0] + " " + opt.arName.split(" ")[1] : opt.enName.split(" ")[0] + " " + opt.enName.split(" ")[1]}</span>
                {selectedId === opt.id && <span className="audit-pill__active-dot" />}
              </button>
            ))}
          </div>

          {/* Detail Box */}
          <div className="audit-estimator__detail-box">
            <div className="audit-estimator__left">
              <span className="audit-badge mono">
                <Sparkles size={13} className="text-gold" />
                {currentOption.duration[locale]}
              </span>
              <h3>{isRtl ? currentOption.arName : currentOption.enName}</h3>
              <p className="audit-scope-desc">{isRtl ? currentOption.scope.ar : currentOption.scope.en}</p>

              <div className="audit-deliverables">
                <span className="mono">{isRtl ? "مخرجات التأهيل الأساسية:" : "CORE DELIVERABLES:"}</span>
                <ul>
                  {currentOption.deliverables[locale].map((deliv) => (
                    <li key={deliv}>
                      <Check size={15} className="text-gold" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="audit-estimator__right">
              <div className="audit-cta-card">
                <div className="audit-cta-card__seal-wrap">
                  <img
                    alt="DIST Seal"
                    className="audit-cta-card__seal"
                    height="64"
                    src="/images/logo.jpg"
                    width="64"
                  />
                </div>
                <h4>{isRtl ? "جاهز لبدء التقييم الميداني؟" : "Ready For Plant Assessment?"}</h4>
                <p>
                  {isRtl
                    ? "تواصل مباشرة مع استشاري ديست لحجز زيارة تشخيص الفجوات الميدانية لمصنعك."
                    : "Schedule a preliminary on-site gap diagnosis with our food safety lead auditor."}
                </p>

                <Button asChild className="button--primary audit-booking-btn" size="default">
                  <Link to="/contact">
                    <span>{isRtl ? "طلب استشارة ميدانية" : "Request On-Site Audit"}</span>
                    <ArrowRight size={16} className="directional-icon" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
