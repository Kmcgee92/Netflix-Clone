export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
export const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST";

//Actions

export const addToWatchlist = (film) => {
  return {
    type: ADD_TO_WATCHLIST,
    film,
  };
};
export const removeFromWatchlist = () => ({
  type: REMOVE_FROM_WATCHLIST,
});

//THUNKS
export const addObjectToWatchlist = (userId, data) => async (dispatch) => {
  const res = await fetch(`/api/history/${userId}/add`);

  if (res.ok) {
    const data = res.json();
  }
};
// //THUNKS
// export const removeObjectFromWatchlist = (userId, data) => async (dispatch) => {
//   const res = await fetch(`/api/history/${userId}/add`);

//   if (res.ok) {
//     const data = res.json();
//     console.log(data);
//   }
// };
