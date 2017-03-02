import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import About from '../about';


storiesOf('core.About', module)
  .addWithDoc('default view', About,
  'This is the default view',
  () => {
    return (
      <About />
    );
  })
