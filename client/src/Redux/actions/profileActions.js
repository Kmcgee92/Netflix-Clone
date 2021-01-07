export const GET_PROFILES = "GET_PROFILES";

//!ACTIONS
export const loadProfiles = (profiles) => {
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
    dispatch(loadProfiles(profiles));
  }
  return res;
};

export const deleteProfile = (userId, profileId) => async (dispatch) => {
  try {
    const res = await fetch(`/api/users/profiles/delete/${profileId}`, {
      method: "DELETE"
    })
    if(res.ok) {
      dispatch(getProfiles(userId))
    }
    return res

  } catch (e) {
    console.log(e)
  }
}
