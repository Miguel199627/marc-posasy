import useStyles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faUser, faDollyFlatbed, faBoxes, faTag } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
    const classes = useStyles();

    return(
        <div className={`d-flex flex-column flex-shrink-0 p-3 bg-light ${classes.mainSidebar}`}>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a className="nav-link active">
                        <FontAwesomeIcon icon={faChartBar} className={classes.sizeIcon}/>
                        Landing Page
                    </a>
                </li>
                <li>
                    <a className="nav-link link-dark">
                        <FontAwesomeIcon icon={faUser} className={classes.sizeIcon}/>
                        Usuarios
                    </a>
                </li>
                <li>
                    <a className="nav-link link-dark">
                        <FontAwesomeIcon icon={faDollyFlatbed} className={classes.sizeIcon}/>
                        Inventario
                    </a>
                </li>
                <li>
                    <a className="nav-link link-dark">
                        <FontAwesomeIcon icon={faBoxes} className={classes.sizeIcon}/>
                        Productos
                    </a>
                </li>
                <li>
                    <a className="nav-link link-dark">
                        <FontAwesomeIcon icon={faTag} className={classes.sizeIcon}/>
                        Marcas
                    </a>
                </li>
            </ul>
        </div>
    );
}