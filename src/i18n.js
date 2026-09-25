import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';
import esTranslation from './locales/es.json';
import urTranslation from './locales/ur.json';

// هيكله البيانات بالشكل الي تفهمه المكتبه 
const resources = {
  en: { translation: enTranslation },
  ar: { translation: arTranslation },
  es: { translation: esTranslation },
  ur: { translation: urTranslation }
};
// بنستدعي محرك الترجمه  chaining 
i18n
//نفعل عمليه الكشف
  .use(LanguageDetector) 
// بنربط محرك الترجمة مع مكتبه react-i18next
  .use(initReactI18next)
//
  .init({
//بنمرر الكاذن الي سويناه فوق
    resources,
//اللغه الافتراضيه
    fallbackLng: 'en',
//نحدد اولويات البحث على اختيار اللغه 
    detection: {
//نبحث على اللغه في ال localStorage 
      order: ['localStorage'],
      caches: ['localStorage']
    },

//رياكت فيها حمايه ضد الهجمات XSS و بنعطل ترميز الحروف
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;