import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function ProjectCards(props) {
  const { t } = useTranslation();
  const shouldShowDemoButton = !props.isBlog && (props.demoLink || props.privacyRestricted);

  const handleProtectedClick = (event) => {
    if (!props.privacyRestricted) {
      return;
    }

    event.preventDefault();
    if (props.onPrivacyClick) {
      props.onPrivacyClick();
    }
  };

  return (
    <Card className="project-card-view">
      {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt={t("projects.cardImageAlt")} />
      )}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button
          variant="primary"
          href={props.ghLink}
          target="_blank"
          onClick={handleProtectedClick}
        >
          <BsGithub /> &nbsp;
          {props.isBlog ? t("common.actions.blog") : t("common.actions.github")}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {shouldShowDemoButton && (
          <Button
            variant="primary"
            href={props.demoLink || props.ghLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
            onClick={handleProtectedClick}
          >
            <CgWebsite /> &nbsp;
            {t("common.actions.demo")}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
