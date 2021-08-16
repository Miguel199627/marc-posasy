import { FETCH_ALL, CREATE } from '../constants/actionTypes';

export default (sales = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return action.payload;
    default:
      return sales;
  }
};