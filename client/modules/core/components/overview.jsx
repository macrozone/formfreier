import link from '../hocs/link';

import Link from '../containers/link';

import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';

import _ from 'lodash';

const OverviewBase = styled.div`
  background-color: #eee;
  padding: 5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: stretch;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  ${p => p.small && css`
    width: 20vw;
    margin-left: 80vw;
  `}

`;
OverviewBase.displayName = 'OverviewBase';

const ProjectItem = link(styled.a`
  margin: 5px;
  background-color: white;
  display: block;
  min-height: 300px;
  flex: 1 1 400px;
`);

const Overview = ({ style, className, hideProject, projectId }) => (
  <OverviewBase className={className} style={style} onClick={hideProject} small={Boolean(projectId)}>
    {
      _.fill(Array(32)).map((__, index) => (
        <ProjectItem key={index} routeName="project" params={{ projectId: index + 1 }}>
          {index}
          <img style={{ width: '100%' }} alt="arrow" src="http://sandrowettstein.ch/images/Arrow.gif" />
        </ProjectItem>
      ))
    }
  </OverviewBase>
);

Overview.propTypes = {
};

Overview.defaultProps = {
};

Overview.displayName = 'Overview';

export default Overview;
