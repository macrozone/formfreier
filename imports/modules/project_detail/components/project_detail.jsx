import React from 'react';
import styled, { css } from 'styled-components';

import IfAdmin from '../../core/containers/if_admin';
import LinkButton from '../../core/containers/link_button';
import MediaDropZone from '../containers/media_drop_zone';
import MediumBox from '../../core/components/medium_box';
import breakpoint from '../../../configs/breakpoint';


const ProjectDetailBase = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const scrollBox = css`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  padding: 10px;
`;

const Heading = styled.h2`
  ${p => p.theme.fonts.default};
  text-transform: uppercase;;
  font-size: 16px;
`;

const Content = styled.p`
  ${p => p.theme.fonts.default};
  font-size: 16px;
`;

/* eslint max-len: 0 */
const ProjectDetailDescription = styled.div`
  ${scrollBox}
  ${breakpoint('lg')`
    flex: 7;
    order: 2;
  `}
`;

const ProjectMedia = styled.div`
  min-width: 180px;
  ${scrollBox}
  ${breakpoint('lg')`
    flex: 5;
    order: 1;
  `}
`;

const ProjectDetailFacts = styled.div`
  ${scrollBox}
  ${breakpoint('lg')`
    order: 3;
    flex-basis: 100%;

  `}

`;


const ProjectMediumBox = styled(MediumBox)`
  margin-bottom: ${p => p.theme.gutterV}px;
`;

const MediaDropZoneStyled = styled(MediaDropZone)`
  margin-bottom: ${p => p.theme.gutterV}px;
  margin-top: ${p => p.theme.gutterV}px;
`;

const ProjectDetail = ({ _id, title, description, facts, media = [] }) => (
  <ProjectDetailBase>
    <ProjectDetailDescription>
      <Heading>{title}</Heading>
      <IfAdmin>
        <LinkButton type="primary" routeName="project.edit" params={{ projectId: _id }} >Edit</LinkButton>
      </IfAdmin>
      <Content>{description}</Content>
    </ProjectDetailDescription>

    <ProjectMedia>
      <IfAdmin>
        <LinkButton type="primary" routeName="project.addMedia" params={{ projectId: _id }} >Add Media</LinkButton>
        <MediaDropZoneStyled
          projectId={_id}
          directiveName="projectImages"
        />
      </IfAdmin>
      {
        [...media].reverse().map((medium, index) => (
          <ProjectMediumBox medium={medium} key={index} />
        ))
      }
    </ProjectMedia>
    <ProjectDetailFacts>
      <Content>{facts}</Content>
    </ProjectDetailFacts>

  </ProjectDetailBase>
);


export default ProjectDetail;
