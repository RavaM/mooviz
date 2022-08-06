import { iMovie } from "../../types/types";
import { MovieCast } from "./MovieCast/MovieCast";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import "./MovieDetailsContainer.scss";

interface iProps {
  movie: iMovie;
}

export const MovieDetailsContainer = ({ movie }: iProps) => {
  return (
    <div className="movieDetails__container">
      <MovieDetails movie={movie} />
      <MovieCast movieId={movie.id} />
    </div>
  );
};
