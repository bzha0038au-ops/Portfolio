import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImWhatsapp } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { supportedLanguages } from "../i18n";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const scrollHandler = () => {
      updateNavbar(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const currentLanguage = supportedLanguages.includes(i18n.resolvedLanguage)
    ? i18n.resolvedLanguage
    : "en";

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    updateExpanded(false);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <NavDropdown
            title={`${t("navbar.language")}: ${t(
              `navbar.languages.${currentLanguage}`
            )}`}
            id="language-nav-dropdown"
            align="start"
            aria-label={t("navbar.chooseLanguage")}
          >
            {supportedLanguages.map((language) => (
              <NavDropdown.Item
                key={language}
                active={language === currentLanguage}
                onClick={() => changeLanguage(language)}
              >
                {t(`navbar.languages.${language}`)}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} />{" "}
                {t("navbar.home")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} />{" "}
                {t("navbar.about")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/email"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} />{" "}
                {t("navbar.email")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                {t("navbar.projects")}
              </Nav.Link>
            </Nav.Item>

            {/* Resume route temporarily hidden */}

            <Nav.Item>
              <Nav.Link
                href="https://wa.me/61411671776"
                target="_blank"
                rel="noreferrer"
              >
                <ImWhatsapp style={{ marginBottom: "2px" }} />{" "}
                {t("navbar.whatsapp")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/bzha0038au-ops/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
