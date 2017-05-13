import { T } from '@panter/manul-i18n';
import React from 'react';
import _ from 'lodash';
import styled, { css } from 'styled-components';

import MediumBox from '../../core/components/medium_box';
import ProjectListItemBase from './project_list_item_base';
import ProjectListItemLink from './project_list_item_link';


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
      {_.first(project.media) && <MediumBox medium={_.first(project.media)} />}
      <p>{project.title}</p>
    </ProjectListItemLink>
  </ProjectListItemBase>
);


ProjectListItem.displayName = 'ProjectListItem';

export default ProjectListItem;
