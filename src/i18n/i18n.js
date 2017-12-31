import VueI18n from 'vue-i18n';

import { LOCALES, LOCALES_MESSAGES } from '../constants/locales/locales';

export default new VueI18n({
  locale: LOCALES.EN,
  messages: LOCALES_MESSAGES,
});
