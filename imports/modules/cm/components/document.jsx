import React from 'react';

import Button from '../../core/components/button';


const Document = ({ docUrl, text, altText, ...props }) => (
  <Button
    externalUrl={docUrl}
    alt={altText}
    center
    {...props}
  >
    {text}
  </Button>
);

export default Document;
