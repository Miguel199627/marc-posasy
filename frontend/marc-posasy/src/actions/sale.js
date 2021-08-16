import { FETCH_ALL, CREATE } from "../constants/actionTypes";
import * as provider from "../providers/sale";

import { toast } from "react-toastify";

export const getSales = () => async (dispatch) => {
  try {
    const { data } = await provider.listSale();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    toast.error(error.message);
  }
};

export const create = (post) => async (dispatch) => {
  try {
    const { data } = await provider.create(post);
    dispatch({ type: CREATE, payload: data });
    toast.success("Sale added with success!");
  } catch (error) {
    toast.error(error.message);
  }
};
