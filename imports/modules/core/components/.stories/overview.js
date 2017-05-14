import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Overview from '../overview';


storiesOf('core.Overview', module)
  .addWithDoc('default view', Overview,
  'This is the default view',
  () => {
    return (
      <Overview />
    );
  })
