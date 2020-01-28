import React, { Component } from "react";
import PropTypes from "prop-types";

class ProductAddReview extends Component {
  state = {
    text: "",
    userName: "",
    rating: {
      availability: 1,
      effectiveness: 4,
      price: 5,
      sideEffects: 2
    },
    userId: "123"
  };

  onRatingChange() {}

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.addReview(this.props.documentId, this.state);
  }

  render() {
    return (
      <section>
        <form onSubmit={e => this.onSubmit(e)}>
          <div>dostępność:</div>
          <div>skuteczność:</div>
          <div>cena:</div>
          <div>skutki uboczne:</div>
          <br />
          <textarea
            value={this.state.text}
            onChange={e => this.onInputChange(e)}
            name="text"
          />
          <br />
          <input
            value={this.state.name}
            onChange={e => this.onInputChange(e)}
            type="text"
            name="userName"
          />
          <button type="submit">Wyślij</button>
        </form>
      </section>
    );
  }
}

ProductAddReview.propTypes = {
  documentId: PropTypes.string.isRequired,
  addReview: PropTypes.func.isRequired
};

export default ProductAddReview;
