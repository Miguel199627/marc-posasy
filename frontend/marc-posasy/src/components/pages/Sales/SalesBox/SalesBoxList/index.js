import { Button, Badge } from "react-bootstrap";
import moment from "moment";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { supr } from "../../../../../actions/sale";

export default function SalesBoxList({ sale, setCurrentId, onSalesBoxList }) {
  const dispatch = useDispatch();

  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  return (
    <tr className="text-center">
      <td>
        <Button
          variant="success"
          size="sm"
          className="m-1"
          title="Edit user"
          onClick={() => {
            setCurrentId(sale.id);
            onSalesBoxList();
          }}
        >
          <FontAwesomeIcon icon={faEdit} className="text-dark" />
        </Button>
        <Button
          variant="danger"
          size="sm"
          title="Delete user"
          onClick={() => dispatch(supr(sale.id))}
        >
          <FontAwesomeIcon icon={faTrash} className="text-dark" />
        </Button>
      </td>
      <td>{sale.name_client ? sale.name_client : "N/A"}</td>
      <td>{formatNumber(sale.total)}</td>
      <td>{formatNumber(sale.cost)}</td>
      <td>{formatNumber(sale.total - sale.cost)}</td>
      <td>{moment(sale.date).format("DD-MM-yyyy")}</td>
      <td>{moment(sale.created_at).format("DD-MM-yyyy")}</td>
      <td>
        <Badge
          bg={!sale.deleted_at ? "success" : "danger"}
          className="text-dark"
        >
          {!sale.deleted_at ? "Activo" : "Inactivo"}
        </Badge>
      </td>
    </tr>
  );
}
