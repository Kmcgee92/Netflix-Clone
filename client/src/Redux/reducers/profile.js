import { GET_PROFILES } from "../actions/profileActions";

export const profiles = (state = [], action) => {
  switch (action.type) {
    case GET_PROFILES:
      return [...action.profiles];
    default:
      return state;
  }
};
