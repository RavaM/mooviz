interface iProps {
  movie?: any;
}

export const MovieDetails = ({ movie }: iProps) => {
  return (
    movie && (
      <div className="movie__details">
        <p>Original title: {movie.original_title}</p>
        <p>Release date: {movie.release_date}</p>
        <p>
          Duration: {Math.floor(movie.runtime / 60)} hours and{" "}
          {movie.runtime % 60} {movie.runtime % 60 ? "minutes" : "minute"}
        </p>
        <p>
          Budget:{" "}
          {movie.revenue.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <p>Rating: {movie.vote_average}</p>
      </div>
    )
  );
};
