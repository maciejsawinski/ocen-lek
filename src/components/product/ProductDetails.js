import React, { Component } from "react";
import PropTypes from "prop-types";

class ProductDetails extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.documentId);
  }

  render() {
    const { error, isLoading, productDetails } = this.props;

    if (error) {
      return (
        <section>
          <p>Coś poszło nie tak</p>
        </section>
      );
    }
    if (isLoading) {
      return (
        <section>
          <p>Ładowanie</p>
        </section>
      );
    }
    if (
      Object.keys(productDetails).length !== 0 &&
      productDetails.constructor === Object
    ) {
      const {
        id,
        name,
        companies,
        activeSubstances,
        quantities,
        types
      } = productDetails;
      return (
        <section>
          <h2>
            {name} {id}
          </h2>
          <p>Substancje czynne:</p>
          {activeSubstances.map((activeSubstance, index) => (
            <p key={index}>{activeSubstance}</p>
          ))}
          <p>Dawki:</p>
          {quantities.map((quantity, index) => (
            <p key={index}>{quantity}</p>
          ))}
          <p>Typy:</p>
          {types.map((type, index) => (
            <p key={index}>{type}</p>
          ))}
          <p>Producenci:</p>
          {companies.map((company, index) => (
            <p key={index}>{company}</p>
          ))}
        </section>
      );
    }

    return null;
  }
}

ProductDetails.propTypes = {
  error: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  productDetails: PropTypes.object.isRequired,
  getProduct: PropTypes.func.isRequired
};

export default ProductDetails;
