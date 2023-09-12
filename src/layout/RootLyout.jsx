import { NavLink, Outlet } from "react-router-dom";

import Logo from "../assets/react-router.svg";
import BreadCrumbs from "../components/BreadCrumbs";
import "../components/sass/Header.scss";

function RootLyout() {
  return (
    <>
      <header className="App__header">
        <div className="Header__container">
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
        </div>

        <div className="Header__map">
          <BreadCrumbs />
        </div>
        
      </header>

      <main className="App__main">
        <Outlet />
      </main>

      <footer className="App__footer">
        <h1>React Router DOM 2023 ©</h1>
      </footer>
    </>
  );
}

export default RootLyout;
