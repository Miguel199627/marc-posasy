import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (sales = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return action.payload;
    case UPDATE:
      return sales.data.map((sale) =>
        sale.id === action.payload.id ? action.payload : sale
      );
    case DELETE:
      return action.payload;
    default:
      return sales;
  }
};
