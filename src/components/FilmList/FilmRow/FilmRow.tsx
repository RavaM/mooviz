import axios from "axios";
import { useEffect, useState } from "react";
import { iMovie } from "../../../types/types";
import { FilmCard } from "../../FilmCard/FilmCard";
import "./FilmRow.scss";

interface iProps {
  title: string;
  fetchUrl: string;
}

export const FilmRow = ({ title, fetchUrl }: iProps) => {
  const [movies, setMovies] = useState<iMovie[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [fetchUrl]);

  return (
    movies && (
      <div className="filmRow">
        <h2 className="filmRow__title">{title}</h2>

        <div className="filmRow__posters">
          {movies.map((movie: iMovie) => (
            <FilmCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    )
  );
};
