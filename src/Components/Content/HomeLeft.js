import React from "react";
import style from "./HomeLeft.module.css";
import NewsItem from "./Items/NewsItem";
import { useSelector } from "react-redux";
import NewsCard2 from "./Items/NewsCard2";

function HomeLeft() {
  const data = useSelector((state) => state.data);
  return (
    <React.Fragment>
      <div className={style.homeleft_main}>
        {data.slice(0, 6).map((item, idx) => {
          return <NewsItem key={idx} {...item} />;
        })}
      </div>
      <NewsCard2 />
    </React.Fragment>
  );
}

export default HomeLeft;
