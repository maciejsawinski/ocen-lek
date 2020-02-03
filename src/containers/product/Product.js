import { connect } from "react-redux";

import { getProduct } from "../../redux/actions/product";

import Product from "../../components/product/Product";

const mapState = (
  {
    product: {
      productDetails: { name }
    }
  },
  {
    match: {
      params: { documentId }
    }
  }
) => {
  return {
    name,
    documentId
  };
};

const mapDispatch = dispach => ({
  getProduct: documentId => dispach(getProduct(documentId))
});

export default connect(mapState, mapDispatch)(Product);
