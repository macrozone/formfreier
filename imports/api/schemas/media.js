import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
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
