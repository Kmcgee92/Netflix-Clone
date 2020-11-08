import {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
} from "../actions/watchlistActions";

export const watchlist = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      console.log(action);
    case REMOVE_FROM_WATCHLIST:
      return {};
    default:
      return state;
  }
};
