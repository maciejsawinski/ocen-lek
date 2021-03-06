/* eslint-disable react/prop-types */
import React from "react";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  Configure,
  connectStateResults
} from "react-instantsearch-dom";
import { useTranslation } from "react-i18next";

import algoliaClient from "../../config/algolia";

import AlgoliaSearchHit from "./AlgoliaSearchHit";

const pagination = {
  padding: 1,
  showFirst: false,
  totalPages: 5,
  translations: {
    previous: "‹",
    next: "›",
    page(currentRefinement) {
      return currentRefinement;
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

const StateResults = ({ searchResults, error }) => {
  const { t } = useTranslation();

  if (searchResults && searchResults.query === null) {
    return null;
  }

  if (error) {
    return <h2 className="search-error">{t("connectionError")}</h2>;
  }

  if (searchResults && searchResults.query)
    if (searchResults.nbHits === 0 && searchResults.query.length > 0) {
      return <h2 className="search-nomatches">{t("noMatches")}</h2>;
    }

  if (searchResults && searchResults.nbHits !== 0) {
    return <Pagination {...pagination} />;
  }

  return null;
};
const CustomStateResults = connectStateResults(StateResults);

const AlgoliaSearch = () => {
  const { t } = useTranslation();

  const searchBox = {
    translations: {
      resetTitle: t("resetTitle"),
      placeholder: `${t("searchPlaceholder")}...`
    }
  };

  return (
    <InstantSearch {...instantSearch}>
      <Configure {...configure} />
      <SearchBox autoFocus {...searchBox} />
      <Hits hitComponent={AlgoliaSearchHit} />
      <CustomStateResults />
    </InstantSearch>
  );
};

export default AlgoliaSearch;
