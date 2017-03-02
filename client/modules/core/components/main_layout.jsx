import Detail from '../containers/detail';

import React from 'react';
import styled, { css } from 'styled-components';

import Overview from '../containers/overview';

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
const Slider = styled.div`
  transform: ${p => p.showDetail && css`translateX(-80vw)`};
  transition: 0.6s;
  transition-property: transform;
  display: flex;
  width: 180vw;

`;
const OverviewBox = styled(Overview)`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  -webkit-overflow-scrolling: touch
`;
const DetailBox = styled(Detail)`
  width: 80vw;
  height: 100vh;
  overflow: auto;
  -webkit-overflow-scrolling: touch
`;
const Layout = ({ projectId }) => (
  <Wrapper>
    <Slider showDetail={Boolean(projectId)}>
      <OverviewBox projectId={projectId} />
      <DetailBox projectId={projectId} />
    </Slider>
  </Wrapper>
);

export default Layout;
