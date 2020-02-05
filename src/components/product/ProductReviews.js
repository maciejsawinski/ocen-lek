import React, { Component } from "react";
import PropTypes from "prop-types";
import Pagination from "react-js-pagination";
import { withTranslation } from "react-i18next";

import ProductReviewsLoader from "./loader/ProductReviewsLoader";
import RatingStatic from "../layout/RatingStatic";
import ProductReview from "./ProductReview";

const pushRatings = (ratings, rating) => {
  return {
    effectiveness: [...ratings.effectiveness, rating.effectiveness],
    easeOfUse: [...ratings.easeOfUse, rating.easeOfUse],
    availability: [...ratings.availability, rating.availability],
    price: [...ratings.price, rating.price],
    overall: [...ratings.overall, ...Object.values(rating)]
  };
};

const calculateAverage = ratings => {
  const sum = ratings.reduce((prev, curr) => prev + curr);

  return Number((sum / ratings.length).toFixed(1));
};

class ProductReviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1,
      perPage: 10
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
  }

  render() {
    const { error, isLoading, productReviews, t } = this.props;

    if (error) {
      return (
        <section className="product-reviews">
          <h2 className="product-reviews-error">{t("connectionError")}</h2>
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

    if (typeof productReviews === "undefined" || productReviews.length === 0) {
      return (
        <section className="product-reviews">
          <h2 className="product-reviews-nomatches">{t("noReviewsMessage")}</h2>
        </section>
      );
    }

    if (productReviews.length > 0) {
      const { activePage, perPage } = this.state;

      let ratings = {
        effectiveness: [],
        easeOfUse: [],
        availability: [],
        price: [],
        overall: []
      };
      productReviews.forEach(({ rating }) => {
        ratings = pushRatings(ratings, rating);
      });

      const averageEffectiveness = calculateAverage(ratings.effectiveness);
      const averageEaseOfUse = calculateAverage(ratings.easeOfUse);
      const averageAvailability = calculateAverage(ratings.availability);
      const averagePrice = calculateAverage(ratings.price);
      const averageOverall = calculateAverage(ratings.overall);

      const indexOfLastReview = activePage * perPage;
      const indexOfFirstReview = indexOfLastReview - perPage;
      const currentReviews = productReviews.slice(
        indexOfFirstReview,
        indexOfLastReview
      );

      const pagination = {
        activePage,
        itemsCountPerPage: perPage,
        totalItemsCount: productReviews.length,
        pageRangeDisplayed: 3,
        hideFirstLastPages: true,
        innerClass: "product-reviews-container-pagination-list",
        prevPageText: "‹",
        nextPageText: "›"
      };

      return (
        <section className="product-reviews">
          <div className="product-reviews-box">
            <h2 className="product-reviews-box-title">{t("reviews")}</h2>
            <ul className="product-reviews-box-rating-list">
              <li>
                <div className="product-reviews-box-rating-list-subtitle">
                  {t("effectiveness")}:
                </div>
                <RatingStatic rating={averageEffectiveness} />
                <div className="product-reviews-box-rating-list-text">
                  {averageEffectiveness}
                </div>
              </li>
              <li>
                <div className="product-reviews-box-rating-list-subtitle">
                  {t("easeOfUse")}:
                </div>
                <RatingStatic rating={averageEaseOfUse} />
                <div className="product-reviews-box-rating-list-text">
                  {averageEaseOfUse}
                </div>
              </li>
              <li>
                <div className="product-reviews-box-rating-list-subtitle">
                  {t("availability")}:
                </div>
                <RatingStatic rating={calculateAverage(ratings.availability)} />
                <div className="product-reviews-box-rating-list-text">
                  {averageAvailability}
                </div>
              </li>
              <li>
                <div className="product-reviews-box-rating-list-subtitle">
                  {t("price")}:
                </div>
                <RatingStatic rating={averagePrice} />
                <div className="product-reviews-box-rating-list-text">
                  {averagePrice}
                </div>
              </li>
              <li>
                <div className="product-reviews-box-rating-list-subtitle">
                  {t("overall")}:
                </div>
                <RatingStatic rating={averageOverall} />
                <div className="product-reviews-box-rating-list-text">
                  {averageOverall}
                </div>
              </li>
            </ul>
          </div>
          <div className="product-reviews-container">
            {currentReviews.map(review => {
              return (
                <ProductReview key={review.dateAdded.seconds} review={review} />
              );
            })}
            <Pagination
              {...pagination}
              onChange={e => this.handlePageChange(e)}
            />
          </div>
        </section>
      );
    }

    return null;
  }
}

ProductReviews.propTypes = {
  error: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  productReviews: PropTypes.arrayOf(PropTypes.object),
  t: PropTypes.func.isRequired
};

ProductReviews.defaultProps = {
  productReviews: []
};

export default withTranslation()(ProductReviews);
