# DIST website discovery

## Inventory

- `images/logo.jpg` is the supplied JPG logo. It is a circular navy-and-gold seal with the DIST name and English and Arabic company wording. The site will use this artwork as supplied.
- `DIST company profile.pdf` is a 15-page profile created in 2022. It identifies Development Company for Integrated Systems and Training (DIST) as an Egypt-based food safety and quality consultancy launched in 2019. The profile describes food safety management system (FSMS) and quality management system (QMS) consultancy and training, with work across the Middle East, India, Malaysia, and other regions.
- The profile states the company vision as becoming a knowledge manager and champion for food safety training, education, auditing, and consultancy. Its mission focuses on training and HACCP, ISO, and GFSI consulting, delivering education and consulting services, and being accountable to clients. Listed values are visible, decisive, relevant, and responsive.
- The profile lists management-system consulting and implementation; gap analysis; food safety and quality risk assessment; validation and verification; shelf-life and product-compliance work; third-party auditing; product and process improvement; factory and line layout support; training; and 40 hygiene and food safety posters. Specialist services named include Egyptian food authority, EU and Codex requirements, nutrition labelling, pathogen environmental monitoring, foodborne outbreak investigation, and SEDEX and Yum! Brands consultancy. Named standards include HACCP, TACCP, VACCP, ISO, FSSC 22000, BRCGS, IFS, SQF, GlobalG.A.P., Halal, Kosher, organic, and EFQM.
- The profile includes selected project/client examples. This site will use the supplied post materials as its project examples and will not add unverified client claims.
- Contact information printed in the profile: Plot No. 6, Block 36, 6th of October Association, km 23 Ismailia Desert Road, Cairo, Egypt; `dist.egyptoffice@gmail.com`; `+20 155 566 7581`; `+20 128 418 3313`.

## Post inventory

| Folder | Source content | Associated images | Missing data |
| --- | --- | --- | --- |
| `images/postsImages/post1` | Arabic note about GHG Inventory verification and carbon management for Al Oula | 3 project-meeting photos | Publication date; English source copy |
| `images/postsImages/post2` | Arabic thank-you note about an event, naming Swefish and Dr. Amir El-Sewefi | 1 event photo | Publication date; English source copy |
| `images/postsImages/post3` | Arabic note about Marengo factory qualification against FSSC 22000 Version 6.0; text file is named `psot.txt` | 3 factory photos | Publication date; English source copy |
| `images/postsImages/post4` | One English line: “BRCGS Global Standard Food Safety (Issue 9)” | 2 meeting photos | Article context, publication date, author |

Each post folder is kept independent. The four additional numbered JPGs directly under `postsImages` have no matching text or folder association, so they are excluded. `post3/1_files` is a large saved Facebook page cache (250 files), not a curated post image set, and is excluded from the website build.

## Design and implementation direction

Use the original navy-and-gold seal as the brand anchor, paired with warm paper backgrounds, deep ink surfaces, restrained gold rules, and a contemporary editorial grid. Use Manrope for English, Aref Ruqaa for Arabic display headings, and Noto Sans Arabic for Arabic body copy. Keep photography rectangular and let spacing, typography, rules, and numbering carry the visual identity; reserve rounded surfaces for the hero image and a few controls. Use only the curated project and event photos. Scroll interactions reveal editorial groups and images, with subtle parallax on selected photos; the layout remains readable without motion and on narrow screens.

Build a React, TypeScript, and Vite app with Tailwind CSS v4, React Router, i18next, TanStack Query, an Axios API client, and a repository boundary around mock content. Keep shared types and structured post blocks separate from page components. Add Arabic RTL and English LTR presentation, validated contact form behavior that opens a prefilled email draft, reduced-motion handling, page metadata, a sitemap generation script that requires the real production URL, and a basic robots file.

## Information to confirm before launch

- Consultant’s preferred public name, biography, qualifications, headshot, and byline. The supplied profile does not include an individual consultant bio.
- Publication dates and any missing full article copy, especially for the one-line BRCGS post.
- Approval for English editorial translations of the Arabic posts and for publishing named people and clients.
- Production domain for canonical URLs and sitemap generation; social profiles; contact-form API destination; and any privacy or terms copy.
