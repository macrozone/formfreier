import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';

import theme from '/imports/configs/theme';

import About from './about';
import AddMedia from '../../project_detail/containers/add_media';
import Header from './header';
import Modal from './modal';
import Overview from '../containers/overview';
import ProjectDetail from '../../project_detail/containers/project_detail';
import ProjectEdit from '../../project_detail/containers/project_edit';
import ProjectNew from '../../project_detail/containers/project_new';
import breakpoint from '../../../configs/breakpoint';

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
  ${breakpoint('sm')`
    transform: ${p => p.showDetail && css`translateX(-100vw) translateX(${p.theme.verticalBarWidthDesktop}px)`};
    height: calc(100vh - ${p => p.theme.horizontalBarWidthDesktop}px);
  `}



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
  ${breakpoint('sm')`
    width: calc(100vw - ${p => p.theme.verticalBarWidthDesktop}px);
  `}
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch
  display: flex;
  flex-flow: row;
  background-color: #CDCDCD;

`;

const AboutBox = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  height: 80vh;
`;
const Layout = ({ projectId, showAbout, showCreateNew, showEdit, showAddMedia }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <SliderAbout showAbout={showAbout}>
        <AboutBox><About /></AboutBox>
        <Header routeName={showAbout ? 'home' : 'about'} />
        <Slider showDetail={Boolean(projectId)}>
          <OverviewBox projectId={projectId}>
            <Overview projectId={projectId} />
            {showCreateNew && <Modal show><ProjectNew /></Modal>}
          </OverviewBox>

          <DetailBox>

            {showEdit &&
            <Modal show>
              <ProjectEdit projectId={projectId} />
            </Modal>
            }
            { showAddMedia &&
            <Modal show>
              <AddMedia projectId={projectId} />
            </Modal>
              }
            <ProjectDetail projectId={projectId} />
          </DetailBox>
        </Slider>
      </SliderAbout>
    </Wrapper>
  </ThemeProvider>
);

export default Layout;
