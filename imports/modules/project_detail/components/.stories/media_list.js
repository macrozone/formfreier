import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import MediaList from '../media_list';


storiesOf('project_detail.MediaList', module)
  .addWithDoc('default view', MediaList,
  'This is the default view',
  () => {
    return (
      <MediaList />
    );
  })
