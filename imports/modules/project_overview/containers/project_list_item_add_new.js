import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import ProjectListItemAddNew from '../components/project_list_item_add_new.jsx';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections } = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

const ProjectListItemAddNewContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProjectListItemAddNew);

setComposerStub(ProjectListItemAddNewContainer, ({ }) => ({

}));

export default ProjectListItemAddNewContainer;
