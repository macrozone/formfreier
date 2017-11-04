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
            ...media,
            _id: Random.id(),
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
