export interface ArticleProps {
  articles: Article[];
}

export interface Article {
  id: number;
  attributes: {
    title: string;
    category: string;
    summary: string;
    isFeatured: boolean;
    content: { type: string; children: { type: string; text: string }[] }[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    slug: string;
    date: string | null;
    thumbnail: {
      height: string | number | undefined;
      width: string | number | undefined;
      url: string | undefined;
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              sizeInBytes: number;
              url: string;
            };
            small: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              sizeInBytes: number;
              url: string;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: any | null;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    featured: { data: any } | null;
    localizations: { data: any[] };
  };
}
