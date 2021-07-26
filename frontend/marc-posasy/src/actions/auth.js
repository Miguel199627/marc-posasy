import { LOGIN, LOGOUT } from "../constants/actionTypes";
import { removeToken } from "../helpers/jwt";
import * as provider from "../providers/auth";

export const login = (post) => async (dispatch) => {
  try {
    const { data } = await provider.login(post);
    dispatch({ type: LOGIN, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    removeToken();
    dispatch({ type: LOGOUT, payload: {} });
  } catch (error) {
    console.log(error.message);
  }
};
