import axios from "axios";
import { useEffect, useState } from "react";
import "./FilmRow.scss";

interface iProps {
  title: string;
  fetchUrl: string;
}

const baseUrl = "https://themoviedb.org/t/p/w500";

export const FilmRow = ({ title, fetchUrl }: iProps) => {
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div className="filmRow">
      <h2>{title}</h2>

      <div className="filmRow__posters">
        {movies.map((movie: any) => (
          <div className="filmRow__poster">
            <img
              className="filmRow__poster-image"
              src={`${baseUrl}${movie.poster_path}`}
              alt={movie.title}
              key={movie.id}
              height={300}
            />
            <div className="filmRow__poster-overlay">
              <p>{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
