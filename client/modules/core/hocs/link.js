import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';

export const composer = ({ context, alt, ...nav }, onData) => {
  const { manulRouter } = context();
  const { onClick, ...props } = manulRouter.createNavItem(nav);
  const onClickWithStuff = (e) => {
    if (e.altKey && alt) {
      const altNavItem = manulRouter.createNavItem(alt);
      altNavItem.onClick(e);
    } else {
      onClick(e);
    }
  };
  onData(null, { onClick: onClickWithStuff, ...props });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

export default (C) => {
  setComposerStub(C, props => props);
  return composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(C);
};
