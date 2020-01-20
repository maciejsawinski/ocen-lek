import { connect } from "react-redux";

import SearchResults from "../components/SearchResults";

const mapState = ({ search }) => {
  const { isLoading, searchResults } = search;

  return {
    isLoading,
    searchResults
  };
};

export default connect(mapState)(SearchResults);
