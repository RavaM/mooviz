import { FilmCard } from "../../components";
import { iMovie } from "../../types/types";
import "./SearchResultsList.scss";

interface iProps {
  movies: iMovie[] | null;
}

export const SearchResultsList = ({ movies }: iProps) => {
  return (
    movies && (
      <div className="searchResultsList">
        {movies?.map((movie) => (
          <FilmCard movie={movie} key={movie.id} />
        ))}
      </div>
    )
  );
};
