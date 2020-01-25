import React, { Component } from "react";
import PropTypes from "prop-types";

class ProductDetails extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.documentId);
  }

  render() {
    const { error, isLoading, product } = this.props;

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
    if (Object.keys(product).length !== 0 && product.constructor === Object) {
      const {
        id,
        name,
        companies,
        activeSubstances,
        quantities,
        types
      } = product;
      return (
        <section>
          <h2>
            {name} {id}
          </h2>
          <p>Substancje czynne:</p>>
          {activeSubstances.map(activeSubstance => (
            <p>{activeSubstance}</p>
          ))}
          <p>Dawki:</p>>
          {quantities.map(quantity => (
            <p>{quantity}</p>
          ))}
          <p>Typy:</p>>
          {types.map(type => (
            <p>{type}</p>
          ))}
          <p>Producenci:</p>>
          {companies.map(company => (
            <p>{company}</p>
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
  product: PropTypes.object.isRequired,
  getProduct: PropTypes.func.isRequired
};

export default ProductDetails;
