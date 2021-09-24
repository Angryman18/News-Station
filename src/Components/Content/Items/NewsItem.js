import style from "./NewsItem.module.css";
import { strDate } from "../../../Functions.js/Date";

function NewsItem({ url, image, title, author, published_at, altName, source }) {


  return (
    <div id={style.newscat}>
      <a href={url} target="_blank" rel="noreferrer">
        <img
          src={
            image !== null ? image : "https://i.stack.imgur.com/y9DpT.jpg"
          }
          alt={altName}
        />
        <div className={style.shadow}></div>
        <div className={style.newstitle}>
          <small>{source.toUpperCase()}</small>
          <p>{title}</p>
          <p>
            {author === null ? "Unknown" : author} - {strDate(published_at)}
          </p>
        </div>
      </a>
    </div>
  );
}

export default NewsItem;
