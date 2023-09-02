import { combineReducers } from "redux";
import userReducer from "./user";

console.log("userReducer", userReducer);

export default combineReducers({
  user: userReducer,
});
