import firebaseDb from "../../firebase";

const REVIEW_POSTING = "REVIEW_POSTING";
const REVIEW_POSTED = "REVIEW_POSTED";
const REVIEW_POSTING_ERROR = "REVIEW_POSTING_ERROR";

const reviewPosting = () => ({
  type: REVIEW_POSTING
});

const reviewPosted = review => ({
  type: REVIEW_POSTED,
  payload: {
    review
  }
});

const reviewPostingError = error => ({
  type: REVIEW_POSTING_ERROR,
  payload: {
    error
  }
});

const addReview = (documentId, review) => dispatch => {
  dispatch(reviewPosting());

  /*firebaseDb
    .collection("products")
    .doc(documentId)
    .get()
    .then(doc => {
      dispatch(reviewPosted(doc.data()));
    })
    .catch(error => {
      console.log("Error adding review:", error);
      dispatch(reviewPostingError());
    });*/
};

export { REVIEW_POSTING, REVIEW_POSTED, REVIEW_POSTING_ERROR, addReview };
