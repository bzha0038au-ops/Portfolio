import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Particle from "../Particle";

function ResumeNew() {
  const { t } = useTranslation();
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            color: "white",
            padding: "4rem 1rem",
            textAlign: "center",
          }}
        >
          {t("resume.unavailable")}
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
