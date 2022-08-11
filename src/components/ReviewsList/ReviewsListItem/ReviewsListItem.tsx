import { iReview } from "../../../types/types";
import "./ReviewsListItem.scss";

interface iProps {
  review: iReview;
  index: number;
}

export const ReviewsListItem = ({ review, index }: iProps) => {
  return (
    <details className="reviewList__item">
      <summary className="reviewList__item-summary">
        <p>Review #{index + 1}</p>
        <p>Dated {review.date}</p>
        <p>Your total rating was {review.stars.total} stars</p>
      </summary>
      <p className="reviewList__item-body">{review.review}</p>
    </details>
  );
};
