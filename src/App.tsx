import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";
import { SearchResults } from "./pages/SearchResults";

interface iMovieContext {
  watchlistCtx: [number[], React.Dispatch<React.SetStateAction<number[]>>];
  watchedCtx: [number[], React.Dispatch<React.SetStateAction<number[]>>];
}

export const App = () => {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<Movie />} />
          <Route
            path="/movies/search/:searchText"
            element={<SearchResults />}
          />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
};

export const MovieContext = createContext<iMovieContext | null>(null);

const MovieProvider = (props: any) => {
  const [watchlist, setWatchlist] = useState<number[]>(
    JSON.parse(localStorage.getItem("watchlist")!) || []
  );
  const [watched, setWatched] = useState<number[]>(
    JSON.parse(localStorage.getItem("watched")!) || []
  );

  return (
    <MovieContext.Provider
      value={{
        watchlistCtx: [watchlist, setWatchlist],
        watchedCtx: [watched, setWatched],
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
