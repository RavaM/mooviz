import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BaseLayout } from "../layout/BaseLayout";
import requests from "../requests";
import "./MovieDetail.scss";

const baseUrl = "https://themoviedb.org/t/p/original";

export const MovieDetail = () => {
  let { movieId } = useParams();
  const [movie, setMovie] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchMovieDetails(movieId));
      setMovie(request.data);
      console.log(request.data);
      return request;
    };

    fetchData();
  }, [movieId]);

  return (
    <BaseLayout
      bgImage={`${baseUrl}${movie.backdrop_path}`}
      title={movie.title}
      bannerText={movie.overview}
    >
      <div></div>
    </BaseLayout>
  );
};
