import { connect } from "react-redux";

import { getProduct } from "../../redux/actions/product";

import ProductDetails from "../../components/product/ProductDetails";

const mapState = ({ product }, ownProps) => {
  const { isLoading, error, productDetails } = product;
  return {
    isLoading,
    error,
    productDetails,
    documentId: ownProps.match.params.documentId
  };
};

const mapDispatch = dispach => ({
  getProduct: documentId => dispach(getProduct(documentId))
});

export default connect(mapState, mapDispatch)(ProductDetails);
