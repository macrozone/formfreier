import { createApp } from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import projectOverviewModule from './modules/project_overview';
import adminModule from './modules/admin';
import project_detailModule from './modules/project_detail';
import { adminModule as manulAdminModule } from '@panter/manul-admin';

import 'antd/dist/antd.css';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(projectOverviewModule);
app.loadModule(adminModule);

app.loadModule(manulAdminModule);
app.loadModule(project_detailModule);
app.init();
