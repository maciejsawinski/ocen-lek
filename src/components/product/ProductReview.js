import React from "react";
import PropTypes from "prop-types";

const ProductReview = ({ review }) => {
  const {
    // dateAdded,
    text,
    userId,
    userName,
    rating: { availability, effectiveness, price, sideEffects }
  } = review;
  return (
    <article>
      <p>
        data - {userId} - {userName}
      </p>
      <div>
        Oceny:
        <ul>
          <li>dostępność: {availability}</li>
          <li>skuteczność: {effectiveness}</li>
          <li>cena: {price}</li>
          <li>skutki uboczne: {sideEffects}</li>
        </ul>
      </div>
      <p>Treść: {text}</p>
    </article>
  );
};

ProductReview.propTypes = {
  review: PropTypes.object.isRequired
};

export default ProductReview;
