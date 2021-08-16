import { FETCH_ALL } from "../constants/actionTypes";
import * as provider from "../providers/user";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await provider.listUser();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
