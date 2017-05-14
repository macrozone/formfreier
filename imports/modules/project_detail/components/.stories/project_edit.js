import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ProjectEdit from '../project_edit';


storiesOf('project_detail.ProjectEdit', module)
  .addWithDoc('default view', ProjectEdit,
  'This is the default view',
  () => {
    return (
      <ProjectEdit />
    );
  })
