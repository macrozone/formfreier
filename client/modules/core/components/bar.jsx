import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';

const BarBase = styled.div`
  padding: 10px;
  width: ${p => p.theme.verticalBarWidth}px;
  height: 100%;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;
BarBase.displayName = 'BarBase';

const BarInner = styled.span`
  transform: rotate(-90deg);
  display: block;
`;
const Bar = ({ children, ...props }) => (
  <BarBase {...props}>
    <BarInner>{children}</BarInner>
  </BarBase>
);

Bar.propTypes = {
};

Bar.defaultProps = {
};

Bar.displayName = 'Bar';

export default Bar;
