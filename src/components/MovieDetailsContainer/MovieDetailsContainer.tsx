import { MovieCast } from "./MovieCast/MovieCast";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import "./MovieDetailsContainer.scss";

interface iProps {
  movieId?: string;
}

export const MovieDetailsContainer = ({ movieId }: iProps) => {
  return (
    <div className="movieDetails__container">
      <MovieDetails movieId={movieId} />
      <MovieCast movieId={movieId} />
    </div>
  );
};
