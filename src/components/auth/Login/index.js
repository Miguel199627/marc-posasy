import useStyles from "./styles";
import logo from "../../../img/logo.png";

import { login } from "../../../actions/auth";
import { LOGIN } from '../../../constants/actionTypes';
import { setToken } from "../../../helpers/jwt";

import { Image, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Login() {
  useSelector(({ auths: { constant, data } }) => {
    if(constant && constant === LOGIN) handleHistory(data.jwtToken);
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
          <Image src={logo} className={classes.imgLogo} />
          <h1 className={classes.title}>Marcposasy</h1>
          <FontAwesomeIcon icon={faTags} className={classes.iconLogo} />
        </div>
      </div>
      <div className={classes.main}>
        <div className="col-md-6 col-sm-12">
          <div className={classes.loginForm}>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label><strong>Email</strong></Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  value={dataLogin.email}
                  onChange={({ target: { value } }) =>
                    setDataLogin({ ...dataLogin, email: value })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label><strong>Password</strong></Form.Label>
                <Form.Control
                  type="password"
                  className="form-control"
                  value={dataLogin.password}
                  onChange={({ target: { value } }) =>
                    setDataLogin({ ...dataLogin, password: value })
                  }
                />
              </Form.Group>
              <Button type="submit" variant="dark" className="mt-2">Login</Button>
              <Button type="button" variant="secondary" className="mt-2 ms-2">Recovery</Button>{' '}
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
