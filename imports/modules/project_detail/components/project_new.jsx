import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';
import { Create } from '@panter/manul-admin';

const ProjectNewBase = styled.div`
  padding: 10px;
`;
ProjectNewBase.displayName = 'ProjectNewBase';

const ProjectNew = ({ style, schema, onCreateSuccess }) => (
  <ProjectNewBase style={style}>
    <Create collectionName="projects" schema={schema} onSuccess={onCreateSuccess} />
  </ProjectNewBase>
);


export default ProjectNew;
