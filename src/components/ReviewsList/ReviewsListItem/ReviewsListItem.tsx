import { iReview } from "../../../types/types";
import "./ReviewsListItem.scss";

interface iProps {
  review: iReview;
  index: number;
}

export const ReviewsListItem = ({ review, index }: iProps) => {
  return (
    <div className="reviewList__item">
      <p>Review #{index + 1}</p>
      <p>Dated {review.date}</p>
      <p>Your total rating was {review.stars.total} stars</p>
    </div>
  );
};
