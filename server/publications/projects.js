import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Projects } from '../../imports/api/collections';

export default () => {
  Meteor.publish('projects.all', function () {
    return Projects.find();
  });

  Meteor.publish('projects.one', function (projectId) {
    check(projectId, String);
    return Projects.find(projectId);
  });
};
