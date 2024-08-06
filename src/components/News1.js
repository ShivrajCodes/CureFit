import React, { useState, useEffect } from "react";
import axios from "axios";

const News1 = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://proxy-dp4q.onrender.com/news");
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Medical News</h2>
      <ul className="space-y-4">
        {articles.map((article, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {article.title}
              </h3>
              <p className="text-gray-600">{article.description}</p>
              <a
                href={article.url}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News1;
