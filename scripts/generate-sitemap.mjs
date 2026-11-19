import { readFile, writeFile } from "node:fs/promises";

function readConfiguredSiteUrl() {
  if (process.env.SITE_URL || process.env.VITE_SITE_URL) return process.env.SITE_URL || process.env.VITE_SITE_URL;
  return readFile(".env", "utf8").then((file) => {
    const match = file.match(/^VITE_SITE_URL\s*=\s*["']?([^\s"']+)["']?\s*$/m);
    return match?.[1];
  }).catch(() => undefined);
}

const siteUrl = (await readConfiguredSiteUrl())?.replace(/\/$/, "");
if (!siteUrl) {
  console.info("VITE_SITE_URL is not set; add the production domain to generate dist/sitemap.xml.");
  process.exit(0);
}

const source = await readFile("src/repositories/mock/mockData.ts", "utf8");
const slugs = [...source.matchAll(/id:\s*"post-[^"]+",\s*slug:\s*"([^"]+)"/g)].map((match) => match[1]);
const paths = ["/", "/about", "/services", "/insights", "/contact", ...slugs.map((slug) => `/insights/${slug}`)];
const urls = paths.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`).join("\n");
await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, "utf8");
console.info(`Generated sitemap for ${paths.length} routes.`);
