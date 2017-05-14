import Loadable from 'react-loadable';

export default promise => Loadable({
  loader: () => promise,
  LoadingComponent: () => null,
});
