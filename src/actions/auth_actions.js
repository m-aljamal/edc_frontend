import axios from "axios";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
} from "./types";

import setAuthToken from "../components/utils/setAuthToken";

// Load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/users/getUser");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    console.error(error.response.data);

    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const register = (token) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/users/auth/activate", { token }, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data, // get the data back
    });
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      console.error(errors);
    }

    dispatch({
      type: REGISTER_FAIL,
      // no need for payload because in reduser we only remove the token
    });
  }
};

export const logout = () =>  (dispatch) => {
  dispatch({type: LOGOUT})
};
