import 'uniforms';

import LongTextField from 'uniforms-antd/LongTextField';
import SimpleSchema from 'simpl-schema';

import { Mongo } from 'meteor/mongo';


const Projects = new Mongo.Collection('projects');

const Media = new SimpleSchema({
  title: {
    type: String,
    optional: true,
  },
  fileUrl: {
    type: String,
    optional: true,
    uniforms: {
    //  component: FileField,
    },
  },
  videoUrl: {
    type: String,
    optional: true,
  },
});

Projects.attachSchema(new SimpleSchema({
  title: String,
  date: Date,
  content: {
    type: String,
    uniforms: {
      component: LongTextField,
    },
  },

  media: {
    type: Array,
    optional: true,
    defaultValue: [],
  },
  'media.$': {
    type: Media,
  },

}));

export default Projects;
