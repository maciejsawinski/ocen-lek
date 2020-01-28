import { connect } from "react-redux";

import ProductReviews from "../../components/product/ProductReviews";

const mapState = ({ product }) => {
  const { isLoading, error, productReviews } = product;
  return {
    isLoading,
    error,
    productReviews
  };
};

export default connect(mapState)(ProductReviews);
