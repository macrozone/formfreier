import React from 'react';
import styled, { css } from 'styled-components';

import About from './about';
import Detail from '../containers/detail';
import Overview from '../containers/overview';
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
  transition: 0.6s;
  transition-property: transform;
`;
const Slider = styled.div`
  transform: ${p => p.showDetail && css`translateX(-80vw)`};
  transition: 0.6s;
  transition-property: transform;
  display: flex;
  width: 180vw;
  height: calc(100vh - 60px);

`;
const OverviewBox = styled.div`
  width: 100vw;
  overflow: auto;
  -webkit-overflow-scrolling: touch
  display: flex;
  flex-flow: row;
`;
const DetailBox = styled.div`
  width: 80vw;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch
  display: flex;
  flex-flow: row;

`;
const Header = link(styled.a`

  height: 60px;
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
  <Wrapper>
    <SliderAbout about={about}>
      <AboutBox><About /></AboutBox>
      <Header routeName="about">© Sandro Wettstein 2017</Header>
      <Slider showDetail={Boolean(projectId)}>
        <OverviewBox projectId={projectId}>
          <Overview projectId={projectId} />
        </OverviewBox>

        <DetailBox>
          <Detail projectId={projectId} />
        </DetailBox>
      </Slider>
    </SliderAbout>
  </Wrapper>
);

export default Layout;
