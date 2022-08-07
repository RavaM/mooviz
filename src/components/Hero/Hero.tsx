import { MovieStatus } from "../MovieStatus/MovieStatus";
import "./Hero.scss";

interface iProps {
  bgImage: string;
  title: string;
  movieId?: number;
  watchlist?: number[];
}

export const Hero = ({ bgImage, title, movieId, watchlist }: iProps) => {
  return (
    <MovieStatus movieId={movieId} watchlist={watchlist}>
      <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <h1 className="hero__title">{title}</h1>
      </div>
    </MovieStatus>
  );
};
