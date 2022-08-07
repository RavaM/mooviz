import { useEffect, useState } from "react";
import "./ReviewsList.scss";

interface iProps {
  movieId: string;
}

export const ReviewsList = ({ movieId }: iProps) => {
  const [reviewsList, setReviewsList] = useState(null);

  return (
    <div className="reviewsList">
      <h2 className="reviewsList__title">Your past reviews</h2>
    </div>
  );
};
