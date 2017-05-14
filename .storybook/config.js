import React from 'react';
import { ThemeProvider } from 'styled-components';
import { setStubbingMode } from 'react-komposer';
import addWithDoc from 'storybook-addon-props';
import '/main.scss';
import { configure, setAddon, addDecorator } from '@kadira/storybook';
import theme from '/imports/api/theme';

setAddon(addWithDoc);
setStubbingMode();

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <div style={{ height: '100vh', width: '100vw' }}>
      {story()}
    </div>
  </ThemeProvider>
));

function loadStories() {
  require('../client/modules/project_detail/components/.stories/index.js');
  require('../client/modules/admin/components/.stories/index.js');
  require('../client/modules/project_overview/components/.stories/index.js');
  require('../client/modules/core/components/.stories/index.js');
}

configure(loadStories, module);
