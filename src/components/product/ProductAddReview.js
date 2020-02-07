import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

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

  componentDidMount() {
    const { i18n } = this.props;

    i18n.on("languageChanged", () => {
      this.setState({ errors: { messages: [], userName: false, text: false } });
    });
  }

  componentWillUnmount() {
    const { i18n } = this.props;

    i18n.off("languageChanged");
  }

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
    const { addReview, documentId, t } = this.props;

    let errorMessages = [];
    let textError = false;
    let userNameError = false;

    if (text === "") {
      errorMessages = [...errorMessages, t("emptyTextErrorMessage")];
      textError = true;
    }

    if (text.length > 500) {
      errorMessages = [
        ...errorMessages,
        t("tooManyCharactersTextErrorMessage")
      ];
      textError = true;
    }

    if (userName === "") {
      errorMessages = [...errorMessages, t("emptyUserNameErrorMessage")];
      userNameError = true;
    }

    if (userName.length > 30) {
      errorMessages = [
        ...errorMessages,
        t("tooManyCharactersUserNameErrorMessage")
      ];
      userNameError = true;
    }

    if (
      rating.effectiveness === 0 ||
      rating.easeOfUse === 0 ||
      rating.price === 0 ||
      rating.availability === 0
    ) {
      errorMessages = [...errorMessages, t("missingRatingsErrorMessage")];
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
    const { t } = this.props;

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
              {t("addReviewSuccessMessage")}
            </div>
          </div>
        )}
        <form onSubmit={e => this.onSubmit(e)}>
          <div className="product-add-review-elements">
            <div className="product-add-review-elements-rating-list">
              <div>
                <span>{t("effectiveness")}: </span>
                <Rating
                  {...ratingProperties}
                  onChange={ratingValue =>
                    this.onRatingChange(ratingValue, "effectiveness")
                  }
                  initialRating={rating.effectiveness}
                />
              </div>
              <div>
                <span>{t("easeOfUse")}: </span>
                <Rating
                  {...ratingProperties}
                  onChange={ratingValue =>
                    this.onRatingChange(ratingValue, "easeOfUse")
                  }
                  initialRating={rating.easeOfUse}
                />
              </div>
              <div>
                <span>{t("availability")}: </span>
                <Rating
                  {...ratingProperties}
                  onChange={ratingValue =>
                    this.onRatingChange(ratingValue, "availability")
                  }
                  initialRating={rating.availability}
                />
              </div>
              <div>
                <span>{t("price")}: </span>
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
              <label className="sr-only" htmlFor="text">
                {t("textAreaPlaceholder")}
              </label>
              <textarea
                className={textareaErrorClassName}
                value={text}
                onChange={e => this.onInputChange(e)}
                id="text"
                name="text"
                placeholder={`${t("textAreaPlaceholder")}...`}
                maxLength="500"
              />
              <label className="sr-only" htmlFor="userName">
                {t("inputPlaceholder")}
              </label>
              <input
                className={inputErrorClassName}
                value={userName}
                onChange={e => this.onInputChange(e)}
                type="text"
                id="userName"
                name="userName"
                placeholder={t("inputPlaceholder")}
                maxLength="30"
              />
            </div>
          </div>
          {errorEls}
          <button type="submit">{t("submit")}</button>
        </form>
      </section>
    );
  }
}

ProductAddReview.propTypes = {
  documentId: PropTypes.string.isRequired,
  addReview: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  i18n: PropTypes.object.isRequired
};

export default withTranslation()(ProductAddReview);
