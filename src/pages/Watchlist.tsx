import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../App";
import { SearchResultsList } from "../components";
import { BaseLayout } from "../layout/BaseLayout";
import requests from "../requests";
import { iMovie } from "../types/types";

export const Watchlist = () => {
  const { watchlistCtx } = useContext(MovieContext)!;
  const [movies, setMovies] = watchlistCtx;
  const [watchlistMovies, setWatchlistMovies] = useState<iMovie[]>([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      for (let movieId of movies) {
        const request = await axios.get(
          requests.fetchMovieDetails("" + movieId)
        );
        // This line is the problem
        setWatchlistMovies((prev) => [
          ...prev.filter((movie) => movie.id !== movieId),
          request.data,
        ]);
      }
    };

    fetchWatchlist();
  }, [movies]);

  return (
    <BaseLayout title="Watchlist">
      <SearchResultsList movies={watchlistMovies} />
    </BaseLayout>
  );
};
