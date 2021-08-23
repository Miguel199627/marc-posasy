import axiosInstance from "../helpers/axios";

export const listSale = (url) => !url ? axiosInstance.get('sale/list') : axiosInstance.get(url);
export const create = (dataForm) => axiosInstance.post('sale/add', dataForm);
export const update = (dataForm) => axiosInstance.put('sale/update', dataForm);
export const supr = (id) => axiosInstance.delete(`sale/delete/${id}`);
export const rest = (id) => axiosInstance.delete(`sale/restore/${id}`);