import { Button } from 'antd';
import { T } from '@panter/manul-i18n';
import React from 'react';
import styled, { css } from 'styled-components';
import { pick, compose } from 'lodash/fp';
import { mapProps } from 'recompose';

const pickProps = compose(mapProps, pick);

export default pickProps(['onClick', 'children', 'href'])(Button);
