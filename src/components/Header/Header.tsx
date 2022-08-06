import { Link } from "react-router-dom";

import logo from "../../logo.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img
          className="header__logo"
          src={logo}
          alt="Logo"
          width={30}
          height={30}
        />
        <h2 className="header__title">Mooviz</h2>
      </Link>
    </header>
  );
};
