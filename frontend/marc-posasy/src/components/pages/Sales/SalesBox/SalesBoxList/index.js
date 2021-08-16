import { Button } from "react-bootstrap";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function SalesBoxList({
  name_client,
  total,
  cost,
  neto,
  created_at,
}) {
  return (
    <tr className="text-center">
      <td>
        <Button variant="success" size="sm" className="m-1" title="Edit user">
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button variant="danger" size="sm" title="Delete user">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
      <td>{name_client}</td>
      <td>{total}</td>
      <td>{cost}</td>
      <td>{neto}</td>
      <td>{moment(created_at).format("DD-MM-yyyy")}</td>
    </tr>
  );
}
