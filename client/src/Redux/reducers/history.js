import {
  ADD_HISTORY,
  CLEAR_HISTORY,
  SET_HISTORY,
} from "../actions/historyActions";

export const history = (state = [], action) => {
  let nextState;
  switch (action.type) {
    case SET_HISTORY:
      console.log(action.list);
      nextState = [...state, ...action.list];
      return nextState;
    case ADD_HISTORY:
      nextState = [...state, ...action.film.new_data];
      return nextState;
    case CLEAR_HISTORY:
      return {};
    default:
      return state;
  }
};
