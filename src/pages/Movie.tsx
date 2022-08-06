import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetailsContainer } from "../components/MovieDetailsContainer/MovieDetailsContainer";

import { BaseLayout } from "../layout/BaseLayout";
import requests from "../requests";
import { iMovie } from "../types/types";
import "./Movie.scss";

const baseUrl = "https://themoviedb.org/t/p/original";

export const Movie = () => {
  let { movieId } = useParams();
  const [movie, setMovie] = useState<iMovie | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const request = await axios.get(requests.fetchMovieDetails(movieId));
      setMovie(request.data);
      console.log(request.data);
      return request;
    };

    fetchDetails();
  }, [movieId]);

  return (
    movie && (
      <BaseLayout
        bgImage={`${baseUrl}${movie.backdrop_path}`}
        title={movie.title}
        bannerText={movie.overview}
      >
        <MovieDetailsContainer movie={movie} />
      </BaseLayout>
    )
  );
};
