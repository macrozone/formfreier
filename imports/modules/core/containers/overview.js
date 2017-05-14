import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';

import Overview from '../components/overview.jsx';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections } = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  hideProject: actions.core.hideProject,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Overview);
