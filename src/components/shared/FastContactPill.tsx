import { useState } from "react";
import { MessageSquare, Phone, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import { contactDetails } from "@/data/siteContent";
import { useLocale } from "@/hooks/useLocale";

export function FastContactPill() {
  const { locale } = useLocale();
  const isRtl = locale === "ar";
  const [isOpen, setIsOpen] = useState(false);

  const cleanWhatsapp = contactDetails.phones[0].replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(
    isRtl
      ? "مرحبًا شركة ديست، أرغب في استشارة حول تأهيل منشأتنا لمتطلبات سلامة الغذاء والاعتماد الدولي."
      : "Hello DIST, I would like to inquire about food safety qualification and certification consulting for our facility.",
  )}`;

  return (
    <div className="fast-contact-widget">
      {isOpen && (
        <div className="fast-contact-popover">
          <div className="fast-contact-popover__header">
            <div className="fast-contact-popover__title">
              <ShieldCheck size={16} className="text-gold" />
              <strong>{isRtl ? "تواصل مباشر مع مستشاري ديست" : "Direct Advisory Hotline"}</strong>
            </div>
            <button
              aria-label={isRtl ? "إغلاق" : "Close"}
              className="fast-contact-popover__close"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <X size={15} />
            </button>
          </div>

          <p className="fast-contact-popover__text">
            {isRtl
              ? "فريقنا الهندسي متاح للإجابة على استفسارات التأهيل والتدقيق الميداني."
              : "Our technical consultants are available to assist with audit preparation and plant compliance."}
          </p>

          <div className="fast-contact-popover__links">
            <a
              className="fast-contact-channel fast-contact-channel--wa"
              href={whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageSquare size={17} />
              <div>
                <strong>{isRtl ? "محادثة واتساب فورية" : "Instant WhatsApp"}</strong>
                <small>{contactDetails.phones[0]}</small>
              </div>
              <ArrowUpRight size={15} className="directional-icon" />
            </a>

            <a
              className="fast-contact-channel fast-contact-channel--phone"
              href={`tel:${contactDetails.phones[1].replace(/[^0-9+]/g, "")}`}
            >
              <Phone size={16} />
              <div>
                <strong>{isRtl ? "اتصال هاتفي مباشر" : "Direct Phone Line"}</strong>
                <small>{contactDetails.phones[1]}</small>
              </div>
              <ArrowUpRight size={15} className="directional-icon" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        aria-expanded={isOpen}
        aria-label={isRtl ? "قنوات التواصل المباشر" : "Direct contact channels"}
        className={`fast-contact-trigger ${isOpen ? "is-active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span className="fast-contact-trigger__glow" />
        <span className="fast-contact-trigger__dot" />
        <MessageSquare size={19} />
        <span className="fast-contact-trigger__label">
          {isRtl ? "استشارة فورية" : "Direct Advisory"}
        </span>
      </button>
    </div>
  );
}
