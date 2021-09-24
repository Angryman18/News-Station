import React from "react";
import style from "./NavbarTab.module.css";
import NavbarItem from "./NavBarItem";
import { Link } from "react-router-dom";

const NavbarTab = () => {
  const [clicked, setClicked] = React.useState(false);

  const ShowNav = (e) => {
    setClicked(!clicked);
  };

  return (
    <React.Fragment>
      <nav className={style.mobileNav}>
        <div>
          <Link to="/"><h3>News Station</h3></Link>
        </div>
        <ul onClick={ShowNav} className={clicked ? style.active : style.menu}>
          <NavbarItem title="Home" to="/" activeNavlink={style.activeLink} desktop={false} />
          <NavbarItem
            title="Business"
            to="/business"
            activeNavlink={style.activeLink}
            desktop={false}
          />
          <NavbarItem
            title="Sports"
            to="/sports"
            activeNavlink={style.activeLink}
            desktop={false}
          />
          <NavbarItem
            title="Entertainment"
            to="/entertainment"
            activeNavlink={style.activeLink}
            desktop={false}
          />
          <NavbarItem
            title="Health"
            to="/health"
            activeNavlink={style.activeLink}
            desktop={false}
          />
          <NavbarItem
            title="Science"
            to="/science"
            activeNavlink={style.activeLink}
            desktop={false}
          />
          <NavbarItem
            title="Technology"
            to="/technology"
            activeNavlink={style.activeLink}
            desktop={false}
          />
        </ul>
        <div onClick={ShowNav} className={style.icon}>
          {!clicked ? (
            <i className="fas fa-bars"></i>
          ) : (
            <i className="fas fa-times"></i>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavbarTab;
