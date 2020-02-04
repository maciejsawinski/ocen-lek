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
    }
    return true;
  }
  return true;
};

class Product extends Component {
  componentDidMount() {
    const { documentId, getProduct } = this.props;
    getProduct(documentId);
  }

  componentDidUpdate() {
    const { name } = this.props;
    document.title = name === "" ? "oceń lek" : `${name} - oceń lek`;
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
  documentId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  getProduct: PropTypes.func.isRequired
};

export default Product;
