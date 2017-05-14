import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import MediaDropZone from '../media_drop_zone';


storiesOf('project_detail.MediaDropZone', module)
  .addWithDoc('default view', MediaDropZone,
  'This is the default view',
  () => {
    return (
      <MediaDropZone />
    );
  })
