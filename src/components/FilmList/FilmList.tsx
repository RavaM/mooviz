import { FilmRow } from "./FilmRow/FilmRow";

import requests from "../../requests";
import "./FilmList.scss";

export const FilmList = () => {
  return (
    <div className="filmList">
      <FilmRow title="Trending movies" fetchUrl={requests.fetchTopRated} />
      <FilmRow title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <FilmRow title="Comedies" fetchUrl={requests.fetchComedyMovies} />
      <FilmRow title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <FilmRow title="Romance movies" fetchUrl={requests.fetchRomanceMovies} />
      <FilmRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};
