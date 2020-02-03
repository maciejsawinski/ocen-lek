import { connect } from "react-redux";

import ProductReviews from "../../components/product/ProductReviews";

const mapState = ({ product: { isLoading, error, productReviews } }) => {
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
