import axios from "axios";

const SEARCH_RESULTS_FETCHING = "SEARCH_RESULTS_FETCHING";
const SEARCH_RESULTS_FETCHED = "SEARCH_RESULTS_FETCHED";
const SEARCH_RESULTS_ERROR = "SEARCH_RESULTS_ERROR";

const searchResultsFetching = () => ({
  type: SEARCH_RESULTS_FETCHING
});

const searchResultsFetched = results => ({
  type: SEARCH_RESULTS_FETCHED,
  payload: {
    searchResults: results
  }
});

const searchResultsError = error => ({
  type: SEARCH_RESULTS_ERROR,
  payload: {
    error: error
  }
});

const getSearchResults = query => dispatch => {
  dispatch(searchResultsFetching());

  return axios
    .get("https://crudpi.io/57e080/products")
    .then(resp => console.log(resp))
    .catch(err => {
      dispatch(searchResultsError(err));
    });

  /*return fetch FIREBASE <==============*/
};

export {
  SEARCH_RESULTS_FETCHING,
  SEARCH_RESULTS_FETCHED,
  SEARCH_RESULTS_ERROR,
  searchResultsFetching,
  searchResultsFetched,
  searchResultsError,
  getSearchResults
};
