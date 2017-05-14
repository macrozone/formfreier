import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';

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

export default ProjectListItemBase;
