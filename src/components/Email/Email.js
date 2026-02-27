import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Particle from "../Particle";

function Email() {
  const { t } = useTranslation();
  const [copiedKey, setCopiedKey] = useState("");

  const handleCopy = (key, text) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(""), 2000);
    }
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={8} style={{ textAlign: "center", paddingBottom: "30px" }}>
            <h1 className="project-heading">
              <strong className="purple">{t("email.headingHighlight")}</strong>{" "}
              {t("email.headingSuffix")}
            </h1>
            <p style={{ color: "white" }}>{t("email.subtitle")}</p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Col md={5} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>{t("email.schoolTitle")}</Card.Title>
                <Card.Text>
                  <span className="purple">bzha0038@uni.sydney.edu.au</span>
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleCopy("school", "bzha0038@uni.sydney.edu.au")}
                  style={{ marginRight: "10px" }}
                >
                  {copiedKey === "school"
                    ? t("common.actions.copied")
                    : t("common.actions.copy")}
                </Button>
                <Button
                  variant="outline-light"
                  href="mailto:bzha0038@uni.sydney.edu.au"
                >
                  {t("common.actions.sendEmail")}
                </Button>
                <Card.Text style={{ marginTop: "15px", fontSize: "0.9rem" }}>
                  {t("email.schoolPurposePrefix")}{" "}
                  <span className="purple">{t("email.schoolPurposeHighlight")}</span>,{" "}
                  {t("email.schoolPurposeSuffix")}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>{t("email.personalTitle")}</Card.Title>
                <Card.Text>
                  <span className="purple">cheunggrr@icloud.com</span>
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleCopy("personal", "cheunggrr@icloud.com")}
                  style={{ marginRight: "10px" }}
                >
                  {copiedKey === "personal"
                    ? t("common.actions.copied")
                    : t("common.actions.copy")}
                </Button>
                <Button variant="outline-light" href="mailto:cheunggrr@icloud.com">
                  {t("common.actions.sendEmail")}
                </Button>
                <Card.Text style={{ marginTop: "15px", fontSize: "0.9rem" }}>
                  {t("email.personalPurposePrefix")}{" "}
                  <span className="purple">
                    {t("email.personalPurposeHighlight")}
                  </span>
                  , {t("email.personalPurposeSuffix")}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <Col md={8} style={{ textAlign: "center", color: "white" }}>
            <p style={{ marginBottom: "5px" }}>
              {t("email.languageLinePrefix")}{" "}
              <span className="purple">{t("email.languageLineEnglish")}</span>{" "}
              {t("email.languageLineMiddle")}{" "}
              <span className="purple">{t("email.languageLineChinese")}</span>.
            </p>
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              {t("email.replyPrefix")}{" "}
              <span className="purple">{t("email.replyHighlight")}</span>,{" "}
              {t("email.replySuffix")}
            </p>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", marginTop: "10px" }}>
          <Col md={10} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>{t("email.tipsTitle")}</Card.Title>
                <Card.Text style={{ fontSize: "0.95rem", opacity: 0.95 }}>
                  {t("email.tipsIntro")}
                </Card.Text>
                <ul style={{ textAlign: "left", margin: "0 auto", maxWidth: 720 }}>
                  <li>
                    {t("email.tip1Prefix")}{" "}
                    <span className="purple">{t("email.tip1Highlight")}</span>{" "}
                    {t("email.tip1Suffix")}
                  </li>
                  <li>
                    {t("email.tip2Prefix")}{" "}
                    <span className="purple">{t("email.tip2Highlight")}</span>{" "}
                    {t("email.tip2Suffix")}
                  </li>
                  <li>
                    {t("email.tip3Prefix")}{" "}
                    <span className="purple">{t("email.tip3Highlight")}</span>{" "}
                    {t("email.tip3Suffix")}
                  </li>
                </ul>

                <Card.Text
                  style={{ marginTop: "15px", fontSize: "0.9rem", opacity: 0.85 }}
                >
                  {t("email.preferMessagingPrefix")}{" "}
                  <span className="purple">{t("email.preferMessagingHighlight")}</span>
                  .
                </Card.Text>
                <Button
                  variant="outline-light"
                  href="https://wa.me/61411671776"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("common.actions.openWhatsapp")}
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
