import publications from './publications';
import '/imports/api/methods';
import { Meteor } from 'meteor/meteor';

import { Counts } from 'meteor/tmeasday:publish-counts';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { initAdminServer } from '@panter/manul-admin';
import adminConfig from '/admin_config';
import { initServer } from '@panter/manul-files';
import Directives from '/imports/api/files';
import { Slingshot } from 'meteor/edgee:slingshot';

publications();


// we have to inject meteor-depencencies atm.
initAdminServer({ Meteor, ValidatedMethod, Counts }, adminConfig);


Meteor.startup(() => {
  initServer({ Slingshot, Directives, bucket: 'sandrowettstein' });
});
