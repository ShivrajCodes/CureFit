import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsHeadlines from "./NewsHeadlines";
import News from "./News";
import ArticleModal from "./ArticleModal";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [serverStarting, setServerStarting] = useState(true); // New state to track server startup

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://proxy-dp4q.onrender.com/news");
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      } finally {
        setServerStarting(false); // Set serverStarting to false once the request is complete
      }
    };

    fetchNews();
  }, []);

  const openModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedArticle(null);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-10">
      {serverStarting ? (
        <div className="flex justify-center items-center h-screen">
          <div className="flex space-x-2">
            <div
              className="w-4 h-4 bg-purple-500 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-4 h-4 bg-purple-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-4 h-4 bg-purple-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      ) : loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <>
          <NewsHeadlines articles={articles} onArticleClick={openModal} />
          <News articles={articles} onArticleClick={openModal} />
          <ArticleModal isOpen={isModalOpen} onRequestClose={closeModal} article={selectedArticle} />
        </>
      )}
    </div>
  );
};

export default Home;
