import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';

import theme from '/lib/theme';

import About from './about';
import Overview from '../containers/overview';
import ProjectDetail from '../../project_detail/containers/project_detail';
import ProjectEdit from '../../project_detail/containers/project_edit';
import ProjectNew from '../../project_detail/containers/project_new';
import link from '../hocs/link';

const Wrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`;
const SliderAbout = styled.div`

  width: 100%;
  height: 180vh;
  transform: ${p => !p.showAbout && css`translateY(-80vh)`};
  transition: transform 0.6s;
`;
const Slider = styled.div`
  transform: ${p => p.showDetail && css`translateX(-100vw) translateX(${p.theme.verticalBarWidth}px)`};
  transition: transform 0.6s;
  display: flex;
  width: 200vw;
  height: calc(100vh - ${p => p.theme.horizontalBarWidth}px);

`;
const OverviewBox = styled.div`
  width: 100vw;
  overflow: auto;
  -webkit-overflow-scrolling: touch
  display: flex;
  flex-flow: row;
`;
const DetailBox = styled.div`
  width: calc(100vw - ${p => p.theme.verticalBarWidth}px);
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch
  display: flex;
  flex-flow: row;
  background-color: #CDCDCD;

`;
const Header = link(styled.a`
  height: ${p => p.theme.horizontalBarWidth}px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  box-shadow: 0px 0px 16px #999;
  position: relative;
  z-index: 10;
`);

const AboutBox = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  height: 80vh;
`;
const Layout = ({ projectId, showAbout, showCreateNew, showEdit }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <SliderAbout showAbout={showAbout}>
        <AboutBox><About /></AboutBox>
        <Header routeName="about">© Sandro Wettstein 2017</Header>
        <Slider showDetail={showCreateNew || Boolean(projectId)}>
          <OverviewBox projectId={projectId}>
            <Overview projectId={projectId} />
          </OverviewBox>

          <DetailBox>
            {showCreateNew ? <ProjectNew /> :
              showEdit ?
                <ProjectEdit projectId={projectId} /> :
                <ProjectDetail projectId={projectId} />
            }

          </DetailBox>
        </Slider>
      </SliderAbout>
    </Wrapper>
  </ThemeProvider>
);

export default Layout;
