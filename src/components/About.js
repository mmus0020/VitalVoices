import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';  // Ensure to update the CSS file for custom styling

const About = () => {
  return (
    <Container fluid className="about-page-container">
      {/* Hero Section */}
      <section className="about-hero-section text-center py-5" style={{ backgroundColor: '#2c3e50', color: '#ffffff' }}>
        <h1 className="about-title display-4">Our Mission at Vital Voices for Change</h1>
        <p className="lead about-intro-text">
          Empowering young men to overcome the challenges of gambling addiction and promoting mental well-being.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="about-content-section py-5" style={{ backgroundColor: '#f8f8f8' }}>
        <Row className="justify-content-center">
          <Col md={5} className="about-mission">
            <h2 className="section-heading">Our Mission</h2>
            <p className="text-justify">
              We are committed to raising awareness about gambling addiction among young men in Australia.
              By providing support, resources, and a welcoming community, we aim to break the stigma that prevents
              individuals from seeking help.
            </p>
          </Col>
          <Col md={5} className="about-vision">
            <h2 className="section-heading">Our Vision</h2>
            <p className="text-justify">
              Our vision is a society where young men can openly discuss gambling addiction without fear of
              judgment, and receive the support they need to build a healthy, positive lifestyle.
            </p>
          </Col>
        </Row>
      </section>

      {/* Our Story Section */}
      <section className="about-story-section py-5" style={{ backgroundColor: '#fefae0' }}>
        <h2 className="text-center section-heading">Our Story</h2>
        <p className="text-center about-story-text mx-auto" style={{ maxWidth: '900px' }}>
          Vital Voices for Change was founded to address the increasing rates of gambling addiction and its
          impact on mental health among young men. The inspiration behind our work came from hearing countless
          stories of isolation, shame, and financial hardships faced by those who struggled in silence.
          Through our platform, we hope to give a voice to these stories and create a safe space for individuals
          to share their experiences and find support.
        </p>
      </section>

      {/* Our Values Section */}
      <section className="about-values-section py-5" style={{ backgroundColor: '#f9e79f' }}>
        <Row className="justify-content-center">
          <Col md={4} className="text-center mb-4">
            <h3 className="value-heading">Compassion</h3>
            <p>We believe in approaching every individual with empathy, understanding, and kindness.</p>
          </Col>
          <Col md={4} className="text-center mb-4">
            <h3 className="value-heading">Support</h3>
            <p>Our community offers a safe space where individuals can seek guidance without fear of stigma.</p>
          </Col>
          <Col md={4} className="text-center mb-4">
            <h3 className="value-heading">Change</h3>
            <p>We are dedicated to breaking stereotypes and creating a positive impact on mental health awareness.</p>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default About;
