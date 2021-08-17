import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Modal, Alert, Button, Form, Row, Col } from "react-bootstrap";
import { create, update } from "../../../../actions/sale";

export default function SalesForm({
  show,
  onSalesForm,
  currentId,
  setCurrentId,
}) {
  let sale = useSelector((state) =>
    currentId ? state.sales.data.find((sale) => sale.id === currentId) : null
  );
  const dispatch = useDispatch();
  const [dataForm, setDataForm] = useState({
    name_client: "",
    total: "",
    cost: 0,
    date: moment().format("YYYY-MM-DD"),
  });
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (sale) {
      sale.date = moment(sale.date).format("YYYY-MM-DD");
      if (!sale.name_client) sale.name_client = "";
      setDataForm(sale);
    }
  }, [sale]);

  const clear = () => {
    setCurrentId(0);
    setDataForm({
      name_client: "",
      total: "",
      cost: 0,
      date: moment().format("YYYY-MM-DD"),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (dataForm.total === "" || dataForm.cost === "" || dataForm.date === "") {
      setMessage("Unfilled fields please, place them.");
    } else {
      setMessage(null);
      if (currentId === 0) dispatch(create(dataForm));
      else dispatch(update(currentId, dataForm));
      onSalesForm();
      handleClose();
    }
  };

  const handleClose = () => {
    clear();
    onSalesForm();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title>Create sale</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {message && (
            <Alert variant="danger" className="text-center">
              {message}
            </Alert>
          )}
          <Row>
            <Col lg={6}>
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
            <Col lg={6}>
              <Form.Group>
                <Form.Label>
                  <strong>
                    <label className="text-danger">*</label>Fecha
                  </strong>
                </Form.Label>
                <Form.Control
                  type="date"
                  value={dataForm.date}
                  onChange={({ target: { value } }) =>
                    setDataForm({ ...dataForm, date: value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group>
                <Form.Label>
                  <strong>
                    <label className="text-danger">*</label>Total
                  </strong>
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
                  <strong>
                    <label className="text-danger">*</label>Cost
                  </strong>
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
          <Button variant="secondary" onClick={handleClose}>
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
