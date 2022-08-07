import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../../requests";
import { iMovie } from "../../types/types";
import { FilmCard } from "../FilmCard/FilmCard";
import "./SearchResultsList.scss";

interface iProps {
  searchText?: string;
}

export const SearchResultsList = ({ searchText }: iProps) => {
  const [movies, setMovies] = useState<iMovie[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchMoviesByName(searchText!));
      setMovies(request.data.results);
      return request;
    };

    window.scrollTo(0, 0);
    fetchData();
  }, [searchText]);

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
