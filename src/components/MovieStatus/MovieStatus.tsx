import { useEffect, useState } from "react";
import { Badge } from "../Badge/Badge";
import "./MovieStatus.scss";

interface iProps {
  children: React.ReactNode;
  watchlist?: number[];
  watched?: number[];
  movieId?: number;
}

export const MovieStatus = ({
  children,
  movieId,
  watchlist,
  watched,
}: iProps) => {
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
      if (watchlist) {
        if (inWatchlist) {
          if (!watchlist.includes(movieId!)) {
            watchlist?.push(movieId!);
          }
        } else {
          let index = watchlist?.indexOf(movieId!);
          if (index !== -1) {
            watchlist?.splice(index!, 1);
          }
        }
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
      }
    };

    saveWatchlistToLocal();
  }, [watchlist, inWatchlist, movieId]);

  useEffect(() => {
    const saveWatchedToLocal = () => {
      if (watched) {
        if (isWatched && !watched.includes(movieId!)) {
          watched?.push(movieId!);
        } else {
          let index = watched?.indexOf(movieId!);
          if (index !== -1) {
            watched?.splice(index!, 1);
          }
        }
        localStorage.setItem("watched", JSON.stringify(watched));
      }
    };

    saveWatchedToLocal();
  }, [isWatched, movieId, watched]);

  return (
    <div className="movieStatus">
      {children}
      {watchlist && (
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
