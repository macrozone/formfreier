import { Mongo } from 'meteor/mongo';

import SimpleSchema from 'simpl-schema';

const Projects = new Mongo.Collection('projects');

const Media = new SimpleSchema({
  title: {
    type: String,
    optional: true,
  },
  fileUrl: {
    type: String,
    optional: true,
  },
  videoUrl: {
    type: String,
    optional: true,
  },
});
Projects.attachSchema(new SimpleSchema({
  _id: {
    type: String,
    optional: true,
  },
  title: String,
  date: Date,

  media: {
    type: Array,
  },
  'media.$': {
    type: Media,
  },

}));

export default Projects;
