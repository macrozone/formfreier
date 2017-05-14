import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Counts } from 'meteor/tmeasday:publish-counts';
import React from 'react';
import { createAdminContext } from '@panter/manul-admin';

import adminConfig from '/admin_config';

import LazyLoad from '/imports/modules/core/libs/lazy_load';

export default ({ gotoRoute, localeRoutes, LocalState }) => {
  const adminRoutes = localeRoutes.group({
    prefix: '/admin',
    name: 'admin',
  });

  return createAdminContext({
    // needed
    Meteor,
    ValidatedMethod,
    Counts,
    LocalState,
    config: adminConfig,
    adminRoutes,
    gotoRoute,
    components: {
      layout: LazyLoad(import('/imports/modules/admin/components/layout')),
      list: LazyLoad(import('/imports/modules/admin/containers/list')),
      create: LazyLoad(import('/imports/modules/admin/components/create')),
      edit: LazyLoad(import('/imports/modules/admin/components/edit')),
    },
  });
};
