import { setComposerStub } from 'react-komposer';
import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';

import LinkButton from '../components/link_button.jsx';
import link from '../hocs/link';


const LinkButtonContainer = composeAll(
  link
)(LinkButton);

setComposerStub(LinkButtonContainer, ({ }) => ({

}));

export default LinkButtonContainer;
