import { FilmRow } from "../FilmRow/FilmRow";

import requests from "../../requests";
import "./FilmList.scss";

export const FilmList = () => {
  return (
    <div className="filmList">
      <FilmRow title="Film in tendenza" fetchUrl={requests.fetchTopRated} />
      <FilmRow title="Film d'azione" fetchUrl={requests.fetchActionMovies} />
      <FilmRow title="Commedie" fetchUrl={requests.fetchComedyMovies} />
      <FilmRow title="Film horror" fetchUrl={requests.fetchHorrorMovies} />
      <FilmRow title="Romanzi" fetchUrl={requests.fetchRomanceMovies} />
      <FilmRow title="Documentari" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};
