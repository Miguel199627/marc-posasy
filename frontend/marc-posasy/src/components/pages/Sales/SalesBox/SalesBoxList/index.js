import { Button } from "react-bootstrap";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function SalesBoxList({ sale, setCurrentId, onSalesBoxList }) {
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
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button variant="danger" size="sm" title="Delete user">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
      <td>{sale.name_client}</td>
      <td>{sale.total}</td>
      <td>{sale.cost}</td>
      <td>{sale.neto}</td>
      <td>{moment(sale.date).format("DD-MM-yyyy")}</td>
      <td>{moment(sale.created_at).format("DD-MM-yyyy")}</td>
    </tr>
  );
}
