import useStyles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faUser, faDollyFlatbed, faBoxes, faTag, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const classes = useStyles();

    return(
        <div className={`d-flex flex-column flex-shrink-0 p-3 bg-dark ${classes.mainSidebar}`}>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a className="nav-link link-light" activeClassName="active">
                        <FontAwesomeIcon icon={faChartBar} className={classes.sizeIcon}/>
                        Landing Page
                    </a>
                </li>
                <li>
                    <NavLink className="nav-link link-light" to="/users" activeClassName="active">
                        <FontAwesomeIcon icon={faUser} className={classes.sizeIcon}/>
                        Usuarios
                    </NavLink>
                </li>
                <li>
                    <a className="nav-link link-light" activeClassName="active">
                        <FontAwesomeIcon icon={faDollyFlatbed} className={classes.sizeIcon}/>
                        Inventario
                    </a>
                </li>
                <li>
                    <a className="nav-link link-light" activeClassName="active">
                        <FontAwesomeIcon icon={faBoxes} className={classes.sizeIcon}/>
                        Productos
                    </a>
                </li>
                <li>
                    <a className="nav-link link-light" activeClassName="active">
                        <FontAwesomeIcon icon={faTag} className={classes.sizeIcon}/>
                        Marcas
                    </a>
                </li>
                <li>
                    <NavLink className="nav-link link-light" to="/sales" activeClassName="active">
                        <FontAwesomeIcon icon={faShoppingCart} className={classes.sizeIcon}/>
                        Ventas
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}