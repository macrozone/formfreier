import { Projects } from '../collections';
import BaseMethod from './lib/base_method';
import Media from '../schemas/media';
import allowForAdmins from './lib/allow_for_admins';
import { Random } from 'meteor/random';
// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default {
  addMediaToProject: new BaseMethod({
    name: 'projects.addMediaToProject',
    allow: allowForAdmins,
    schema: {
      projectId: String,
      media: Media,
    },
    run({ projectId, media }) {
      Projects.update(projectId, {
        $push: {
          media: {
            $each: [
              {
                ...media,
                _id: Random.id(),
              },
            ],
            $position: 0,
          },
        },
      });
    },
  }),
  destroy: new BaseMethod({
    name: 'projects.destroy',
    allow: allowForAdmins,
    schema: {
      projectId: String,
    },
    run({ projectId }) {
      Projects.remove(projectId);
    },
  }),
  destroyMedium: new BaseMethod({
    name: 'projects.destroyMedium',
    allow: allowForAdmins,
    schema: {
      projectId: String,
      _id: String,
    },
    run({ projectId, _id }) {
      Projects.update(projectId, { $pull: { media: { _id } } });
    },
  }),
  reorderMedia: new BaseMethod({
    name: 'projects.reorderMedia',
    allow: allowForAdmins,
    schema: {
      projectId: String,
      startIndex: Number,
      endIndex: Number,
    },
    run({ projectId, startIndex, endIndex }) {
      const { media } = Projects.findOne(projectId);
      const reorderedMedia = reorder(media, startIndex, endIndex);
      Projects.update(projectId, { $set: { media: reorderedMedia } });
    },
  }),
};
