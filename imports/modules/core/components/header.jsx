import React from 'react';
import styled from 'styled-components';

import breakpoint from '../../../configs/breakpoint';
import link from '../hocs/link';

const HeaderBase = link(styled.a`
  height: ${p => p.theme.horizontalBarWidth}px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  position: relative;
  z-index: 10;
  ${p => p.theme.fonts.default};
  font-size: 5.5vw;
  color: ${p => p.theme.colors.black};
  ${p => p.theme.paddings.default};
  &:hover {
    color: ${p => p.theme.colors.black};
  }
  border-bottom: ${p => p.theme.borders.default};
  ${breakpoint('md')`
    font-size: 22px;
  `} ${breakpoint('lg')`
    font-size: 32px;
    height: ${p => p.theme.horizontalBarWidthDesktop}px;
  `};
`);

const Header = ({ routeName }) => <HeaderBase routeName={routeName}>Sandro Wettstein, Graphic Design</HeaderBase>;

export default Header;
