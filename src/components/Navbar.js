import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar position-fixed">
      <div className="navbar-container">
        <h4 className="fw-bold">Taste Buds</h4>
      </div>

      <div className="navbar-container">
        <ul className="list-menu">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/recipes" 
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
            >
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
