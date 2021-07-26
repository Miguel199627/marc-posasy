import { useState } from "react";
import {
  Modal,
  Button,
  Form,
  Row,
  Col,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";

export default function UsersBoxSave({ show, onUsersBoxSave }) {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    status: "1",
    password: "",
    conPassword: "",
  });
  return (
    <Modal show={show} onHide={onUsersBoxSave} size="lg">
      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title>Create user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col lg={12}>
              <Form.Group>
                <Form.Label>
                  <strong>Name</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  value={dataForm.name}
                  onChange={({ target: { value } }) =>
                    setDataForm({ ...dataForm, name: value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group>
                <Form.Label>
                  <strong>Email</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  value={dataForm.email}
                  onChange={({ target: { value } }) =>
                    setDataForm({ ...dataForm, email: value })
                  }
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group>
                <Form.Label>
                  <strong>Email</strong>
                </Form.Label>
                <ToggleButtonGroup type="checkbox" value={dataForm.status} style={{ width: "100%" }}>
                  <ToggleButton
                    type="radio"
                    name="status"
                    id="tbg-btn-1"
                    variant="outline-success"
                    value={"1"}
                    onChange={({ target: { value } }) =>
                        setDataForm({ ...dataForm, status: value })
                    }
                  >
                    Active
                  </ToggleButton>
                  <ToggleButton
                    type="radio"
                    name="status"
                    id="tbg-btn-2"
                    variant="outline-danger"
                    value={"0"}
                    onChange={({ target: { value } }) =>
                        setDataForm({ ...dataForm, status: value })
                    }
                  >
                    Inactive
                  </ToggleButton>
                </ToggleButtonGroup>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onUsersBoxSave}>
          Close
        </Button>
        <Button variant="warning" onClick={onUsersBoxSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
