import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationMN from './locales/mn.json';

const resources = {
  en: { translation: translationEN },
  mn: { translation: translationMN }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
