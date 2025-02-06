import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';

export default function Navbar() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const toggleMenu=() =>{
  setIsMenuOpen((prev)=> !prev)
 }
 

  return (
    <div className="nav-container">
      <div className="navbar-logo">
        <img src="icons/logo.png" alt="logo" />
        <h2>Sakara Hive</h2>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <div className={`menu-container ${isMenuOpen ? 'active' : ''} `}>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
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
        <div className="nav-connect">
          <a href="mailto:mbuthiaryne@gmail.com">Connect with me</a>
        </div>
      </div>
    </div>
  );
}
