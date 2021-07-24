import { Switch, Redirect } from "react-router-dom";
import { PublicRoute } from "../helpers/route";

import Login from "../components/auth/Login";

export const PublicRoutes = () => {
  return (
    <Switch>
      <PublicRoute exact path="/login" component={Login} />
    </Switch>
  );
};
