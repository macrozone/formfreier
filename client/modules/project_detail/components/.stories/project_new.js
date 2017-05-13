import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ProjectNew from '../project_new';


storiesOf('project_detail.ProjectNew', module)
  .addWithDoc('default view', ProjectNew,
  'This is the default view',
  () => {
    return (
      <ProjectNew />
    );
  })
