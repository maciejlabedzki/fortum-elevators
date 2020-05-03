import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

// Style
import "./css/default/styles.scss";
import "./css/vendor/Animate/animate.css";

// Component
import App from "./App";

// Store
const store = createStore(rootReducers, applyMiddleware(thunk));

if (typeof EventSource !== "undefined") {
  // Server-sent events support!
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
} else {
  // No server-sent events support!
  let div = document.getElementById("root");
  div.classList.add("pre-notification");
  div.innerHTML = "No server-sent events support..";
}
