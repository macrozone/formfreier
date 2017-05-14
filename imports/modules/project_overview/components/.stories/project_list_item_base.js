import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ProjectListItemBase from '../project_list_item_base';


storiesOf('project_overview.ProjectListItemBase', module)
  .addWithDoc('default view', ProjectListItemBase,
  'This is the default view',
  () => {
    return (
      <ProjectListItemBase />
    );
  })
