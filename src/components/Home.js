import React from 'react';
import { Container, Carousel, Button } from 'react-bootstrap';
import supportImage from '../assets/pexels-drewrae-1871508.jpg';
import Image1 from '../assets/pexels-dariabuntaria-3021120.jpg';
import Image2 from '../assets/pexels-inzmamkhan11-1134204.jpg';

const Home = () => {
  return (
    <Container fluid className="custom-container p-0">
      {/* Hero/Carousel Section */}
      <section id="hero-carousel" className="position-relative">
        {/* Headline superimposed on the carousel */}
        <div className="carousel-caption-custom position-absolute text-center w-100">
          <h1 className="display-4 text-light">
          Breaking the Silence on Gambling Addiction Among Young Men
          </h1>
          <p className="lead text-light">Support, resources, and community for those affected by gambling addiction</p>
        </div>

        {/* Carousel Section */}
        <Carousel className="styled-carousel" interval={2500} controls={false} indicators={false} fade>
          <Carousel.Item>
            <img className="d-block w-100" src={supportImage} alt="Support group meeting" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Image1} alt="Additional Image 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Image2} alt="Additional Image 2" />
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Call to Action Section */}
      <section id="cta-section" className="text-center my-5 py-5" style={{ backgroundColor: '#f8f4eb', color: '#2c2c2c' }}>
        <h2 className="display-4 mb-4">Want to Talk to Our Bot?</h2>
        <p className="lead mb-4">
          If you're struggling and want someone to talk to, try out our supportive chatbot. It's available 24/7 to help you find the support you need.
        </p>
        <Button href="#your-bot-url" variant="primary" size="lg" className="cta-button">
          Try Out the Bot
        </Button>
      </section>
    </Container>
  );
};

export default Home;
