import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import ProjectEdit from '../components/project_edit.jsx';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections } = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  onUpdateSuccess: ({ _id }) => context.gotoRoute('project', { projectId: _id }),
  context: () => context,
});

const ProjectEditContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProjectEdit);

setComposerStub(ProjectEditContainer, ({ }) => ({

}));

export default ProjectEditContainer;
