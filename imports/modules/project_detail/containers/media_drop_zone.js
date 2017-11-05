import { setComposerStub } from 'react-komposer';
import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { withHandlers } from 'recompose';
import { withUploader } from '@panter/manul-files';

import MediaDropZone from '../components/media_drop_zone.jsx';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections } = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  addMediaToProject: actions.projects.addMediaToProject,
  context: () => context,
});

const MediaDropZoneContainer = composeAll(
  composeWithTracker(composer),
  withHandlers({
    addMedia: ({ upload, addMediaToProject, projectId }) => file =>
      upload(file, (error, fileUrl) =>
        addMediaToProject({ projectId, media: { fileUrl } })
      ),
  }),
  withUploader,
  useDeps(depsMapper)
)(MediaDropZone);

setComposerStub(MediaDropZoneContainer, ({}) => ({}));

export default MediaDropZoneContainer;
