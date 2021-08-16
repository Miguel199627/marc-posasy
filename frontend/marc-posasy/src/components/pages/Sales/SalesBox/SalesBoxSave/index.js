import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { create } from "../../../../../actions/sale";

export default function SalesBoxSave({ show, onSalesBoxSave }) {
  const dispatch = useDispatch();
  const [dataForm, setDataForm] = useState({
    name_client: "",
    total: 0,
    cost: 0,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(create(dataForm));
    onSalesBoxSave();
  };

  return (
    <Modal show={show} onHide={onSalesBoxSave} size="lg">
      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title>Create sale</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
            <Col lg={12}>
              <Form.Group>
                <Form.Label>
                  <strong>Cliente</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  value={dataForm.name_client}
                  onChange={({ target: { value } }) =>
                    setDataForm({ ...dataForm, name_client: value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group>
                <Form.Label>
                  <strong>Total</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  value={dataForm.total}
                  onChange={({ target: { value } }) =>
                    setDataForm({ ...dataForm, total: value })
                  }
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group>
                <Form.Label>
                  <strong>Cost</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  value={dataForm.cost}
                  onChange={({ target: { value } }) =>
                    setDataForm({ ...dataForm, cost: value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onSalesBoxSave}>
            Close
          </Button>
          <Button type="submit" variant="warning">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
