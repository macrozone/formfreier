import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './components/main_layout.jsx';

export default function (injectDeps, { localeRoutes }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  localeRoutes.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx);
    },
  });
  localeRoutes.route('/project/new', {
    name: 'project.new',
    action() {
      mount(MainLayoutCtx, {
        showCreateNew: true,
      });
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
  localeRoutes.route('/project/:projectId/edit', {
    name: 'project.edit',
    action({ projectId }) {
      mount(MainLayoutCtx, {
        projectId,
        showEdit: true,
      });
    },
  });
  localeRoutes.route('/about', {
    name: 'about',
    action() {
      mount(MainLayoutCtx, {
        showAbout: true,
      });
    },
  });
}
