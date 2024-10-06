import React, { useEffect } from 'react';
import { Container, Carousel, Button } from 'react-bootstrap';
import supportImage from '../assets/pexels-drewrae-1871508.jpg';
import Image1 from '../assets/pexels-dariabuntaria-3021120.jpg';
import Image2 from '../assets/pexels-inzmamkhan11-1134204.jpg';
import { useLocation } from 'react-router-dom';
import './Home.css'; // Ensure you have consistent CSS for layout and styling

const Home = () => {
  const location = useLocation();

  // Scroll to the chatbot section if navigated through Get Help link
  useEffect(() => {
    if (location.hash === '#cta-section') {
      const element = document.getElementById('cta-section');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <Container fluid className="page-container p-0">
      <section id="hero-carousel" className="position-relative">
        <div className="carousel-caption-custom position-absolute text-center w-100">
          <h1 className="display-4 text-light">Struggling with Gambling? You're Not Alone.</h1>
          <p className="lead text-light">We’re here to provide support, resources, and hope for those facing gambling addiction.</p>
          <Button href="/problem" variant="outline-light" size="lg" className="cta-button">Learn More About the Problem</Button>
        </div>
        <Carousel className="styled-carousel" interval={2500} controls={false} indicators={false} fade>
          <Carousel.Item>
            <img className="d-block w-100" src={supportImage} alt="Support group" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Image1} alt="Discussion" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Image2} alt="Counseling" />
          </Carousel.Item>
        </Carousel>
      </section>

      <section id="cta-section" className="text-center my-5 py-5" style={{ backgroundColor: '#ffffff', color: '#2c2c2c' }}>
        <h2 className="display-4 mb-4">Get Help</h2>
        <p className="lead mb-4">If you're struggling and want someone to talk to, try out our supportive chatbot VERA. It's available 24/7 to help you find the support you need.</p>
        <Button href="#cta-section" variant="primary" size="lg" className="cta-button">Talk with VERA</Button>
      </section>
    </Container>
  );
};

export default Home;
