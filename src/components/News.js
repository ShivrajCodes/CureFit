import React from "react";
import NewsCard from "./NewsCard";

const News = ({ articles }) => {
  return (
    <div className="grid grid-cols-3 gap-4 px-4">
      {articles.map((article) => {
        return <NewsCard key={article.title} article={article} />;
      })}
    </div>
  );
};

export default News;