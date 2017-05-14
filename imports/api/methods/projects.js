import { Projects } from '../collections';
import BaseMethod from './lib/base_method';
import Media from '../schemas/media';
import allowForAdmins from './lib/allow_for_admins';

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
        $push: { media },
      });
    },
  }),
};
