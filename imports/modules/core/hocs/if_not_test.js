import { get } from 'lodash/fp';
import React from 'react';

const env = get('process.env.NODE_ENV', global);
console.log(env);

export default (C, CTest = 'div') => props => (
  env === 'test' ? <CTest {...props} /> : <C {...props} />
);
