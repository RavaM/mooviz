import { StarRating } from "../StarRating/StarRating";
import "./MovieReview.scss";

export const MovieReview = () => {
  let criterion = ["Direction", "Plot", "Photography", "Total"];

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
        ></textarea>
        <div className="movieReview__stars">
          {criterion.map((criteria) => (
            <div className="movieReview__stars-container">
              <p>{criteria}:</p>
              <StarRating />
            </div>
          ))}
          <button className="movieReview__button">Save review</button>
        </div>
      </div>
    </div>
  );
};
