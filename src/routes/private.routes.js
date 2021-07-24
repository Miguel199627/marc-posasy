import { Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "../helpers/route";

import LandingPage from "../components/pages/LandingPage";

export const PrivateRoutes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/landingpage" component={LandingPage} />
    </Switch>
  );
};
