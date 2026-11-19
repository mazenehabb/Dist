import type { ContentBlock, Locale } from "@/types/content";

export function ArticleBody({ blocks, locale }: { blocks: ContentBlock[]; locale: Locale }) {
  return (
    <div className="article-body" dir={locale === "ar" ? "rtl" : "ltr"}>
      {blocks.map((block, index) => {
        if (block.type === "paragraph") return <p key={`p-${index}`}>{block.text}</p>;
        if (block.type === "heading") return block.level === 2 ? <h2 key={`h-${index}`}>{block.text}</h2> : <h3 key={`h-${index}`}>{block.text}</h3>;
        if (block.type === "quote") return <blockquote key={`q-${index}`}>{block.text}{block.attribution && <cite>{block.attribution}</cite>}</blockquote>;
        if (block.type === "list") {
          const List = block.ordered ? "ol" : "ul";
          return <List key={`l-${index}`}>{block.items.map((item) => <li key={item}>{item}</li>)}</List>;
        }
        return <figure key={`i-${index}`}><img alt={block.image.alt[locale]} loading="lazy" src={block.image.src} />{block.image.caption && <figcaption>{block.image.caption[locale]}</figcaption>}</figure>;
      })}
    </div>
  );
}
