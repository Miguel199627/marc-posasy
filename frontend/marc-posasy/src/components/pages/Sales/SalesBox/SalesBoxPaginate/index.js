import { getSales } from "../../../../../actions/sale";

import { useDispatch } from "react-redux";
import { ButtonToolbar, Pagination } from "react-bootstrap";

export default function SalesBoxPaginate({
  first_page_url,
  prev_page_url,
  next_page_url,
  last_page_url,
  from,
  to,
  total,
}) {
  const dispatch = useDispatch();
  return (
    <ButtonToolbar
      className="justify-content-between"
      aria-label="Toolbar with Button groups"
    >
      <Pagination>
        <Pagination.First onClick={() => dispatch(getSales(first_page_url))} title="Go first page"/>
        <Pagination.Prev onClick={() => dispatch(getSales(prev_page_url))} title="Go prev page"/>
        <Pagination.Next onClick={() => dispatch(getSales(next_page_url))} title="Go next page"/>
        <Pagination.Last onClick={() => dispatch(getSales(last_page_url))} title="Go last page"/>
      </Pagination>
      <strong className="text-center">{from} - {to} de {total}</strong>
    </ButtonToolbar>
  );
}
