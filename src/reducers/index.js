import {combineReducers} from "redux";
import {data} from "./data.js";
import {isValid} from "./isValid.js";

export const reducer = combineReducers({
  data,
  isValid,
});