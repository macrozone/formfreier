
import { createTypeStrategy } from 'megadraft';
import { createEntityComponent, createFormEntityInput } from '@panter/manul-draft';

import React from 'react';
import Link from '/imports/modules/core/components/link';

export default {
  _id: 'EXTERNAL_LINK',
  inputComponent: createFormEntityInput({ schema: {
    href: {
      type: String,
      autoValue() {
        if (this.isSet) {
          if (!this.value.startsWith('http://') && !this.value.startsWith('https://')) {
            return `http://${this.value}`;
          }
        }
      },
    },
    external: {
      type: Boolean,
      defaultValue: true,
    },
    linkStyle: {
      type: String,
      allowedValues: ['default', 'button'],
      defaultValue: 'default',
    },
  },
  }),
  strategy: createTypeStrategy('EXTERNAL_LINK'),
  // external is new and should be default
  /* eslint jsx-a11y/anchor-has-content: 0*/
  component: createEntityComponent(({ external = true, ...props }) => <Link external={external} {...props} />),
};
