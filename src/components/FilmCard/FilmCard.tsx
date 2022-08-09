import { Link } from "react-router-dom";
import { iMovie } from "../../types/types";
import { MovieStatus } from "../MovieStatus/MovieStatus";
import "./FilmCard.scss";

const baseUrl = "https://themoviedb.org/t/p/w500";

interface iProps {
  movie: iMovie;
}

export const FilmCard = ({ movie }: iProps) => {
  return (
    <div className="filmCard">
      <Link to={`/movie/${movie.id}`} key={movie.id}>
        <img
          className="filmCard__image"
          src={`${baseUrl}${movie.poster_path}`}
          alt={movie.title}
          height={300}
          width={200}
        />
        <div className="filmCard__overlay">
          <p className="filmCard__title">{movie.title}</p>
        </div>
      </Link>
      <MovieStatus movieId={movie.id} />
    </div>
  );
};
