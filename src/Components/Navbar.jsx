import { NavLink } from 'react-router';
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="navbar-logo">
        <img src="icons/logo.png" alt="logo" />
        <h2>Sakara Hive</h2>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/"
               activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutme" activeClassName="active">
                About me
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" activeClassName="active">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeClassName="active">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="nav-connect">Connect with me</div>
      </div>
    
  );
}
