import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

const LayoutBase = styled.div`
  padding: 10px;
`;
LayoutBase.displayName = 'LayoutBase';

const Layout = ({ style, content }) => (
  <LocaleProvider locale={enUS}>
    <LayoutBase style={style}>
      {content()}
    </LayoutBase>
  </LocaleProvider>
);

Layout.propTypes = {
};

Layout.defaultProps = {
};

Layout.displayName = 'Layout';

export default Layout;
