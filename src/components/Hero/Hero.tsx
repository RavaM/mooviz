import { MovieStatus } from "../MovieStatus/MovieStatus";
import "./Hero.scss";

interface iProps {
  bgImage?: string;
  title: string;
  movieId?: number;
  watchlist?: number[];
  watched?: number[];
}

export const Hero = ({
  bgImage = "/images/movies-poster.jpg",
  title,
  movieId,
  watchlist,
  watched,
}: iProps) => {
  return (
    <MovieStatus movieId={movieId}>
      <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <h1 className="hero__title">{title}</h1>
      </div>
    </MovieStatus>
  );
};
