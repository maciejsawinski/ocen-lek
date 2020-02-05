import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import ProductDetailsLoader from "./loader/ProductDetailsLoader";

const ProductDetails = ({ error, isLoading, productDetails }) => {
  const { t } = useTranslation();

  if (error) {
    return (
      <section className="product-details">
        <h2 className="product-details-error">{t("connectionError")}</h2>
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
        <span className="product-details-subtitle">
          {t("activeSubstances")}:
        </span>
        {activeSubstances.map(activeSubstance => (
          <div className="product-details-items" key={activeSubstance}>
            {activeSubstance}
          </div>
        ))}
        <span className="product-details-subtitle">{t("quantities")}:</span>
        {quantities.map(quantity => (
          <div className="product-details-items" key={quantity}>
            {quantity}
          </div>
        ))}
        <span className="product-details-subtitle">{t("types")}:</span>
        {types.map(type => (
          <div className="product-details-items" key={type}>
            {type}
          </div>
        ))}
        <span className="product-details-subtitle">{t("companies")}:</span>
        {companies.map(company => (
          <div className="product-details-items" key={company}>
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
  productDetails: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    companies: PropTypes.arrayOf(PropTypes.string),
    activeSubstances: PropTypes.arrayOf(PropTypes.string),
    quantities: PropTypes.arrayOf(PropTypes.string),
    types: PropTypes.arrayOf(PropTypes.string),
    reviews: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};

export default ProductDetails;
