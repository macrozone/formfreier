import React from 'react';
import styled from 'styled-components';

import breakpoint from '../../../configs/breakpoint';
import link from '../hocs/link';


const HeaderBase = link(styled.a`
  height: ${p => p.theme.horizontalBarWidth}px;

  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  z-index: 10;
  ${p => p.theme.fonts.default};
  font-size: 6vw;
  color: ${p => p.theme.colors.black};
  ${p => p.theme.paddings.default};
  &:hover {
    color: ${p => p.theme.colors.black};
  }
  border-bottom: ${p => p.theme.borders.default};
  ${breakpoint('sm')`
    height: ${p => p.theme.horizontalBarWidthDesktop}px;
    font-size: 32px;
  `}
`);


const Header = ({ routeName }) => (
  <HeaderBase routeName={routeName}>Sandro Wettstein, Graphic Design</HeaderBase>
);

export default Header;
