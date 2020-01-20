import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchForm extends Component {
  state = {
    query: ""
  };

  handleInput(e) {
    this.setState({
      query: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.getSearchResults(this.state.query);
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          onChange={e => this.handleInput(e)}
          value={this.state.query}
          type="text"
          name="query"
        />
        <button type="submit">Szukaj</button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  getSearchResults: PropTypes.func.isRequired
};

export default SearchForm;
