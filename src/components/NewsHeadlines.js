
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import ArticleMetadata from "./ArticleMetadata";

const SLIDESHOW_DURATION = 5;
const SLIDESHOW_DURATION_RECOMMENDED = 3;

const NewsHeadlines = ({ articles }) => {
  const [currentInd, setCurrentInd] = useState(0);
  const [recommendedInd, setRecommendedInd] = useState(0);

  const heroActicles = articles.slice(0, 3);
  const recommendedArticles = articles.slice(6, 12);
  const recommendedCards = articles.slice(3, 6);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInd((prev) => {
        if (prev === 2) return 0;
        return prev + 1;
      });
    }, SLIDESHOW_DURATION * 1000);

    const recommendedInterval = setInterval(() => {
      setRecommendedInd((prev) => {
        if (prev === 2) return 0;
        return prev + 1;
      });
    }, SLIDESHOW_DURATION_RECOMMENDED * 1000);

    return () => {
      clearInterval(interval);
      clearInterval(recommendedInterval);
    };
  }, []);

  if (!articles.length) {
    return;
  }

  return (
    <div className="relative px-4 flex h-screen">
      {/* Main section */}
      <div
        className="absolute w-full overflow-hidden h-full inset-0 z-0"
        style={{
          background: `url('${heroActicles[currentInd].urlToImage}') center  / cover no-repeat `,
        }}
      >
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_60%_15%,_var(--tw-gradient-stops))] from-background/70 to-60% to-background z-10"></div>
      </div>
      <section className="relative z-10 py-4 flex flex-1 flex-col justify-between ">
        <div className="space-y-6 my-auto">
          <div className="bg-gradient-to-r from-purple-200 w-fit flex gap-4">
            <span className="w-1 self-stretch rounded-r-full bg-purple-400"></span>
            <p className="font-semibold m-2">BEST OF TODAY</p>
          </div>

          <ArticleMetadata
            author={heroActicles[currentInd].source.name}
            publishedAt={heroActicles[currentInd].publishedAt}
          />
          <h2 className="text-5xl font-semibold max-w-screen-md">
            {heroActicles[currentInd].title}
          </h2>

          <a className="block w-fit" href={heroActicles[currentInd].url}>
            <button className="flex gap-2 items-center px-4 py-2 bg-white rounded-full">
              Read article <ArrowRight size={16} />
            </button>
          </a>
        </div>

        <div className="flex gap-6 w-[80%]">
          {heroActicles.map((article, ind) => {
            return (
              <article
                key={article.title}
                className={
                  "space-y-4 transition-all " +
                  (heroActicles[currentInd].title === article.title
                    ? "opacity-100"
                    : "opacity-20")
                }
              >
                <div className="bg-muted w-8">
                  <div
                    style={{
                      width: currentInd === ind ? "100%" : "0%",
                      transitionProperty: "width",
                      transitionDuration:
                        heroActicles[currentInd].title === article.title
                          ? `${SLIDESHOW_DURATION}s`
                          : "0s",
                    }}
                    className={` bg-foreground h-1 rounded-full w-0 `}
                  ></div>
                </div>

                <ArticleMetadata
                  author={article.source.name}
                  publishedAt={article.publishedAt}
                />
                <h3 className="text-lg font-semibold line-clamp-2">
                  {article.title}
                </h3>
              </article>
            );
          })}
        </div>
      </section>
      {/* recommended section */}
      <section className="flex-[0_0_22rem] overflow-y-scroll space-y-6  relative my-4 p-4 rounded-xl z-20 bg-white/50">
        <h2>Recommended</h2>
        <div
          className="rounded-xl overflow-hidden  bg-cover p-4 relative"
          style={{
            backgroundImage: `url('${recommendedCards[recommendedInd].urlToImage}')`,
          }}
        >
          <div className="absolute w-full h-full bg-gradient-to-tl from-purple-400 to-white/40 inset-0"></div>
          <div className="relative z-10 space-y-12 ">
            <div className="bg-muted  w-8 ">
              <div
                style={{
                  animationDuration: `${SLIDESHOW_DURATION_RECOMMENDED}s`,
                  animationDelay: "-0.4s",
                  animationIterationCount: "infinite",
                }}
                className={`animate-progress  bg-foreground h-1 rounded-full w-0 `}
              ></div>
            </div>
            <div className="relative z-10">
              <ArticleMetadata
                author={recommendedCards[recommendedInd].source.name}
                publishedAt={recommendedCards[recommendedInd].publishedAt}
              />
              <h2 className="font-semibold text-white line-clamp-2">
                {recommendedCards[recommendedInd].title}
              </h2>
            </div>
          </div>
        </div>
        <div className="space-y-2 ">
          {recommendedArticles.map((article, ind) => {
            return (
              <>
                <article className="flex gap-4 hover:bg-white/50 p-3 rounded-lg transition-colors">
                  <div className="space-y-1 flex-1">
                    <ArticleMetadata
                      author={article.source.name}
                      publishedAt={article.publishedAt}
                    />
                    <h2 className="line-clamp-2 font-semibold">
                      {article.title}
                    </h2>
                  </div>
                  <div className="flex-[0_0_5rem] overflow-hidden rounded-lg">
                    <img
                      src={article.urlToImage ?? "/placeholder.jpg"}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                </article>
                {ind !== recommendedArticles.length - 1 && (
                  <hr className="border-muted-foreground" />
                )}
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default NewsHeadlines;
