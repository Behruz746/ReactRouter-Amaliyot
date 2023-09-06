import { NavLink, Outlet } from "react-router-dom";

import Logo from "../assets/react-router.svg";
import "./sass/Header.css";

function Header() {
  return (
    <header className="App__header">
      <div className="Header__logo">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="Logo" />
        </NavLink>
      </div>
      <nav className="Header__nav">
        <ul className="nav__list">
          <li className="list__items">
            <NavLink to="/" className="item__link">
              Home
            </NavLink>
          </li>
          <li className="list__items">
            <NavLink to="/about" className="item__link">
              About
            </NavLink>
          </li>
          <li className="list__items">
            <NavLink to="/contact" className="item__link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
