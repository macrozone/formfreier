import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
  title: String,
  date: {
    type: Date,
    defaultValue: new Date(),
  },
});
