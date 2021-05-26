import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "./design-tokens/_css-variables.scss";
import store from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
