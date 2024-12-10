import { ArticleProps } from "@/types/types";
import { getStrapiURL } from "@/utils/api";
import React, { useEffect } from "react";

const FeaturedNews: React.FC<ArticleProps> = ({ articles }) => {
  const sortedArticles = articles.sort((a, b) => {
    const dateA = new Date(a.attributes.publishedAt).getTime();
    const dateB = new Date(b.attributes.publishedAt).getTime();
    return dateB - dateA;
  });

  const recentArticles = sortedArticles.slice(0, 3);

  return (
    <div className="bg-gradient-to-t from-indigo-300 to-blue-500 flex justify-center">
      <section className="flex flex-col justify-center antialiased text-white ">
        <h1 className="text-5xl text-white font-bold m-[30px]">
          Featured News
        </h1>
        <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
          {recentArticles.map((article) => {
            const publishedAtDate = new Date(article.attributes.publishedAt);
            const formattedDate = publishedAtDate.toISOString().split("T")[0];
            return (
              <article
                key={article.id}
                className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center m-[30px]"
              >
                <a className="relative block group" href="#0">
                  <div
                    className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                    aria-hidden="true"
                  ></div>
                  <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                    {article.attributes.thumbnail && (
                      <img
                        className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                        src={getStrapiURL(
                          article.attributes.thumbnail.data.attributes.url
                        )}
                        alt="thumbnail"
                        width={
                          article.attributes.thumbnail.data.attributes.width
                        }
                        height={
                          article.attributes.thumbnail.data.attributes.height
                        }
                      />
                    )}
                  </figure>
                </a>
                <div>
                  <div>
                    <div className="mb-3">
                      <ul className="flex flex-wrap text-xs font-medium -m-1">
                        <li className="m-1">
                          <a
                            className="inline-flex text-center text-white py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                            href={`/news/${article.attributes.slug}`}
                          >
                            {article.attributes.category}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                      <a
                        className="hover:text-purple-800 transition duration-150 ease-in-out"
                        href={`/news/${article.attributes.slug}`}
                      >
                        {article.attributes.title}
                      </a>
                    </h3>
                  </div>
                  <p className="text-lg text-white flex-grow">
                    {article.attributes.summary}
                  </p>
                  <div className="flex items-center mt-4">
                    <div>
                      <span className="text-white">{formattedDate}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div
        x-show="open"
        className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60"
        x-data="{ open: true }"
      ></div>
    </div>
  );
};
export default FeaturedNews;
