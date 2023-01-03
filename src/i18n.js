import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
      "welcome": "Good morning."
    }
  },
  ko: {
    translation: {
      "welcome": "좋은 아침 입니다."
    }
  }
};
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ko",
  });
export default i18n;