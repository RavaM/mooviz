import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetails } from "../components/MovieDetails/MovieDetails";

import { BaseLayout } from "../layout/BaseLayout";
import requests from "../requests";
import "./MovieDetail.scss";

const baseUrl = "https://themoviedb.org/t/p/original";

export const MovieDetail = () => {
  let { movieId } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const [credits, setCredits] = useState<any>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const request = await axios.get(requests.fetchMovieDetails(movieId));
      setMovie(request.data);
      console.log(request.data);
      return request;
    };

    const fetchCredits = async () => {
      const request = await axios.get(requests.fetchMovieCredits(movieId));
      setCredits(request.data);
      console.log(request.data);
      return request;
    };

    fetchDetails();
    fetchCredits();
  }, [movieId]);

  return (
    movie && (
      <BaseLayout
        bgImage={`${baseUrl}${movie.backdrop_path}`}
        title={movie.title}
        bannerText={movie.overview}
      >
        <MovieDetails movieId={movieId} />
      </BaseLayout>
    )
  );
};
