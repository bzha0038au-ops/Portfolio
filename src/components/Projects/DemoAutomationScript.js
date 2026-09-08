import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { BsClipboard, BsCheck } from "react-icons/bs";

const DEMO_SCRIPT = [
  "#!/usr/bin/env bash",
  "# Demo: health check + deploy trigger",
  "set -e",
  "",
  // bash default-value syntax; eslint sees template literal
  /* eslint-disable-next-line no-template-curly-in-string */
  "ENV=\"${ENV:-staging}\"",
  "echo \"==> Environment: $ENV\"",
  "",
  "# 1. Pre-flight: require curl + jq",
  "check_deps() {",
  "  command -v curl >/dev/null 2>&1 || { echo \"curl required\"; exit 1; }",
  "  command -v jq   >/dev/null 2>&1 || { echo \"jq required\"; exit 1; }",
  "}",
  "check_deps",
  "",
  "# 2. Health check",
  /* eslint-disable-next-line no-template-curly-in-string */
  "HEALTH_URL=\"${HEALTH_URL:-https://api.example.com/health}\"",
  "resp=$(curl -sf \"$HEALTH_URL\" | jq -r '.status')",
  "[[ \"$resp\" == \"ok\" ]] || { echo \"Health check failed\"; exit 1; }",
  "echo \"==> Health OK\"",
  "",
  "# 3. Trigger deploy (uncomment and set DEPLOY_HOOK)",
  "echo \"==> Triggering deploy...\"",
  "# curl -sS -X POST \"$DEPLOY_HOOK\" -H 'Content-Type: application/json' -d \"{\\\"env\\\": \\\"$ENV\\\"}\"",
  "echo \"==> Done.\"",
].join("\n");

const ADVANCED_SCRIPT = [
  "#!/bin/bash",
  "",
  "echo \"Running AI code analysis...\"",
  "",
  "curl -X POST http://localhost:3000/analyze \\",
  "  -H \"Content-Type: application/json\" \\",
  "  -d '{",
  "    \"repo\": \"https://github.com/example/project\"",
  "  }'",
  "",
  "echo \"Generating documentation...\"",
  "",
  "python generate_docs.py",
  "",
  "echo \"Running model cross-check...\"",
  "",
  "python model_review.py",
  "",
  "echo \"AI workflow completed.\"",
].join("\n");

const SCRIPTS = { basic: DEMO_SCRIPT, advanced: ADVANCED_SCRIPT };

function DemoAutomationScript() {
  const { t } = useTranslation();
  const [variant, setVariant] = useState("basic");
  const [copied, setCopied] = useState(false);

  const currentScript = SCRIPTS[variant];

  const handleCopy = useCallback(() => {
    const onSuccess = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(currentScript).then(onSuccess).catch(() => {
        fallbackCopy(currentScript, onSuccess);
      });
    } else {
      fallbackCopy(currentScript, onSuccess);
    }
  }, [currentScript]);

  return (
    <div className="highlights-card script-card">
      <h4 className="highlights-card-title">
        {t("projects.highlights.script.title")}
      </h4>
      <p className="highlights-card-subtitle">
        {t("projects.highlights.script.subtitle")}
      </p>
      <div className="script-tabs">
        <button
          type="button"
          className={"script-tab" + (variant === "basic" ? " script-tab-active" : "")}
          onClick={() => setVariant("basic")}
        >
          {t("projects.highlights.script.basicLabel")}
        </button>
        <button
          type="button"
          className={"script-tab" + (variant === "advanced" ? " script-tab-active" : "")}
          onClick={() => setVariant("advanced")}
        >
          {t("projects.highlights.script.advancedLabel")}
        </button>
      </div>
      <div className="script-wrapper">
        <button
          type="button"
          className="script-copy-btn"
          onClick={handleCopy}
          aria-label={t("common.actions.copy")}
          title={t("common.actions.copy")}
        >
          {copied ? (
            <>
              <BsCheck className="script-copy-icon" />{" "}
              {t("common.actions.copied")}
            </>
          ) : (
            <>
              <BsClipboard className="script-copy-icon" />{" "}
              {t("common.actions.copy")}
            </>
          )}
        </button>
        <pre className="script-block">
          <code>{currentScript}</code>
        </pre>
      </div>
    </div>
  );
}

// Fallback for environments without clipboard API (e.g. non-HTTPS)
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

export default DemoAutomationScript;
