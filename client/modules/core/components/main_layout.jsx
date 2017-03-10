import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';

import theme from '/lib/theme';

import About from './about';
import Overview from '../containers/overview';
import ProjectDetail from '../../project_detail/containers/project_detail';
import link from '../hocs/link';

const Wrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`;
const SliderAbout = styled.div`

  width: 100%;
  height: 180vh;
  transform: ${p => !p.about && css`translateY(-80vh)`};
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

`;
const Header = link(styled.a`
  height: ${p => p.theme.horizontalBarWidth}px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
`);

const AboutBox = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  height: 80vh;
`;
const Layout = ({ projectId, about }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <SliderAbout about={about}>
        <AboutBox><About /></AboutBox>
        <Header routeName="about">© Sandro Wettstein 2017</Header>
        <Slider showDetail={Boolean(projectId)}>
          <OverviewBox projectId={projectId}>
            <Overview projectId={projectId} />
          </OverviewBox>

          <DetailBox>
            <ProjectDetail projectId={projectId} />
          </DetailBox>
        </Slider>
      </SliderAbout>
    </Wrapper>
  </ThemeProvider>
);

export default Layout;
