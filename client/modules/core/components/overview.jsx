import { T } from '@panter/manul-i18n';
import React from 'react';

import styled, { css } from 'styled-components';

import Bar from './bar';
import ProjectList from '../../project_overview/containers/project_list';


const OverviewBase = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
`;
OverviewBase.displayName = 'OverviewBase';


const Overview = ({ style, className, hideProject }) => (
  <OverviewBase className={className} style={style} onClick={hideProject}>
    <ProjectList />
    <Bar>Projects</Bar>
  </OverviewBase>
);

Overview.propTypes = {
};

Overview.defaultProps = {
};

Overview.displayName = 'Overview';

export default Overview;
