import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pl from "./i18n/locale-pl";
import uk from "./i18n/locale-uk";
import en from "./i18n/locale-en";

i18n.use(initReactI18next).init({
  resources: {
    pl: { translation: pl },
    uk: { translation: uk },
    en: { translation: en }
  },
  defaultLanguage: "pl",
  fallbackLng: "pl",
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});
i18n.languages = ["pl", "uk", "en"];

export default i18n;
