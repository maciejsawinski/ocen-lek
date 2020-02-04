import React from "react";
import Rating from "react-rating";
import PropTypes from "prop-types";

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

RatingStatic.propTypes = {
  rating: PropTypes.number.isRequired
};

export default RatingStatic;
