import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "moment/locale/pl";

import RatingStatic from "../layout/RatingStatic";

const ProductReview = ({
  review: {
    dateAdded,
    text,
    userName,
    rating: { effectiveness, easeOfUse, availability, price }
  }
}) => {
  moment.locale("pl");
  const dateAddedReadable = moment(
    new Date(dateAdded.seconds * 1000)
  ).fromNow();

  return (
    <article className="product-reviews-review">
      <div className="product-reviews-review-text">
        <span className="product-reviews-review-name">{userName}:</span> {text}
      </div>
      <ul className="product-reviews-review-rating-list">
        <li>
          <div className="product-reviews-rating-list-subtitle">
            Skuteczność:
          </div>
          <RatingStatic rating={effectiveness} />
        </li>
        <li>
          <div className="product-reviews-rating-list-subtitle">
            Łatwość przyjmowania:
          </div>
          <RatingStatic rating={easeOfUse} />
        </li>
        <li>
          <div className="product-reviews-rating-list-subtitle">
            Dostępność:
          </div>
          <RatingStatic rating={availability} />
        </li>
        <li>
          <div className="product-reviews-rating-list-subtitle">Cena:</div>
          <RatingStatic rating={price} />
        </li>
      </ul>
      <div className="product-reviews-review-date">{dateAddedReadable}</div>
    </article>
  );
};

ProductReview.propTypes = {
  review: PropTypes.shape({
    dateAdded: PropTypes.objectOf(PropTypes.number),
    text: PropTypes.string,
    userName: PropTypes.string,
    rating: PropTypes.objectOf(PropTypes.number)
  }).isRequired
};

export default ProductReview;
