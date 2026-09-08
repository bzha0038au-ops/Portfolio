import React from "react";
import { useTranslation } from "react-i18next";

const STEP_KEYS = [
  "analyze",
  "readme",
  "userReq",
  "plan",
  "review",
  "adjust",
  "multiAgent",
  "code",
  "crossCheck",
  "aiTest",
  "testResult",
  "userCheck",
  "deployDoc",
  "manualDeploy",
  "optimizeDoc",
  "autoDeploy",
];

const STEPS_PER_ROW = 4;

function AIDevWorkflow({ standalone }) {
  const { t } = useTranslation();

  const rows = [];
  for (let r = 0; r < Math.ceil(STEP_KEYS.length / STEPS_PER_ROW); r++) {
    const start = r * STEPS_PER_ROW;
    const end = Math.min(start + STEPS_PER_ROW, STEP_KEYS.length);
    const indices = [];
    for (let i = start; i < end; i++) indices.push(i);
    if (r % 2 === 1) indices.reverse();
    rows.push(indices);
  }

  return (
    <div
      className={
        "highlights-card workflow-card" +
        (standalone ? " workflow-standalone" : "")
      }
    >
      <div className="workflow-header">
        <h4 className="highlights-card-title workflow-title">
          {t("projects.highlights.workflow.title")}
        </h4>
        <p className="highlights-card-subtitle workflow-subtitle">
          {t("projects.highlights.workflow.subtitle")}
        </p>
      </div>
      <div
        className={
          "workflow-diagram " +
          (standalone ? "workflow-diagram-zigzag" : "workflow-diagram-vertical")
        }
      >
        {rows.map((rowIndices, rowIndex) => (
          <div key={rowIndex} className="workflow-row-wrap">
            <div className="workflow-row">
              {rowIndices.map((stepIndex, i) => (
                <React.Fragment key={STEP_KEYS[stepIndex]}>
                  <div className="workflow-node">
                    <span className="workflow-node-num">{stepIndex + 1}</span>
                    <span className="workflow-node-label">
                      {t(
                        `projects.highlights.workflow.steps.${STEP_KEYS[stepIndex]}`
                      )}
                    </span>
                  </div>
                  {i < rowIndices.length - 1 && (
                    <div className="workflow-arrow-h" aria-hidden="true">
                      {rowIndex % 2 === 0 ? "→" : "←"}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            {rowIndex < rows.length - 1 && (
              <div className="workflow-connector-down" aria-hidden="true">
                <span className="workflow-arrow-down">↓</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIDevWorkflow;
