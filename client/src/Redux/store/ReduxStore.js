import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { auth } from "../reducers/Auth.js";
import { profiles } from "../reducers/profile.js";
import { history } from "../reducers/history.js";
import { watchlist } from "../reducers/watchlist.js";

let storeEnhancer;

if (process.env.NODE_ENV !== "production") {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  storeEnhancer = composeEnhancers(applyMiddleware(thunk));
} else {
  storeEnhancer = applyMiddleware(thunk);
}

const ReducerMerger = combineReducers({
  auth,
  profiles,
  history,
  watchlist,
});

const configureStore = (initialState) => {
  return createStore(ReducerMerger, initialState, storeEnhancer);
};

export default configureStore;
