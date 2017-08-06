import SimpleSchema from 'simpl-schema';

import { Mongo } from 'meteor/mongo';

import localeConfig from '../../configs/locale_config';

const Translations = new Mongo.Collection('translations');
Translations.schema = new SimpleSchema(localeConfig.supportedLocaleNames.reduce(
  (p, c) => ({
    ...p,
    [`value_${c}`]: {
      type: String,
      optional: true,
      defaultValue: '',
    },
  }),
  { _id: { type: String } }
));
Translations.attachSchema(Translations.schema);

export default Translations;
