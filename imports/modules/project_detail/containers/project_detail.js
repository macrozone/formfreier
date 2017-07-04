import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
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
});

const ProjectDetailContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProjectDetail);

setComposerStub(ProjectDetailContainer, ({ }) => ({

}));

export default ProjectDetailContainer;
