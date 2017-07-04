import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Header from '../header';


storiesOf('core.Header', module)
  .addWithDoc('default view', Header,
  'This is the default view',
  () => {
    return (
      <Header />
    );
  })
