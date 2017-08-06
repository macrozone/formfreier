import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import HelmetDefault from '/imports/modules/core/containers/helmet_default';
import { pure } from 'recompose';

export const composer = ({ context, page }, onData) => {
  const { i18n } = context();
  const pageTitle = i18n.tDoc(page, 'htmlTitle') || i18n.tDoc(page, 'title');
  const description = i18n.tDoc(page, 'meta.description');
  const keywords = i18n.tDoc(page, 'meta.keywords');
  onData(null, { pageTitle, description, keywords });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

const PagesHelmetContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
  pure,
)(HelmetDefault);

// Stubbing for react-composer
setComposerStub(PagesHelmetContainer, () => ({

}));

export default PagesHelmetContainer;
