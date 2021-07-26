import useStyles from "./styles";
import { logout } from "../../../actions/auth";
import { LOGIN, LOGOUT } from '../../../constants/actionTypes';
import { getDataUser, removeDataUser, setDataUser } from "../../../helpers/jwt";

import { Navbar, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faUser } from "@fortawesome/free-solid-svg-icons";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function PageTop() {
  useSelector(({ auths: { constant, data } }) => {
    if(constant && constant === LOGIN) setDataUser(JSON.stringify(data.dataUser));
    if(constant && constant === LOGOUT) removeDataUser();
  });
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    setProfile(JSON.parse(getDataUser()));
  }, [])

  const handleClickLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  return (
    <Navbar bg="dark">
        <Navbar.Brand className="text-light ms-3">
          <FontAwesomeIcon icon={faTags} className="bi me-2" />
          <span className="fs-4">Marcposasy</span>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end me-3">
          <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic" className={classes.makeupButton} >
              <FontAwesomeIcon icon={faUser} />
            </Dropdown.Toggle>

            <Dropdown.Menu className={classes.positionMenu}>
              <Dropdown.Item>{ profile?.name }</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item onClick={() => handleClickLogout()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
    </Navbar>
  );
}
