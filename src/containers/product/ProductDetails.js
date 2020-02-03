import { connect } from "react-redux";

import ProductDetails from "../../components/product/ProductDetails";

const mapState = ({ product: { isLoading, error, productDetails } }) => {
  return {
    isLoading,
    error,
    productDetails
  };
};

export default connect(mapState)(ProductDetails);
