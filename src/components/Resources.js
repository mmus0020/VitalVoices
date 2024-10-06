import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Resources.css';

const Resources = () => {
  const [expanded, setExpanded] = useState([false, false, false, false]);

  const handleToggle = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const articles = [
    {
      title: "Understanding Male Mental Health",
      excerpt: "Explore the unique challenges men face in addressing mental health issues...",
      link: "https://mensline.org.au/mens-mental-health/mens-mental-health-common-challenges/#:~:text=Some%20men%20may%20be%20more,it%20in%20a%20healthy%20way."
    },
    {
      title: "Breaking the Stigma: Men and Therapy",
      excerpt: "Discover how therapy can be a powerful tool for men's mental well-being...",
      link: "https://www.butler.org/blog/breaking-the-stigma-of-mens-mental-health"
    },
    {
      title: "Mindfulness Techniques for Stress Reduction",
      excerpt: "Learn practical mindfulness exercises tailored for men to manage stress...",
      link: "https://www.mindful.org/how-to-manage-stress-with-mindfulness-and-meditation/"
    }
  ];

  const resources = [
    {
      title: "Healthdirect",
      subtitle: "Dads in Distress",
      phone: "1300 853 437",
      link: "https://www.healthdirect.gov.au/"
    },
    {
      title: "Mensline",
      phone: "1300 78 99 78",
      link: "https://mensline.org.au/"
    },
    {
      title: "Men's Shed",
      phone: "1300 550 009",
      link: "https://mensshed.org/"
    }
  ];

  return (
    <Container fluid className="resources-page-container p-0">
      {/* Latest Articles Section */}
      <section className="resources-section bg-info py-5">
        <Container>
          <h2 className="text-center mb-4 section-title">Latest Articles on Men's Mental Health</h2>
          <p className="text-center mb-5 section-description">
            Discover the latest insights and research on men's mental health and learn how to provide support in times of need.
          </p>
          <Row>
            {articles.map((article, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="h-100 shadow-sm hover-card articles-card">
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.excerpt}</Card.Text>
                    <a href={article.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Support Services Section */}
      <section className="resources-section bg-support py-5">
        <Container>
          <h2 className="text-center mb-4 section-title">Support Services</h2>
          <p className="text-center mb-4 section-description">
            If you or someone you know is facing mental health challenges, these resources can offer guidance and support.
          </p>
          <Row>
            {resources.map((resource, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="h-100 shadow-sm hover-card support-card">
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                    <Card.Title className="mb-3">
                      <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                        {resource.title}
                      </a>
                    </Card.Title>
                    {resource.subtitle && <Card.Subtitle className="mb-2 text-muted">{resource.subtitle}</Card.Subtitle>}
                    <Card.Text className="fs-4 fw-bold text-primary">
                      <a href={`tel:${resource.phone}`} className="text-primary text-decoration-none">{resource.phone}</a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Helping Your Loved Ones Section */}
      <section className="resources-section bg-pastel-green py-5">
        <Container>
          <h2 className="text-center mb-4 section-title">Helping Your Loved Ones</h2>
          <p className="text-center mb-5 section-description">
            You play a critical role in supporting your loved one’s mental health journey. Learn more about how you can help.
          </p>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm hover-card family-card">
                <Card.Body>
                  <Card.Title>Understanding Gambling Addiction</Card.Title>
                  <Card.Text>
                    Learn about how gambling addiction affects individuals and their families.
                    {expanded[0] && <p>Gambling addiction impacts relationships and personal well-being significantly. It often leads to financial hardship and emotional distress for individuals and their families.</p>}
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleToggle(0)}>{expanded[0] ? 'Show Less' : 'Read More'}</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm hover-card family-card">
                <Card.Body>
                  <Card.Title>How to Talk to a Loved One about Mental Health</Card.Title>
                  <Card.Text>
                    Tips and advice on approaching sensitive topics with a loved one.
                    {expanded[1] && <p>Start by listening without judgment and offering support. Let your loved one know that it’s okay to talk about their feelings and remind them that seeking professional help is a sign of strength.</p>}
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleToggle(1)}>{expanded[1] ? 'Show Less' : 'Read More'}</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm hover-card family-card">
                <Card.Body>
                  <Card.Title>Support Groups and Helplines</Card.Title>
                  <Card.Text>
                    A list of available support groups and helplines for those affected by mental health issues.
                    {expanded[2] && <p>Reach out to services like Lifeline, MensLine, or your local mental health support group. These groups provide emotional support, advice, and resources for individuals and their families.</p>}
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleToggle(2)}>{expanded[2] ? 'Show Less' : 'Read More'}</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Self-Exclusion Section */}
      <section className="resources-section bg-light py-5">
        <Container>
          <h3 className="text-center mt-5 self-exclusion-title">Did you know you can self-exclude yourself from gambling?</h3>
          <Row className="justify-content-center">
            <Col md={6} className="mt-3">
              <Card className="h-100 text-center bg-light p-4 shadow-sm self-exclusion-card">
                <Card.Title>Self-Exclusion</Card.Title>
                <Card.Text>
                  You can help yourself or someone else exclude from gambling by registering on the National Self-Exclusion Register.
                </Card.Text>
                <Button variant="primary" href="https://www.acma.gov.au/betstop-national-self-exclusion-registertm" target="_blank" rel="noopener noreferrer">Learn More</Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default Resources;
