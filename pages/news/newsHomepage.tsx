import React, { useState } from "react";
import { Article } from "@/types/types";

import { Pagination, TextField } from "@mui/material";
import NewsCard from "./newsCard";

interface Props {
  articles?: Article[];
}

const NewsHomepage: React.FC<Props> = ({ articles = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  const containsText = (content: any[], term: string): boolean => {
    for (const item of content) {
      if (item.type === "text" && item.text.toLowerCase().includes(term)) {
        return true;
      } else if (item.children && containsText(item.children, term)) {
        return true;
      }
    }
    return false;
  };

  let filteredArticles = [...articles];

  if (searchTerm) {
    filteredArticles = articles.filter((article) => {
      return (
        article.attributes.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        article.attributes.summary
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        containsText(article.attributes.content, searchTerm.toLowerCase())
      );
    });
  }

  if (!searching) {
    filteredArticles.sort((a, b) => {
      const dateA = new Date(a.attributes.publishedAt).getTime();
      const dateB = new Date(b.attributes.publishedAt).getTime();
      return dateB - dateA;
    });
  }

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  if (!currentArticles) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-[100px] max-w-full mx-auto">
      <TextField
        label="Search by Title, Summary, or Content"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setSearching(e.target.value !== "");
        }}
        fullWidth
        sx={{ mb: 2 }}
      />

      {searching ? (
        <div className="grid gap-8 md:grid-cols-1 mb-8">
          {currentArticles.map((article, index) => (
            <div key={article.id}>
              <NewsCard article={article} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="grid gap-8 md:grid-cols-1 mb-8">
            {currentArticles.slice(0, 1).map((article) => (
              <div key={article.id}>
                <NewsCard article={article} />
              </div>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-8">
            {currentArticles.slice(1, 4).map((article) => (
              <div key={article.id}>
                <NewsCard article={article} />
              </div>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-8">
            {currentArticles.slice(4, 10).map((article) => (
              <div key={article.id}>
                <NewsCard article={article} />
              </div>
            ))}
          </div>
        </div>
      )}

      <Pagination
        count={Math.ceil(filteredArticles.length / articlesPerPage)}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
        sx={{ marginTop: "20px" }}
      />
    </div>
  );
};

export default NewsHomepage;
