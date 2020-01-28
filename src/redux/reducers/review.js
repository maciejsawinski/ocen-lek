import {
  REVIEW_POSTING,
  REVIEW_POSTED,
  REVIEW_POSTING_ERROR
} from "../actions/review";

const initialState = {
  isPosting: false,
  error: false
};

const review = (state = initialState, { type, payload }) => {
  switch (type) {
    case REVIEW_POSTING:
      return {
        ...state,
        isPosting: true
      };
    case REVIEW_POSTED:
      return {
        state
      };
    case REVIEW_POSTING_ERROR:
      return {
        isPosting: false,
        error: true
      };
    default: {
      return state;
    }
  }
};

export default review;
