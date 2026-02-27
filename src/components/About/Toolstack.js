import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const toolKeys = [
  "macos",
  "chrome",
  "vscode",
  "intellij",
  "windows",
  "edge",
  "cursor",
  "codex",
  "navicat",
  "warp",
  "chatgpt",
  "figma",
  "hbuilderx",
];

function getBadgeText(label) {
  return label.trim().slice(0, 2).toUpperCase();
}

function Toolstack() {
  const { t } = useTranslation();

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolKeys.map((key) => {
        const label = t(`about.toolstack.items.${key}`);
        return (
          <Col xs={4} md={2} className="tech-icons" key={key}>
            <div
              style={{ fontSize: "1.3rem", fontWeight: 700, lineHeight: "1.6rem" }}
            >
              {getBadgeText(label)}
            </div>
            <div className="tech-icons-text">{label}</div>
          </Col>
        );
      })}
    </Row>
  );
}

export default Toolstack;
