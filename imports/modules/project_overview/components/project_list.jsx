import MasonryOrg from 'react-masonry-component';

import ifNotTest from '../../core/hocs/if_not_test';

const Masonry = ifNotTest(MasonryOrg, 'div');
import React from 'react';

import styled, { css } from 'styled-components';

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


const ProjectList = ({ projects, isAdmin }) => (

  <ProjectListBase>
    <Masonry>

      {isAdmin && <ProjectListItemAddNew />}

      {
      projects.map((project, index) => (
        <ProjectListItem key={index} project={project} />
      ))
      }

    </Masonry>
  </ProjectListBase>

);


export default ProjectList;