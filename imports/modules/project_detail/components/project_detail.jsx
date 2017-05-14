import { T } from '@panter/manul-i18n';
import React from 'react';
import styled, { css } from 'styled-components';

import IfAdmin from '../../core/containers/if_admin';

import LinkButton from '../../core/containers/link_button';
import MediaDropZone from '../containers/media_drop_zone';
import MediumBox from '../../core/components/medium_box';

const ProjectDetailBase = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const scrollBox = css`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  padding: 20px;
`;

/* eslint max-len: 0 */
const ProjectDetailDescription = styled.div`
  flex: 3;
  ${scrollBox}
`;

const ProjectMedia = styled.div`
  flex: 1;
  min-width: 240px;
  ${scrollBox}
`;

const ProjectMediumBox = styled(MediumBox)`
  margin-bottom: 20px;
`;

const MediaDropZoneStyled = styled(MediaDropZone)`
  margin-bottom: 20px;
  margin-top: 20px;
`;

const ProjectDetail = ({ _id, title, content, media = [] }) => (
  <ProjectDetailBase>

    <ProjectMedia>
      <IfAdmin>
        <LinkButton type="primary" routeName="project.addMedia" params={{ projectId: _id }} >Add Media</LinkButton>
        <MediaDropZoneStyled
          projectId={_id}
          directiveName="projectImages"
        />
      </IfAdmin>
      {
        media.reverse().map((medium, index) => (
          <ProjectMediumBox medium={medium} key={index} />
        ))
      }
    </ProjectMedia>
    <ProjectDetailDescription>
      <h1>{title}</h1>
      <IfAdmin>
        <LinkButton type="primary" routeName="project.edit" params={{ projectId: _id }} >Edit</LinkButton>
      </IfAdmin>
      <p>{content}</p>
    </ProjectDetailDescription>

  </ProjectDetailBase>
);


export default ProjectDetail;
