import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const FamilyResources = () => {
  const [expanded, setExpanded] = useState([false, false, false, false]);

  const handleToggle = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-5">Family Resources</h2>
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
