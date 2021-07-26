import { loggedIn } from "./jwt";
import { Route, Redirect } from "react-router-dom";

import PageTop from "../components/shared/PageTop";
import Sidebar from "../components/shared/Sidebar";
import { Row } from "react-bootstrap";

export const PublicRoute = ({ component, ...opts }) => {
  if (!loggedIn()) return <Route {...opts} component={component} />;
  return <Redirect to="/landingpage" />;
};

export const PrivateRoute = ({ component, ...opts }) => {
  if (loggedIn())
    return (
      <>
        <PageTop />
        <Sidebar />
        <Row style={{ marginLeft: "280px", marginRight: "unset" }}>
          <Route {...opts} component={component} />
        </Row>
      </>
    );
  return <Redirect to="/login" />;
};
