import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

import App from "./App";
import reducers from "../src/reducers";

//EXTENSÃO DO CROME
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(promise, multi, thunk)(createStore)(
  reducers,
  devTools
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
