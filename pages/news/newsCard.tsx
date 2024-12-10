import React from "react";
import Link from "next/link";
import { Article } from "@/types/types";
import { getStrapiURL } from "@/utils/api";

interface ArticleCardProps {
  article: Article;
}

const NewsCard: React.FC<ArticleCardProps> = ({ article }) => {
  const encodedSlug = encodeURIComponent(article?.attributes?.slug ?? "");
  const link = `/news/${encodedSlug}`;

  return (
    <div className="bg-white rounded overflow-hidden shadow-lg hover:bg-gray-100 h-full">
      <Link href={link}>
        <img
          src={
            article?.attributes?.thumbnail?.data?.attributes?.url &&
            getStrapiURL(article.attributes.thumbnail.data.attributes.url)
          }
          alt={article?.attributes?.title ?? ""}
          className="w-full h-[40vh] object-cover"
        />
        <div className="p-6">
          <p className="text-gray-600 text-xs md:text-sm">
            {article?.attributes?.category ?? ""}
          </p>
          <h2 className="font-bold text-xl text-gray-900 mb-2">
            {article?.attributes?.title ?? ""}
          </h2>
          <p className="text-gray-800 font-serif text-base mb-5">
            {article?.attributes?.summary ?? ""}
          </p>
          <p className="text-gray-600 text-xs md:text-sm">
            {article?.attributes?.publishedAt ?? ""}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
