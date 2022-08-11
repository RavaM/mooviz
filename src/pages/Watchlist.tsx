import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../App";
import { SearchResultsList } from "../components";
import { BaseLayout } from "../layout/BaseLayout";
import requests from "../requests";
import { iMovie } from "../types/types";

export const Watchlist = () => {
  const { watchlistCtx } = useContext(MovieContext)!;
  const [watchlistIds] = watchlistCtx;
  const [watchlistMovies, setWatchlistMovies] = useState<iMovie[] | null>(null);

  useEffect(() => {
    const watchlistArray: iMovie[] = [];
    const fetchWatchlist = async () => {
      for (let movieId of watchlistIds) {
        const request = await axios.get(
          requests.fetchMovieDetails("" + movieId)
        );
        // This line is the problem
        watchlistArray.push(request.data);
      }
      setWatchlistMovies(watchlistArray);
    };

    fetchWatchlist();
  }, [watchlistIds]);

  return (
    <BaseLayout
      title="Watchlist"
      bannerText={
        !watchlistMovies?.length ? "You have no movies in the watchlist" : ""
      }
    >
      {watchlistMovies && <SearchResultsList movies={watchlistMovies} />}
    </BaseLayout>
  );
};
