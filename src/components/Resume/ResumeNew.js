import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Document, Page, pdfjs } from "react-pdf";
import Particle from "../Particle";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PDF_FILES = [
  { id: "new-cv", file: "/new-cv.pdf" },
  { id: "old-cv", file: "/old-cv.pdf", hidden: true },
  { id: "refer1", file: "/refer1.pdf" },
  { id: "refer2", file: "/refer2.pdf" },
];

const BUTTON_KEYS = ["year2026", "year2024", "refer1", "refer2"];

const VISIBLE_PDF_FILES = PDF_FILES.filter((item) => !item.hidden);
const VISIBLE_BUTTON_KEYS = PDF_FILES.filter((item) => !item.hidden).map(
  (_, i) => BUTTON_KEYS[PDF_FILES.indexOf(VISIBLE_PDF_FILES[i])]
);

function ResumeNew() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(800);

  useEffect(() => {
    const updateWidth = () => setWidth(Math.min(window.innerWidth - 48, 800));
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }) => {
    setNumPages(nextNumPages);
  };

  const currentPdf = VISIBLE_PDF_FILES[activeIndex];

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            paddingTop: "4rem",
            paddingBottom: "1rem",
          }}
        >
          <Col xs={12} style={{ display: "flex", justifyContent: "center" }}>
            <div className="resume-pdf-wrapper">
              <Document
                file={currentPdf.file}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="resume-pdf-loading">
                    {t("resume.loading")}
                  </div>
                }
                error={
                  <div className="resume-pdf-error">{t("resume.error")}</div>
                }
              >
                {numPages &&
                  Array.from(new Array(numPages), (_, i) => (
                    <Page
                      key={`page-${i + 1}`}
                      pageNumber={i + 1}
                      width={width}
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                    />
                  ))}
              </Document>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            color: "white",
            paddingBottom: "3rem",
            textAlign: "center",
          }}
        >
          <Col xs={12}>
            <div className="resume-pdf-buttons">
              {VISIBLE_PDF_FILES.map((item, index) => (
                <Button
                  key={item.id}
                  variant={activeIndex === index ? "primary" : "outline-primary"}
                  className="resume-pdf-btn"
                  onClick={() => setActiveIndex(index)}
                >
                  {t(`resume.buttons.${VISIBLE_BUTTON_KEYS[index]}`)}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
