export const GET_PROFILES = "GET_PROFILES";

//!ACTIONS
export const addProfiles = (profiles) => {
  return {
    type: GET_PROFILES,
    profiles,
  };
};

//! THUNKS
//restore user
export const getProfiles = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/profiles/${userId}`);

  if (res.ok) {
    const { profiles } = await res.json();
    dispatch(addProfiles(profiles));
  }
  return res;
};
