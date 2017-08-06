import momentDe from 'moment/locale/de';
import momentFr from 'moment/locale/fr';
import momentIt from 'moment/locale/it';

const supportedLocales = {
  de: {
    moment: momentDe,
    default: true,
  },
  fr: {
    moment: momentFr,
  },
  it: {
    moment: momentIt,
  },
};

const supportedLocaleNames = Object.keys(supportedLocales);

export default {
  defaultLocale: 'de',
  supportedLocales,
  supportedLocaleNames,
  defaultLocaleName: supportedLocaleNames.find(n => !!supportedLocales[n].default),
};
