import useStyles from "./styles";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useState } from "react";

import UsersBoxSearch from "./UsersBoxSearch";
import UsersBoxList from "./UsersBoxList";
import UsersBoxSpinner from "./UsersBoxSpinner";
import UsersBoxSave from "./UsersBoxSave";

export default function UsersBox() {
  const users = useSelector((state) => state.users);
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const handleUsersBoxSaveClose = () => setShow(false);

  return (
    <>
      {/* <UsersBoxSearch /> */}

      {/* <UsersBoxSpinner /> */}
      <Card className={`mt-2 ${classes.cardUsers}`}>
        <Card.Header className="bg-warning">
          <strong>Usuarios</strong>
          <div className="float-end">
            <Button variant="dark" size="sm" title="Add user" onClick={() => setShow(true)}>
              {" "}
              <FontAwesomeIcon icon={faPlusSquare} />{" "}
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Row className="mb-2">
            <strong className="text-center">Amount users: {users.total}</strong>
          </Row>
          <Row lg={12} className="bg-secondary text-light text-center">
            <Col>Acciones</Col>
            <Col>Nombre</Col>
            <Col>Email</Col>
            <Col>Estado</Col>
            <Col>Creado en</Col>
          </Row>
          {users.data?.map((user) => (
            <UsersBoxList key={user.id} {...user} />
          ))}
        </Card.Body>
      </Card>
      <UsersBoxSave show={show} onUsersBoxSave={handleUsersBoxSaveClose}/>
    </>
  );
}
