import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Tracker } from 'meteor/tracker';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { I18n } from '@panter/manul-i18n';
import { MeteorGriddle } from 'meteor/panter:meteor-griddle';
import { Roles } from 'meteor/alanning:roles';
import { Slingshot } from 'meteor/edgee:slingshot';
import { UploadClient } from '@panter/manul-files';
import ManulRouter from '@panter/manul-router';
import TranslationStore from '@panter/manul-i18n/dist/stores/collection';

import moment from 'moment';
import momentDe from 'moment/locale/de';
import Directives from '/imports/api/files';
import { ReactiveDict } from 'meteor/reactive-dict';
// import * as ACL from '/imports/api/acl';
import * as Collections from '/imports/api/collections';
// import Directives from '/imports/api/slingshot_directives';
import * as Methods from '/imports/api/methods';
import * as Schemas from '/imports/api/schemas';

import createAdminContext from './create_admin_context';


export default function () {
  const LocalState = new ReactiveDict();

  moment.defineLocale('de', momentDe);

  const i18n = new I18n({
    supportedLocales: ['de'],
    defaultLocale: 'de',
    useFallbackForMissing: true,
    shouldShowKeysAsFallback: () => Meteor.isDevelopment || Roles.userIsInRole(Meteor.userId(), 'admin'),
    translationStore: new TranslationStore({
      Meteor,
      ReactiveVar,
      collection: Collections.Translations,
    }),
  });

  const manulRouter = new ManulRouter(
    { FlowRouter, Meteor, i18n },
  );

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
    Config: Collections.Config,
    Roles,
    Accounts,
    MeteorGriddle,
    uploadService: new UploadClient({ Slingshot, Directives }),
  };

  context.adminContext = createAdminContext(context);
  return context;
}
