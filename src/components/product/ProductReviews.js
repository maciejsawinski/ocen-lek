import React from "react";
import PropTypes from "prop-types";

import ProductReview from "./ProductReview";

const pushRatings = (ratings, rating) => {
  return {
    availability: [...ratings.availability, rating.availability],
    effectiveness: [...ratings.effectiveness, rating.effectiveness],
    price: [...ratings.price, rating.price],
    sideEffects: [...ratings.sideEffects, rating.sideEffects],
    overall: [...ratings.overall, ...Object.values(rating)]
  };
};

const calculateAverage = ratings => {
  const sum = ratings.reduce((prev, curr) => prev + curr);

  return (sum / ratings.length).toFixed(1);
};

const ProductReviews = ({ error, isLoading, productReviews }) => {
  if (error) {
    return (
      <section>
        <p>Coś poszło nie tak</p>
      </section>
    );
  }
  if (isLoading) {
    return (
      <section>
        <p>Ładowanie</p>
      </section>
    );
  }
  if (productReviews.length > 0) {
    let ratings = {
      availability: [],
      effectiveness: [],
      price: [],
      sideEffects: [],
      overall: []
    };
    productReviews.forEach(({ rating }) => {
      ratings = pushRatings(ratings, rating);
    });

    return (
      <section>
        <h2>Oceny</h2>
        <ul>
          <li>dostępność: {calculateAverage(ratings.availability)}</li>
          <li>skuteczność: {calculateAverage(ratings.effectiveness)}</li>
          <li>cena: {calculateAverage(ratings.price)}</li>
          <li>skutki uboczne: {calculateAverage(ratings.sideEffects)}</li>
          <li>średnia ocen: {calculateAverage(ratings.overall)}</li>
        </ul>
        {productReviews.map((review, index) => {
          return <ProductReview key={index} review={review} />;
        })}
      </section>
    );
  }

  return null;
};

ProductReviews.propTypes = {
  error: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  productReviews: PropTypes.array.isRequired
};

export default ProductReviews;
