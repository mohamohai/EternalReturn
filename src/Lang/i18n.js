import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationKo from "./translation.ko.json";
import translationEn from "./translation.en.json";



const resources = {
  en: {
    translation: translationEn
  },
  ko: {
    translation: translationKo
  }
};
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ko",
  });
export default i18n;