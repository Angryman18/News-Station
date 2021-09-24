import style from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_main}>
        <div className={style.footer_first}>
          <h4>&copy; News Station - 2021</h4>
          <p>
            Get the latest and top trending news around the world. One News One
            Nation, Stay Updated with News Station
          </p>
        </div>
        <div className={style.footer_middle}>
          <h3>Social Links</h3>
          <hr />
          <div className={style.social}>
            <span>
              <i className="fab fa-github"></i>
            </span>
            <span>
              <i className="fab fa-facebook"></i>
            </span>
            <span>
              <i className="fab fa-twitter"></i>
            </span>
            <span>
              <i className="fab fa-linkedin-in"></i>
            </span>
            <span>
              <i className="fab fa-youtube"></i>
            </span>
          </div>
        </div>
        <div className={style.footer_last}>
          <h3>Quick Links</h3>
          <hr />
          <div>
            <Link to="#">Contact</Link>
            <Link to="#">Terms and Policy</Link>
            <Link to="#">Career</Link>
            <Link to="#">Disclaimer</Link>
            <Link to="#">Advertise</Link>
          </div>
        </div>
      </div>
      <div className={style.footer_credit}>
        Designed by{" "}
        <a
          href="https://facebook.com/imsmahanta"
          target="_blank"
          rel="noreferrer"
        >
          Shyam Mahanta
        </a>
      </div>
    </div>
  );
};

export default Footer;
