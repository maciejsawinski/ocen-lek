import React from "react";
import PropTypes from "prop-types";

import ProductReviewsLoader from "./loader/ProductReviewsLoader";
import RatingStatic from "../layout/RatingStatic";
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
      <section className="product-reviews">
        <h2 className="product-reviews-error">Błąd połączenia</h2>
      </section>
    );
  }
  if (isLoading) {
    return (
      <section className="product-reviews">
        <ProductReviewsLoader />
      </section>
    );
  }
  if (typeof productReviews === "undefined") {
    return (
      <section className="product-reviews">
        <h2 className="product-reviews-nomatches">Brak ocen</h2>
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
      <section className="product-reviews">
        <h2 className="product-reviews-title">Oceny</h2>
        <ul className="product-reviews-rating-list">
          <li>
            <div className="product-reviews-rating-list-subtitle">
              Dostępność:
            </div>
            <RatingStatic rating={calculateAverage(ratings.availability)} />
          </li>
          <li>
            <div className="product-reviews-rating-list-subtitle">
              Skuteczność:
            </div>
            <RatingStatic rating={calculateAverage(ratings.effectiveness)} />
          </li>
          <li>
            <div className="product-reviews-rating-list-subtitle">Cena:</div>
            <RatingStatic rating={calculateAverage(ratings.price)} />
          </li>
          <li>
            <div className="product-reviews-rating-list-subtitle">
              Skutki uboczne:
            </div>
            <RatingStatic rating={calculateAverage(ratings.sideEffects)} />
          </li>
          <li>
            <div className="product-reviews-rating-list-subtitle">
              Średnia ocen:
            </div>
            <RatingStatic rating={calculateAverage(ratings.overall)} />
          </li>
        </ul>
        <div className="product-reviews-container">
          {productReviews.map((review, index) => {
            return <ProductReview key={index} review={review} />;
          })}
        </div>
      </section>
    );
  }

  return null;
};

ProductReviews.propTypes = {
  error: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  productReviews: PropTypes.array
};

export default ProductReviews;
