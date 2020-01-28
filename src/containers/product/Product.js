import { connect } from "react-redux";

import { getProduct } from "../../redux/actions/product";

import Product from "../../components/product/Product";

const mapState = (
  _,
  {
    match: {
      params: { documentId }
    }
  }
) => {
  return {
    documentId
  };
};

const mapDispatch = dispach => ({
  getProduct: documentId => dispach(getProduct(documentId))
});

export default connect(
  mapState,
  mapDispatch
)(Product);
