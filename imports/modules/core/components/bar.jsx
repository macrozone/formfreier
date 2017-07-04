import React from 'react';
import styled from 'styled-components';

import breakpoint from '../../../configs/breakpoint';

const BarBase = styled.div`
  padding: 10px;
  width: ${p => p.theme.verticalBarWidth}px;
  ${breakpoint('sm')`
    width: ${p => p.theme.verticalBarWidthDesktop}px;
  `}
  height: 100%;
  background-color: white;
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
