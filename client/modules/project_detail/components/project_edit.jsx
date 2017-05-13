import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';
import { Edit } from '@panter/manul-admin';

const ProjectEditBase = styled.div`
  padding: 10px;
  width: 100%;
`;
ProjectEditBase.displayName = 'ProjectEditBase';

const ProjectEdit = ({ style, projectId, onUpdateSuccess }) => (
  <ProjectEditBase style={style}>
    <Edit collectionName="projects" _id={projectId} onSuccess={onUpdateSuccess} />
  </ProjectEditBase>
);

ProjectEdit.propTypes = {
};

ProjectEdit.defaultProps = {
};

ProjectEdit.displayName = 'ProjectEdit';

export default ProjectEdit;
