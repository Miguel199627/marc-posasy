import useStyles from "./styles";
import logo from "../../../img/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../actions/auth";
import { setToken } from '../../../helpers/jwt';
import { useHistory } from "react-router-dom";

export default function Login() {
  const post = useSelector(state => {
    if(Object.keys(state.auths).length) handleHistory(state.auths.data);
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  let history = useHistory();
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(login(dataLogin));
  };

  const handleHistory = (token) => {
    setToken(token);
    history.push("/landingpage");
  };

  return (
    <>
      <div className={classes.sidenav}>
        <div className={classes.loginMainText}>
          <img src={logo} className={classes.imgLogo} />
          <h1 className={classes.title}>Marcposasy</h1>
          <FontAwesomeIcon icon={faTags} className={classes.iconLogo} />
        </div>
      </div>
      <div className={classes.main}>
        <div className="col-md-6 col-sm-12">
          <div className={classes.loginForm}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <strong>Email</strong>
                <input
                  type="text"
                  className="form-control"
                  value={dataLogin.email}
                  onChange={({ target: { value } }) =>
                    setDataLogin({ ...dataLogin, email: value })
                  }
                />
              </div>
              <div className="form-group mt-2">
                <strong>Password</strong>
                <input
                  type="password"
                  className="form-control"
                  value={dataLogin.password}
                  onChange={({ target: { value } }) =>
                    setDataLogin({ ...dataLogin, password: value })
                  }
                />
              </div>
              <button type="submit" className={`btn mt-2 ${classes.btnBlack}`}>
                Login
              </button>
              <button type="button" className="btn mt-2 ms-2 btn-secondary">
                Recovery
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
