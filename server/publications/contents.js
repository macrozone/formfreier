import { Contents } from '/imports/api/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.publish('contents.one', function (contentId) {
    check(contentId, String);
    return Contents.find(contentId);
  });
}
