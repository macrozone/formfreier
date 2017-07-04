import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ProjectList from '../project_list';


storiesOf('project_overview.ProjectList', module)
  .addWithDoc('default view', ProjectList,
  'This is the default view',
  () => (
    <ProjectList
      projects={[{
        _id: 'bla',
        title: 'fudi projekt',
      }]}
    />
    ));
