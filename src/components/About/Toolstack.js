import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Mac Os</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={intelliJ} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: "1.6rem" }}>
          W
        </div>
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: "1.6rem" }}>
          E
        </div>
        <div className="tech-icons-text">Microsoft Edge</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: "1.6rem" }}>
          C
        </div>
        <div className="tech-icons-text">Cursor</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: "1.6rem" }}>
          X
        </div>
        <div className="tech-icons-text">Code X</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: "1.6rem" }}>
          N
        </div>
        <div className="tech-icons-text">Navicat</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: "1.6rem" }}>
          W
        </div>
        <div className="tech-icons-text">Warp</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: "1.6rem" }}>
          AI
        </div>
        <div className="tech-icons-text">ChatGPT</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: "1.6rem" }}>
          F
        </div>
        <div className="tech-icons-text">Figma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: "1.6rem" }}>
          H
        </div>
        <div className="tech-icons-text">HBuilderX</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
