import React, { Component } from "react";
import PropTypes from "prop-types";

class ProductAddReview extends Component {
  state = {
    text: "",
    name: ""
  };

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.addReview(this.props.documentId, { text: this.state.text });
  }

  render() {
    return (
      <section>
        <form onSubmit={e => this.onSubmit(e)}>
          <textarea
            value={this.state.text}
            onChange={e => this.onInputChange(e)}
            name="text"
          />
          <input
            value={this.state.name}
            onChange={e => this.onInputChange(e)}
            type="text"
            name="name"
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
