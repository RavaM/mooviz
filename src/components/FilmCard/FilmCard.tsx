import { Link } from "react-router-dom";
import { iMovie } from "../../types/types";
import "./FilmCard.scss";

const baseUrl = "https://themoviedb.org/t/p/w500";

interface iProps {
  movie: iMovie;
}

export const FilmCard = ({ movie }: iProps) => {
  return (
    <Link to={`/movie/${movie.id}`} className="filmRow__poster" key={movie.id}>
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
  );
};
