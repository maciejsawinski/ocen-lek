import { connect } from "react-redux";

import { addReview } from "../../redux/actions/review";

import ProductAddReview from "../../components/product/ProductAddReview";

const mapState = (_, { documentId }) => {
  return {
    documentId
  };
};

const mapDispatch = dispach => ({
  addReview: (documentId, review) => dispach(addReview(documentId, review))
});

export default connect(mapState, mapDispatch)(ProductAddReview);
