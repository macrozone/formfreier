import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import Image from '../components/image.jsx';
import { pure } from 'recompose';

export const composer = ({ context }, onData) => {
  const { Meteor } = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

const ImageContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
  pure
)(Image);

setComposerStub(ImageContainer, ({ }) => ({

}));

export default ImageContainer;
