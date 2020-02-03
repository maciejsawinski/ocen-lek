import { connect } from "react-redux";

import ProductReviews from "../../components/product/ProductReviews";

const mapState = ({ product }) => {
  const { isLoading, error, productReviews } = product;

  let sortedProductReviews;
  if (typeof productReviews === "undefined") {
    sortedProductReviews = productReviews;
  } else {
    sortedProductReviews = productReviews.sort((a, b) =>
      a.dateAdded.seconds > b.dateAdded.seconds ? -1 : 1
    );
  }

  return {
    isLoading,
    error,
    productReviews: sortedProductReviews
  };
};

export default connect(mapState)(ProductReviews);
