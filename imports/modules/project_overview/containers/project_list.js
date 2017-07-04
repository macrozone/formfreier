import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import ProjectList from '../components/project_list.jsx';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections, Roles } = context();
  Meteor.subscribe('projects.all');
  const projects = Collections.Projects.find({}, { sort: { date: -1 } }).fetch();
  const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin', Roles.GLOBAL_GROUP);
  onData(null, { isAdmin, projects });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

const ProjectListContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProjectList);

setComposerStub(ProjectListContainer, ({ }) => ({
  projects: [{
    _id: 'test',
    title: 'test projekt',
  }],
}));

export default ProjectListContainer;