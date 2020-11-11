export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
export const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST";
export const POPULATE_WATCHLIST = "POPULATE_WATCHLIST";

//Actions

export const addToWatchlist = (data) => {
  return {
    type: ADD_TO_WATCHLIST,
    data,
  };
};
export const removeFromReduxWatchlist = () => ({
  type: REMOVE_FROM_WATCHLIST,
});

const populateWatchlist = (data) => ({
  type: POPULATE_WATCHLIST,
  data,
});

const defualt = () => ({
  type: "defualt",
});

//THUNKS
export const addObjectToWatchlist = (userId, data) => async (dispatch) => {
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
  const res = await fetch(`/api/watchlist/${userId}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(addToWatchlist(data));
  }
  return res;
};

export const getWatchlist = (userId) => async (dispatch) => {
  const res = await fetch(`/api/watchlist/${userId}`);

  if (res.ok) {
    const data = await res.json();

    dispatch(populateWatchlist(data));
  }

  return res;
};

export const removeFromWatchlist = (userId, watchlistId) => async (
  dispatch
) => {
  const res = await fetch(`/api/watchlist/${watchlistId}/remove`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(getWatchlist(userId));
  }
  return res;
};
