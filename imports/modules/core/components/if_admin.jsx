import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';

const IfAdmin = ({ style, isAdmin, children, elseContent = null }) => (
  <div style={style}>{isAdmin ? children : elseContent}</div>
);

export default IfAdmin;
