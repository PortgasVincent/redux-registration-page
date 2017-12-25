import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {Registration_Form} from "./component/RegistrationForm";
import "./index.css";
import {reducer} from "./reducers/index.js";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Registration_Form />
  </Provider>,
  document.getElementById("root")
);


































