import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Layout from '../layout';


storiesOf('admin.Layout', module)
  .addWithDoc('default view', Layout,
  'This is the default view',
  () => {
    return (
      <Layout />
    );
  })
