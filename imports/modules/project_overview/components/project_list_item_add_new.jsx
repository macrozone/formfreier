import { T } from '@panter/manul-i18n';
import React from 'react';
import styled, { css } from 'styled-components';

import ProjectListItemBase from './project_list_item_base';
import ProjectListItemLink from './project_list_item_link';

const ProjectListItemLinkNew = styled(ProjectListItemLink)`
  min-height: 80px;
`;

const ProjectListItemAddNew = ({ style, className }) => (
  <ProjectListItemBase style={style} className={className}>
    <ProjectListItemLinkNew routeName="project.new">
      + create new project
    </ProjectListItemLinkNew>
  </ProjectListItemBase>
);

ProjectListItemAddNew.propTypes = {
};

ProjectListItemAddNew.defaultProps = {
};

ProjectListItemAddNew.displayName = 'ProjectListItemAddNew';

export default ProjectListItemAddNew;
