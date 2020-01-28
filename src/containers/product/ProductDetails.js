import { connect } from "react-redux";

import ProductDetails from "../../components/product/ProductDetails";

const mapState = ({ product }) => {
  const { isLoading, error, productDetails } = product;
  return {
    isLoading,
    error,
    productDetails
  };
};

export default connect(mapState)(ProductDetails);
