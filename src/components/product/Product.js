import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "../layout/Header";
import ProductDetails from "../../containers/product/ProductDetails";
import ProductAddReview from "../../containers/product/ProductAddReview";
import ProductReviews from "../../containers/product/ProductReviews";
import Footer from "../layout/Footer";

const checkReviewsSubmittedLocalStorage = documentId => {
  let localSubmittedReviews = localStorage.getItem("reviewsSubmitted");
  if (localSubmittedReviews) {
    localSubmittedReviews = JSON.parse(localSubmittedReviews);
    if (localSubmittedReviews.includes(documentId)) {
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};

class Product extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.documentId);
  }

  componentDidUpdate() {
    document.title =
      typeof this.props.name === "undefined"
        ? "oceń lek"
        : `${this.props.name} - oceń lek`;
  }

  render() {
    const { documentId } = this.props;

    const showAddReviewForm = checkReviewsSubmittedLocalStorage(documentId);

    return (
      <div className="product">
        <Header />
        <div className="product-container">
          <ProductDetails />
          {showAddReviewForm && <ProductAddReview documentId={documentId} />}
          <ProductReviews />
        </div>
        <Footer />
      </div>
    );
  }
}

Product.propTypes = {
  getProduct: PropTypes.func.isRequired
};

export default Product;
