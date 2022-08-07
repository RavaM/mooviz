import { FormEvent, RefObject, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.scss";

interface iProps {
  className: string;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  myRef: RefObject<HTMLInputElement>;
}

export const SearchBar = ({ className, setSearch, myRef }: iProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    setSearch(false);
    navigate(`/movies/search/${searchText}`);
  };

  return (
    <form className={`searchbar ${className}`} onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search a movie name"
        className="searchbar__input"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        ref={myRef}
      />
    </form>
  );
};
