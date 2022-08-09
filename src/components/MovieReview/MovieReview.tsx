import { useState } from "react";
import { iReview } from "../../types/types";
import { capitalize } from "../../utils/utils";
import { StarRating } from "../StarRating/StarRating";
import "./MovieReview.scss";

interface iProps {
  movieId: string;
  setReviewsList: React.Dispatch<React.SetStateAction<iReview[]>>;
}

export const MovieReview = ({ movieId, setReviewsList }: iProps) => {
  const criterion: ("direction" | "plot" | "photography" | "total")[] = [
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
    let reviews = JSON.parse(localStorage.getItem("reviews")!) || {};
    const reviewsForThisMovie = reviews[movieId] || [];
    let newReview: iReview = {
      review: review,
      stars: stars,
      date: new Date().toISOString().split("T")[0],
    };
    const submittedReview = {
      [movieId]: [...reviewsForThisMovie, newReview],
    };
    localStorage.setItem(
      "reviews",
      JSON.stringify({
        ...reviews,
        ...submittedReview,
      })
    );
    setReviewsList((prevReviews) => {
      if (prevReviews) {
        return [...prevReviews, newReview];
      } else {
        return [newReview];
      }
    });
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 1000);
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
          {criterion.map((criteria) => (
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
