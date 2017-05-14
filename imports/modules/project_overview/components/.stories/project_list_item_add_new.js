import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ProjectListItemAddNew from '../project_list_item_add_new';


storiesOf('project_overview.ProjectListItemAddNew', module)
  .addWithDoc('default view', ProjectListItemAddNew,
  'This is the default view',
  () => {
    return (
      <ProjectListItemAddNew />
    );
  })
