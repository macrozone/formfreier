import MasonryOrg from 'react-masonry-component';

import ifNotTest from '../../core/hocs/if_not_test';

const Masonry = ifNotTest(MasonryOrg, 'div');
import React from 'react';

import styled, { css } from 'styled-components';

import ProjectListItem from './project_list_item';
import ProjectListItemAddNew from '../containers/project_list_item_add_new';

const ProjectListBase = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  perspective: 600px;
  margin: ${p => p.theme.gutterV}px ${p => p.theme.gutterH / 2}px;
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
