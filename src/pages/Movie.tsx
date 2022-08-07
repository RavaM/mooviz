import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MovieDetailsContainer, MovieReview } from "../components";
import { ReviewsList } from "../components/ReviewsList/ReviewsList";
import { BaseLayout } from "../layout/BaseLayout";

import requests from "../requests";
import { iMovie, iReview } from "../types/types";
import "./Movie.scss";

const baseUrl = "https://themoviedb.org/t/p/original";

export const Movie = () => {
  let { movieId } = useParams();
  const [movie, setMovie] = useState<iMovie | null>(null);
  const [reviewsList, setReviewsList] = useState<iReview[]>([]);

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
        <MovieReview movieId={movieId!} setReviewsList={setReviewsList} />
        <ReviewsList
          reviewsList={reviewsList}
          setReviewsList={setReviewsList}
          movieId={movieId!}
        />
      </BaseLayout>
    )
  );
};
