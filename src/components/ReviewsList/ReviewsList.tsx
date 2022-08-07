import { useEffect, useState } from "react";
import { iReview } from "../../types/types";
import "./ReviewsList.scss";
import { ReviewsListItem } from "./ReviewsListItem/ReviewsListItem";

interface iProps {
  movieId: string;
  reviewsList: iReview[];
  setReviewsList: React.Dispatch<React.SetStateAction<iReview[]>>;
}

export const ReviewsList = ({
  movieId,
  reviewsList,
  setReviewsList,
}: iProps) => {
  useEffect(() => {
    let reviews: Record<number, iReview[]> =
      JSON.parse(localStorage.getItem("reviews")!) || {};
    const reviewsForThisMovie = reviews[+movieId] || null;
    setReviewsList(reviewsForThisMovie);
  }, [movieId, setReviewsList]);

  return (
    reviewsList && (
      <div className="reviewsList">
        <h2 className="reviewsList__title">Your past reviews</h2>
        <div className="reviewsList__list">
          {reviewsList.map((review, i) => (
            <ReviewsListItem review={review} index={i} key={i} />
          ))}
        </div>
      </div>
    )
  );
};
