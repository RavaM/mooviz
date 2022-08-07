import { useState } from "react";
import { capitalize } from "../../utils/utils";
import { StarRating } from "../StarRating/StarRating";
import "./MovieReview.scss";

interface iProps {
  movieId: string;
}

export const MovieReview = ({ movieId }: iProps) => {
  let criterion: ("direction" | "plot" | "photography" | "total")[] = [
    "direction",
    "plot",
    "photography",
    "total",
  ];
  const [review, setReview] = useState("");
  const [stars, setStars] = useState({
    direction: 0,
    plot: 0,
    photography: 0,
    total: 0,
  });

  const saveReview = () => {
    const submittedReview = {
      [movieId]: {
        review: review,
        stars: stars,
      },
    };
    localStorage.setItem("reviews", JSON.stringify(submittedReview));
  };

  return (
    <div className="movieReview">
      <h2 className="movieReview__title">Add a review</h2>
      <div className="movieReview__container">
        <textarea
          name="review"
          id="review"
          className="movieReview__textarea"
          cols={30}
          rows={10}
          placeholder="Enter your review of the movie"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <div className="movieReview__stars">
          {criterion.map((criteria, i) => (
            <div className="movieReview__stars-container" key={criteria}>
              <p>{capitalize(criteria)}:</p>
              <StarRating
                criteria={criteria}
                stars={stars}
                setStars={setStars}
              />
            </div>
          ))}
          <button className="movieReview__button" onClick={saveReview}>
            Save review
          </button>
        </div>
      </div>
    </div>
  );
};
