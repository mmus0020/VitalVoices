import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Include your custom styles for Navbar
import logo from '../assets/logo-no-background.png'; // Correct path for the logo

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Vital Voices" className="logo" style={{ height: '50px' }} />
        </NavLink>
        <div className="navbar-nav ml-auto">
          <NavLink
            exact="true"
            className="nav-item nav-link"
            to="/"
            style={({ isActive }) => ({
              color: isActive ? '#f76c6c' : '#333333',
              fontWeight: isActive ? 'bold' : 'normal',
              borderBottom: isActive ? '2px solid #f76c6c' : 'none',
            })}
          >
            Home
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            to="/problem"
            style={({ isActive }) => ({
              color: isActive ? '#f76c6c' : '#333333',
              fontWeight: isActive ? 'bold' : 'normal',
              borderBottom: isActive ? '2px solid #f76c6c' : 'none',
            })}
          >
            Problem
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? '#f76c6c' : '#333333',
              fontWeight: isActive ? 'bold' : 'normal',
              borderBottom: isActive ? '2px solid #f76c6c' : 'none',
            })}
          >
            About
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            to="/resources"
            style={({ isActive }) => ({
              color: isActive ? '#f76c6c' : '#333333',
              fontWeight: isActive ? 'bold' : 'normal',
              borderBottom: isActive ? '2px solid #f76c6c' : 'none',
            })}
          >
            Resources
          </NavLink>
          {/* Replace href with a direct navigation to the Chat section in the homepage */}
          <NavLink
            className="nav-item nav-link chat-btn"
            to="/#cta-section"
            style={({ isActive }) => ({
              color: isActive ? '#f76c6c' : '#333333',
              fontWeight: isActive ? 'bold' : 'normal',
              borderBottom: isActive ? '2px solid #f76c6c' : 'none',
            })}
          >
            Get Help
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
