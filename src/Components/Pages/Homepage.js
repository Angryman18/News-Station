import HomeLeft from "../Content/HomeLeft";
import HomeRight from "../Content/HomeRight";
import style from "./Homepage.module.css";

const Homepage = ({ section }) => {
  return (
    <div className={style.home_main}>
      <div className={style.home_left}>
        <h1>{section}</h1>
        <HomeLeft />
      </div>
      <div className={style.home_right}>
        <HomeRight />
      </div>
    </div>
  );
};

export default Homepage;
