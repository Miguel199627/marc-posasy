import { Switch } from "react-router-dom";
import { PrivateRoute } from "../helpers/route";

import LandingPage from "../components/pages/LandingPage";
import Users from "../components/pages/Users";

export const PrivateRoutes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/landingpage" component={LandingPage} />
      <PrivateRoute exact path="/users" component={Users} />
    </Switch>
  );
};
