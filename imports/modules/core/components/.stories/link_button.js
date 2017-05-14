import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import LinkButton from '../link_button';


storiesOf('core.LinkButton', module)
  .addWithDoc('default view', LinkButton,
  'This is the default view',
  () => {
    return (
      <LinkButton />
    );
  })
