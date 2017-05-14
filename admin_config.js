import React from 'react';
import moment from 'moment';

import { Roles } from 'meteor/alanning:roles';
import * as Collections from '/imports/api/collections';

/**
admin config is shared between clinet and server whereas
adminContext is usually ony on the client
**/
export default {
  allowRules: [
    userId => Roles.userIsInRole(userId, 'admin'),
  ],
  collections: {

    projects: {
      collection: Collections.Projects,
      title: 'Projects',
      columns: ['title', 'date'],
      columnMetadata: [
        {
          columnName: 'date',
          customComponent: ({ data }) => <span>{moment(data).format('DD.MM.YYYY HH:mm')}</span>,
        },
      ],
    },
  },
};
