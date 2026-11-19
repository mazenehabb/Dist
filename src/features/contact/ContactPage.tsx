import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PageMotion } from "@/components/animations/PageMotion";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { contactDetails } from "@/data/siteContent";
import { useLocale } from "@/hooks/useLocale";
import { usePageMetadata } from "@/components/shared/Metadata";
import { createContactDraft } from "@/services/contactService";
import { contactSchema, type ContactFormValues } from "./contactSchema";

export function ContactPage() {
  const { locale, t } = useLocale();
  const [prepared, setPrepared] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: { name: "", email: "", organization: "", message: "" },
  });
  usePageMetadata(t("contact.pageTitle"), t("contact.intro"));

  const submit = handleSubmit((values) => {
    window.location.href = createContactDraft(values, locale);
    setPrepared(true);
  });

  return (
    <PageMotion>
      <div className="contact-page">
        <section className="page-hero page-hero--paper mx-auto w-full max-w-7xl px-6">
          <div className="page-hero__meta"><span className="eyebrow eyebrow--gold">{t("contact.eyebrow")}</span><span className="mono">DIST / 04</span></div>
          <h1 data-reveal>{t("contact.title")}</h1>
          <p className="page-hero__intro" data-reveal>{t("contact.intro")}</p>
        </section>

        <section className="contact-layout section-pad">
          <div className="section-shell mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-[.72fr_1.28fr]">
            <aside className="contact-details" data-reveal>
              <span className="eyebrow eyebrow--gold">{t("footerReach")}</span>
              <div className="contact-details__item"><Mail aria-hidden="true" size={19} /><div><span>{t("contact.email")}</span><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></div></div>
              <div className="contact-details__item"><Phone aria-hidden="true" size={19} /><div><span>{t("contact.phone")}</span>{contactDetails.phones.map((phone) => <a href={`tel:${phone.replaceAll(" ", "")}`} key={phone}>{phone}</a>)}</div></div>
              <div className="contact-details__item"><MapPin aria-hidden="true" size={19} /><div><span>{t("contact.address")}</span><p>{contactDetails.address[locale]}</p></div></div>
              <div className="contact-details__seal"><img alt="" loading="lazy" src="/images/logo.jpg" /><span>DIST<br /><small>EGYPT</small></span></div>
            </aside>

            <form className="contact-form" noValidate onSubmit={(event) => void submit(event)}>
              <div className="contact-form__heading"><span className="eyebrow eyebrow--gold">01 — 04</span><h2>{t("contact.formTitle")}</h2></div>
              <div className="form-row">
                <label className="form-field"><span>{t("contact.name")} <i>*</i></span><Input autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} placeholder={t("contact.namePlaceholder")} {...register("name")} />{errors.name && <small className="field-error" id="name-error" role="alert">{t("contact.errorName")}</small>}</label>
                <label className="form-field"><span>{t("contact.emailLabel")} <i>*</i></span><Input autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} placeholder={t("contact.emailPlaceholder")} type="email" {...register("email")} />{errors.email && <small className="field-error" id="email-error" role="alert">{t("contact.errorEmail")}</small>}</label>
              </div>
              <label className="form-field"><span>{t("contact.organization")}</span><Input autoComplete="organization" placeholder={t("contact.organizationPlaceholder")} {...register("organization")} /></label>
              <label className="form-field"><span>{t("contact.message")} <i>*</i></span><Textarea aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} placeholder={t("contact.messagePlaceholder")} rows={5} {...register("message")} />{errors.message && <small className="field-error" id="message-error" role="alert">{t("contact.errorMessage")}</small>}</label>
              {prepared && <p className="form-success" role="status">{t("contact.openEmail")} <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></p>}
              <div className="contact-form__submit"><Button disabled={isSubmitting} type="submit">{t("contact.submit")}<ArrowUpRight aria-hidden="true" className="directional-icon" size={17} /></Button><p>{t("contact.privacy")}</p></div>
            </form>
          </div>
        </section>
      </div>
    </PageMotion>
  );
}
