import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                {t("about.headingPrefix")}{" "}
                <strong className="purple">{t("about.headingHighlight")}</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img
                src="/avatar3.png"
                alt={t("about.imageAlt")}
                className="img-fluid"
                style={{
                  width: "100%",
                  maxHeight: "420px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              />
            </Col>
          </Row>
          <h1 className="project-heading">
            {t("about.skillsetPrefix")}{" "}
            <strong className="purple">{t("about.skillsetHighlight")} </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">{t("about.toolsPrefix")}</strong>{" "}
            {t("about.toolsSuffix")}
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
