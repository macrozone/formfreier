import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import Teaser from '../components/teaser.jsx';
import { pure } from 'recompose';

export const composer = ({ context, pageId, externalUrl }, onData) => {
  const { Meteor, i18n, createPageNavItem, Collections: { Pages } } = context();
  if (pageId && Meteor.subscribe('pages.byId', i18n.getLocale(), pageId).ready()) {
    const page = Pages.findOne(pageId);
    if (page) {
      onData(null, {
        internalUrl: createPageNavItem(page).href,
        externalUrl,
      });
    }
  } else {
    onData(null, {
      internalUrl: null,
      externalUrl,
    });
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  gotoRoute: context.gotoRoute,
});

const TeaserContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
  pure
)(Teaser);

setComposerStub(TeaserContainer, ({ }) => ({

}));

export default TeaserContainer;
