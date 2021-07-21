import './styles.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from '../components/auth/Login';
import FourOFour from '../components/auth/FourOFour';
import LandingPage from "../components/pages/LandingPage";
import PageTop from "../components/shared/PageTop";
import Sidebar from "../components/shared/Sidebar";

export default function Routes() {
    return(
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Router>
                    <PageTop />
                    <Sidebar />
                    <div className="content-wrapper">
                        <Route exact path="/landingpage" component={LandingPage} />
                    </div>
                </Router>
                <Route path="*" component={FourOFour} />
            </Switch>
        </Router>
    );
};
