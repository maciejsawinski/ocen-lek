import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import Search from "./components/Search";
import Product from "./components/Product";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/product/:id?" component={Product} />
          <Route component={Search} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
