import axiosInstance from "../helpers/axios";

export const listUser = () => axiosInstance.get('user/list');