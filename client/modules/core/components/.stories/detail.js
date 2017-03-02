import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Detail from '../detail';


storiesOf('core.Detail', module)
  .addWithDoc('default view', Detail,
  'This is the default view',
  () => {
    return (
      <Detail />
    );
  })
