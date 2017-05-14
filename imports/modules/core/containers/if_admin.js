import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import IfAdmin from '../components/if_admin.jsx';

export const composer = ({ context }, onData) => {
  const { Meteor, Roles } = context();
  const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
  onData(null, { isAdmin });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

const IfAdminContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(IfAdmin);

setComposerStub(IfAdminContainer, ({ }) => ({

}));

export default IfAdminContainer;
