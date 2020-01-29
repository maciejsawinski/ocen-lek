import React from "react";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  Configure,
  connectStateResults
} from "react-instantsearch-dom";

import algoliaClient from "../../config/algolia";

import AlgoliaSearchHit from "./AlgoliaSearchHit";

const pagination = {
  padding: 1,
  showFirst: false,
  totalPages: 5,
  translations: {
    previous: "‹",
    next: "›",
    first: "«",
    last: "»",
    page(currentRefinement) {
      return currentRefinement;
    },
    ariaPrevious: "Poprzednia strona",
    ariaNext: "Następna strona",
    ariaFirst: "Pierwsza strona",
    ariaLast: "Ostatnia strona",
    ariaPage(currentRefinement) {
      return `Strona ${currentRefinement}`;
    }
  }
};

const instantSearch = {
  indexName: "products",
  searchClient: {
    search(requests) {
      if (requests.every(({ params }) => !params.query)) {
        return Promise.resolve({
          results: requests.map(() => ({
            hits: [],
            nbHits: 0,
            nbPages: 0,
            processingTimeMS: 0
          }))
        });
      }

      return algoliaClient.search(requests);
    }
  }
};

const configure = {
  hitsPerPage: 10
};

const searchBox = {
  translations: {
    placeholder: "Szukaj..."
  }
};

const StateResults = ({ searchResults, error }) => {
  if (error) {
    return <p>Coś poszło nie tak</p>;
  }

  if (searchResults && searchResults.query === null) {
    return null;
  }

  if (searchResults && searchResults.nbHits !== 0) {
    return <Pagination {...pagination} />;
  }

  if (searchResults && searchResults.query)
    if (searchResults.nbHits === 0 && searchResults.query.length > 0) {
      return <p>Nic nie znaleziono</p>;
    }

  return null;
};
const CustomStateResults = connectStateResults(StateResults);

const AlgoliaSearch = () => {
  return (
    <InstantSearch {...instantSearch}>
      <Configure {...configure} />
      <SearchBox {...searchBox} />
      <Hits hitComponent={AlgoliaSearchHit} />
      <CustomStateResults />
    </InstantSearch>
  );
};

export default AlgoliaSearch;
