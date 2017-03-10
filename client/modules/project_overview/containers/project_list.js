import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import ProjectList from '../components/project_list.jsx';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections } = context();
  Meteor.subscribe('projects.all');
  const projects = Collections.Projects.find({}, { sort: { date: -1 } }).fetch();
  onData(null, { projects });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

const ProjectListContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProjectList);

setComposerStub(ProjectListContainer, ({ }) => ({

}));

export default ProjectListContainer;
