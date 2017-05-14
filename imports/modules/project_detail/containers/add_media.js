import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import AddMedia from '../components/add_media.jsx';

import { withHandlers } from 'recompose';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections } = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  addMediaToProject: actions.projects.addMediaToProject,
  schema: context.Schemas.media,
  context: () => context,
});

const AddMediaContainer = composeAll(
  composeWithTracker(composer),
  withHandlers({
    onSubmit: ({ projectId, addMediaToProject }) => media => addMediaToProject({ projectId, media }),
  }),
  useDeps(depsMapper)
)(AddMedia);

setComposerStub(AddMediaContainer, ({ }) => ({

}));

export default AddMediaContainer;
