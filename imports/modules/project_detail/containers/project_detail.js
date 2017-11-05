import { setComposerStub } from 'react-komposer';
import { useDeps, composeAll, composeWithTracker } from 'mantra-core';

import ProjectDetail from '../components/project_detail.jsx';

export const composer = ({ context, projectId }, onData) => {
  const { Meteor, Collections } = context();
  if (projectId) {
    Meteor.subscribe('projects.one', projectId);
    const project = Collections.Projects.findOne(projectId);

    onData(null, project);
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  destroyProject: actions.projects.destroyProject,
  destroyMedia: actions.projects.destroyMedia,
  reorderMedia: actions.projects.reorderMedia,
});

const ProjectDetailContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProjectDetail);

setComposerStub(ProjectDetailContainer, ({}) => ({}));

export default ProjectDetailContainer;
