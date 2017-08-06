import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Heading2 from '../heading_2';


storiesOf('core.Heading2', module)
  .addWithDoc('default view', Heading2,
  'This is the default view',
  () => {
    return (
      <Heading2 />
    );
  })
