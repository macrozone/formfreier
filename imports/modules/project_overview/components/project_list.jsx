import { T } from '@panter/manul-i18n';
import Masonry from 'react-masonry-component';
import React from 'react';

import styled, { css } from 'styled-components';

import IfAdmin from '../../core/containers/if_admin';
import ProjectListItem from './project_list_item';
import ProjectListItemAddNew from '../containers/project_list_item_add_new';

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
      <IfAdmin>
        <ProjectListItemAddNew />
      </IfAdmin>
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
