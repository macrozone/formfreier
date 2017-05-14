import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import AddMedia from '../add_media';


storiesOf('project_detail.AddMedia', module)
  .addWithDoc('default view', AddMedia,
  'This is the default view',
  () => {
    return (
      <AddMedia />
    );
  })
