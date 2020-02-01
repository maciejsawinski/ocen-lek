import React, { Component } from "react";
import PropTypes from "prop-types";

import Rating from "react-rating";

class ProductAddReview extends Component {
  state = {
    text: "",
    userName: "",
    rating: {
      availability: 0,
      effectiveness: 0,
      price: 0,
      sideEffects: 0
    },
    userId: "0"
  };

  onRatingChange(rating, ratingName) {
    this.setState({ rating: { ...this.state.rating, [ratingName]: rating } });
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    /*this.props.addReview(this.props.documentId, this.state);

    this.setState({
      text: "",
      userName: "",
      rating: {
        availability: 0,
        effectiveness: 0,
        price: 0,
        sideEffects: 0
      }
    });*/
  }

  render() {
    const ratingProperties = {
      emptySymbol: "im im-star-o",
      fullSymbol: "im im-star"
    };

    return (
      <section className="product-add-review">
        <form onSubmit={e => this.onSubmit(e)}>
          <div className="product-add-review-elements">
            <div className="product-add-review-elements-rating-list">
              <div>
                <span>Dostępność: </span>
                <Rating
                  {...ratingProperties}
                  onChange={rating =>
                    this.onRatingChange(rating, "availability")
                  }
                  initialRating={this.state.rating.availability}
                />
              </div>
              <div>
                <span>Skuteczność: </span>
                <Rating
                  {...ratingProperties}
                  onChange={rating =>
                    this.onRatingChange(rating, "effectiveness")
                  }
                  initialRating={this.state.rating.effectiveness}
                />
              </div>
              <div>
                <span>Cena: </span>
                <Rating
                  {...ratingProperties}
                  onChange={rating => this.onRatingChange(rating, "price")}
                  initialRating={this.state.rating.price}
                />
              </div>
              <div>
                <span>Skutki uboczne: </span>
                <Rating
                  {...ratingProperties}
                  onChange={rating =>
                    this.onRatingChange(rating, "sideEffects")
                  }
                  initialRating={this.state.rating.sideEffects}
                />
              </div>
            </div>
            <div className="product-add-review-elements-inputs">
              <textarea
                value={this.state.text}
                onChange={e => this.onInputChange(e)}
                name="text"
                placeholder="treść..."
              />
              <input
                value={this.state.name}
                onChange={e => this.onInputChange(e)}
                type="text"
                name="userName"
                placeholder="imię"
              />
            </div>
          </div>
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
