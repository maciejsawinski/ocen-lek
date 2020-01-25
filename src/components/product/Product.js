import React from "react";

import Header from "../layout/Header";
import ProductDetails from "../../containers/product/ProductDetails";
import ProductAddReview from "./ProductAddReview";
import ProductReviews from "./ProductReviews";
import Footer from "../layout/Footer";

const Product = props => {
  return (
    <>
      <Header />
      <ProductDetails {...props} />
      <ProductAddReview />
      <ProductReviews />
      <Footer />
    </>
  );
};

export default Product;
