import {
  PRODUCT_FETCHING,
  PRODUCT_FETCHED,
  PRODUCT_FETCHING_ERROR
} from "../actions/product";

const initialState = {
  isLoading: false,
  error: false,
  product: {}
};

const product = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_FETCHING:
      return {
        ...state,
        isLoading: true
      };
    case PRODUCT_FETCHED:
      const {
        id,
        name,
        companies,
        activeSubstances,
        quantities,
        types
      } = payload.product;
      return {
        isLoading: false,
        error: false,
        product: {
          id,
          name,
          companies,
          activeSubstances,
          quantities,
          types
        }
      };
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
