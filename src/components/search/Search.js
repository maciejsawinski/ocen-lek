import React from "react";

import AlgoliaSearch from "./AlgoliaSearch";
import Footer from "../layout/Footer";

const Search = () => {
  return (
    <div className="search">
      <div className="search-container">
        <h1 className="search-title">OceńLek</h1>
        <AlgoliaSearch />
      </div>
      <Footer />
    </div>
  );
};
export default Search;
