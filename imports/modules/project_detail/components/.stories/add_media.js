import React from 'react';

import { storiesOf } from '@kadira/storybook';

import AddMedia from '../add_media';
import SimpleSchema from 'simpl-schema';

storiesOf('project_detail.AddMedia', module)
  .addWithDoc('default view', AddMedia,
  'This is the default view',
  () => (
    <AddMedia schema={new SimpleSchema({})} />
    ));
