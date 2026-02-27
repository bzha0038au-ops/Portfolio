import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import zh from "./locales/zh/translation.json";
import de from "./locales/de/translation.json";
import fr from "./locales/fr/translation.json";
import ar from "./locales/ar/translation.json";
import ru from "./locales/ru/translation.json";
import hi from "./locales/hi/translation.json";

export const supportedLanguages = ["en", "zh", "de", "fr", "ar", "ru", "hi"];

const rtlLanguages = ["ar"];

const resources = {
  en: { translation: en },
  zh: { translation: zh },
  de: { translation: de },
  fr: { translation: fr },
  ar: { translation: ar },
  ru: { translation: ru },
  hi: { translation: hi },
};

function getInitialLanguage() {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLanguage = window.localStorage.getItem("app.language");
  if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
    return savedLanguage;
  }

  const browserLanguage = window.navigator.language
    ? window.navigator.language.split("-")[0]
    : "en";
  if (supportedLanguages.includes(browserLanguage)) {
    return browserLanguage;
  }

  return "en";
}

function setDocumentDirection(language) {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.lang = language;
  document.documentElement.dir = rtlLanguages.includes(language)
    ? "rtl"
    : "ltr";
}

const initialLanguage = getInitialLanguage();

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: "en",
  supportedLngs: supportedLanguages,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

setDocumentDirection(initialLanguage);

i18n.on("languageChanged", (language) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("app.language", language);
  }
  setDocumentDirection(language);
});

export default i18n;
