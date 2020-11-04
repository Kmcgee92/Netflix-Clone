import Cookies from "js-cookie";

export const SET_USER = "SET_USER";
export const REMOVE_USER = "REMOVE_USER";
export const CREATE_USER = "CREATE_USER";

//!ACTIONS
export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const createUser = (user) => {
  return {
    type: CREATE_USER,
    user,
  };
};

//! THUNKS
//restore user
export const generateSession = () => async (dispatch) => {
  const access = Cookies.get("access_token_cookie");
  const res = await fetch("/api/users/token/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(setUser(data));
  }
  return res;
};

//login
export const login = (email, password) => {
  return async (dispatch) => {
    const res = await fetch(`/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
      },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      const data = await res.json();
      dispatch(setUser(data));
    }
    return res;
  };
};
//logout
export const logout = () => async (dispatch) => {
  const res = await fetch("/api/session/token/remove", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    dispatch(removeUser());
  }
  return res;
};

export const signup = (username, email, password) => async (dispatch) => {
  const csrfToken = Cookies.get("XSRF-TOKEN");
  const response = await fetch("/api/users", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      // "XSRF-TOKEN": csrfToken
    },
    body: JSON.stringify({ username, email, password }),
  });
  if (response.ok) {
    const { user } = await response.json();
    dispatch(createUser(user));
  }
};
