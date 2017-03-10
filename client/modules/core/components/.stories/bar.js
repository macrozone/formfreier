import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Bar from '../bar';


storiesOf('core.Bar', module)
  .addWithDoc('default view', Bar,
  'This is the default view',
  () => (
    <Bar>Projects</Bar>
    ));
