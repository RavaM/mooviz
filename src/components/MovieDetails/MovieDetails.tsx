import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../../requests";
import "./MovieDetails.scss";

interface iProps {
  movieId?: string;
}

export const MovieDetails = ({ movieId }: iProps) => {
  const [movieDetails, setMovie] = useState<any>(null);
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
    <div className="movieDetails">
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
      <div className="movieDetails__cast">
        {credits.cast.slice(0, 5).map((actor: any) => (
          <p key={actor.id}>
            {actor.known_for_department}: {actor.name} as {actor.character}
          </p>
        ))}
      </div>
    </div>
  );
};
