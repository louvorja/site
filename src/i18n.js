import { createI18n } from "vue-i18n";

const loadLocaleMessages = async () => {
  const locales = ["pt", "es"];
  const messages = {};

  for (const locale of locales) {
    messages[locale] = await import(`./lang/${locale}.json`);
  }

  return messages;
};

const messages = await loadLocaleMessages();

export const i18n = createI18n({
  legacy: false,
  locale: "pt",
  fallbackLocale: "pt",
  globalInjection: true,
  messages,
});

export default i18n;
