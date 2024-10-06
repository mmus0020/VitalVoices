import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Chat.css'; // Import a separate CSS file for custom chat styles

const Chat = () => {
  return (
    <Container fluid className="chat-section-container p-0">
      {/* Hero Section with Background */}
      <section className="chat-section bg-light py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={10}>
              <h1 className="section-title text-center mb-4">Chat with Us</h1>
              <p className="section-description text-center">
                Our chatbot is available 24/7 to provide support, answer questions, and connect you with the right resources.
                Please click the button below to start a conversation. The same chatbot is featured on our homepage, ensuring a consistent support experience.
              </p>
              <div className="text-center">
                <button className="btn btn-primary btn-lg" onClick={() => window.location.href = '#chatbot-link'}>
                  Start Chatting
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default Chat;
