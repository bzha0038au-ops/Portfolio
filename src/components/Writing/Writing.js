import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Particle from "../Particle";

const articles = [
  {
    slug: "stored-solution-line",
    title: "The proof was already there, and I threw it away",
    dek:
      "A hint button in a puzzle game went from a three-second search that usually found nothing to a three-millisecond lookup that always finds something. The fix was not a faster search.",
    meta: "XO Escape · Cocos Creator 3.8 · TypeScript",
  },
];

function Writing() {
  const { t } = useTranslation();

  return (
    <Container fluid className="writing-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t("writing.title")} <strong className="purple">{t("writing.titleAccent")}</strong>
        </h1>
        <p style={{ color: "white" }}>{t("writing.subtitle")}</p>
        <p className="writing-lang-note">{t("writing.languageNote")}</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10}>
            {articles.map((a) => (
              <Link key={a.slug} to={`/writing/${a.slug}`} className="writing-card-link">
                <div className="writing-card">
                  <h2 className="writing-card-title">{a.title}</h2>
                  <p className="writing-card-dek">{a.dek}</p>
                  <p className="writing-card-meta">{a.meta}</p>
                </div>
              </Link>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Writing;
