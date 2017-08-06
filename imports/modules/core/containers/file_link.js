import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import Link from '../components/link.jsx';
import { pure } from 'recompose';

export const composer = ({ context }, onData) => {
  const { Meteor } = context();
  // TODO: add file meta data
  onData(null, { isFile: true });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
  pure
)(Link);
