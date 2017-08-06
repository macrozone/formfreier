import { createTypeStrategy } from 'megadraft';
import { createEntityComponent, createFormEntityInput } from '@panter/manul-draft';
import FileLink from '/imports/modules/core/containers/file_link';
import React from 'react';

export default {
  _id: 'FILE_LINK',
  inputComponent: createFormEntityInput({ schema: {
    fileUrl: {
      type: String,
      defaultValue: '',
      uniforms: {
        component: 'FileField',
        directiveName: 'documents',
      },
    },
    linkStyle: {
      type: String,
      allowedValues: ['default', 'button'],
      defaultValue: 'default',
    },
  },
  }),
  strategy: createTypeStrategy('FILE_LINK'),
  component: createEntityComponent(
    ({ fileUrl, ...props }) => <FileLink href={fileUrl} {...props} />
  ),
};
