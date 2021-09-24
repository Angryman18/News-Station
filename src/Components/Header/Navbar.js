import style from "./Navbar.module.css";
import React from "react";
import NavbarItem from "./NavBarItem";
import NavbarTab from "./NavbarTab";

const Navbar = () => {
  return (
    <React.Fragment>
      <NavbarTab />
      <nav className={style.nav}>
        <ul className={style.menu}>
          <NavbarItem title="Home" to="/" activeNavlink={style.activeLink} />
          <NavbarItem
            title="Business"
            to="/business"
            activeNavlink={style.activeLink}
          />
          <NavbarItem
            title="Sports"
            to="/sports"
            activeNavlink={style.activeLink}
          />
          <NavbarItem
            title="Entertainment"
            to="/entertainment"
            activeNavlink={style.activeLink}
          />
          <NavbarItem
            title="Health"
            to="/health"
            activeNavlink={style.activeLink}
          />
          <NavbarItem
            title="Science"
            to="/science"
            activeNavlink={style.activeLink}
          />
          <NavbarItem
            title="Technology"
            to="/technology"
            activeNavlink={style.activeLink}
          />
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
