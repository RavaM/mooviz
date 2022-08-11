import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../logo.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Header.scss";

export const Header = () => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleOpenSearch = () => {
    setSearchOpen((prev) => !prev);
    ref.current?.focus();
  };

  return (
    <header className={`header ${searchOpen ? "open" : "closed"}`}>
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
      {searchOpen && (
        <SearchBar
          setSearch={setSearchOpen}
          className={searchOpen ? "open" : "closed"}
          myRef={ref}
        />
      )}
      <div className="header__options-container">
        <Link to="/watchlist" className="header__link">
          WATCHLIST
        </Link>

        <img
          src={searchIcon}
          alt="Search icon"
          height={30}
          width={30}
          onClick={handleOpenSearch}
          className="header__searchIcon"
        />
      </div>
    </header>
  );
};
