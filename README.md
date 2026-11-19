# DIST website

React + TypeScript + Vite implementation for DIST, styled with Tailwind CSS v4 and an accessible shadcn/ui component foundation. The project uses React Router, i18next, TanStack Query, Axios, React Hook Form, Zod, Lucide, and GSAP ScrollTrigger.

## Run locally

```sh
npm install
npm run dev
```

Set `VITE_DATA_SOURCE=api` only after the future API implements the contracts in `src/repositories/api/ApiPostRepository.ts`. The default is the local mock repository. The contact form currently validates entries and prepares a mailto draft; it does not send data to a backend.

## Content and launch notes

- The company facts are taken from `DIST company profile.pdf` and the short discovery inventory is in `DISCOVERY.md`.
- Post fields are kept bilingual and separate. English is an editorial translation of the supplied Arabic copy; Arabic source text remains in the Arabic content fields.
- No publication dates were present in the supplied post files, so dates remain `null` and the interface labels them as not supplied.
- Add the production host as `VITE_SITE_URL` in the deployment environment to generate `dist/sitemap.xml` during build. `public/robots.txt` is included.
- Configure the host to serve `index.html` as the fallback for application routes.

## Production rendering and SEO

Vite serves this site as a client-rendered SPA, so page metadata is updated after JavaScript loads and search crawlers may not receive fully rendered article content from the first response. For production SEO, prerender the fixed pages and each published article route to HTML at build time, and emit matching canonical URLs and a sitemap from the same content repository. If the content API becomes dynamic and page-level metadata must be available on first response for each item, move rendering to a React Router framework/server-rendered deployment and retain the same repositories and feature components.
