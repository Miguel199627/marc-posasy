import axiosInstance from "../helpers/axios";

export const listSale = () => axiosInstance.get('sale/list');
export const create = (dataForm) => axiosInstance.post('sale/add', dataForm);
export const update = (dataForm) => axiosInstance.put('sale/update', dataForm);