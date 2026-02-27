import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("about.card.line1")}
            <br />
            {t("about.card.line2")}
            <br />
            {t("about.card.line3")}
            <br />
            {t("about.card.line4")}
            <br />
            <br />
            {t("about.card.hobbiesIntro")}
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("about.card.activities.workout")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about.card.activities.music")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about.card.activities.travel")}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{t("about.card.quote")}"{" "}
          </p>
          <footer className="blockquote-footer">{t("about.card.author")}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
