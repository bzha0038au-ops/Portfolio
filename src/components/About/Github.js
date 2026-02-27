import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Github() {
  const { t } = useTranslation();

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        {t("about.githubTitlePrefix")}{" "}
        <strong className="purple">{t("about.githubTitleHighlight")}</strong>
      </h1>
      <GitHubCalendar
        username="bzha0038au-ops"
        year={2026}
        blockSize={30}
        blockMargin={10}
        color="#22d3ee"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
