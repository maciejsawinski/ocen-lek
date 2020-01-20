import {
  SEARCH_RESULTS_FETCHING,
  SEARCH_RESULTS_FETCHED,
  SEARCH_RESULTS_ERROR
} from "../actions/search";

const initialState = {
  isLoading: false,
  searchResults: [],
  errors: ""
};

const search = (state = initialState, { type, payload }) => {
  console.log(type);

  switch (type) {
    case SEARCH_RESULTS_FETCHING:
      return {
        ...state,
        isLoading: true,
        searchResults: []
      };
    case SEARCH_RESULTS_FETCHED:
      return {
        isLoading: false,
        searchResults: payload.searchResults,
        error: ""
      };
    case SEARCH_RESULTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload.error
      };
    default: {
      return state;
    }
  }
};

export default search;
