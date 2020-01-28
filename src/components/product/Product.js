import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "../layout/Header";
import ProductDetails from "../../containers/product/ProductDetails";
import ProductAddReview from "../../containers/product/ProductAddReview";
import ProductReviews from "../../containers/product/ProductReviews";
import Footer from "../layout/Footer";

class Product extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.documentId);
  }

  render() {
    return (
      <>
        <Header />
        <ProductDetails />
        <ProductAddReview documentId={this.props.documentId} />
        <ProductReviews />
        <Footer />
      </>
    );
  }
}

Product.propTypes = {
  getProduct: PropTypes.func.isRequired
};

export default Product;
