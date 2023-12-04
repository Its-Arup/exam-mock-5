import { thunk } from "redux-thunk";
import { reducer as userReducer } from "./user_reducer/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

const rootReducer = combineReducers({
  userReducer
});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));
