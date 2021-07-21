import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";

export default function PageTop() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand" href="#">
          <FontAwesomeIcon icon={faTags} className="bi me-2" />
          <span className="fs-4">Marcposasy</span>
        </div>
      </div>
    </nav>
  );
}
