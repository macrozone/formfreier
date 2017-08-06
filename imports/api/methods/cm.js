import { Roles } from 'meteor/alanning:roles';


import Contents from '/imports/api/collections/contents';

import BaseMethod from './lib/base_method';

export default {
  upsert: new BaseMethod({
    allow: [{
      roles: ['admin'],
      group: Roles.GLOBAL_GROUP,
    }],
    name: 'CM.upsert',
    schema: {
      contentId: {
        type: String,
      },
      value: {
        type: Object,
        blackbox: true,
      },
      locale: {
        type: String,
      },
    },
    run({ contentId, value, locale }) {
      Contents.upsert(
        contentId,
        { $set: { [`value.${locale}`]: value },
        });
    },
  }),
};
