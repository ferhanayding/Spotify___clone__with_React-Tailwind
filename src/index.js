import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";
import stores from "./stores";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);
