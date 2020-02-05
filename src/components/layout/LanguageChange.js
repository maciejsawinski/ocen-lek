import React from "react";
import { useTranslation } from "react-i18next";

const LanguageChange = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          i18n.changeLanguage("pl");
        }}
      >
        PL
      </button>
      <button
        type="button"
        onClick={() => {
          i18n.changeLanguage("uk");
        }}
      >
        UA
      </button>
      <button
        type="button"
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        EN
      </button>
    </>
  );
};

export default LanguageChange;
