import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Roles } from 'meteor/alanning:roles';
// see also server/slingshot
// authorize and key are run on the server
export default {
  projectImages: {
    fileRestrictions: {
      maxSize: 20 * 1024 * 1024,
      allowedFileTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'],
    },
    server: {
      authorize() {
        // for logged in users
        if (
        !Roles.userIsInRole(this.userId, 'admin', Roles.GLOBAL_GROUP)
        ) {
          const message = 'Not authorized';
          throw new Meteor.Error('not allowed', message);
        }

        return true;
      },
      key(file) {
        if (!this.userId) {
          throw new Meteor.Error('only allowed when user already exists');
        }
        import getFileExtension from '/server/libs/get_file_extension';

        const randomId = Random.id();
        const extension = getFileExtension(file);

        return `project_images/${this.userId}/${randomId}.${extension}`;
      },
    },
  },
};
