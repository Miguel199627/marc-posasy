import useStyles from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { Button, Card, Row, Spinner, Table } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import SalesBoxList from "./SalesBoxList";

export default function SalesBox({ onSalesBox, setCurrentId }) {
  const classes = useStyles();
  const sales = useSelector((state) => state.sales);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [sales]);

  return (
    <>
      <Card className={`mt-2 ${classes.cardSales}`}>
        <Card.Header className="bg-warning">
          <strong>Ventas</strong>
          <div className="float-end">
            <Button
              variant="dark"
              size="sm"
              title="Add sale"
              onClick={onSalesBox}
            >
              {" "}
              <FontAwesomeIcon icon={faPlusSquare} />{" "}
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          {loading ? (
            <Row className="justify-content-center">
              <Spinner animation="grow" variant="warning" />
            </Row>
          ) : (
            <>
              <Row className="mb-2">
                <strong className="text-center">
                  Amount sales: {sales.total}
                </strong>
              </Row>
              <Table striped bordered hover>
                <thead className="bg-secondary text-light text-center">
                  <tr>
                    <th>Acciones</th>
                    <th>Cliente</th>
                    <th>Total</th>
                    <th>Costo</th>
                    <th>Neto</th>
                    <th>Fecha</th>
                    <th>Creado en</th>
                  </tr>
                </thead>
                <tbody>
                  {sales.data?.map((sale) => (
                    <SalesBoxList key={sale.id} sale={sale} setCurrentId={setCurrentId} onSalesBoxList={onSalesBox}/>
                  ))}
                </tbody>
              </Table>
            </>
          )}
          <ToastContainer autoClose={2000} />
        </Card.Body>
      </Card>
    </>
  );
}
