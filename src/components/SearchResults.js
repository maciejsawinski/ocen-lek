import React from "react";
import PropTypes from "prop-types";

const SearchResults = ({ isLoading, searchResults }) => {
  return (
    <>
      <h1>Wyniki wyszukiwania</h1>
      {isLoading && <span>Ładowanie</span>}
    </>
  );
};

SearchResults.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  searchResults: PropTypes.array.isRequired
};

export default SearchResults;
