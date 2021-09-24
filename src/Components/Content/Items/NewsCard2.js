import style from "./NewsCard2.module.css";
import { useSelector } from "react-redux";
import { constDate } from "../../../Functions.js/Date";

const NewsCard2 = () => {
  const news = useSelector((state) => state.data);
  return (
    <div className={style.card2_main}>
      {news.slice(0, 5).map((item, idx) => {
        return (
          <div key={idx} className={style.card2_body}>
            <div className={style.card2_thumbnail}>
              <img src={item.image} alt="thumbnail" />
              <span>{item.category}</span>
            </div>
            <div>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.title}
              </a>
              <p>{item.description.slice(0, 150)}...</p>
              <small>{constDate(item.published_at)}</small>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsCard2;
