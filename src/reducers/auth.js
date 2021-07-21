import { LOGIN } from "../constants/actionTypes";

export default (auths = [], action) => {
  switch (action.type) {
    case LOGIN:
      return { data: action.payload };
    default:
      return auths;
  }
};
