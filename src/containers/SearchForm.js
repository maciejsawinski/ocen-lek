import { connect } from "react-redux";

import { getSearchResults } from "../redux/actions/search";

import SearchForm from "../components/SearchForm";

const mapDispatch = dispach => ({
  getSearchResults: query => dispach(getSearchResults(query))
});

export default connect(null, mapDispatch)(SearchForm);
