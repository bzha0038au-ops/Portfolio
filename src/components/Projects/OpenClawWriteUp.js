import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { BsChevronDown, BsChevronUp, BsClipboard, BsCheck } from "react-icons/bs";

const OPENCLAW_INSTALL_CMD = "curl -fsSL https://openclaw.ai/install.sh | bash";

function OpenClawWriteUp() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const paragraphs = [
    "projects.highlights.openclaw.p1",
    "projects.highlights.openclaw.p2",
    "projects.highlights.openclaw.p3",
    "projects.highlights.openclaw.p4",
  ];

  const handleCopyCmd = useCallback(() => {
    const onSuccess = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(OPENCLAW_INSTALL_CMD).then(onSuccess).catch(() => {
        fallbackCopy(OPENCLAW_INSTALL_CMD, onSuccess);
      });
    } else {
      fallbackCopy(OPENCLAW_INSTALL_CMD, onSuccess);
    }
  }, []);

  return (
    <div className="highlights-card writeup-card">
      <h4 className="highlights-card-title">
        {t("projects.highlights.openclaw.title")}
      </h4>
      <p className="highlights-card-subtitle">
        {t("projects.highlights.openclaw.subtitle")}
      </p>
      <div className="writeup-body">
        <p>{t(paragraphs[0])}</p>
        <p>{t(paragraphs[1])}</p>
        <div className="writeup-cmd-block">
          <code className="writeup-cmd-text">{OPENCLAW_INSTALL_CMD}</code>
          <button
            type="button"
            className="writeup-cmd-copy"
            onClick={handleCopyCmd}
            aria-label={t("common.actions.copy")}
            title={t("common.actions.copy")}
          >
            {copied ? <BsCheck /> : <BsClipboard />}
            {copied ? ` ${t("common.actions.copied")}` : ` ${t("common.actions.copy")}`}
          </button>
        </div>
        {expanded && (
          <>
            <p>{t(paragraphs[2])}</p>
            <p>{t(paragraphs[3])}</p>
          </>
        )}
      </div>
      <button
        type="button"
        className="writeup-toggle"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {expanded ? (
          <>
            {t("projects.highlights.readLess")} <BsChevronUp />
          </>
        ) : (
          <>
            {t("projects.highlights.readMore")} <BsChevronDown />
          </>
        )}
      </button>
    </div>
  );
}

function fallbackCopy(text, onSuccess) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    onSuccess();
  } finally {
    document.body.removeChild(textarea);
  }
}

export default OpenClawWriteUp;
