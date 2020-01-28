import { getProduct } from "./product";

import { firebase, firebaseDb } from "../../firebase";

const REVIEW_POSTING = "REVIEW_POSTING";
const REVIEW_POSTED = "REVIEW_POSTED";
const REVIEW_POSTING_ERROR = "REVIEW_POSTING_ERROR";

const reviewPosting = () => ({
  type: REVIEW_POSTING
});

const reviewPosted = () => ({
  type: REVIEW_POSTED
});

const reviewPostingError = error => ({
  type: REVIEW_POSTING_ERROR,
  payload: {
    error
  }
});

const addReview = (documentId, review) => dispatch => {
  dispatch(reviewPosting());

  return firebaseDb
    .collection("products")
    .doc(documentId)
    .update({
      reviews: firebase.firestore.FieldValue.arrayUnion({
        ...review,
        dateAdded: firebase.firestore.Timestamp.fromDate(new Date())
      })
    })
    .then(() => {
      dispatch(reviewPosted());
      dispatch(getProduct(documentId));
    })
    .catch(error => {
      console.log("Error adding review:", error);
      dispatch(reviewPostingError());
    });
};

export { REVIEW_POSTING, REVIEW_POSTED, REVIEW_POSTING_ERROR, addReview };
