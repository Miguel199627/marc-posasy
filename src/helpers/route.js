import { loggedIn } from "./jwt";
import { Route, Redirect } from "react-router-dom";

import PageTop from "../components/shared/PageTop";
import Sidebar from "../components/shared/Sidebar";

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
        <Route {...opts} component={component} />
      </>
    );
  return <Redirect to="/login" />;
};
