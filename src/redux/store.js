import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import reducer from "./reducers";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist:['auth', 'profile'],
}

const persistedReducer = persistReducer(persistConfig, reducer) 

export const store = configureStore({
  reducer: persistedReducer,
});
