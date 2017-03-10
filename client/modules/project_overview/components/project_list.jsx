import { T } from '@panter/manul-i18n';
import React from 'react';
import _ from 'lodash';
import styled, { css } from 'styled-components';

import ProjectListItem from './project_list_item';
import Masonry from 'react-masonry-component';

const ProjectListBase = styled.div`
  background-color: #eee;
  padding: 5px;

  overflow: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  perspective: 600px;
`;


const ProjectList = ({ projects }) => (

  <ProjectListBase>
    <Masonry>
      {
      projects.map((project, index) => (
        <ProjectListItem key={index} project={project} />
      ))
    }
      {
      projects.map((project, index) => (
        <ProjectListItem key={index} project={project} />
      ))
    }
      {
      projects.map((project, index) => (
        <ProjectListItem key={index} project={project} />
      ))
    }
      {
      projects.map((project, index) => (
        <ProjectListItem key={index} project={project} />
      ))
    }
    </Masonry>
  </ProjectListBase>

);

ProjectList.propTypes = {
};

ProjectList.defaultProps = {
};

ProjectList.displayName = 'ProjectList';

export default ProjectList;
