import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

function Type() {
  const { t } = useTranslation();

  return (
    <Typewriter
      options={{
        strings: [
          t("home.roles.role1"),
          t("home.roles.role2"),
          t("home.roles.role3"),
          t("home.roles.role4"),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
