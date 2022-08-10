import { useEffect } from "react";
import { FilmCard } from "../../components";
import { iMovie } from "../../types/types";
import "./SearchResultsList.scss";

interface iProps {
  movies: iMovie[] | null;
}

export const SearchResultsList = ({ movies }: iProps) => {
  useEffect(() => {
    console.log("this is called");
    console.log("movies are", movies);
  }, [movies]);

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
