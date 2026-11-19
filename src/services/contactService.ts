import type { ContactFormValues } from "@/features/contact/contactSchema";
import { contactDetails } from "@/data/siteContent";
import type { Locale } from "@/types/content";

export function createContactDraft(values: ContactFormValues, locale: Locale) {
  const subject = locale === "ar" ? `استفسار من ${values.name}` : `Website enquiry from ${values.name}`;
  const lines = [
    `${locale === "ar" ? "الاسم" : "Name"}: ${values.name}`,
    `${locale === "ar" ? "البريد الإلكتروني" : "Email"}: ${values.email}`,
    values.organization ? `${locale === "ar" ? "الشركة" : "Organization"}: ${values.organization}` : "",
    "",
    values.message,
  ].filter((line) => line !== "");
  return `mailto:${contactDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}
