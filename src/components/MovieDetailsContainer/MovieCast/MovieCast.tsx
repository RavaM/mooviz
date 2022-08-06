import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../../../requests";

interface iProps {
  movieId?: string;
}

export const MovieCast = ({ movieId }: iProps) => {
  const [credits, setCredits] = useState<any>(null);

  useEffect(() => {
    const fetchCredits = async () => {
      const request = await axios.get(requests.fetchMovieCredits(movieId));
      setCredits(request.data);
      console.log(request.data);
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
