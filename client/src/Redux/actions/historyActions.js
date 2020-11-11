export const SET_HISTORY = "SET_HISTORY";
export const ADD_HISTORY = "ADD_HISTORY";
export const CLEAR_HISTORY = "CLEAR_HISTORY";

//Actions
const setHistory = (list) => ({
  type: SET_HISTORY,
  list,
});
export const addToHistory = (film) => {
  return {
    type: ADD_HISTORY,
    film,
  };
};
export const clearAllHistory = () => ({
  type: CLEAR_HISTORY,
});

//THUNKS
export const addObjectToHistory = (userId, data) => async (dispatch) => {
  const { name, original_name, title, original_title } = data;

  const request = {
    name: name || title || original_name || original_title,
    backdrop: data.backdrop_path,
    poster: data.poster_path,
    original_language: data.original_language,
    id: data.id,
    vote_average: data.vote_average,
    overview: data.overview,
  };
  const res = await fetch(`/api/history/${userId}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (res.ok) {
    const data = await res.json();
    if (data.new_data) {
      // notes
      // worth storing in global state?
      // recieving new_data and repetitive history_inserts but all is cleared on refresh
      // going to retrieve all history on history page
      // just going to send it all for now, might be meaningless
      dispatch(addToHistory(data));
    }
  }
  return res;
};


export const getHistory = (userId) => async (dispatch) => {
  const res = await fetch(`/api/history/${userId}`);
  if (res.ok) {
    const { list } = await res.json();
    dispatch(setHistory(list));
  }
  return res;
};
export const clearHistory = (userId) => async (dispatch) => {
  const res = await fetch(`/api/history/${userId}/clear`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    dispatch(clearAllHistory());
  }
  return res;
};