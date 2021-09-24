import style from "./Trending.module.css";
import React from "react";
import { useSelector } from "react-redux";

const Trending = () => {
  const getTitle = useSelector((state) => state.data);
  const [news, setNews] = React.useState({ title: "", link: "" });
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (index === getTitle.length) {
      setIndex(0);
      return;
    }
    const getNews = getTitle[index];
    setNews(() => {
      return { title: getNews.title, link: getNews.url };
    });

    setTimeout(() => {
      setIndex(() => index + 1);
    }, 5000);
  }, [index, getTitle]);

  return (
    <div className={style.trending}>
      <div className={style.trending_text}>Trending News</div>
      <div className={style.trending_news}>
        <a href={news.link} target="_blank" rel="noreferrer">{news.title}</a>
      </div>
    </div>
  );
};

export default Trending;
