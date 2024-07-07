import React from "react";
import ArticleMetadata from "./ArticleMetadata";

const NewsCard = ({ article }) => {
  return (
    <a href={article.url}>
      <article className="space-y-2 h-full hover:bg-white px-4 py-3 transition-colors rounded-xl">
        <ArticleMetadata
          author={article.source.name}
          publishedAt={article.publishedAt}
        />
        <div className="h-64 overflow-hidden rounded-xl">
          <img
            src={article.urlToImage ?? "/placeholder.jpg"}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <h2 className="font-semibold text-xl line-clamp-3">{article.title}</h2>
      </article>
    </a>
  );
};

export default NewsCard;