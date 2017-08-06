import { createBlockPlugin } from '@panter/manul-draft';
import React from 'react';
import Document from '../components/document';

export default createBlockPlugin({
  schema: {
    docUrl: {
      type: String,
      uniforms: {
        component: 'FileField',
        directiveName: 'documents',
      },
    },
    text: {
      type: String,
      optional: true,
      defaultValue: 'Download PDF',
    },
    altText: {
      type: String,
      optional: true,
      defaultValue: 'Download PDF',
    },
  },
  type: 'document',
  Component: Document,
  hasCustomHover: true,
});
