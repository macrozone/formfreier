import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import IfAdmin from '../if_admin';


storiesOf('core.IfAdmin', module)
  .addWithDoc('default view', IfAdmin,
  'This is the default view',
  () => {
    return (
      <IfAdmin />
    );
  })
