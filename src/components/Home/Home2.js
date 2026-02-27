import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";

function Home2() {
  const { t } = useTranslation();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("home2.titlePrefix")}{" "}
              <span className="purple"> {t("home2.titleHighlight")} </span>{" "}
              {t("home2.titleSuffix")}
            </h1>
            <p className="home-about-body">
              {t("home2.body.p1")}
              <br />
              <br />
              {t("home2.body.p2")}
              <br />
              <br />
              {t("home2.body.p3")}
              <br />
              <br />
              {t("home2.body.p4")}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src="/avatar.jpg"
                className="img-fluid"
                alt={t("home2.avatarAlt")}
                style={{
                  width: "260px",
                  height: "260px",
                  aspectRatio: "1 / 1",
                  margin: "0 auto",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
