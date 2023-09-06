import { NavLink, Outlet } from 'react-router-dom';
import InstagramLogo from '../assets/pngwing.com.png'

import "../components/sass/Header.scss";

function LayoutContact() {
  return (
    <div className="Contact__page container">
      <div className="Contact__container container">
        <div className="Contact__link">
          <a href="https://www.instagram.com/darkuser005/">
            <img src={InstagramLogo} alt="logo" />
          </a>
        </div>
      </div>

      <nav>
        <NavLink to="faq" className="item__link">FAQ</NavLink>
        <NavLink to="form" className="item__link">Form</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default LayoutContact;
