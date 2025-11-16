import { reactive } from 'vue';

export const translations = {
  en: {
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    footer: 'No cookies used on this site.'
  },
  de: {
    home: 'Zurück',
    about: 'Über',
    contact: 'Kontakt',
    footer: 'Diese Seite verwendet keinerlei Cookies.'
  }
};

export const lang = reactive({
  // Initial language code
  code: 'en',
  // This needs to be a getter or Vue will not track translations change here (the alternative is to use Vue's computed() function)
  get entries() {
    return translations[this.code];
  },
  // Change language code
  setLang(langCode) {
    if (!translations[langCode]) {
      throw new Error('The given language code is not supported.');
    }
    this.code = langCode;
  }
});
