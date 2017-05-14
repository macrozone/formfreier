import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ProjectListItemLink from '../project_list_item_link';


storiesOf('project_overview.ProjectListItemLink', module)
  .addWithDoc('default view', ProjectListItemLink,
  'This is the default view',
  () => {
    return (
      <ProjectListItemLink />
    );
  })
