import { FETCH_ALL, UPDATE } from "../constants/actionTypes";
import * as provider from "../providers/sale";

import { toast } from "react-toastify";

export const getSales = (url) => async (dispatch) => {
  try {
    const { data } = await provider.listSale(url);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    toast.error(error.message);
  }
};

export const create = (post) => async (dispatch) => {
  try {
    await provider.create(post);
    const { data } = await provider.listSale(null);
    dispatch({ type: FETCH_ALL, payload: data });
    toast.success("Sale added with success!");
  } catch (error) {
    toast.error(error.message);
  }
};

export const update = (id, post) => async (dispatch) => {
  try {
    post.id = id;
    const { data } = await provider.update(post);
    dispatch({ type: UPDATE, payload: data });
    toast.success("Sale updated with success!");
  } catch (error) {
    toast.error(error.message);
  }
};

export const supr = (id) => async (dispatch) => {
  try {
    await provider.supr(id);
    const { data } = await provider.listSale(null);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const rest = (id) => async (dispatch) => {
  try {
    await provider.rest(id);
    const { data } = await provider.listSale(null);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
