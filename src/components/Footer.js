import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'; // Custom styles for footer

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <Container>
        <Row>
          {/* Left Column: Organization Info */}
          <Col md={4} className="mb-3">
            <h5>Vital Voices for Change</h5>
            <p>
              Empowering young men to overcome the challenges of gambling addiction and promoting mental well-being.
            </p>
          </Col>

          {/* Middle Column: Extension Download Section */}
          <Col md={4} className="text-center mb-3">
            <h5>Get Our Extension</h5>
            <p>Block gambling sites and receive supportive messages with our extension.</p>
            <Button href="#extension-download-url" variant="info" className="cta-button mb-2">
              Download Our Extension
            </Button>
          </Col>

          {/* Right Column: Quick Links */}
          <Col md={4} className="text-center mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/problem" className="footer-link">Problem</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About</Link>
              </li>
              <li>
                <Link to="/resources" className="footer-link">Resources</Link>
              </li>
              <li>
                <Link to="/#cta-section" className="footer-link">Get Help</Link>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Bottom Row: Copyright Information */}
        <Row className="mt-3">
          <Col className="text-center">
            <p>© 2024 Vital Voices for Change. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
