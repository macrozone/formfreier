import { mapProps } from 'recompose';
import { pick, compose } from 'lodash/fp';

import Button from './button';

const pickProps = compose(mapProps, pick);

export default pickProps(['onClick', 'children', 'href', 'bsStyle'])(Button);
