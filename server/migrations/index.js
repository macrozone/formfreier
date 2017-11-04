import { Projects } from '../../imports/api/collections';
import { Meteor } from 'meteor/meteor';
import { Migrations } from 'meteor/percolate:migrations';
import { Random } from 'meteor/random';

Migrations.add({
  version: 1,
  up() {
    Projects.find().forEach(({ _id, media = [] }) => {
      const mediaWithIds = media.map(m => ({ ...m, _id: Random.id() }));
      Projects.update(_id, {
        $set: { media: mediaWithIds },
      });
    });
  },
});

Meteor.startup(() => Migrations.migrateTo('latest'));
