import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="images/movie-videos-icon.svg"
          alt="Logo"
          width={30}
          height={30}
        />
        <h2 className="header__title">Mooviz</h2>
      </Link>
    </header>
  );
};
