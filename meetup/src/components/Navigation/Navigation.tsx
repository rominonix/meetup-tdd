import "./Navigation.style.css";
import { Link } from "react-router-dom";
// la navegacion cambia cuando el usuario se loggea, se añade profile a la navegacion
const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/" className="link">
        <h2>MeetUp 🎉 </h2>
      </Link>
      <nav>
        <ul>
          <li>
            {/* <Link to="/events/search" className="link">
              Events
            </Link> */}
          </li>
          <li>
            <Link to="/login" className="link">
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
