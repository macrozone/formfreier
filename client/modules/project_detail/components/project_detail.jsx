import { T } from '@panter/manul-i18n';
import React from 'react';
import styled, { css } from 'styled-components';

import Link from '../../core/containers/link';
import MediumBox from '../../core/components/medium_box';

const ProjectDetailBase = styled.div`
  padding: 20px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-flow: row wrap;
`;
ProjectDetailBase.displayName = 'ProjectDetailBase';

/* eslint max-len: 0 */
const ProjectDetailDescription = styled.div`
  flex: 3;
  padding: 20px;
`;

const ProjectMedia = styled.div`
  flex: 1;
  min-width: 240px;
`;

const ProjectDetail = ({ _id, title, content, media = [] }) => (
  <ProjectDetailBase>

    <ProjectMedia>
      {
        media.map((medium, index) => (
          <MediumBox medium={medium} key={index} />
        ))
      }
    </ProjectMedia>
    <ProjectDetailDescription>
      <h1>{title}</h1>
      <Link routeName="project.edit" params={{ projectId: _id }} >Edit</Link>
      <p>{content}</p>
    </ProjectDetailDescription>

  </ProjectDetailBase>
);

ProjectDetail.propTypes = {
};

ProjectDetail.defaultProps = {
};

ProjectDetail.displayName = 'ProjectDetail';

export default ProjectDetail;
