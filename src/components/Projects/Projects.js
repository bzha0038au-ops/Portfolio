import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const projects = [
  {
    key: "chatify",
    ghLink: "https://github.com/bzha0038au-ops",
    demoLink: "https://github.com/bzha0038au-ops",
  },
  {
    key: "bitsOfCode",
    ghLink: "https://github.com/bzha0038au-ops",
    demoLink: "https://github.com/bzha0038au-ops",
    privacyRestricted: true,
  },
  {
    key: "editorIo",
    ghLink: "https://github.com/bzha0038au-ops",
    demoLink: "https://github.com/bzha0038au-ops",
  },
  {
    key: "plantAi",
    ghLink: "https://github.com/bzha0038au-ops",
    demoLink: "https://github.com/bzha0038au-ops",
    privacyRestricted: true,
  },
  {
    key: "aiForSocialGood",
    ghLink: "https://github.com/bzha0038au-ops",
    privacyRestricted: true,
  },
  {
    key: "faceEmotion",
    ghLink: "https://github.com/bzha0038au-ops",
    privacyRestricted: true,
  },
];

function Projects() {
  const { t } = useTranslation();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const firstRowProjects = projects.slice(0, 3);
  const secondRowProjects = projects.slice(3);
  const tipItems = [
    t("projects.tip.items.item1"),
    t("projects.tip.items.item2"),
    t("projects.tip.items.item3"),
    t("projects.tip.items.item4"),
    t("projects.tip.items.item5"),
  ];
  const openPrivacyModal = () => setShowPrivacyModal(true);
  const closePrivacyModal = () => setShowPrivacyModal(false);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t("projects.headingPrefix")}{" "}
          <strong className="purple">{t("projects.headingHighlight")} </strong>
        </h1>
        <p style={{ color: "white" }}>{t("projects.subtitle")}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {firstRowProjects.map((project) => (
            <Col md={4} className="project-card" key={project.key}>
              <ProjectCard
                isBlog={false}
                title={t(`projects.items.${project.key}.title`)}
                description={t(`projects.items.${project.key}.description`)}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                privacyRestricted={project.privacyRestricted}
                onPrivacyClick={openPrivacyModal}
              />
            </Col>
          ))}
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10}>
            <div
              style={{
                color: "white",
                border: "1px solid rgba(34, 211, 238, 0.35)",
                borderRadius: "14px",
                padding: "20px 22px",
                background: "rgba(34, 211, 238, 0.08)",
              }}
            >
              <h4 style={{ marginBottom: "12px", color: "#22d3ee" }}>
                {t("projects.tip.title")}
              </h4>
              <p style={{ marginBottom: "10px" }}>{t("projects.tip.intro")}</p>
              <ul style={{ marginBottom: "10px", paddingLeft: "1.2rem" }}>
                {tipItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p style={{ marginBottom: 0 }}>{t("projects.tip.summary")}</p>
            </div>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {secondRowProjects.map((project) => (
            <Col md={4} className="project-card" key={project.key}>
              <ProjectCard
                isBlog={false}
                title={t(`projects.items.${project.key}.title`)}
                description={t(`projects.items.${project.key}.description`)}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                privacyRestricted={project.privacyRestricted}
                onPrivacyClick={openPrivacyModal}
              />
            </Col>
          ))}
        </Row>

        <Modal show={showPrivacyModal} onHide={closePrivacyModal} centered>
          <Modal.Body style={{ textAlign: "center" }}>
            {t("projects.privacyNotice")}
          </Modal.Body>
        </Modal>
      </Container>
    </Container>
  );
}

export default Projects;
