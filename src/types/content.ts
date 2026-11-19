export type Locale = "en" | "ar";
export type Localized<T> = Record<Locale, T>;

export interface Category {
  slug: string;
  label: Localized<string>;
}

export interface MediaImage {
  src: string;
  alt: Localized<string>;
  caption?: Localized<string>;
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "image"; image: MediaImage };

export interface PostSeo {
  title: string;
  description: string;
}

export interface Post {
  id: string;
  slug: string;
  title: Localized<string>;
  excerpt: Localized<string>;
  content: Localized<ContentBlock[]>;
  coverImage: MediaImage;
  images: MediaImage[];
  category: Category;
  tags: Localized<string[]>;
  author: Localized<string>;
  sourceLocale: Locale;
  publishedAt: string | null;
  status: "draft" | "published";
  featured: boolean;
  seo: Localized<PostSeo>;
  readingMinutes: Localized<number>;
}

export interface PostFilters {
  category?: string;
  tag?: string;
  query?: string;
  locale?: Locale;
}

export interface PaginationOptions extends PostFilters {
  page?: number;
  pageSize?: number;
}

export interface PaginatedResult<T> {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
  hasMore: boolean;
}
