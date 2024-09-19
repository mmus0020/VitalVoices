import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const FamilyResources = () => {
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
    <Container className="my-5">
      {/* Latest Articles Section */}
      <h2 className="text-center mb-5">Latest Articles</h2>
      <Row>
        {articles.map((article, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm hover-card">
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.excerpt}</Card.Text>
                <a href={article.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Resources Section */}
      <h2 className="text-center mb-5">Resources</h2>
      <p className="text-center mb-4">If you are a man experiencing mental health issues, please see some resources below:</p>
      <Row>
        {resources.map((resource, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm hover-card">
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

      {/* Family Resources Section */}
      <h2 className="text-center mb-5">Are You a Family? You can help too.</h2>
      <Row>
        <Col md={3}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Understanding Gambling Addiction</Card.Title>
              <Card.Text>
                Learn about how gambling addiction affects individuals and their families.
                {expanded[0] && (
                  <>
                    <p>Gambling addiction impacts relationships and personal well-being significantly. It often leads to financial hardship and emotional distress for individuals and their families.</p>
                    <p>Common signs include borrowing money frequently, secrecy about gambling, and difficulty stopping despite negative consequences.</p>
                    <p>
                      <a href="https://www.helpguide.org/articles/addictions/gambling-addiction-and-problem-gambling.htm" target="_blank" rel="noopener noreferrer">
                        Learn more about gambling addiction.
                      </a>
                    </p>
                  </>
                )}
              </Card.Text>
              <Button variant="primary" onClick={() => handleToggle(0)}>
                {expanded[0] ? 'Show Less' : 'Read More'}
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>How to Talk to a Loved One about Mental Health</Card.Title>
              <Card.Text>
                Tips and advice on approaching sensitive topics with a loved one.
                {expanded[1] && (
                  <>
                    <p>Talking about mental health can be difficult. Start by listening without judgment and offering support. Avoid dismissive comments and instead ask how you can help.</p>
                    <p>Let your loved one know that it’s okay to talk about their feelings and remind them that seeking professional help is a sign of strength.</p>
                    <p>
                      <a href="https://www.beyondblue.org.au/get-support/have-the-conversation" target="_blank" rel="noopener noreferrer">
                        Read more tips on how to talk about mental health.
                      </a>
                    </p>
                  </>
                )}
              </Card.Text>
              <Button variant="primary" onClick={() => handleToggle(1)}>
                {expanded[1] ? 'Show Less' : 'Read More'}
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Support Groups and Helplines</Card.Title>
              <Card.Text>
                A list of available support groups and helplines for those affected by mental health issues.
                {expanded[2] && (
                  <>
                    <p>Many support groups offer a safe space for sharing experiences and finding help. Reach out to services like Lifeline, MensLine, or your local mental health support group.</p>
                    <p>These groups can provide emotional support, advice, and resources for individuals and their families.</p>
                    <p>
                      <a href="https://mensline.org.au/" target="_blank" rel="noopener noreferrer">
                        See more support services.
                      </a>
                    </p>
                  </>
                )}
              </Card.Text>
              <Button variant="primary" onClick={() => handleToggle(2)}>
                {expanded[2] ? 'Show Less' : 'Read More'}
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>How to Create a Supportive Environment</Card.Title>
              <Card.Text>
                Discover strategies to foster a supportive environment for mental well-being.
                {expanded[3] && (
                  <>
                    <p>Creating a supportive environment involves open communication, understanding, and patience. Encourage your loved ones to talk openly about their feelings without fear of judgment.</p>
                    <p>Fostering positive activities and ensuring there are boundaries between support and enabling can be key to a healthy environment.</p>
                    <p>
                      <a href="https://www.verywellmind.com/how-to-create-a-mentally-healthy-home-4799015" target="_blank" rel="noopener noreferrer">
                        Learn more about creating a supportive environment.
                      </a>
                    </p>
                  </>
                )}
              </Card.Text>
              <Button variant="primary" onClick={() => handleToggle(3)}>
                {expanded[3] ? 'Show Less' : 'Read More'}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3 className="text-center mt-5">Did you know you can self-exclude yourself from gambling?</h3>
      <Row className="justify-content-center">
        <Col md={6} className="mt-3">
          <Card className="h-100 text-center bg-light p-4 shadow-sm">
            <Card.Title>Self-Exclusion</Card.Title>
            <Card.Text>
              You can help yourself or someone else exclude from gambling by registering on the National Self-Exclusion Register.
            </Card.Text>
            <Button variant="primary" href="https://www.acma.gov.au/betstop-national-self-exclusion-registertm#:~:text=The%20register%20lets%20you%20exclude,at%20betstop.gov.au%20." target="_blank" rel="noopener noreferrer">
              Learn More
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FamilyResources;
