import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ProjectListItem from '../project_list_item';


storiesOf('project_overview.ProjectListItem', module)
  .addWithDoc('default view', ProjectListItem,
  'This is the default view',
  () => {
    return (
      <ProjectListItem />
    );
  })
