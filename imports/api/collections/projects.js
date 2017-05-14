import 'uniforms';

import LongTextField from 'uniforms-antd/LongTextField';
import SimpleSchema from 'simpl-schema';
import Media from '../schemas/media';
import { Mongo } from 'meteor/mongo';


const Projects = new Mongo.Collection('projects');


Projects.attachSchema(new SimpleSchema({
  _id: {
    type: String,
    uniforms: () => null,
    optional: true,
  },
  title: String,
  date: Date,
  content: {
    type: String,
    optional: true,
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
