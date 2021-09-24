import style from "./LatestNews.module.css";
import { useSelector } from "react-redux";
import React from "react";

const LatestNews = () => {
  const getData = useSelector((state) => state.data);
  return (
    <div className={style.main}>
      <div className={style.block}>Latest News</div>
      <div className={style.newsSection}>
        {getData.slice(0, 15).map((item, idx) => {
          return (
            <div key={idx}>
              <span>&#8227;</span>
              <a key={idx} href={item.url} target="_blank" rel="noreferrer">
                <li>{item.title}</li>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestNews;
