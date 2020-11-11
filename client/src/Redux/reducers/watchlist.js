import {
  ADD_TO_WATCHLIST,
  POPULATE_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
} from "../actions/watchlistActions";

export const watchlist = (state = [], action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      nextState = [...state, action.data];
      return nextState;
    case POPULATE_WATCHLIST:
      nextState = [...action.data.watchlist];
      return nextState;
    case REMOVE_FROM_WATCHLIST:
      return {};
    default:
      return state;
  }
};
