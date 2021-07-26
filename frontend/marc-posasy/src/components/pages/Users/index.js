import { getUsers } from "../../../actions/user";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import UsersBox from "./UsersBox";

export default function Users() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <UsersBox />
  );
};
