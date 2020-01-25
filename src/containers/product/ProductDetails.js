import { connect } from "react-redux";

import { getProduct } from "../../redux/actions/product";

import ProductDetails from "../../components/product/ProductDetails";

const mapState = ({ isLoading, error, product }, ownProps) => ({
  isLoading,
  error,
  product,
  documentId: ownProps.match.params.documentId
});

const mapDispatch = dispach => ({
  getProduct: documentId => dispach(getProduct(documentId))
});

export default connect(mapState, mapDispatch)(ProductDetails);
