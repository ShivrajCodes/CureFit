import React, { useEffect, useState } from "react";
import NewsHeadlines from "./NewsHeadlines";
import axios from "axios";
import News from "./News";

const Home = () => {
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
    <div className="space-y-10">
      <NewsHeadlines articles={articles} />
      <News articles={articles} />
    </div>
  );
};

export default Home;
