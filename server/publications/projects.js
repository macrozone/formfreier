import { Projects } from '../../lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default () => {
  Meteor.publish('projects.all', function () {
    return Projects.find();
  });

  Meteor.publish('projects.one', function (projectId) {
    check(projectId, String);
    return Projects.find(projectId);
  });
};
