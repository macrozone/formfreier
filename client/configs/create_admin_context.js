import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Counts } from 'meteor/tmeasday:publish-counts';
import React from 'react';
import { createAdminContext } from '@panter/manul-admin';

import AdminList from '/client/modules/admin/containers/list';
import AdminCreate from '/client/modules/admin/components/create';
import AdminEdit from '/client/modules/admin/components/edit';
import AdminLayout from '/client/modules/admin/components/layout';

import adminConfig from '/admin_config';

export default ({ gotoRoute, localeRoutes }) => {
  const adminRoutes = localeRoutes.group({
    prefix: '/admin',
    name: 'admin',
  });

  return createAdminContext({
    // needed
    Meteor,
    ValidatedMethod,
    Counts,
    config: adminConfig,
    adminRoutes,
    gotoRoute,
    components: {
      layout: AdminLayout,
      list: AdminList,
      create: AdminCreate,
      edit: AdminEdit,
    },
  });
};
