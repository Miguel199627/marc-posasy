import "./styles.css";
import { loggedIn } from "../helpers/jwt";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { PublicRoutes } from "./public.routes";
import { PrivateRoutes } from "./private.routes";

export default function Routes() {
  return (
    <Router>
      <PublicRoutes />
      <PrivateRoutes />
      {loggedIn() ? (
        <Redirect exact path="/" to="/landingpage" />
      ) : (
        <Redirect exact path="/" to="/login" />
      )}
    </Router>
  );
}
