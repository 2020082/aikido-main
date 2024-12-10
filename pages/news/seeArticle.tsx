import React from "react";
import { Article } from "@/types/types";

interface Props {
  article: Article | null;
}

const SeeArticle: React.FC<Props> = ({ article }) => {
  if (!article?.attributes) {
    return <div>Loading...</div>;
  }

  const { publishedAt, category, title, summary, content, thumbnail } =
    article.attributes;

  return (
    <div>
      <div className="text-center pt-16 md:pt-16">
        <p className="text-2xl md:text-1xl text-orange-500 font-bold">
          {publishedAt.split("T")[0]}
          <span className="text-white">/</span> {category}
        </p>
        <h1 className="font-bold break-normal text-white text-3xl md:text-6xl">
          {title}
        </h1>
      </div>
      <div className="w-full max-w-2xl mx-auto bg-white bg-cover mt-8 rounded">
        <img
          src={
            thumbnail?.data?.attributes?.url && thumbnail.data.attributes.url
          }
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded" />

      <div className="max-w-5xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal">
            <p className="text-2xl md:text-3xl mb-5">{summary}</p>

            <div className="py-6">
              {content.map((item, index) => (
                <div key={index}>
                  {item.type === "paragraph" && (
                    <p>{item.children.map((child) => child.text).join("")}</p>
                  )}
                  {/* Add additional checks/rendering for other types if needed */}
                </div>
              ))}
            </div>
            <div className="justify-end" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeArticle;
