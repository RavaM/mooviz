import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../../../requests";

interface iProps {
  movieId?: string;
}

export const MovieDetails = ({ movieId }: iProps) => {
  const [movieDetails, setMovieDetails] = useState<any>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const request = await axios.get(requests.fetchMovieDetails(movieId));
      setMovieDetails(request.data);
      console.log(request.data);
      return request;
    };

    fetchDetails();
  }, [movieId]);

  return (
    movieDetails && (
      <div className="movieDetails__details">
        <p>Original title: {movieDetails.original_title}</p>
        <p>Release date: {movieDetails.release_date}</p>
        <p>
          Duration: {Math.floor(movieDetails.runtime / 60)} hours and{" "}
          {movieDetails.runtime % 60}{" "}
          {movieDetails.runtime % 60 ? "minutes" : "minute"}
        </p>
        <p>
          Budget:{" "}
          {movieDetails.revenue.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <p>Rating: {movieDetails.vote_average}</p>
      </div>
    )
  );
};
