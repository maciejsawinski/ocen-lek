import React from "react";
import { Link } from "react-router-dom";
import { Highlight } from "react-instantsearch-dom";

const Hit = ({ hit }) => {
  const link = `product/${hit.objectID}`;
  return (
    <div>
      <Link to={link}>
        <Highlight attribute="name" hit={hit} />
      </Link>
      <br />
      {hit.activeSubstances.map((_, index) => (
        <p key={index}>
          <Highlight attribute={`activeSubstances.${index}`} hit={hit} />
        </p>
      ))}
    </div>
  );
};

export default Hit;
