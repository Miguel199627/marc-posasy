import { LOGIN } from "../constants/actionTypes";
import * as provider from "../providers/auth";

export const login = (post) => async (dispatch) => {
  try {
    const { data: { jwtToken } } = await provider.login(post);
    dispatch({ type: LOGIN, payload: jwtToken });
  } catch (error) {
    console.log(error.message);
  }
};
