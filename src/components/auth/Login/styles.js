import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  sidenav: {
    height: "100%",
    backgroundColor: "#000",
    overflowX: "hidden",
    paddingTop: 20,
  },
  main: {
    padding: "0px 10px",
  },
  [theme.breakpoints.down(450)]: {
    loginForm: {
      marginTop: "10%",
    },
  },
  [theme.breakpoints.up(768)]: {
    main: {
      marginLeft: "40%",
    },
    sidenav: {
      with: "40%",
      position: "fixed",
      zIndex: 1,
      top: 0,
      left: 0,
    },
    loginForm: {
      marginTop: "80%",
    },
  },
  loginMainText: {
    marginTop: "20%",
    padding: 60,
    color: "#fff",
    textAlign: "center",
  },
  imgLogo: {
    width: 112,
    height: 112,
  },
  title: {
    fontFamily: "'Qahiri', sans-serif",
    fontSize: 45,
  },
  btnBlack: {
    backgroundColor: "#000 !important",
    color: "#fff",
  },
  iconLogo: {
    fontSize: 90,
    color: "#FECC00",
  },
}));
