import { useEffect, useState } from "react";
import { Badge } from "../Badge/Badge";
import "./MovieStatus.scss";

interface iProps {
  children: React.ReactNode;
  watchlist?: number[];
  movieId?: number;
}

export const MovieStatus = ({ children, movieId, watchlist }: iProps) => {
  const [inWatchlist, setInWatchlist] = useState(watchlist?.includes(movieId!));
  const [isWatched, setIsWatched] = useState(false);

  const handleWatchlist = () => {
    setInWatchlist((prev) => !prev);
  };

  const handleWatched = () => {
    setIsWatched((prev) => !prev);
  };

  useEffect(() => {
    console.log("this was called");
    console.log(watchlist);
    if (watchlist) {
      if (inWatchlist && !watchlist.includes(movieId!)) {
        watchlist?.push(movieId!);
      } else {
        let index = watchlist?.indexOf(movieId!);
        if (index !== -1) {
          watchlist?.splice(index!, 1);
        }
      }
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }
  });

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
