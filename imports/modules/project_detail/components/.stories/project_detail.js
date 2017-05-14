import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ProjectDetail from '../project_detail';


storiesOf('project_detail.ProjectDetail', module)
  .addWithDoc('default view', ProjectDetail,
  'This is the default view',
  () => {
    return (
      <ProjectDetail />
    );
  })
