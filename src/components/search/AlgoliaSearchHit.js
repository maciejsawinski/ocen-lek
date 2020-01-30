import React from "react";
import { Link } from "react-router-dom";
import { Highlight } from "react-instantsearch-dom";

const AlgoliaSearchHit = ({ hit }) => {
  const link = `product/${hit.objectID}`;

  return (
    <>
      <Link className="search-hit-title" to={link}>
        <Highlight
          className="search-hit-title-highlight"
          attribute="name"
          hit={hit}
        />
      </Link>
      <div className="search-hit-activesubstance">
        {hit.activeSubstances.map((_, index) => (
          <p key={index}>
            <Highlight attribute={`activeSubstances.${index}`} hit={hit} />
          </p>
        ))}
      </div>
    </>
  );
};

export default AlgoliaSearchHit;
