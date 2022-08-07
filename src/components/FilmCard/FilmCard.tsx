import { Link } from "react-router-dom";
import { iMovie } from "../../types/types";
import "./FilmCard.scss";

const baseUrl = "https://themoviedb.org/t/p/w500";

interface iProps {
  movie: iMovie;
}

export const FilmCard = ({ movie }: iProps) => {
  return (
    <Link to={`/movie/${movie.id}`} className="filmCard" key={movie.id}>
      <img
        className="filmCard-image"
        src={`${baseUrl}${movie.poster_path}`}
        alt={movie.title}
        height={300}
        width={200}
      />
      <div className="filmCard-overlay">
        <p className="filmCard-title">{movie.title}</p>
      </div>
    </Link>
  );
};
