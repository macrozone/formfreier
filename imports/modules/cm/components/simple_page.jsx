import { T } from '@panter/manul-i18n';
import React from 'react';
import styled, { css } from 'styled-components';

import MainContentArea from './main_content_area';

const SimplePageBase = styled.div`
  max-width: 650px;
`;

const SimplePage = ({ page, path, subPath }) => {
  if (!page) {
    return null;
  }
  return (
    <SimplePageBase
      key={path}
    >
      {page && (
        <MainContentArea
          contentId={page._id}
          blockPluginProps={{ page, subPath }}
        />
      )}
    </SimplePageBase>
  );
};


export default SimplePage;
