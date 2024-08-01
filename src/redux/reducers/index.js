import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import event from "./event";
import profile from "./profile";
const reducer = combineReducers({
  auth,
  event,
  profile,
});

export default reducer;
