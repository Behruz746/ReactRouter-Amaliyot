import { NavLink } from "react-router-dom";
import './PageNotFound.scss';

function PageNotFound() {
  return (
    <div className="PageNotFount__container">
      <div className="PageNotFount__content">
        <img src="https://anime-chan.me/uploads/posts/2016-01/1453093037_404pic_1.jpg" alt="error 404 image" />
        <h2>Page not found</h2>
      </div>

      <NavLink to="/" className="item__link">
        Home page
      </NavLink>
    </div>
  );
}

export default PageNotFound;
