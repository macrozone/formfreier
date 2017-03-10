import { T } from '@panter/manul-i18n';
import React from 'react';
import styled, { css } from 'styled-components';
import _ from 'lodash';
import MediumBox from '../../core/components/medium_box';
import link from '../../core/hocs/link';

const ProjectListItemBase = styled.div`
  width: 100%;
  @media (min-width: 641px) {
    width: 50%;
  }
  @media (min-width: 768px) {
    width: 33%;
  }
  @media (min-width: 1025px) {
    width: 25%;
  }
`;

const ProjectListItemLink = link(styled.a`
  margin: 5px;
  background-color: white;
  display: block;
  transition: 0.3s;
  padding: 10px;
  position: relative;
  &:hover {
    transform: rotate(-2deg) scale(1.1);
    box-shadow: 2px 2px 40px #333;
    z-index: 10;
  }
`);


const ProjectListItem = ({ project }) => (
  <ProjectListItemBase>
    <ProjectListItemLink
      routeName="project"
      params={{ projectId: project._id }}
      alt={{
        routeName: 'admin.projects.edit',
        params: { _id: project._id },
      }}
    >
      <MediumBox medium={_.first(project.media)} />
      <p>{project.title}</p>
    </ProjectListItemLink>
  </ProjectListItemBase>
);


ProjectListItem.displayName = 'ProjectListItem';

export default ProjectListItem;
