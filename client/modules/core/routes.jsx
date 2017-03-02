import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';

export default function (injectDeps, { localeRoutes }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  localeRoutes.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx);
    },
  });

  localeRoutes.route('/project/:projectId', {
    name: 'project',
    action({ projectId }) {
      mount(MainLayoutCtx, {
        projectId,
      });
    },
  });

  localeRoutes.route('/about', {
    name: 'about',
    action() {
      mount(MainLayoutCtx, {
        about: true,
      });
    },
  });
}
