import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MovieDetailsContainer, MovieReview, ReviewsList } from "../components";
import { BaseLayout } from "../layout/BaseLayout";

import requests from "../requests";
import { iMovie, iReview } from "../types/types";
import "./Movie.scss";

const baseUrl = "https://themoviedb.org/t/p/original";

export const Movie = () => {
  let { movieId } = useParams();
  const [movie, setMovie] = useState<iMovie | null>(null);
  const [reviewsList, setReviewsList] = useState<iReview[]>([]);
  const [watchlist, setWatchlist] = useState<number[]>([]);
  const [watched, setWatched] = useState<number[]>([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const request = await axios.get(requests.fetchMovieDetails(movieId));
      setMovie(request.data);
      return request;
    };
    const fetchWatchlist = () => {
      const watchlist = JSON.parse(localStorage.getItem("watchlist")!) || [];
      setWatchlist(watchlist);
      return watchlist;
    };
    const fetchWatched = () => {
      const watched = JSON.parse(localStorage.getItem("watched")!) || [];
      setWatched(watched);
      return watched;
    };

    fetchDetails();
    fetchWatchlist();
    fetchWatched();
  }, [movieId]);

  return (
    movie && (
      <BaseLayout
        bgImage={`${baseUrl}${movie.backdrop_path}`}
        title={movie.title}
        bannerText={movie.overview}
        movie={movie}
        watchlist={watchlist}
        watched={watched}
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
