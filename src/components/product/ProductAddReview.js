import React, { Component } from "react";
import PropTypes from "prop-types";

import Rating from "react-rating";

const defaultState = {
  text: "",
  userName: "",
  rating: {
    effectiveness: 0,
    easeOfUse: 0,
    price: 0,
    availability: 0
  },
  userId: "0",
  errors: {
    userName: false,
    text: false,
    messages: []
  },
  submitted: false
};

class ProductAddReview extends Component {
  state = defaultState;

  onRatingChange(rating, ratingName) {
    const { rating: stateRating } = this.state;
    this.setState({ rating: { ...stateRating, [ratingName]: rating } });
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const { text, userName, rating, userId, submitted } = this.state;
    const { addReview, documentId } = this.props;

    let errorMessages = [];
    let textError = false;
    let userNameError = false;

    if (text === "") {
      errorMessages = [...errorMessages, "treść nie może być pusta"];
      textError = true;
    }

    if (text.length > 500) {
      errorMessages = [...errorMessages, "treść zawiera za dużo znaków"];
      textError = true;
    }

    if (userName === "") {
      errorMessages = [...errorMessages, "imię nie może być puste"];
      userNameError = true;
    }

    if (userName.length > 30) {
      errorMessages = [...errorMessages, "imię zawiera za dużo znaków"];
      userNameError = true;
    }

    if (
      rating.effectiveness === 0 ||
      rating.easeOfUse === 0 ||
      rating.price === 0 ||
      rating.availability === 0
    ) {
      errorMessages = [
        ...errorMessages,
        "dodaj oceny we wszystkich kategoriach"
      ];
    }

    if (errorMessages.length === 0 && !submitted) {
      addReview(documentId, {
        userName,
        text,
        rating,
        userId
      });

      this.setState({ ...defaultState, submitted: true });
    } else {
      this.setState({
        errors: {
          userName: userNameError,
          text: textError,
          messages: errorMessages
        }
      });
    }
  }

  render() {
    const ratingProperties = {
      emptySymbol: "im im-star-o",
      fullSymbol: "im im-star"
    };

    const { text, userName, rating, errors, submitted } = this.state;

    let errorEls;
    if (errors.messages.length > 0) {
      errorEls = (
        <div className="product-add-review-errors">
          {errors.messages.map(message => (
            <p key={message}>{message}</p>
          ))}
        </div>
      );
    }

    const textareaErrorClassName = errors.text
      ? "product-add-review-elements-inputs-error"
      : "";

    const inputErrorClassName = errors.userName
      ? "product-add-review-elements-inputs-error"
      : "";

    return (
      <section className="product-add-review">
        {submitted && (
          <div className="product-add-review-success">
            <div className="product-add-review-success-text">
              Dziękujemy za dodanie oceny
            </div>
          </div>
        )}
        <form onSubmit={e => this.onSubmit(e)}>
          <div className="product-add-review-elements">
            <div className="product-add-review-elements-rating-list">
              <div>
                <span>Skuteczność: </span>
                <Rating
                  {...ratingProperties}
                  onChange={ratingValue =>
                    this.onRatingChange(ratingValue, "effectiveness")
                  }
                  initialRating={rating.effectiveness}
                />
              </div>
              <div>
                <span>Łatwość przyjmowania: </span>
                <Rating
                  {...ratingProperties}
                  onChange={ratingValue =>
                    this.onRatingChange(ratingValue, "easeOfUse")
                  }
                  initialRating={rating.easeOfUse}
                />
              </div>
              <div>
                <span>Dostępność: </span>
                <Rating
                  {...ratingProperties}
                  onChange={ratingValue =>
                    this.onRatingChange(ratingValue, "availability")
                  }
                  initialRating={rating.availability}
                />
              </div>
              <div>
                <span>Cena: </span>
                <Rating
                  {...ratingProperties}
                  onChange={ratingValue =>
                    this.onRatingChange(ratingValue, "price")
                  }
                  initialRating={rating.price}
                />
              </div>
            </div>
            <div className="product-add-review-elements-inputs">
              <textarea
                className={textareaErrorClassName}
                value={text}
                onChange={e => this.onInputChange(e)}
                name="text"
                placeholder="treść..."
                maxLength="500"
              />
              <input
                className={inputErrorClassName}
                value={userName}
                onChange={e => this.onInputChange(e)}
                type="text"
                name="userName"
                placeholder="imię"
                maxLength="30"
              />
            </div>
          </div>
          {errorEls}
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
