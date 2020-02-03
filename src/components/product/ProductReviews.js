import React, { Component } from "react";
import PropTypes from "prop-types";
import Pagination from "react-js-pagination";

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

  return (sum / ratings.length).toFixed(1);
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
    const { error, isLoading, productReviews } = this.props;

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
    if (typeof productReviews === "undefined" || productReviews.length === 0) {
      return (
        <section className="product-reviews">
          <h2 className="product-reviews-nomatches">Brak ocen</h2>
        </section>
      );
    }
    if (productReviews.length > 0) {
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

      const indexOfLastReview = this.state.activePage * this.state.perPage;
      const indexOfFirstReview = indexOfLastReview - this.state.perPage;
      const currentReviews = productReviews.slice(
        indexOfFirstReview,
        indexOfLastReview
      );

      const pagination = {
        activePage: this.state.activePage,
        itemsCountPerPage: this.state.perPage,
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
            <h2 className="product-reviews-box-title">Oceny</h2>
            <ul className="product-reviews-box-rating-list">
              <li>
                <div className="product-reviews-box-rating-list-subtitle">
                  Skuteczność:
                </div>
                <RatingStatic
                  rating={calculateAverage(ratings.effectiveness)}
                />
              </li>
              <li>
                <div className="product-reviews-box-rating-list-subtitle">
                  Łatwość przyjmowania:
                </div>
                <RatingStatic rating={calculateAverage(ratings.easeOfUse)} />
              </li>
              <li>
                <div className="product-reviews-box-rating-list-subtitle">
                  Dostępność:
                </div>
                <RatingStatic rating={calculateAverage(ratings.availability)} />
              </li>
              <li>
                <div className="product-reviews-box-rating-list-subtitle">
                  Cena:
                </div>
                <RatingStatic rating={calculateAverage(ratings.price)} />
              </li>
              <li>
                <div className="product-reviews-box-rating-list-subtitle">
                  Średnia ocen:
                </div>
                <RatingStatic rating={calculateAverage(ratings.overall)} />
              </li>
            </ul>
          </div>
          <div className="product-reviews-container">
            {currentReviews.map((review, index) => {
              return <ProductReview key={index} review={review} />;
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
  productReviews: PropTypes.array
};

export default ProductReviews;
