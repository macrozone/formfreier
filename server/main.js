import publications from './publications';
import methods from './methods';
import { Meteor } from 'meteor/meteor';

import { Counts } from 'meteor/tmeasday:publish-counts';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { initAdminServer } from '@panter/manul-admin';
import adminConfig from '/admin_config';

publications();
methods();

// we have to inject meteor-depencencies atm.
initAdminServer({ Meteor, ValidatedMethod, Counts }, adminConfig);
