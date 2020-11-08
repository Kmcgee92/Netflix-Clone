import { ADD_HISTORY, CLEAR_HISTORY } from "../actions/historyActions";

export const history = (state = [], action) => {
  switch (action.type) {
    case ADD_HISTORY:
      const nextState = [...state, ...action.film.new_data];
      return nextState;
    case CLEAR_HISTORY:
      return {};
    default:
      return state;
  }
};
