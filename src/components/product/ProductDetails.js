import React from "react";
import PropTypes from "prop-types";

import ProductDetailsLoader from "./loader/ProductDetailsLoader";

const ProductDetails = ({ error, isLoading, productDetails }) => {
  if (error) {
    return (
      <section className="product-details">
        <h2 className="product-details-error">Błąd połączenia</h2>
      </section>
    );
  }
  if (isLoading) {
    return (
      <section className="product-details">
        <ProductDetailsLoader />
      </section>
    );
  }
  if (
    Object.keys(productDetails).length !== 0 &&
    productDetails.constructor === Object
  ) {
    const {
      name,
      companies,
      activeSubstances,
      quantities,
      types
    } = productDetails;
    return (
      <section className="product-details">
        <h2 className="product-details-title">{name}</h2>
        <div className="product-details-subtitle">Substancje czynne:</div>
        {activeSubstances.map((activeSubstance, index) => (
          <div className="product-details-items" key={index}>
            {activeSubstance}
          </div>
        ))}
        <div className="product-details-subtitle">Dawki:</div>
        {quantities.map((quantity, index) => (
          <div className="product-details-items" key={index}>
            {quantity}
          </div>
        ))}
        <div className="product-details-subtitle">Typy:</div>
        {types.map((type, index) => (
          <div className="product-details-items" key={index}>
            {type}
          </div>
        ))}
        <div className="product-details-subtitle">Producenci:</div>
        {companies.map((company, index) => (
          <div className="product-details-items" key={index}>
            {company}
          </div>
        ))}
      </section>
    );
  }

  return null;
};

ProductDetails.propTypes = {
  error: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  productDetails: PropTypes.object.isRequired
};

export default ProductDetails;
