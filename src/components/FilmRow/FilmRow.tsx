import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FilmRow.scss";

interface iProps {
  title: string;
  fetchUrl: string;
}

const baseUrl = "https://themoviedb.org/t/p/w500";

export const FilmRow = ({ title, fetchUrl }: iProps) => {
  const [movies, setMovies] = useState<any>(null);

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
    movies && (
      <div className="filmRow">
        <h2 className="filmRow__title">{title}</h2>

        <div className="filmRow__posters">
          {movies.map((movie: any) => (
            <Link
              to={`/movie/${movie.id}`}
              className="filmRow__poster"
              key={movie.id}
            >
              <img
                className="filmRow__poster-image"
                src={`${baseUrl}${movie.poster_path}`}
                alt={movie.title}
                height={300}
                width={200}
              />
              <div className="filmRow__poster-overlay">
                <p className="filmRow__poster-title">{movie.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  );
};
