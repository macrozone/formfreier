import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';


const LayoutBase = styled.div`
  padding: 10px;
`;
LayoutBase.displayName = 'LayoutBase';

const Layout = ({ style, content }) => (
  <LayoutBase style={style}>
    {content()}
  </LayoutBase>
  );

Layout.propTypes = {
};

Layout.defaultProps = {
};

Layout.displayName = 'Layout';

export default Layout;
