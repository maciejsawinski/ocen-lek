import { firebaseDb } from "../../firebase";

const PRODUCT_FETCHING = "PRODUCT_FETCHING";
const PRODUCT_FETCHED = "PRODUCT_FETCHED";
const PRODUCT_FETCHING_ERROR = "PRODUCT_FETCHING_ERROR";

const productFetching = () => ({
  type: PRODUCT_FETCHING
});

const productFetched = productDetails => ({
  type: PRODUCT_FETCHED,
  payload: {
    productDetails
  }
});

const productFetchingError = error => ({
  type: PRODUCT_FETCHING_ERROR,
  payload: {
    error
  }
});

const getProduct = documentId => dispatch => {
  dispatch(productFetching());

  return firebaseDb
    .collection("products")
    .doc(documentId)
    .get()
    .then(doc => {
      dispatch(productFetched(doc.data()));
    })
    .catch(() => {
      dispatch(productFetchingError());
    });
};

export {
  PRODUCT_FETCHING,
  PRODUCT_FETCHED,
  PRODUCT_FETCHING_ERROR,
  getProduct
};
