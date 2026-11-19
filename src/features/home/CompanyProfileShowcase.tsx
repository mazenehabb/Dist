import { Download, ShieldCheck, Globe, Building2, Calendar, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocale } from "@/hooks/useLocale";
import { Button } from "@/components/ui/button";

export function CompanyProfileShowcase() {
  const { locale } = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="profile-showcase section-pad">
      <div className="section-shell mx-auto w-full max-w-7xl px-6">
        <div className="profile-showcase__shell">
          {/* Left Column: Prestigious Corporate Credentials */}
          <div className="profile-showcase__content">
            <div className="profile-showcase__badge">
              <span className="mono">DIST CORPORATE DOSSIER</span>
              <span className="profile-showcase__dot" />
              <span>EST. 2019</span>
            </div>

            <h2 className="profile-showcase__title">
              {isRtl
                ? "شركة تطوير للأنظمة المتكاملة والتدريب"
                : "Development Company for Integrated Systems and Training"}
            </h2>

            <p className="profile-showcase__lead">
              {isRtl
                ? "انطلقت ديست عام 2019 كبيت خبرة واستشارات متخصص في سلامة الغذاء وإدارة الجودة، لتقديم حلول عملية قابلة للتطبيق على أرض الواقع في مصر والشرق الأوسط وآسيا."
                : "Launched in 2019, DIST is an established technical consultancy dedicated to Food Safety Management Systems (FSMS) and Quality Management (QMS) across Egypt, the Middle East, India, and Malaysia."}
            </p>

            {/* 4 Corporate Pillars / Values */}
            <div className="profile-showcase__values">
              <div className="profile-val">
                <span className="mono">01</span>
                <strong>{isRtl ? "وضوح الرؤية (Visible)" : "Visible"}</strong>
                <p>{isRtl ? "إجراءات صريحة وشفافة يسهل على كل عامل فهمها." : "Clear, transparent protocols floor teams grasp."}</p>
              </div>
              <div className="profile-val">
                <span className="mono">02</span>
                <strong>{isRtl ? "الحسم الفني (Decisive)" : "Decisive"}</strong>
                <p>{isRtl ? "حلول قاطعة لنقاط التحكم الحرجة والمخاطر البيولوجية." : "Definitive action on critical control points."}</p>
              </div>
              <div className="profile-val">
                <span className="mono">03</span>
                <strong>{isRtl ? "الملائمة للتشغيل (Relevant)" : "Relevant"}</strong>
                <p>{isRtl ? "أنظمة مصممة لواقع كل مصنع وليست قوالب نظرية." : "Practices engineered around real line capacity."}</p>
              </div>
              <div className="profile-val">
                <span className="mono">04</span>
                <strong>{isRtl ? "الاستجابة السريعة (Responsive)" : "Responsive"}</strong>
                <p>{isRtl ? "مرافقة مستمرة ودعم ميداني أثناء عمليات التفتيش." : "Continuous accompaniment during inspections."}</p>
              </div>
            </div>

            {/* Actions: Download PDF + Contact */}
            <div className="profile-showcase__actions">
              <a
                className="button button--primary profile-btn"
                download="DIST-Company-Profile.pdf"
                href="/DIST company profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={17} />
                <span>{isRtl ? "تحميل ملف الشركة الرسمي (PDF)" : "Download Company Profile (PDF)"}</span>
              </a>

              <Button asChild variant="secondary" className="profile-btn-sec">
                <Link to="/about">
                  <span>{isRtl ? "نبذة عن تاريخ ديست" : "The DIST Story"}</span>
                  <ArrowUpRight size={16} className="directional-icon" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: 3D Visual Dossier Card Presentation */}
          <div className="profile-showcase__visual">
            <div className="profile-dossier-card">
              <div className="profile-dossier-card__spine" />
              <div className="profile-dossier-card__cover">
                <div className="profile-dossier-card__top">
                  <img
                    alt="DIST Seal"
                    className="profile-dossier-card__seal"
                    height="56"
                    src="/images/logo.jpg"
                    width="56"
                  />
                  <span className="profile-dossier-card__confidential mono">OFFICIAL PROFILE</span>
                </div>

                <div className="profile-dossier-card__center">
                  <span className="profile-dossier-card__code mono">DIST / 2022 EDITION</span>
                  <h3>COMPANY PROFILE & CAPABILITIES</h3>
                  <p>FOOD SAFETY & QUALITY SYSTEMS CONSULTING AND TRAINING</p>
                </div>

                <div className="profile-dossier-card__specs">
                  <div className="profile-spec">
                    <Calendar size={14} className="text-gold" />
                    <span>{isRtl ? "التأسيس: 2019" : "Founded: 2019"}</span>
                  </div>
                  <div className="profile-spec">
                    <Globe size={14} className="text-gold" />
                    <span>{isRtl ? "النطاق: الشرق الأوسط وآسيا" : "Middle East & Asia"}</span>
                  </div>
                  <div className="profile-spec">
                    <Building2 size={14} className="text-gold" />
                    <span>{isRtl ? "المقر: القاهرة، مصر" : "Cairo HQ"}</span>
                  </div>
                  <div className="profile-spec">
                    <ShieldCheck size={14} className="text-gold" />
                    <span>{isRtl ? "15 صفحة وثيقة معتمدة" : "15-Page Dossier"}</span>
                  </div>
                </div>

                <div className="profile-dossier-card__bottom">
                  <div className="profile-dossier-card__gold-foil" />
                  <span className="mono">VERIFIED AUDIT & ADVISORY FIRM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
