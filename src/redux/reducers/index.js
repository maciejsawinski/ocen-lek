import { combineReducers } from "redux";

import product from "./product";
import review from "./review";

export default combineReducers({
  product,
  review
});
