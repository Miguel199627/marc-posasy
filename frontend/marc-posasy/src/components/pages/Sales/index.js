import { getSales } from "../../../actions/sale";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import SalesBox from "./SalesBox";

export default function Sales() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSales());
  }, [ dispatch ]);

  return (
    <SalesBox />
  );
};