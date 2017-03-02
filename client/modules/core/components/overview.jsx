import link from '../hocs/link';

import Link from '../containers/link';

import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';

import _ from 'lodash';

const OverviewBase = styled.div`
  padding: 10px;
  background-color: #eee;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: stretch;
  overflow: auto;
  -webkit-overflow-scrolling: touch

`;
OverviewBase.displayName = 'OverviewBase';

const ProjectItem = link(styled.a`
  margin: 10px;
  background-color: white;
  height: 500px;

  display: block;
  min-width: 300px;
  max-width: 800px;
  flex-basis: 400px;
  flex: 1;
`);

const Overview = ({ style, className, hideProject }) => (
  <OverviewBase className={className} style={style} onClick={hideProject}>
    {
      _.fill(Array(32)).map((__, index) => (
        <ProjectItem key={index} routeName="project" params={{ projectId: index + 1 }}>
          {index}
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
