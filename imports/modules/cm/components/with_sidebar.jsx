import { T } from '@panter/manul-i18n';
import React from 'react';
import styled, { css } from 'styled-components';
import lazyLoad from '../../core/libs/lazy_load';

// lazy load, because it pulls all draftjs stuff
const SidebarContentArea = lazyLoad(
  import('./sidebar_content_area')
);

const WithSidebarBase = styled.div`
  flex-grow: 2;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  width: 100%;
`;


const SideContent = styled.div`
  width: 190px;
  display: none;
  margin-left: 35px;
  @media (min-width: ${p => p.theme.breakPointDesktop}px) {
    display: block;
  }
`;

const WithSidebar = ({ style, className, children, showSidebar = true }) => {
  let SidebarComponent = null;
  if (showSidebar) {
    SidebarComponent = SidebarContentArea;
  }
  return (
    <WithSidebarBase style={style} className={className}>
      <ContentWrapper>
        <MainContent >
          {children}
        </MainContent>
        {showSidebar && (
          <SideContent>
            <SidebarComponent contentId="sidebar_shared" />
          </SideContent>
          )
        }
      </ContentWrapper>
    </WithSidebarBase>
  );
};

WithSidebar.propTypes = {
};

WithSidebar.defaultProps = {
};

export default WithSidebar;
