import { NavLink } from "react-router-dom";

const NavbarItem = ({ title, to, activeNavlink, desktop }) => {
  const setScroll = () => {
    const scroll = document.documentElement.scrollTop;

    if (desktop) {
      scroll > 200 && window.scrollTo({top: 100, behavior: "smooth"})
    } else {
      scroll > 150 && window.scrollTo({top: 0, behavior: "smooth"})
    }
  };

  return (
    <NavLink onClick={setScroll} exact activeClassName={activeNavlink} to={to}>
      <li>{title}</li>
    </NavLink>
  );
};

NavbarItem.defaultProps = {
  desktop: true
}

export default NavbarItem;
