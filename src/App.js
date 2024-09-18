import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Problem from './components/Problem';
import Resources from './components/Resources';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import logo from './assets/logo-no-background.png'; // Adjust the path if necessary

// This component renders the navigation bar
function NavigationBar() {
  const location = useLocation(); // This hook must be used inside Router

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="150"
            height="auto"
            className="d-inline-block align-top"
            alt="Vital Voices Logo"
          />
        </Navbar.Brand>
        {/* Navbar Toggle for small screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto justify-content-between w-100">
            {/* Conditionally render "Home" link only if not already on Home */}
            {location.pathname !== '/' && (
              <Nav.Link as={Link} to="/" className="nav-link-custom">
                Home
              </Nav.Link>
            )}
            {/* Conditionally render "Problem" link only if not already on Problem */}
            {location.pathname !== '/problem' && (
              <Nav.Link as={Link} to="/problem" className="nav-link-custom">
                Problem
              </Nav.Link>
            )}
            {/* Conditionally render "About" link only if not already on About */}
            {location.pathname !== '/about' && (
              <Nav.Link as={Link} to="/about" className="nav-link-custom">
                About
              </Nav.Link>
            )}
            {/* Conditionally render "Resources" link only if not already on Resources */}
            {location.pathname !== '/resources' && location.pathname !== '/resources/' && (
              <Nav.Link as={Link} to="/resources" className="nav-link-custom">
                Resources
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function App() {
  return (
    <>
      {/* Render the NavigationBar component */}
      <NavigationBar />
      
      {/* Routes for the app */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/about" element={<About/>} /> {/* Placeholder for About */}
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </>
  );
}

export default App;
