import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import MediumBox from '../medium_box';


storiesOf('core.MediumBox', module)
  .addWithDoc('default view', MediumBox,
  'This is the default view',
  () => {
    return (
      <MediumBox />
    );
  })
