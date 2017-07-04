import { createApp } from 'mantra-core';
import initContext from '../imports/configs/context';

// modules
import coreModule from '../imports/modules/core';
import projectOverviewModule from '../imports/modules/project_overview';
import adminModule from '../imports/modules/admin';
import projectDetailModule from '../imports/modules/project_detail';
import { adminModule as manulAdminModule } from '@panter/manul-admin';

import 'bootstrap/dist/css/bootstrap.css';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(projectOverviewModule);
app.loadModule(adminModule);

app.loadModule(manulAdminModule);
app.loadModule(projectDetailModule);
app.init();
