import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";

function Email() {
  const handleCopy = (text) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={8} style={{ textAlign: "center", paddingBottom: "30px" }}>
            <h1 className="project-heading">
              <strong className="purple">Email</strong> Contacts
            </h1>
            <p style={{ color: "white" }}>
              Feel free to reach out to me via my school or personal email.
            </p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Col md={5} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>School Email</Card.Title>
                <Card.Text>
                  <span className="purple">bzha0038@uni.sydney.edu.au</span>
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleCopy("bzha0038@uni.sydney.edu.au")}
                  style={{ marginRight: "10px" }}
                >
                  Copy
                </Button>
                <Button
                  variant="outline-light"
                  href="mailto:bzha0038@uni.sydney.edu.au"
                >
                  Send Email
                </Button>
                <Card.Text style={{ marginTop: "15px", fontSize: "0.9rem" }}>
                  Best for <span className="purple">university enquiries</span>,
                  course discussions and academic collaboration.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Personal Email</Card.Title>
                <Card.Text>
                  <span className="purple">cheunggrr@icloud.com</span>
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleCopy("cheunggrr@icloud.com")}
                  style={{ marginRight: "10px" }}
                >
                  Copy
                </Button>
                <Button
                  variant="outline-light"
                  href="mailto:cheunggrr@icloud.com"
                >
                  Send Email
                </Button>
                <Card.Text style={{ marginTop: "15px", fontSize: "0.9rem" }}>
                  Best for <span className="purple">personal projects</span>,
                  networking and casual conversations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <Col md={8} style={{ textAlign: "center", color: "white" }}>
            <p style={{ marginBottom: "5px" }}>
              You can write to me in <span className="purple">English</span> or{" "}
              <span className="purple">Chinese</span>.
            </p>
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              I usually reply within{" "}
              <span className="purple">1–2 business days</span>, depending on my
              study schedule.
            </p>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", marginTop: "10px" }}>
          <Col md={10} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Quick Tips</Card.Title>
                <Card.Text style={{ fontSize: "0.95rem", opacity: 0.95 }}>
                  To help me respond faster, please include:
                </Card.Text>
                <ul style={{ textAlign: "left", margin: "0 auto", maxWidth: 720 }}>
                  <li>
                    A clear <span className="purple">subject</span> (e.g. “Project
                    Collaboration”, “Internship”, “Course Question”)
                  </li>
                  <li>
                    Your <span className="purple">name</span> and a short intro
                  </li>
                  <li>
                    Any relevant <span className="purple">links</span> (GitHub,
                    demo, docs)
                  </li>
                </ul>

                <Card.Text style={{ marginTop: "15px", fontSize: "0.9rem", opacity: 0.85 }}>
                  Prefer messaging? You can also reach me on{" "}
                  <span className="purple">WhatsApp</span>.
                </Card.Text>
                <Button
                  variant="outline-light"
                  href="https://wa.me/61411671776"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open WhatsApp
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Email;

