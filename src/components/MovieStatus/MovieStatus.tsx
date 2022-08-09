import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../App";
import { Badge } from "../Badge/Badge";
import "./MovieStatus.scss";

interface iProps {
  children: React.ReactNode;
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
    setWatchlist((prev) => [...prev, movieId!]);
  };

  const handleWatched = () => {
    setIsWatched((prev) => !prev);
    setWatched((prev) => [...prev, movieId!]);
  };

  useEffect(() => {
    const saveWatchlistToLocal = () => {
      if (watchlist.length) {
        if (inWatchlist) {
          if (!watchlist.includes(movieId!)) {
            setWatchlist((prev) => [...prev, movieId!]);
          }
        } else {
          let index = watchlist?.indexOf(movieId!);
          if (index !== -1) {
            let updated = watchlist?.splice(index!, 1);
            setWatched(updated);
          }
        }
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
      }
    };

    saveWatchlistToLocal();
  }, [watchlist, inWatchlist, movieId, setWatchlist]);

  useEffect(() => {
    const saveWatchedToLocal = () => {
      if (watched.length) {
        if (isWatched) {
          if (!watched.includes(movieId!)) {
            setWatched((prev) => [...prev, movieId!]);
          }
        } else {
          let index = watched?.indexOf(movieId!);
          if (index !== -1) {
            let updated = watched?.splice(index!, 1);
            setWatched(updated);
          }
        }
        localStorage.setItem("watched", JSON.stringify(watched));
      }
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
