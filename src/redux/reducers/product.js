import {
  PRODUCT_FETCHING,
  PRODUCT_FETCHED,
  PRODUCT_FETCHING_ERROR
} from "../actions/product";

const initialState = {
  isLoading: false,
  error: false,
  productDetails: {},
  productReviews: []
};

const product = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_FETCHING:
      return {
        ...state,
        isLoading: true
      };
    case PRODUCT_FETCHED: {
      const {
        id,
        name,
        companies,
        activeSubstances,
        quantities,
        types,
        reviews
      } = payload.productDetails;
      return {
        isLoading: false,
        error: false,
        productDetails: {
          id,
          name,
          companies,
          activeSubstances,
          quantities,
          types
        },
        productReviews: reviews
      };
    }
    case PRODUCT_FETCHING_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default: {
      return state;
    }
  }
};

export default product;
