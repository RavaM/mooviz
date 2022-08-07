import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../../../requests";
import { iCredit } from "../../../types/types";

interface iProps {
  movieId?: number;
}

export const MovieCast = ({ movieId }: iProps) => {
  const [credits, setCredits] = useState<iCredit | null>(null);

  useEffect(() => {
    const fetchCredits = async () => {
      const request = await axios.get(requests.fetchMovieCredits("" + movieId));
      setCredits(request.data);
      return request;
    };
    fetchCredits();
  }, [movieId]);

  return (
    credits && (
      <div className="movieDetails__cast">
        {credits.cast.slice(0, 5).map((actor: any) => (
          <p key={actor.id}>
            {actor.known_for_department}: {actor.name} as {actor.character}
          </p>
        ))}
      </div>
    )
  );
};
