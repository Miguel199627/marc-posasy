import { getSales } from "../../../actions/sale";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import SalesBox from "./SalesBox";
import SalesForm from "./SalesForm";

export default function Sales() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleSalesFormClose = () => setShow(false);
  const handleSalesBoxOpen = () => setShow(true);

  useEffect(() => {
    dispatch(getSales(null));
  }, [currentId, dispatch]);

  return (
    <>
      <SalesBox onSalesBox={handleSalesBoxOpen} setCurrentId={setCurrentId}/>
      <SalesForm show={show} onSalesForm={handleSalesFormClose} currentId={currentId} setCurrentId={setCurrentId}/>
    </>
  );
}
