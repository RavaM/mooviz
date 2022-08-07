import { useState } from "react";
import "./StarRating.scss";

interface iProps {
  setStars: any;
  criteria: "direction" | "plot" | "photography" | "total";
  stars: {
    direction: number;
    plot: number;
    photography: number;
    total: number;
  };
}

export const StarRating = ({ stars, setStars, criteria }: iProps) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || stars) ? "on" : "off"}
            onClick={() =>
              setStars({
                ...stars,
                [criteria]: index,
              })
            }
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(stars[criteria])}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
