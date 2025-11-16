import { reactive } from 'vue';
import { translations } from './translations';

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
