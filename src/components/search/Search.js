import React from "react";

import LanguageChange from "../layout/LanguageChange";
import AlgoliaSearch from "./AlgoliaSearch";
import Footer from "../layout/Footer";

const Search = () => {
  document.title = "oceń lek";

  return (
    <div className="search">
      <div className="search-container">
        <div className="search-buttons">
          <LanguageChange />
        </div>
        <h1 className="search-title">oceń lek</h1>
        <AlgoliaSearch />
      </div>
      <Footer />
    </div>
  );
};

export default Search;
