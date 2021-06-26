import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
// import store from "./redux/store";       // Uncomment for To do list
import store from "./stores/index";         // Uncomment for redux with saga

import TodoApp from "./TodoApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);
