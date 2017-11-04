import { I18n } from '@panter/manul-i18n';
import { UploadClient } from '@panter/manul-files';
import ManulRouter from '@panter/manul-router';
import TranslationStore from '@panter/manul-i18n/dist/stores/collection';
import moment from 'moment';

import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Keypress } from 'meteor/panter:keypress';
import { Meteor } from 'meteor/meteor';
import { MeteorGriddle } from 'meteor/panter:meteor-griddle';
import { ReactiveDict } from 'meteor/reactive-dict';
import { ReactiveVar } from 'meteor/reactive-var';
import { Roles } from 'meteor/alanning:roles';
import { Slingshot } from 'meteor/edgee:slingshot';
import { Tracker } from 'meteor/tracker';
import * as Collections from '/imports/api/collections';
import Directives from '/imports/api/files';
import * as Methods from '/imports/api/methods';
import * as Schemas from '/imports/api/schemas';

import ManulDraftContext from './manul_draft_context';
import createAdminContext from './create_admin_context';
import localeConfig from './locale_config';

export default function () {
  const LocalState = new ReactiveDict();

  localeConfig.supportedLocaleNames.forEach(ln =>
    moment.defineLocale(ln, localeConfig.supportedLocales[ln].moment)
  );

  const highlightEditable = () =>
    (Meteor.isDevelopment || Roles.userIsInRole(Meteor.userId(), 'admin')) &&
    Keypress.is(Keypress.Keys.Alt);

  const i18n = new I18n({
    supportedLocales: localeConfig.supportedLocaleNames,
    defaultLocale: localeConfig.defaultLocale,
    useFallbackForMissing: true,
    highlightEditable,
    shouldShowKeysAsFallback: () =>
      Meteor.isDevelopment || Roles.userIsInRole(Meteor.userId(), 'admin'),
    translationStore: new TranslationStore({
      Meteor,
      Tracker,
      ReactiveVar,
      collection: Collections.Translations,
    }),
  });

  const manulRouter = new ManulRouter({ FlowRouter, Meteor, i18n });

  i18n.onChangeLocale(locale => moment.locale(locale));

  const context = {
    Meteor,
    manulRouter,
    LocalState,
    Collections,
    Schemas,
    // ACL,
    Methods,
    Tracker,
    i18n,
    gotoRoute: manulRouter.go.bind(manulRouter),
    localeRoutes: manulRouter.createLocaleRoutesGroup(),
    manulDraft: ManulDraftContext({ highlightEditable }),
    Config: Collections.Config,
    Roles,
    Accounts,
    MeteorGriddle,
    uploadService: new UploadClient({ Slingshot, Directives }),
  };

  context.adminContext = createAdminContext(context);
  return context;
}
