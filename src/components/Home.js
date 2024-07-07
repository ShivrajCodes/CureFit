import React, { useEffect, useState } from "react";
import NewsHeadlines from "./NewsHeadlines";
import axios from "axios";
import News from "./News";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              country: "in",
              category: "health",
              apiKey: "a90d56913ccc436ba23b2360a5794ad7",
            },
          }
        );
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
