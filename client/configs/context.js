import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Tracker } from 'meteor/tracker';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { I18n } from '@panter/manul-i18n';
// import { MeteorGriddle } from 'meteor/panter:meteor-griddle';
import { Roles } from 'meteor/alanning:roles';
import { Slingshot } from 'meteor/edgee:slingshot';
import { UploadClient } from '@panter/manul-files';
import ManulRouter from '@panter/manul-router';
import TranslationStore from '@panter/manul-i18n/dist/stores/collection';
import _ from 'lodash';
import moment from 'moment';
import momentDe from 'moment/locale/de';
import momentFr from 'moment/locale/fr';

import { ReactiveDict } from 'meteor/reactive-dict';
// import * as ACL from '/lib/acl';
import * as Collections from '/lib/collections';
// import Directives from '/lib/slingshot_directives';
// import * as Methods from '/lib/methods';
// import * as Schemas from '/lib/schemas';

// import createAdminContext from './create_admin_context';


export default function () {
  const LocalState = new ReactiveDict();

  moment.defineLocale('fr', momentFr);
  moment.defineLocale('de', momentDe);

  const i18n = new I18n({
    supportedLocales: ['de', 'fr'],
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
    // ACL,
    // Schemas,
    // Methods,
    Tracker,
    i18n,
    gotoRoute: manulRouter.go.bind(manulRouter),
    localeRoutes: manulRouter.createLocaleRoutesGroup(),
    Config: Collections.Config,
    Roles,
    Accounts,
    // MeteorGriddle,
    /*uploadService: new UploadClient({ Slingshot, Directives }, {
      onAfterUpload: (error, { url, file, directiveName }) => {
        const fileMeta = _.pick(file, ['name', 'size', 'type']);
        if (!error) {
          Meteor.call('slingshot.trackUpload', { directiveName, url, fileMeta });
        }
      },
    }),
    */
  };

  // context.adminContext = createAdminContext(context);
  return context;
}
