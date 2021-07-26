import { Col, Row, Badge, Button } from "react-bootstrap";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function UsersBoxList({ name, email, status, created_at }) {
    return(
        <Row className="text-center">
            <Col>
                <Button variant="success" size="sm" className="m-1" title="Edit user">
                    <FontAwesomeIcon icon={faEdit}/>
                </Button>
                <Button variant="danger" size="sm" title="Delete user">
                    <FontAwesomeIcon icon={faTrash}/>
                </Button>
            </Col>
            <Col>{ name }</Col>
            <Col>{ email }</Col>
            <Col><Badge bg={ status == 1 ? 'success' : 'danger' }>{ status == 1 ? 'Activo' : 'Inactivo' }</Badge></Col>
            <Col>{ moment(created_at).format("DD-MM-yyyy") }</Col>
        </Row>
    );
};