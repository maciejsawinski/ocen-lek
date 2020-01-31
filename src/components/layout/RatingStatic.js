import React from "react";
import Rating from "react-rating";

const RatingStatic = ({ rating }) => {
  return (
    <Rating
      initialRating={rating}
      emptySymbol="im im-star-o"
      fullSymbol="im im-star"
      aria-label={rating}
      readonly
    />
  );
};

export default RatingStatic;
