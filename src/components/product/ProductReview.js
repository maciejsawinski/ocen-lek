import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import moment from "moment";
import "moment/locale/pl";
import "moment/locale/en-gb";
import "moment/locale/uk";

import RatingStatic from "../layout/RatingStatic";

const ProductReview = ({
  review: {
    dateAdded,
    text,
    userName,
    rating: { effectiveness, easeOfUse, availability, price }
  }
}) => {
  const { t, i18n } = useTranslation();

  if (typeof i18n.language === "undefined") {
    moment.locale("pl");
  } else {
    if (i18n.language === "pl") {
      moment.locale("pl");
    }
    if (i18n.language === "en") {
      moment.locale("en-gb");
    }
    if (i18n.language === "uk") {
      moment.locale("uk");
    }
  }
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
            {t("effectiveness")}:
          </div>
          <RatingStatic rating={effectiveness} />
        </li>
        <li>
          <div className="product-reviews-rating-list-subtitle">
            {t("easeOfUse")}:
          </div>
          <RatingStatic rating={easeOfUse} />
        </li>
        <li>
          <div className="product-reviews-rating-list-subtitle">
            {t("availability")}:
          </div>
          <RatingStatic rating={availability} />
        </li>
        <li>
          <div className="product-reviews-rating-list-subtitle">
            {t("price")}:
          </div>
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
