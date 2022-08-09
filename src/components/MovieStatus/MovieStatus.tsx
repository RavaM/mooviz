import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../App";
import { Badge } from "../Badge/Badge";
import "./MovieStatus.scss";

interface iProps {
  children?: React.ReactNode;
  movieId?: number;
  watchlist?: number[];
  watched?: number[];
}

export const MovieStatus = ({ children, movieId }: iProps) => {
  const { watchlistCtx, watchedCtx } = useContext(MovieContext)!;
  const [watchlist, setWatchlist] = watchlistCtx;
  const [watched, setWatched] = watchedCtx;
  const [inWatchlist, setInWatchlist] = useState(watchlist?.includes(movieId!));
  const [isWatched, setIsWatched] = useState(watched?.includes(movieId!));

  const handleWatchlist = () => {
    setInWatchlist((prev) => !prev);
  };

  const handleWatched = () => {
    setIsWatched((prev) => !prev);
  };

  useEffect(() => {
    const saveWatchlistToLocal = () => {
      if (inWatchlist) {
        if (!watchlist.includes(movieId!)) {
          setWatchlist((prev) => [...prev, movieId!]);
        }
      } else {
        let index = watchlist?.indexOf(movieId!);
        if (index !== -1) {
          setWatchlist((prev) =>
            prev.filter((prevMovieId) => prevMovieId !== movieId)
          );
        }
      }
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
    };

    saveWatchlistToLocal();
  }, [watchlist, inWatchlist, movieId, setWatchlist]);

  useEffect(() => {
    const saveWatchedToLocal = () => {
      if (isWatched) {
        if (!watched.includes(movieId!)) {
          setWatched((prev) => [...prev, movieId!]);
        }
      } else {
        let index = watched?.indexOf(movieId!);
        if (index !== -1) {
          setWatched((prev) =>
            prev.filter((prevMovieId) => prevMovieId !== movieId)
          );
        }
      }
      localStorage.setItem("watched", JSON.stringify(watched));
    };

    saveWatchedToLocal();
  }, [isWatched, movieId, watched, setWatched]);

  return (
    <div className="movieStatus">
      {children}
      {movieId && (
        <div className="movieStatus__badges">
          <Badge onClick={handleWatchlist}>
            {inWatchlist ? "Remove from watchlist" : "Add to watchlist"}
          </Badge>
          <Badge onClick={handleWatched}>
            {isWatched ? "Unmark watched" : "Mark as watched"}
          </Badge>
        </div>
      )}
    </div>
  );
};
