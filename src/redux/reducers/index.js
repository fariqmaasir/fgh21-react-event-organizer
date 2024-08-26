import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import event from "./event";
import profile from "./profile";
import transaction from "./transaction";
const reducer = combineReducers({
  auth,
  event,
  profile,
  transaction,
});

export default reducer;
