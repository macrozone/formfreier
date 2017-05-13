import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import ProjectNew from '../components/project_new.jsx';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections } = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  schema: context.Schemas.projectCreate,
  onCreateSuccess: ({ _id }) => context.gotoRoute('project.edit', { projectId: _id }),
  context: () => context,
});

const ProjectNewContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProjectNew);

setComposerStub(ProjectNewContainer, ({ }) => ({

}));

export default ProjectNewContainer;
