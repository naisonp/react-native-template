import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './lang/en';

export const resources = {
  enUS: {
    translation: en,
  },
} as const;

i18n.use(initReactI18next).init({
  fallbackLng: 'enUS',
  lng: 'enUS',
  debug: false,
  resources,
  keySeparator: '.',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
