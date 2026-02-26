import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Beile Zhang</span>{" "}
            from <span className="purple">Fujian, China</span>, currently
            living in <span className="purple">Annandale, Sydney</span>.
            <br />
            I was born on{" "}
            <span className="purple">1 May 2002</span>.
            <br />
            I’m currently pursuing a{" "}
            <span className="purple">
              Master of Computer Science (Advanced Entry)
            </span>{" "}
            at the <span className="purple">University of Sydney</span>{" "}
            (2026–2028).
            <br />
            Previously, I completed a{" "}
            <span className="purple">Bachelor of Science</span> in{" "}
            <span className="purple">Computer Science</span> at{" "}
            <span className="purple">Durham University</span> (
            <span className="purple">College of St Hild &amp; St Bede</span>),
            graduating on{" "}
            <span className="purple">3 July 2024</span> with{" "}
            <span className="purple">Class II Division 1 (Honours)</span> and
            an AI-focused dissertation.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Working Out 💪
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music 🎵
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building, keep improving!"{" "}
          </p>
          <footer className="blockquote-footer">Beile Zhang</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
