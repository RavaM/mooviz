import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../App";
import { Badge } from "../Badge/Badge";
import "./MovieStatus.scss";

import watchlistLogo from "../../assets/icons/clock-solid.svg";
import watchlistRemoveLogo from "../../assets/icons/ban-solid.svg";
import watchedLogo from "../../assets/icons/eye-solid.svg";
import watchedRemoveLogo from "../../assets/icons/eye-slash-solid.svg";

interface iProps {
  children?: React.ReactNode;
  movieId?: number;
  showText?: boolean;
}

export const MovieStatus = ({ children, movieId, showText = true }: iProps) => {
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
          setWatchlist((prev) => {
            return prev.filter((prevMovieId) => prevMovieId !== movieId);
          });
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
          <Badge
            onClick={handleWatchlist}
            tooltip={inWatchlist ? "Remove from watchlist" : "Add to watchlist"}
            iconAlt="Watchlist Logo"
            iconSrc={inWatchlist ? watchlistRemoveLogo : watchlistLogo}
          >
            {showText && (
              <span>
                {inWatchlist ? "Remove from watchlist" : "Add to watchlist"}
              </span>
            )}
          </Badge>
          <Badge
            onClick={handleWatched}
            tooltip={isWatched ? "Unmark watched" : "Mark as watched"}
            iconAlt="Watched logo"
            iconSrc={isWatched ? watchedRemoveLogo : watchedLogo}
          >
            {showText && (
              <span>{isWatched ? "Unmark watched" : "Mark as watched"}</span>
            )}
          </Badge>
        </div>
      )}
    </div>
  );
};
